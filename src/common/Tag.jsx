const Tag = ({ type }) => {
  return (
    <>
      {type === 'คดีบุคคลสูญหาย' &&
        <span className='inline-block px-3 py-0.5 rounded-full text-xs font-semibold bg-[#573c66]/20 border border-[#a975c7]/50 text-[#a975c7]'>คดีบุคคลสูญหาย</span>
      }
      {type === "คดีสะเทือนสังคม" &&
        <span className='inline-block px-3 py-0.5 rounded-full text-xs font-semibold bg-[#2655a0]/20 border border-[#93c5fd]/50 text-[#93c5fd]'>คดีสะเทือนสังคม</span>
      }
      {type === "คดีอำพราง" &&
        <span className='inline-block px-3 py-0.5 rounded-full text-xs font-semibold bg-[#972929]/20 border border-[#f87171]/50 text-[#f87171]'>คดีอำพราง</span>
      }
      {type === "คดีปริศนา" &&
        <span className='inline-block px-3 py-0.5 rounded-full text-xs font-semibold bg-[#9b6507]/20 border border-[#d5a21f]/50 text-[#d5a21f]'>คดีปริศนา</span>
      }
    </>
  )
}

export default Tag