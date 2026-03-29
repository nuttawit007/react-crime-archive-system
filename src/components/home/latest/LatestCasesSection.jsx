import React from 'react';
import { useNavigate } from 'react-router-dom';
import CaseCard from '../../../common/CaseCard';
import Button from '../../../common/Button';

const LatestCasesSection = ({ cases }) => {
    const navigate = useNavigate();

    const dataToRender = cases || [];

    return (
        <section className="py-12 px-4 max-w-6xl mx-auto text-white">
            <h2 className="text-2xl font-bold mb-8 border-l-4 border-[#b13027] pl-4">
                คดีในไทยล่าสุด
            </h2>

            {/* ส่วนแสดงรายการคดี */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 mb-12">
                {dataToRender.slice(0, 4).map((item) => (
                    <CaseCard key={item.id} {...item} />
                ))}
            </div>

            <div className="flex justify-center">
                <Button
                    type="primary"
                    text="ดูคดีทั้งหมด"
                    onClick={() => navigate('/cases')}
                />
            </div>
        </section>
    );
};

export default LatestCasesSection;