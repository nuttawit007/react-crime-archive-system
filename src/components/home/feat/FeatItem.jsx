import React from 'react';

const FeatItem = ({ img, title, desc }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-20 h-20 mb-4 flex items-center justify-center">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-contain"
                />
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-400 text-xl leading-relaxed">{desc}</p>
        </div>
    );
};

export default FeatItem;