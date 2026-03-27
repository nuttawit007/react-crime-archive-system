import React from 'react';

const FeatItem = ({ img, title, desc }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="text-4xl text-[#b13027] mb-4">{img}</div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
    );
};

export default FeatItem;