import React from 'react';
import Navbar from '../layouts/Navbar';
import HeroSection from '../components/home/hero/HeroSection';
import FeatSection from '../components/home/feat/FeatSection';
import SuggestSection from '../components/home/suggest/SuggestSection';
import CategorySection from '../components/home/category/CategorySection';
import LatestCasesSection from '../components/home/latest/LatestCasesSection';
import RegionSection from '../components/home/region/RegionSection';
import casesData from '../data/cases.json';

const HomePage = () => {
    const allCases = casesData.flatMap(prov =>
        prov.cases.map(c => ({ ...c, provinceName: prov.name }))
    );

    const latestCases = allCases.slice(0, 4);
    const suggestCase = allCases.find(item => item.id === "05-07");
    return (
        <div className="bg-[#0a0a0a] min-h-screen text-white font-sans">
            <Navbar />

            <HeroSection />
            <FeatSection />
            <SuggestSection caseData={suggestCase} />
            <div id="categories">
                <CategorySection />
            </div>

            <div id="latest">
                <LatestCasesSection cases={latestCases} />
            </div>

            <div id="region">
                <RegionSection />
            </div>
        </div>
    );
};

export default HomePage;