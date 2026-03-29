import { useMemo } from "react";
import { useParams } from "react-router";
import casesData from "../data/cases.json";
import HeroSection from "../components/province/hero/HeroSection";
import DetailSection from "../components/province/detail/DetailSection";

const ProvincePage = () => {
    const { code } = useParams();

    const province = useMemo(() => {
        return casesData.find(
        (item) =>
            String(item.code) === String(code) || String(item.name) === String(code)
        );
    }, [code]);

    if (!province) {
        return (
        <section className="p-6 text-white">
            <h1 className="text-2xl font-bold">ไม่พบข้อมูลจังหวัด</h1>
            <p className="mt-2 text-gray-400">code: {code}</p>
        </section>
        );
    }
    return (
        <>
            <HeroSection province={province} />
            <DetailSection province={province} />
        </>
    )
}

export default ProvincePage