import React from "react";
import bannerOff from "../../../assets/banner-light-off.svg";

const Hero = () => {
    return (
        <section className="relative h-[650px] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
            {/* Background with Overlays */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bannerOff}
                    alt="Crime Investigation"
                    className="w-full h-full object-cover opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/70 to-[#0a0a0a]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl tracking-wide">
                    คดีฆาตกรรมในไทย
                </h1>
                <p className="text-red-500 text-lg md:text-2xl font-light leading-relaxed">
                    รวมคดีสำคัญจากแหล่งข้อมูลน่าเชื่อถือ พร้อมสรุปประเด็นและฟังบทความด้วย AI
                </p>
            </div>
        </section>
    );
};

export default Hero;