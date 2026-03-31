import { Link } from 'react-router-dom'
import Tag from './Tag'

const caseImages = import.meta.glob('../assets/images/case/*.png', { eager: true })

const CaseCard = ({ id, title, category, content, view, status, image }) => {
  const imageKey = `../assets/images/case/${image}`
  const imageUrl = caseImages[imageKey]?.default || ''

  return (
    <Link
      to={`/cases/${id}`}
      className="block transition hover:scale-[1.01]"
    >
      <div className="flex flex-col sm:flex-row rounded-xl border border-zinc-700 p-4 sm:p-6 cursor-pointer hover:border-[#b13027] transition gap-4">
        
        {/* Image */}
        <div className="w-full sm:w-48 h-48 sm:h-40 rounded-lg overflow-hidden shrink-0">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between flex-1 min-w-0">
          <div>
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <h3 className="text-lg sm:text-xl font-semibold text-[#b13027] leading-snug">{title}</h3>
              <Tag type={category} />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">{content}</p>
          </div>

          <div className="mt-3 flex flex-wrap gap-3 text-xs text-gray-400">
            <span>หมวดหมู่: {category}</span>
            <span>ยอดเข้าชม: {view}</span>
            <span>สถานะ: {status}</span>
          </div>
        </div>

      </div>
    </Link>
  )
}

export default CaseCard