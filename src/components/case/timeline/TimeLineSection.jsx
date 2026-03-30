export default function TimeLineSection({ items = [] }) {  

  if (items.length === 0) {  
    return (
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 pb-3 border-b border-white/10">
          ลำดับเหตุการณ์
        </h2>
        <p className="text-gray-500 text-base">ยังไม่มีข้อมูลลำดับเหตุการณ์สำหรับคดีนี้</p>
      </section>
    )
  }

  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 pb-3 border-b border-white/10">
        ลำดับเหตุการณ์
      </h2>

      <div className="relative flex flex-col gap-0 pl-6">
        {/* Vertical line */}
        <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-white/10" />

        {items.map((item, idx) => (
          <div key={item.id ?? idx} className="relative flex gap-6 pb-10 last:pb-0">  
            {/* Red dot */}
            <div className="absolute -left-6 top-1.5 w-4 h-4 rounded-full bg-[#e5341a] border-2 border-[#0a0a0a] shadow-[0_0_8px_rgba(229,52,26,0.6)] shrink-0 z-10" />  

            {/* Content */}
            <div className="flex-1 bg-[#161616] border border-white/10 rounded-xl p-5 hover:border-[#e5341a]/30 transition">
              {item.date && (
                <p className="text-[#e5341a] text-sm font-semibold mb-1">{item.date}</p>
              )}
              {item.title && (
                <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
              )}
              {item.description && (
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              )}
              {typeof item === 'string' && (
                <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}