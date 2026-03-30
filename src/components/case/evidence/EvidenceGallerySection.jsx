import { useState } from 'react'

export default function EvidenceGallerySection({ images, title }) {
  const [current, setCurrent] = useState(0)

  if (!images || images.length === 0) return null

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)
  const next = () => setCurrent((c) => (c + 1) % images.length)

  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 pb-3 border-b border-white/10">
        {title || 'หลักฐานและภาพประกอบ'}
      </h2>

      <div className="relative bg-[#161616] border border-white/10 rounded-2xl overflow-hidden">
        {/* Main image */}
      <div className="relative w-full aspect-video md:aspect-16/7 overflow-hidden">
          <img
            src={images[current]}
            alt={`หลักฐาน ${current + 1}`}
            className="w-full h-full object-cover transition-opacity duration-300"
            loading="lazy"
          />
          <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
            {current + 1} / {images.length}
          </div>
        </div>

        {/* Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-white flex items-center justify-center transition backdrop-blur-sm cursor-pointer"
              aria-label="ก่อนหน้า"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-white flex items-center justify-center transition backdrop-blur-sm cursor-pointer"
              aria-label="ถัดไป"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Dot pagination */}
        {images.length > 1 && (
          <div className="flex items-center justify-center gap-2 py-4">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`rounded-full transition-all cursor-pointer ${
                  idx === current
                    ? 'w-6 h-2 bg-[#e5341a]'
                    : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`ภาพที่ ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}