import React from 'react'
import Tag from './Tag'

const caseImages = import.meta.glob('../assets/images/case/*.png', { eager: true })

const CaseCard = ({id, title, category, content, view, status, image}) => {

	const imageKey = `../assets/images/case/${image}`
	const imageUrl = caseImages[imageKey]?.default || ''
	console.log(imageUrl)
    return (
        <div key={id} className="flex rounded-xl border border-zinc-700 p-8">
            <div className="flex-1 h-52 rounded-lg overflow-hidden">
                <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-2 h-fit ml-4 p-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-semibold text-[#b13027]">{title}</h3>
                    <Tag type={category} />
                </div>
                <p className="mt-2 text-gray-300">{content}</p>
                <div className="mt-3 flex gap-4 text-sm text-gray-400">
                    <span>หมวดหมู่: {category}</span>
                    <span>ยอดเข้าชม: {view}</span>
                    <span>สถานะ: {status}</span>
                </div>
            </div>
        </div>
    )
}

export default CaseCard
