import React from 'react'

export default function KeyIssuesSection({ paragraphs }) {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 pb-3 border-b border-white/10">
        ประเด็นสำคัญ
      </h2>

      <div className="flex flex-col gap-5">
        {paragraphs && paragraphs.length > 0 ? (
          paragraphs.map((para, idx) => (
            <div
              key={idx}
              className="bg-[#161616] border border-white/10 rounded-xl p-6 flex gap-4 hover:border-[#e5341a]/30 transition"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#e5341a]/20 border border-[#e5341a]/40 flex items-center justify-center mt-0.5">
                <span className="text-[#e5341a] font-bold text-sm">{idx + 1}</span>
              </div>
              <p className="text-gray-300 leading-relaxed text-base">
                {typeof para === 'string' ? para : para.text || ''}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">ยังไม่มีข้อมูลประเด็นสำคัญสำหรับคดีนี้</p>
        )}
      </div>
    </section>
  )
}
