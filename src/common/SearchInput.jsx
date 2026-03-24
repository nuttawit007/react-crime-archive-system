import React from 'react'
import { Search } from 'lucide-react';

const SearchInput = ({ placeholder }) => {

    return (
        <>
            <div className='flex items-center'>
                <label htmlFor='search'>
                    <div className='bg-[#BBBBBB33] px-4 py-3 pr-0 border border-white/20 border-r-0 rounded-l-full cursor-pointer'>
                        <Search className="w-6 h-6 " color="#BBBBBB33"/>   
                    </div>
                </label>
                <input type="text" id='search' placeholder={placeholder} className="bg-[#BBBBBB33] border border-s-0 border-white/20 rounded-r-full px-3  py-3 w-1/2 focus:outline-none"/>
            </div>
        </>
        )
    }

    export default SearchInput