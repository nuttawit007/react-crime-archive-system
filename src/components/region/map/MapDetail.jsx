import { useMemo } from "react";
import casesData from "../../../data/cases.json";
import RegionCase from "./RegionCase";

const MapDetail = () => {
    const stats = useMemo(() => {
        return casesData.reduce(
        (acc, item) => {
            const caseCount = Number(item.case ?? item.cases?.length ?? 0);
            const closedCount = (item.cases ?? []).filter(
            (caseItem) => caseItem.status === "ปิดแล้ว"
            ).length;
            const openCount = caseCount - closedCount;

            acc.totalCase += caseCount;
            acc.closedCase += closedCount;
            acc.openCase += openCount;

            switch (item.region) {
            case "ภาคกลาง":
                acc.centralCase += caseCount;
                break;
            case "ภาคเหนือ":
                acc.northCase += caseCount;
                break;
            case "ภาคตะวันตก":
                acc.westCase += caseCount;
                break;
            case "ภาคตะวันออก":
                acc.eastCase += caseCount;
                break;
            case "ภาคอีสาน":
                acc.northeastCase += caseCount;
                break;
            case "ภาคใต้":
                acc.southCase += caseCount;
                break;
            default:
                break;
            }

            return acc;
        },
        {
            totalCase: 0,
            openCase: 0,
            closedCase: 0,
            centralCase: 0,
            northCase: 0,
            westCase: 0,
            eastCase: 0,
            northeastCase: 0,
            southCase: 0,
        }
        );
    }, []);

    const closedPercent =
        stats.totalCase > 0 ? (stats.closedCase / stats.totalCase) * 100 : 0;

    const openPercent =
        stats.totalCase > 0 ? (stats.openCase / stats.totalCase) * 100 : 0;

    return (
        <section className="flex-1 rounded-2xl bg-[#161616] px-6 py-8">
        <div className="flex flex-col items-center gap-2">
            <h1 className="text-4xl font-bold text-[#EB3F34]">คำพิพากษา</h1>
            <p className="text-xl text-gray-400">
            จำนวนคดีทั้งหมด {stats.totalCase} คดี
            </p>
        </div>

        <div className="mt-4 flex overflow-hidden rounded-lg">
            <div
            className="bg-[#EB3F34] px-4 py-4 text-left text-white"
            style={{ width: `${closedPercent}%` }}
            >
            ปิดแล้ว {closedPercent.toFixed(0)}%
            </div>
            <div
            className="bg-[#333333] px-4 py-4 text-right text-gray-400"
            style={{ width: `${openPercent}%` }}
            >
            ยังไม่ได้ปิด {openPercent.toFixed(0)}%
            </div>
        </div>

        <div className="mt-4 flex flex-col gap-4">
            <RegionCase region="ภาคกลาง" caseCount={stats.centralCase} />
            <RegionCase region="ภาคเหนือ" caseCount={stats.northCase} />
            <RegionCase region="ภาคตะวันตก" caseCount={stats.westCase} />
            <RegionCase region="ภาคตะวันออก" caseCount={stats.eastCase} />
            <RegionCase region="ภาคอีสาน" caseCount={stats.northeastCase} />
            <RegionCase region="ภาคใต้" caseCount={stats.southCase} />
        </div>
        </section>
    );
};

export default MapDetail;