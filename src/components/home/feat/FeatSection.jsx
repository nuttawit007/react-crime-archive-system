import React from 'react';
import puzzleImg from "../../../assets/images/feate/puzzle.png"
import defendImg from "../../../assets/images/feate/defend.png"
import aiImg from "../../../assets/images/feate/AI_listen.png"

const FeatSection = () => {
    const features = [
        { img: puzzleImg, title: "สรุปคดีสำคัญ", desc: "รวบรวมประเด็นสำคัญและลำดับเหตุการณ์อย่างละเอียด" },
        { img: defendImg, title: "แนวทางฝึกฝนตัว", desc: "เรียนรู้เพื่อหาทางระวังและป้องกันภัยจากกรณีศึกษา" },
        { img: aiImg, title: "พิสูจน์ด้วย AI", desc: "วิเคราะห์ข้อมูลคดีด้วยเทคโนโลยีประมวลผลขั้นสูง" },
    ];

    return (
        <section className="py-16 px-4 max-w-6xl mx-auto text-white">
            <h2 className="text-center text-2xl font-bold mb-12">เรียนรู้จากคดีในไทย</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {features.map((f, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <div className="w-20 h-20 mb-4 flex items-center justify-center">
                            <img
                                src={f.img}
                                alt={f.title}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeatSection;