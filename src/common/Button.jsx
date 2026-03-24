import React from 'react'
import { ChevronLeft } from "lucide-react";

const Button = ({type, text}) => {
    return (
        <>
            {type === 'primary' && 
            <button className="bg-[#EB3F34] text-white px-4 py-2 rounded-full cursor-pointer">
                {text}
            </button>}
            {type === 'secondary' && 
            <button className=" bg-[#BBBBBB33] text-white px-4 py-2  border border-white/20 rounded-full cursor-pointer">
                <div className="flex">
                    <ChevronLeft /> {text}
                </div>
            </button>}
        </>
    )
}

export default Button