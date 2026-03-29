import React, { useState } from 'react'

export default function AIAudioSummaryCard({ audio }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(18) // fake progress %

  const togglePlay = () => {
    setIsPlaying((prev) => !prev)
  }

  return (
    <div className="bg-[#161616] border border-white/10 rounded-2xl p-6 flex flex-col gap-5 shadow-xl sticky top-20">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#e5341a]/20 border border-[#e5341a]/40 flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#e5341a]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3a9 9 0 100 18A9 9 0 0012 3zm-1 13V8l6 4-6 4z" />
          </svg>
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{audio.title || 'ฟังสรุปคดีด้วย AI'}</p>
          <p className="text-gray-500 text-xs">AI Podcast Summary</p>
        </div>
      </div>

      {/* Waveform / progress bar */}
      <div className="flex flex-col gap-2">
        <div className="relative h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-[#e5341a] rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>{audio.currentTime || '00:00'}</span>
          <span>{audio.duration || '05:40'}</span>
        </div>
      </div>

      {/* Play button */}
      <button
        onClick={togglePlay}
        className="flex items-center justify-center gap-3 bg-[#e5341a] hover:bg-[#c42a13] text-white font-semibold py-3 rounded-xl transition"
      >
        {isPlaying ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" />
            </svg>
            หยุดเล่น
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
            เล่นสรุปคดี
          </>
        )}
      </button>

      {/* Summary text */}
      {audio.summaryText && (
        <div className="border-t border-white/10 pt-4">
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
            {audio.summaryText}
          </p>
        </div>
      )}

      {/* CTA */}
      <button className="text-[#e5341a] hover:text-[#ff6b55] text-sm font-medium text-center border border-[#e5341a]/30 hover:border-[#e5341a]/60 py-2.5 rounded-xl transition">
        {audio.ctaText || 'อ่านสรุปบทความ'}
      </button>
    </div>
  )
}
