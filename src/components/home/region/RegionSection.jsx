import React from 'react';

const RegionSection = () => {
    return (
        <section className="relative py-24 px-4 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20">
                <img src="/images/region/region_hero.png" className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
            </div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">สำรวจคดีเด่นในไทย<br />ตามพื้นที่</h2>
                <button className="bg-[#b13027] hover:bg-red-700 text-white px-10 py-3 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(177,48,39,0.5)]">
                    ไปสำรวจเลย
                </button>
            </div>
        </section>
    );
};

export default RegionSection;