import React, { useState } from 'react';
import casesData from '../data/cases.json';
import HeroSection from '../components/category/hero/HeroSection';
import CasesListSection from '../components/category/cases/CasesListSection';

const SharePage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // รวมคดีจากทุกจังหวัดมาไว้ใน Array เดียว
    const allCases = casesData.flatMap(province => province.cases || []);

    // กรองข้อมูลตามคำค้นหา (Search)
    const filteredCases = allCases.filter(item => {
        const title = item?.title || "";
        return title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div className="bg-black min-h-screen">
            <HeroSection
                title="คดีในไทยทั้งหมด"
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
            />

            <div className="mx-auto px-6 md:px-15 lg:px-30  mt-12 pb-20">
                {filteredCases.length > 0 ? (
                    <CasesListSection cases={filteredCases} />
                ) : (
                    <div className="text-center py-20">
                        <p className="text-zinc-500">ไม่พบข้อมูลคดีที่คุณค้นหา</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SharePage;