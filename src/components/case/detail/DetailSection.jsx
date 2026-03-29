import React from 'react'

export default function DetailSection({ title, paragraphs, children }) {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 pb-3 border-b border-white/10">
        รายละเอียดคดี
      </h2>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: article content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col gap-5">
            {paragraphs.map((para, idx) => (
              <p
                key={idx}
                className="text-gray-300 leading-relaxed text-base md:text-lg"
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Right: audio card slot */}
        {children && (
          <div className="w-full lg:w-80 xl:w-96 flex-shrink-0">
            {children}
          </div>
        )}
      </div>
    </section>
  )
}
