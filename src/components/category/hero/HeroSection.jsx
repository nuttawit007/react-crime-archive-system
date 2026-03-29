import React, { useState } from 'react';
import Button from '../../../common/Button';
import heroImage from '../../../assets/images/region/region_hero.png';

const HeroSection = ({ title }) => {
    return (
        <section className="relative h-60">
            <img src={heroImage} alt="background" className="absolute inset-0 h-full w-full object-cover opacity-50" />

            <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
                <div className='absolute top-0 left-0 px-8 py-8 md:px-15 md:py-15 lg:px-30 lg:py-12'>
                    <Button type="secondary" text="ย้อนกลับ" />
                </div>
                <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl text-shadow-lg/30">
                    คดีในไทยทั้งหมด
                </h1>
            </div>
        </section>
    );
};

export default HeroSection;