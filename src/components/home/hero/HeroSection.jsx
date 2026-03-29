import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
        src="/images/homee/banner-light-on.png" 
          className="w-full h-full object-cover opacity-30 grayscale" 
          alt="crime background" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]"></div>
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">คดีฆาตกรรมในไทย</h1>
        <p className="text-[#b13027] text-lg md:text-xl font-light max-w-2xl mx-auto">
          รวมคดีสำคัญจากแหล่งข้อมูลน่าเชื่อถือ พร้อมสรุปประเด็นและฟังบทความด้วย AI
        </p>
      </div>
    </section>
  );
};

export default HeroSection;