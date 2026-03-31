import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import casesData from '../data/cases.json';
import HeroSection from '../components/category/hero/HeroSection';
import CasesListSection from '../components/category/cases/CasesListSection';

const CategoriesPage = () => {
    const { id } = useParams();
    const [searchTerm, setSearchTerm] = useState("");

    // กรองข้อมูล (Filter)
    const allCases = casesData.flatMap(province => province.cases);
    const filteredCases = allCases.filter(item => {
        const matchesCategory = item.category?.trim() === id?.trim();
        const matchesSearch = item.title?.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-black min-h-screen">
            <HeroSection
                title={id}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
            />

            <div className="mx-auto px-6 md:px-15 lg:px-30 mt-12 pb-20">
                {filteredCases.length > 0 ? (
                    <CasesListSection cases={filteredCases} />
                ) : (
                    <p className="text-zinc-500 text-center py-20">ไม่พบคดีที่ตรงกับการค้นหา</p>
                )}
            </div>
        </div>
    );
};

export default CategoriesPage;