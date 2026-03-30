import { useEffect, useMemo, useRef, useState } from 'react'

function timeToSeconds(time = '00:00') {
  const parts = time.split(':').map(Number)
  if (parts.length === 2) {
    const [minutes, seconds] = parts
    return minutes * 60 + seconds
  }
  if (parts.length === 3) {
    const [hours, minutes, seconds] = parts
    return hours * 3600 + minutes * 60 + seconds
  }
  return 0
}

function formatTime(totalSeconds = 0) {
  const safeSeconds = Math.max(0, Math.floor(totalSeconds))
  const minutes = Math.floor(safeSeconds / 60)
  const seconds = safeSeconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

export default function AIAudioSummaryCard({ audio = {} }) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(timeToSeconds(audio.duration || '00:00'))
  const [showTranscript, setShowTranscript] = useState(false)

  const segments = audio?.segments ?? []

  const activeSegmentIndex = useMemo(() => {
    return segments.findIndex((segment) => {
      const start = timeToSeconds(segment.start)
      const end = timeToSeconds(segment.end)
      return currentTime >= start && currentTime < end
    })
  }, [segments, currentTime])

  const activeSegment = activeSegmentIndex >= 0 ? segments[activeSegmentIndex] : null
  

  useEffect(() => {
    const player = audioRef.current
    if (!player) return
    if (isPlaying) {
      player.play().catch(() => setIsPlaying(false))
    } else {
      player.pause()
    }
  }, [isPlaying])

  useEffect(() => {
  setCurrentTime(0)
  setIsPlaying(false)
  setDuration(timeToSeconds(audio.duration || '00:00'))
  if (audioRef.current) {
    audioRef.current.load()
  }
}, [audio.audioSrc, audio.duration])

  const togglePlay = () => setIsPlaying((prev) => !prev)

  const handleLoadedMetadata = () => {
    if (!audioRef.current) return
    const realDuration = audioRef.current.duration
    if (!Number.isNaN(realDuration) && realDuration > 0) {
      setDuration(realDuration)
    }
  }

  const handleTimeUpdate = () => {
    if (!audioRef.current) return
    setCurrentTime(audioRef.current.currentTime)
  }

  const handleEnded = () => {
    setIsPlaying(false)
    setCurrentTime(duration)
  }

  const handleSeek = (event) => {
    const nextTime = Number(event.target.value)
    if (audioRef.current) {
      audioRef.current.currentTime = nextTime
    }
    setCurrentTime(nextTime)
  }

  const handleJumpToSegment = (start) => {
    const nextTime = timeToSeconds(start)
    if (audioRef.current) {
      audioRef.current.currentTime = nextTime
      audioRef.current.play().catch(() => {})
    }
    setCurrentTime(nextTime)
    setIsPlaying(true)
  }

  return (
    <div className="sticky top-20 flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#161616] p-6 shadow-xl">
      <audio
        ref={audioRef}
        src={audio.audioSrc}
        preload="metadata"
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e5341a]/40 bg-[#e5341a]/20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#e5341a]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 3a9 9 0 100 18A9 9 0 0012 3zm-1 13V8l6 4-6 4z" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{audio.title || 'ฟังสรุปคดีด้วย AI'}</p>
          <p className="text-xs text-gray-500">AI Podcast Summary</p>
        </div>
      </div>

      {/* Progress */}
      
<div className="flex flex-col gap-2">
  <input
    type="range"
    min="0"
    max={duration || 0}
    step="0.1"
    value={currentTime}
    onChange={handleSeek}
    className="w-full cursor-pointer accent-[#e5341a]"
  />
  <div className="flex justify-between text-xs text-gray-500">
    <span>{formatTime(currentTime)}</span>
    <span>{formatTime(duration)}</span>
  </div>
</div>

      {/* Play button */}
      <button
        type="button"
        onClick={togglePlay}
        aria-pressed={isPlaying}
        className="flex cursor-pointer items-center justify-center gap-3 rounded-xl bg-[#e5341a] py-3 font-semibold text-white transition hover:bg-[#c42a13]"
      >
        {isPlaying ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" />
            </svg>
            หยุดเล่น
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
            เล่นสรุปคดี
          </>
        )}
      </button>

      {/* Subtitle / Summary */}
      {activeSegment ? (
        <div className="rounded-xl border border-[#e5341a]/20 bg-white/5 p-4">
          <p className="mb-2 text-xs uppercase tracking-wide text-[#e5341a]">Subtitle</p>
          <p className="text-sm leading-relaxed text-gray-200">{activeSegment.text}</p>
        </div>
      ) : audio.summaryText ? (
        <div className="border-t border-white/10 pt-4">
          <p className="line-clamp-4 text-sm leading-relaxed text-gray-400">{audio.summaryText}</p>
        </div>
      ) : null}

      {/* CTA */}
      <button
        type="button"
        onClick={() => setShowTranscript((prev) => !prev)}
        className="cursor-pointer rounded-xl border border-[#e5341a]/30 py-2.5 text-center text-sm font-medium text-[#e5341a] transition hover:border-[#e5341a]/60 hover:text-[#ff6b55]"
      >
        {showTranscript ? 'ซ่อนบทพูดทั้งหมด' : audio.ctaText || 'ดูบทพูดทั้งหมด'}
      </button>

      {/* Transcript */}
      {showTranscript && segments.length > 0 && (
        <div className="max-h-72 space-y-3 overflow-y-auto rounded-xl border border-white/10 bg-black/20 p-4">
          {segments.map((segment, index) => {
            const isActive = index === activeSegmentIndex
            return (
              <button
                key={`${segment.start}-${segment.end}-${index}`}
                type="button"
                onClick={() => handleJumpToSegment(segment.start)}
                className={`w-full cursor-pointer rounded-lg p-3 text-left transition ${
                  isActive
                    ? 'border border-[#e5341a]/30 bg-[#e5341a]/15'
                    : 'border border-transparent bg-white/5 hover:bg-white/10'
                }`}
              >
                <p className="mb-1 text-xs text-[#e5341a]">{segment.start} - {segment.end}</p>
                <p className="text-sm leading-relaxed text-gray-200">{segment.text}</p>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}