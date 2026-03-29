import React, { useState } from 'react';
import HeroSection from '../components/category/hero/HeroSection';
import CasesListSection from '../components/category/cases/CasesListSection';
import SearchInput from '../common/SearchInput';
import casesData from '../data/cases.json';

const SharePage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // 1. รวมคดีจากทุกจังหวัด (กรุงเทพฯ, สมุทรปราการ ฯลฯ) มาไว้ใน Array เดียว
    const allCases = casesData.flatMap(province => province.cases || []);

    // 2. กรองข้อมูลคดีตาม searchTerm
    const filteredCases = allCases.filter(item => {
        const title = item?.title || "";
        return title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div className="bg-black min-h-screen text-white">
            <HeroSection title="คดีในไทยทั้งหมด" />

            <div className="max-w-6xl mx-auto px-4">
                <div className="mt-[1rem] relative z-10 flex justify-center">
                    <SearchInput
                        placeholder="ค้นหาชื่อคดี..."
                        // ตรวจสอบว่าในไฟล์ SearchInput.jsx ของคุณมีการรับ props onChange ไปใส่ที่ <input /> หรือยัง
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="mt-12">
                    {/* ส่งข้อมูลที่รวมและกรองแล้วไปแสดงผล */}
                    {filteredCases.length > 0 ? (
                        <CasesListSection cases={filteredCases} />
                    ) : (
                        <div className="text-center py-20 text-zinc-500">
                            ไม่พบข้อมูลคดีที่คุณค้นหา
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SharePage;