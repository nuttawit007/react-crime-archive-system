import React from 'react';

const CategoryCard = ({ name, image, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="min-w-[300px] md:min-w-[350px] h-[200px] relative rounded-2xl overflow-hidden cursor-pointer group shadow-2xl transition-all duration-500"
        >
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-70"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-center justify-center">
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