import React from 'react';
import Button from '../../../common/Button';
import { useNavigate } from 'react-router-dom';
import heroImage from '../../../assets/images/region/region_hero.png';

const RegionSection = () => {
    const navigate = useNavigate();
    return (
        <section className="relative py-24 px-4 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-40">
                <img src={heroImage} className="w-full h-full object-cover" alt="background" />
            </div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">สำรวจคดีเด่นในไทย<br />ตามพื้นที่</h2>
                <Button 
                        type="primary" 
                        text="วิเคราะห์" 
                        onClick={() => navigate('/regions')} 
                    />
            </div>
        </section>
    );
};

export default RegionSection;