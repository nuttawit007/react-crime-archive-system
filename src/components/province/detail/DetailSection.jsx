import React from 'react'
import CaseCard from "../../../common/CaseCard";

const DetailSection = ({ province }) => {
    return (
        <section className="px-6 md:px-15 lg:px-30 mt-6 text-white">
            <h2 className="text-3xl"> {province.case} คดีกรณีศึกษาในจังหวัดนี้</h2>

            <div className="mt-6 space-y-4">
                {province.cases?.map((item) => (
                    <CaseCard key={item.id} {...item} />
                ))}
            </div>
        </section>
    )
}

export default DetailSection