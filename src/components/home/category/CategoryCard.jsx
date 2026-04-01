import React from 'react';

const CategoryCard = ({ name, image, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="min-w-75 md:min-w-87.5 h-50 snap-center relative rounded-2xl overflow-hidden cursor-pointer group shadow-2xl transition-all duration-500 hover:ring-2 hover:ring-red-600/50"        >
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-70"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex items-center justify-center">
                <div className="border-2 border-white px-8 py-2 bg-black/10 backdrop-blur-[1px]">
                    <span className="text-white text-xl font-bold tracking-widest uppercase">
                        {name}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;