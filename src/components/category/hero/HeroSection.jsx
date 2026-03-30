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
        <section className="relative h-150 flex items-center justify-center overflow-hidden bg-black">

            <div className="absolute inset-0 z-0">
                <img
                    src={backgroundImage}
                    className="w-full h-full object-cover opacity-50"
                    alt={title}
                />
                <div className="absolute inset-0 bg-linear-to-b"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">

                <div className="absolute left-20 -top-10 md:-top-32">
                    <Button
                        type="secondary"
                        text="ย้อนกลับ"
                        onClick={() => navigate('/')}
                    />
                </div>

                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight drop-shadow-2xl">
                        {title === "คดีในไทยทั้งหมด" ? title : `หมวดหมู่ ${title}`}
                    </h1>
                </div>

                <div className="w-full max-w-2xl mx-auto mt-4">
                    <SearchInput
                        placeholder="ค้นหาคดีที่คุณสนใจ..."
                        value={searchTerm}
                        onChange={onSearchChange}
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;