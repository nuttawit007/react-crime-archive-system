import React from 'react';

const SuggestSection = ({ caseData }) => {
    if (!caseData) return null;

    return (
        <section className="py-12 px-4 max-w-6xl mx-auto">
            <h2 className="text-xl font-bold mb-6 border-l-4 border-[#b13027] pl-4 italic">คดีเด่นวันนี้</h2>
            <div className="relative group overflow-hidden rounded-2xl bg-[#121212] border border-zinc-800 flex flex-col md:flex-row gap-8 p-6">
                <div className="md:w-1/2 h-64 overflow-hidden rounded-xl">
                    <img src={`/images/case/${caseData.image}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="" />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-[#b13027] mb-4">{caseData.title}</h3>
                    <p className="text-gray-300 text-sm mb-6 line-clamp-4">{caseData.content}</p>
                    <button className="bg-[#b13027] hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm w-fit transition-colors">
                        อ่านต่อเลย
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SuggestSection;