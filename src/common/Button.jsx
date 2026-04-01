import React from 'react'
import { ChevronLeft } from 'lucide-react'

const Button = ({ type, text, onClick }) => {
    const baseClass =
        'inline-flex items-center justify-center gap-1 rounded-full cursor-pointer whitespace-nowrap transition px-3 py-1.5 text-sm sm:px-4 sm:py-2 min-h-[36px]'

    return (
        <>
        {type === 'primary' && (
            <button
            className={`${baseClass} bg-[#EB3F34] text-white hover:opacity-90`}
            onClick={onClick}
            >
            {text}
            </button>
        )}

        {type === 'secondary' && (
            <button
            className={`${baseClass} bg-[#BBBBBB33] text-white border border-white/20 hover:bg-[#FFFFFF22]`}
            onClick={onClick}
            >
            <ChevronLeft className='w-4 h-4' />
            <span>{text}</span>
            </button>
        )}
        </>
    )
}

export default Button