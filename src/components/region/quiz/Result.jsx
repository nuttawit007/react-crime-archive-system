import React, { useMemo } from 'react'
import Button from '../../../common/Button'
import CaseCard from '../../../common/CaseCard'
import casesData from '../../../data/cases.json'

const Result = ({ result, handleResetQuiz }) => {
    const recommendedCase = useMemo(() => {
        if (!result?.title || !Array.isArray(casesData)) return null

        const allCases = casesData.flatMap(province => province.cases || [])

        const matchedCases = allCases.filter(item => item.category === result.title)

        if (!matchedCases.length) return null

        return matchedCases.reduce((topCase, currentCase) => {
            return currentCase.view > topCase.view ? currentCase : topCase
        }, matchedCases[0])
    }, [result])

    return (
        <div className='w-full max-w-3xl text-start text-white'>
            <h2 className='text-3xl font-bold mb-4 text-center'>"{result.title}"</h2>
            <p className='text-[#EB3F34] text-lg font-semibold mb-2'>
                ผลลัพธ์ของคุณ : {result.subtitle}
            </p>
            <p className='text-gray-300 text-lg leading-7 mb-6'>{result.description}</p>
            
            <h3 className='text-2xl mb-4'>คดีที่แนะนำ</h3>

            {recommendedCase ? (
                <CaseCard {...recommendedCase} />
            ) : (
                <p className='text-gray-400'>ยังไม่พบคดีแนะนำสำหรับหมวดนี้</p>
            )}

            <div className='flex justify-end mt-6'>
                <Button type='primary' text='ทำแบบทดสอบอีกครั้ง' onClick={handleResetQuiz}/>
            </div>
        </div>
    )
}

export default Result