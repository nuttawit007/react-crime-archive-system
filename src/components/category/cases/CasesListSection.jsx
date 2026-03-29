import React from 'react';
import CaseCard from '../../../common/CaseCard';

const CasesListSection = ({ cases = [] }) => {
    if (!cases || cases.length === 0) {
        return (
            <div className="text-center py-20 text-gray-500">
                ไม่พบข้อมูลคดีที่คุณค้นหา
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-6 pb-20">
            {cases.map((item) => (
                item?.id && <CaseCard key={item.id} {...item} />
            ))}
        </div>
    );
};

export default CasesListSection;