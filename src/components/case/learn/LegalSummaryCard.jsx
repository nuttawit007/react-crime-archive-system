export default function LegalSummaryCard({ title, paragraphs = [] }) {  
  
  return (
    <div className="bg-[#161616] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 h-full">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#1e3a5f] border border-blue-500/40 flex items-center justify-center shrink-0">  {/* ✅ flex-shrink-0 → shrink-0 */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">  {/* ✅ เพิ่ม aria-hidden */}
            <path d="M12 1L3 5v6c0 5.25 3.75 10.15 9 11.25C17.25 21.15 21 16.25 21 11V5l-9-4zm-1 14l-3-3 1.41-1.41L11 12.17l4.59-4.58L17 9l-6 6z" />
          </svg>
        </div>
        <h3 className="text-white font-bold text-lg">{title || 'สรุปบทลงโทษ'}</h3>
      </div>

      <div className="h-px bg-white/10" />

      <div className="flex flex-col gap-3 flex-1">
        {paragraphs.map((para, idx) => (  
          <p key={para.id ?? idx} className="text-gray-300 leading-relaxed text-sm md:text-base">  
            {para}
          </p>
        ))}
      </div>
    </div>
  )
}