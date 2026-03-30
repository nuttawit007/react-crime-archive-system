import React from 'react';
import bannerImg from '../../../assets/images/homee/banner-light-on.png';

const HeroSection = () => {
  return (
    <section className="relative h-150 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={bannerImg}
          className="w-full h-full object-cover opacity-50"
          alt="crime background"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#0a0a0a]/10 to-[#0a0a0a]"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg text-white">
          คดีฆาตกรรมในไทย
        </h1>
        <p className="text-[#EB3F34] text-lg md:text-xl font-bold max-w-3xl mx-auto mt-4">
          รวมคดีสำคัญจากแหล่งข้อมูลน่าเชื่อถือ พร้อมสรุปประเด็นและฟังบทความด้วย AI
        </p>
      </div>
    </section>
  );
};

export default HeroSection;