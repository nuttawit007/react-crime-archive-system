import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { geoMercator, geoPath } from "d3-geo";
import casesData from "../../../data/cases.json";
import ProvinceTooltip from "./ProvinceTooltip";

const MAP_WIDTH = 800;
const MAP_HEIGHT = 1200;
const MAP_PADDING = 24;

const CASE_COLOR_LEVELS = [
    { min: 0, max: 0, fill: "#1F1413", hover: "#2B1B19", label: "0" },
    { min: 1, max: 2, fill: "#35201D", hover: "#472924", label: "1-2" },
    { min: 3, max: 5, fill: "#4A2824", hover: "#61322C", label: "3-5" },
    { min: 6, max: 10, fill: "#63302B", hover: "#7A3A33", label: "6-10" },
    { min: 11, max: 15, fill: "#7D3730", hover: "#964238", label: "11-15" },
    { min: 16, max: 20, fill: "#973D34", hover: "#B14A3E", label: "16-20" },
    { min: 21, max: Infinity, fill: "#B14438", hover: "#CC5244", label: "21+" },
];

function getCaseColor(caseCount = 0, isHovered = false) {
    const level =
        CASE_COLOR_LEVELS.find(
        (item) => caseCount >= item.min && caseCount <= item.max
        ) ?? CASE_COLOR_LEVELS[0];

    return isHovered ? level.hover : level.fill;
}

function normalizeProvinceCode(code) {
    return String(code ?? "").padStart(2, "0");
}

function getProvinceGeoCode(feature) {
    const properties = feature?.properties ?? {};
    return normalizeProvinceCode(properties.pro_code);
}

function getProvinceName(feature) {
    const properties = feature?.properties ?? {};
    return properties.pro_th ?? properties.name_th ?? properties.name ?? "";
}

function isValidPoint(point) {
    return Number.isFinite(point?.[0]) && Number.isFinite(point?.[1]);
}

function getTooltipPosition(event) {
    const TOOLTIP_WIDTH = 220;
    const TOOLTIP_HEIGHT = 90;
    const OFFSET = 16;

    let x = event.clientX + OFFSET;
    let y = event.clientY + OFFSET;

    if (typeof window !== "undefined") {
        if (x + TOOLTIP_WIDTH > window.innerWidth - 12) {
        x = event.clientX - TOOLTIP_WIDTH - 12;
        }

        if (y + TOOLTIP_HEIGHT > window.innerHeight - 12) {
        y = event.clientY - TOOLTIP_HEIGHT - 12;
        }
    }

    return { x, y };
}

const ThailandMap = () => {
    const navigate = useNavigate();
    const geoJsonUrl = "/provinces.geojson";

    const [geoJson, setGeoJson] = useState(null);
    const [hoveredProvinceCode, setHoveredProvinceCode] = useState(null);
    const [tooltip, setTooltip] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const loadGeoJson = async () => {
        try {
            const response = await fetch(geoJsonUrl, {
            signal: controller.signal,
            });

            if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
            }

            const data = await response.json();
            setGeoJson(data);
        } catch (error) {
            if (error.name !== "AbortError") {
            console.error("โหลดไฟล์แผนที่ไม่สำเร็จ:", error);
            }
        }
        };

        loadGeoJson();

        return () => controller.abort();
    }, [geoJsonUrl]);

    const provinceByGeoCode = useMemo(() => {
        return new Map(
            casesData.map((item) => [
            normalizeProvinceCode(item.geoCode),
            {
                ...item,
                code: normalizeProvinceCode(item.code),         // id จริงที่ต้องใช้ navigate
                geoCode: normalizeProvinceCode(item.geoCode),   // ไว้ match กับแผนที่
                caseCount: Number(item.case ?? 0),
            },
            ])
        );
    }, []);

    const provinceItems = useMemo(() => {
        if (!geoJson?.features?.length) {
            return [];
        }

    const projection = geoMercator().fitExtent(
        [
        [MAP_PADDING, MAP_PADDING],
        [MAP_WIDTH - MAP_PADDING, MAP_HEIGHT - MAP_PADDING],
        ],
        geoJson
    );

    const pathGenerator = geoPath(projection);

    return geoJson.features.map((feature) => {
        const geoCode = getProvinceGeoCode(feature);   // เช่น กรุงเทพ = 10
        const data = provinceByGeoCode.get(geoCode);   // ไปหาใน json จาก geoCode
        const centroid = pathGenerator.centroid(feature);

        return {
        code: data?.code ?? geoCode,                 // ใช้ code จริง เช่น กรุงเทพ = 01
        geoCode,
        name: data?.name ?? getProvinceName(feature),
        pathData: pathGenerator(feature) ?? "",
        centroid: isValidPoint(centroid) ? centroid : null,
        caseCount: Number(data?.caseCount ?? 0),
        };
    });
    }, [geoJson, provinceByGeoCode]);

    function showTooltip(event, province) {
        const { x, y } = getTooltipPosition(event);

        setTooltip({
            x, y,
            name: province.name,
            caseCount: province.caseCount,
        });
    }

    function handleMouseEnter(event, province) {
        setHoveredProvinceCode(province.code);
        showTooltip(event, province);
    }

    function handleMouseMove(event, province) {
        showTooltip(event, province);
    }

    function handleMouseLeave() {
        setHoveredProvinceCode(null);
        setTooltip(null);
    }

    function handleProvinceClick(provinceCode) {
        navigate(`/province/${provinceCode}`);
    }

    return (
        <>
            <div className="w-full">
                <svg
                    viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
                    className="block h-auto w-full"
                    aria-label="Thailand province map"
                >
                {provinceItems.map((province) => {
                    const isHovered = province.code === hoveredProvinceCode;

                    return (
                    <g key={province.code}>
                        <path
                            d={province.pathData}
                            role="link"
                            tabIndex={0}
                            aria-label={`ดูรายละเอียดจังหวัด ${province.name}`}
                            className="cursor-pointer stroke-white outline-none transition-colors duration-100"
                            fill={getCaseColor(province.caseCount, isHovered)}
                            strokeWidth={1}
                            onMouseEnter={(event) => handleMouseEnter(event, province)}
                            onMouseMove={(event) => handleMouseMove(event, province)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleProvinceClick(province.code)}
                            onKeyDown={(event) => {
                                if (event.key === "Enter" || event.key === " ") {
                                event.preventDefault();
                                    handleProvinceClick(province.code);
                                }
                            }}
                        >
                        </path>

                        {province.centroid ? (
                        <text
                            x={province.centroid[0]}
                            y={province.centroid[1]}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="7"
                            fill="#ffffff"
                            stroke="rgba(0,0,0,0.35)"
                            strokeWidth="1.5"
                            paintOrder="stroke"
                            pointerEvents="none"
                            className="select-none"
                        >
                            {province.name}
                        </text>
                        ) : null}
                    </g>
                    );
                })}
                </svg>
            </div>

            <ProvinceTooltip tooltip={tooltip} />
        </>
    );
};

export default ThailandMap;