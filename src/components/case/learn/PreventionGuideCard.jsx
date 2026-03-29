import React from 'react'

export default function PreventionGuideCard({ title, items }) {
  return (
    <div className="bg-[#161616] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 h-full">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#1a3a2a] border border-green-500/40 flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </div>
        <h3 className="text-white font-bold text-lg">{title || 'แนวทางการป้องกัน'}</h3>
      </div>

      <div className="h-px bg-white/10" />

      <ul className="flex flex-col gap-3 flex-1">
        {items && items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-[#e5341a] flex-shrink-0" />
            <span className="text-gray-300 leading-relaxed text-sm md:text-base">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
