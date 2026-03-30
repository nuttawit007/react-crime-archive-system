import Button from '../../../common/Button'

export default function HeroSection({ caseItem, heroImage, onBack }) {
  const subtitle = caseItem.subtitle || caseItem.content || ''

  return (
    <div className="relative w-full min-h-[60vh] md:min-h-[70vh] flex flex-col justify-end overflow-hidden">
      {/* Background image */}
      {heroImage ? (
        <img
          src={heroImage}
          alt={caseItem.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      ) : (
        <div className="absolute inset-0 bg-[#1a1a1a]" />
      )}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-black/30" />

      {/* Back button */}
      <div className="absolute top-6 left-6 z-20">
        <Button type="secondary" text="ย้อนกลับ" onClick={onBack} />  
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto w-full px-6 md:px-8 pb-12 md:pb-16 text-center">
        {/* Category badge */}
        {caseItem.category && (
          <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-semibold bg-[#e5341a]/20 border border-[#e5341a]/50 text-[#ff7a65]">
            {caseItem.category}
          </span>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
          {caseItem.title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Meta */}
        <div className="mt-4 flex items-center justify-center gap-4 text-sm text-gray-400">
          {caseItem.view != null && <span>ยอดดู {caseItem.view} วิว</span>}
          {caseItem.provinceName && (
            <>
              <span className="text-gray-600">·</span>
              <span>{caseItem.provinceName}</span>
            </>
          )}
          {caseItem.status && (
            <>
              <span className="text-gray-600">·</span>
              <span className={caseItem.status === 'ปิดคดี' ? 'text-green-400' : 'text-yellow-400'}>
                {caseItem.status}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}