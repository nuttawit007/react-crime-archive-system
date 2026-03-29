import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CategoryCard from './CategoryCard';

const categories = [
  { name: "คดีปริศนา", image: "/images/homee/mystery.png" },
  { name: "คดีอำพราง", image: "/images/homee/disguise.png" },
  { name: "คดีบุคคลสูญหาย", image: "/images/homee/missing.png" },
  { name: "คดีฆาตกรรม", image: "/images/homee/murder.png" },
];

const CategorySection = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (dir) => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 bg-black relative max-w-7xl mx-auto px-6">
      <h2 className="text-white text-3xl font-bold mb-10 ml-2">หมวดหมู่คดี</h2>

      <div className="relative group">
        <button
          onClick={() => scroll("left")}
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-30 bg-zinc-800/90 text-white p-3 rounded-full hover:bg-zinc-700 transition-all border border-white/10 shadow-2xl"
        >
          <ChevronLeft size={28} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 px-2"
        >
          {categories.map((cat, i) => (
            <CategoryCard
              key={i}
              name={cat.name}
              image={cat.image}
              onClick={() => navigate(`/categories/${cat.name}`)}
            />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-30 bg-zinc-800/90 text-white p-3 rounded-full hover:bg-zinc-700 transition-all border border-white/10 shadow-2xl"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Dots บอกตำแหน่ง */}
      <div className="flex justify-center mt-10 gap-3">
        <div className="w-3 h-3 bg-red-600 rounded-full shadow-[0_0_12px_rgba(220,38,38,0.6)]" />
        <div className="w-3 h-3 bg-zinc-700 rounded-full" />
        <div className="w-3 h-3 bg-zinc-700 rounded-full" />
        <div className="w-3 h-3 bg-zinc-700 rounded-full" />
      </div>
    </section>
  );
};

export default CategorySection;