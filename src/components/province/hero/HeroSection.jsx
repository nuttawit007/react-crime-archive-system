import React from 'react'
import { useNavigate } from 'react-router';
import heroImage from '../../../assets/images/region/region_hero.png'
import Button from '../../../common/Button'

const HeroSection = ({ province }) => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(`/regions`);
        console.log("Go back to regions page");
    }

    return (
        <section className="relative h-60">
                {/* background image */}
                <img src={heroImage} alt="background" className="absolute inset-0 h-full w-full object-cover opacity-50"/>

                {/* content */}
                <div className="relative z-10 flex h-full px-6 text-center">
                    <div className='absolute top-0 left-0 px-8 py-4 md:px-15 md:py-15 lg:px-30 lg:py-8 flex flex-col'>
                        <div className="flex flex-col items-start mb-4">
                            <h1 className="text-5xl text-white font-bold mb-4">{province.name}</h1>
                            <p className="text-[#E9E9E9] text-xl mb-2">{province.region}</p>
                            <p className="text-[#EB3F34] text-3xl">จำนวนคดี {province.case} คดี</p>
                        </div>
                        <Button type="primary" text="ย้อนกลับ" onClick={handleGoBack}/>
                    </div>
                </div>
        </section>
    )
}

export default HeroSection