import React from 'react'

const Tag = ({type}) => {
    return (
        <>
            {type === 'คดีบุคคลสูญหาย' &&
                <span className='bg-[#573c66] px-4 py-2 rounded-full border-2 border-[#a975c7]'>คดีบุคคลสูญหาย</span>
            }
            {type === "คดีสะเทือนสังคม" &&
                <span className='bg-[#2655a0] px-4 py-2 rounded-full border-2 border-[#93c5fd]'>คดีสะเทือนสังคม</span>
            }
            {type === "คดีอำพราง" &&
                <span className='bg-[#972929] px-4 py-2 rounded-full border-2 border-[#f87171]'>คดีอำพราง</span>
            }
            {type === "คดีปริศนา" &&
                <span className='bg-[#9b6507] px-4 py-2 rounded-full border-2 border-[#d5a21f]'>คดีปริศนา</span>
            }

        </>
    )
}

export default Tag