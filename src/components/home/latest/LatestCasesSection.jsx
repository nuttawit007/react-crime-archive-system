import React from 'react';
import { FaEye } from 'react-icons/fa';

const LatestCasesSection = ({ cases }) => {
    return (
        <section className="py-12 px-4 max-w-6xl mx-auto">
            <h2 className="text-xl font-bold mb-8">คดีในไทยล่าสุด</h2>
            <div className="space-y-6">
                {cases && cases.map((c) => (
                    <div key={c.id} className="bg-[#121212] border border-zinc-800 rounded-xl overflow-hidden flex flex-col sm:flex-row hover:border-[#b13027]/50 transition-colors">
                        <div className="sm:w-64 h-48 shrink-0">
                            <img
                                src={`/images/case/${c.image}`}
                                className="w-full h-full object-cover"
                                alt={c.title}
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=No+Image'; }}
                            />
                        </div>
                        <div className="p-6 flex flex-col justify-between flex-1">
                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold text-white hover:text-[#b13027] cursor-pointer">{c.title}</h3>
                                    <span className="text-[10px] bg-zinc-800 text-gray-400 px-2 py-1 rounded uppercase tracking-wider">{c.category}</span>
                                </div>
                                <p className="text-gray-400 text-xs line-clamp-2 mb-4">{c.content}</p>
                            </div>
                            <div className="flex items-center gap-4 text-[10px] text-gray-500 border-t border-zinc-800 pt-4">
                                <span className="flex items-center gap-1 font-mono uppercase italic">{c.provinceName}</span>
                                <span className="flex items-center gap-1"><FaEye /> {c.view?.toLocaleString()} views</span>
                                <span className={`px-2 py-0.5 rounded ${c.status === 'ปิดแล้ว' ? 'bg-green-900/30 text-green-500' : 'bg-yellow-900/30 text-yellow-500'}`}>
                                    {c.status}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LatestCasesSection;