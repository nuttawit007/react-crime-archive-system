import React from 'react';
import Button from '../../../common/Button';
import { useNavigate } from 'react-router-dom';
import featuredCaseImg from '../../../assets/images/case/case_image_3.png';
import backgroundImage from '../../../assets/images/homee/caseToday.png';

const SuggestSection = ({ caseData }) => {
    const navigate = useNavigate();
    if (!caseData) return null;

    return (
        <section className="relative py-20 px-4">

            <div className="absolute inset-0 z-0">
                <img
                    src={backgroundImage}
                    className="w-full h-full object-cover opacity-60"
                    alt="background"
                />
                <div className="absolute inset-0 bg-linear-to-b"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <h2 className="text-xl font-bold mb-6 border-l-4 border-[#b13027] pl-4 italic text-white">
                    คดีเด่นวันนี้
                </h2>

                <div className="group overflow-hidden rounded-2xl bg-[#121212]/80 border border-zinc-800 flex flex-col md:flex-row gap-8 p-6 transition-all hover:border-zinc-700 backdrop-blur-sm">
                    <div className="md:w-2/5 h-64 md:h-80 overflow-hidden rounded-2xl">
                        <img
                            src={featuredCaseImg}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                            alt={caseData.title}
                        />
                    </div>

                    <div className="md:w-1/2 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-[#EB3F34] mb-2">
                            {caseData.title}
                        </h3>

                        <span className="text-xs font-medium text-zinc-500 mb-4 block">
                            หมวดหมู่: {caseData.category}
                        </span>

                        <p className="text-gray-300 text-sm mb-6 line-clamp-4 leading-relaxed">
                            {caseData.content}
                        </p>

                        <div className="w-fit">
                            <Button
                                type="primary"
                                text="อ่านคดีเลย"
                                onClick={() => navigate(`/case/${caseData.slug}`)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuggestSection;