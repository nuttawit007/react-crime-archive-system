import React from 'react';
import Button from '../../../common/Button';
import { useNavigate } from 'react-router-dom';
import featuredCaseImg from '../../../assets/images/case/case_image_1.png';

const SuggestSection = ({ caseData }) => {
    const navigate = useNavigate();
    if (!caseData) return null;

    return (
        <section className="py-12 px-4 max-w-6xl mx-auto">
            <h2 className="text-xl font-bold mb-6 border-l-4 border-[#b13027] pl-4 italic">คดีเด่นวันนี้</h2>
            <div className="relative group overflow-hidden rounded-2xl bg-[#121212] border border-zinc-800 flex flex-col md:flex-row gap-8 p-6">
                <div className="md:w-2/5 h-64 md:h-80 overflow-hidden rounded-2xl">
                    <img
                        src={featuredCaseImg}

                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                        alt={caseData.title}
                    />
                </div>

                <div className="md:w-1/2 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-[#b13027] mb-4">{caseData.title}</h3>
                    <p className="text-gray-300 text-sm mb-6 line-clamp-4">{caseData.content}</p>
                    <Button
                        type="primary"
                        text="อ่านคดีเลย"
                        onClick={() => navigate(`/case/${caseData.id}`)}
                    />
                </div>
            </div>
        </section>
    );
};

export default SuggestSection;