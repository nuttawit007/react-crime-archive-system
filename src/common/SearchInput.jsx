import React from 'react'
import { Search } from 'lucide-react';

const SearchInput = ({ placeholder, value, onChange }) => {
    return (
        <div className='flex items-center w-full max-w-2xl mx-auto rounded-full border border-white/20 bg-[#BBBBBB33] mt-6 py-3 px-6 focus-within:border-white/50 transition-all'>
            <label htmlFor='search'>
                <div className='mr-4'>
                    <Search className="w-5 h-5 text-[#BBBBBB]"/>   
                </div>
            </label>
            <input 
                type="text" 
                id='search' 
                placeholder={placeholder}
                className='w-full bg-transparent text-white focus:outline-none'
                value={value} 
                onChange={(e) => onChange(e.target.value)} 
            />
        </div>
    )
}
    export default SearchInput