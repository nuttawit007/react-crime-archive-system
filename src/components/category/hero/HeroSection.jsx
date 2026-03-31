import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../common/Button';
import SearchInput from '../../../common/SearchInput';
import disguiseBg from '../../../assets/images/category/disguise_cate.png';
import missingBg from '../../../assets/images/category/missing_cate.png';
import murderBg from '../../../assets/images/category/murder_cate.png';
import mysteryBg from '../../../assets/images/category/mystery_cate.png';
import defaultBg from '../../../assets/images/category/all_cate.png';
import HeroBanner from '../../../common/HeroBanner';

const categoryImages = {
    "คดีปริศนา": mysteryBg,
    "คดีอำพราง": disguiseBg,
    "คดีบุคคลสูญหาย": missingBg,
    "คดีสะเทือนสังคม": murderBg,
    "คดีในไทยทั้งหมด": defaultBg
};

const HeroSection = ({ title, searchTerm, onSearchChange }) => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };
    const backgroundImage = categoryImages[title] || defaultBg;

    return (
        <div className="w-full">
            <HeroBanner heroImage={backgroundImage} handleBack={handleBack}/>

            <div className="bg-[#0a0a0a] py-8">
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