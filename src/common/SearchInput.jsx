import React from 'react'
import { Search } from 'lucide-react';

const SearchInput = ({ placeholder }) => {

    return (
        <>
            <div className='flex items-center max-w-1/2 rounded-full border border-white/20 bg-[#BBBBBB33] mt-6 py-3 px-4'>
                <label htmlFor='search'>
                    <div className='mr-4'>
                        <Search className="w-5 h-5 text-[#BBBBBB]"/>   
                    </div>
                </label>
                <input type="text" id='search' placeholder={placeholder}className='w-full focus:outline-none'/>
            </div>
        </>
        )
    }

    export default SearchInput