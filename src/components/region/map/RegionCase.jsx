import React from 'react'

const RegionCase = ({region, caseCount}) => {
    return (
        <div className="flex items-center justify-between rounded-lg border border-gray-600 bg-[#67676733] p-4 text-white">
            <h3 className="text-md">{region}</h3>
            <p className="text-md text-gray-400">{caseCount} คดี</p>
        </div>
    )
}

export default RegionCase