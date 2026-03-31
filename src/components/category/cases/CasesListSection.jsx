import React, { useState } from 'react';
import CaseCard from '../../../common/CaseCard';

const ITEMS_PER_LOAD = 5;

const CasesListSection = ({ cases = [] }) => {
    const casesIdentity = cases.length > 0 ? `${cases[0]?.id}-${cases.length}` : 'empty';
    return <CasesListSectionInner key={casesIdentity} cases={cases} />;
};

const CasesListSectionInner = ({ cases = [] }) => {
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

    if (!cases || cases.length === 0) {
        return (
            <div className="text-center py-20 text-gray-500">
                ไม่พบข้อมูลคดีที่คุณค้นหา
            </div>
        );
    }

    const visibleCases = cases.slice(0, visibleCount);
    const hasMore = visibleCount < cases.length;

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + ITEMS_PER_LOAD);
    };

    return (
        <div className="pb-20">
            <div className="grid grid-cols-1 gap-6">
                {visibleCases.map((item) => (
                    item?.id && <CaseCard key={item.id} {...item} />
                ))}
            </div>

            {hasMore && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handleLoadMore}
                        className="bg-[#EB3F34] hover:opacity-90 text-white px-6 py-2 rounded-full transition cursor-pointer"
                    >
                        แสดงเพิ่มเติม
                    </button>
                </div>
            )}
        </div>
    );
};

export default CasesListSection;