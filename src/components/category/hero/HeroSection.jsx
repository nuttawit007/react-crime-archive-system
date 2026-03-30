import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../common/Button';
import SearchInput from '../../../common/SearchInput';
import disguiseBg from '../../../assets/images/category/disguise_cate.png';
import missingBg from '../../../assets/images/category/missing_cate.png';
import murderBg from '../../../assets/images/category/murder_cate.png';
import mysteryBg from '../../../assets/images/category/mystery_cate.png';
import defaultBg from '../../../assets/images/category/all_cate.png';

const categoryImages = {
    "คดีปริศนา": mysteryBg,
    "คดีอำพราง": disguiseBg,
    "คดีบุคคลสูญหาย": missingBg,
    "คดีสะเทือนสังคม": murderBg,
    "คดีในไทยทั้งหมด": defaultBg
};

const HeroSection = ({ title, searchTerm, onSearchChange }) => {
    const navigate = useNavigate();
    const backgroundImage = categoryImages[title] || defaultBg;

    return (
        <div className="w-full">
            {/* --- ส่วนของ Banner (Hero) ปรับความสูงเหลือ h-60 ตามหน้า Region --- */}
            <section className="relative h-60 overflow-hidden bg-black">
                {/* Background Image */}
                <img
                    src={backgroundImage}
                    alt="background"
                    className="absolute inset-0 h-full w-full object-cover opacity-50"
                />

                {/* Content Overlay */}
                <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
                    {/* ปุ่มย้อนกลับ จัดตำแหน่งชิดซ้ายบนตามตัวอย่าง */}
                    <div className='absolute top-0 left-0 px-8 py-8 md:px-15 md:py-15 lg:px-30 lg:py-12'>
                        <Button
                            type="secondary"
                            text="ย้อนกลับ"
                            onClick={() => navigate('/')}
                        />
                    </div>

                    {/* หัวข้อขนาดเล็กลงตามสไตล์หน้า Region */}
                    <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-lg">
                        {title === "คดีในไทยทั้งหมด" ? title : `หมวดหมู่ ${title}`}
                    </h1>
                </div>
            </section>

            {/* --- ส่วนของ Search ด้านล่าง (ชิดซ้าย) --- */}
            <div className="bg-[#0a0a0a] py-8">
                {/* ปรับ max-w และ margin ให้เยื้องซ้ายตามแนวปุ่มย้อนกลับ */}
                <div className="w-full max-w-2xl px-8 md:px-15 lg:px-30">
                    <SearchInput
                        placeholder="ค้นหาคดีที่คุณสนใจ..."
                        value={searchTerm}
                        onChange={onSearchChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;