import React from 'react';
import { useParams } from 'react-router-dom';
import casesData from '../data/cases.json';
import Button from '../common/Button';
import CasesListSection from '../components/category/cases/CasesListSection';

const CategoriesPage = () => {
    const { id } = useParams();

    // 1. ยุบรวมคดีจากทุกจังหวัดมาไว้ในที่เดียว
    const allCases = casesData.flatMap(province => province.cases);

    // 2. กรองเฉพาะคดีที่สะกดหมวดหมู่ตรงกับ id
    const filteredCases = allCases.filter(item =>
        item.category?.trim() === id?.trim()
    );

    return (
        <div className="bg-black min-h-screen text-white p-10">
            <div className='absolute top-0 left-0 px-8 py-8 md:px-15 md:py-15 lg:px-30 lg:py-12'>
                <Button type="secondary" text="ย้อนกลับ" />
            </div>
            <h1 className="text-3xl font-bold mb-10 text-center">หมวดหมู่: {id}</h1>

            {filteredCases.length > 0 ? (
                <CasesListSection cases={filteredCases} />
            ) : (
                <div className="text-center py-20 text-zinc-500">
                    {/* แจ้งเตือนกรณีสะกดไม่ตรงกัน */}
                    ไม่พบข้อมูลสำหรับ "{id}" <br />
                    (โปรดเช็กว่าใน JSON สะกดตรงกับชื่อนี้หรือไม่)
                </div>
            )}
        </div>
    );
};

export default CategoriesPage;