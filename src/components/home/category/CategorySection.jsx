import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CategoryCard from './CategoryCard';
import mysteryImg from '../../../assets/images/homee/mystery.png';
import disguiseImg from '../../../assets/images/homee/disguise.png';
import missingImg from '../../../assets/images/homee/missing.png';
import murderImg from '../../../assets/images/homee/murder.png';

const categories = [
  { name: "คดีปริศนา", image: mysteryImg },
  { name: "คดีอำพราง", image: disguiseImg },
  { name: "คดีบุคคลสูญหาย", image: missingImg },
  { name: "คดีสะเทือนสังคม", image: murderImg },
];

const CategorySection = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;

      const firstCard = scrollRef.current.firstChild;
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth + 24;

        const index = Math.round(scrollLeft / cardWidth);

        if (index >= 0 && index < categories.length) {
          setActiveIndex(index);
        }
      }
    }
  };

  useEffect(() => {
    const node = scrollRef.current;
    if (node) {
      node.addEventListener('scroll', handleScroll);
      return () => node.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const firstCard = scrollRef.current.firstChild;
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth + 24;

        scrollRef.current.scrollBy({
          left: dir === "left" ? -cardWidth : cardWidth,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="py-16 bg-black relative max-w-7xl mx-auto px-6">
      <h2 className="text-white text-3xl font-bold mb-10 ml-2">หมวดหมู่คดี</h2>

      <div className="relative group">
        {/* ปุ่มซ้าย */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-30 bg-zinc-800/90 text-white p-3 rounded-full hover:bg-zinc-700 transition-all border border-white/10 shadow-2xl"
        >
          <ChevronLeft size={28} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 px-2 snap-x snap-mandatory"        >
          {categories.map((cat, i) => (
            <CategoryCard
              key={i}
              name={cat.name}
              image={cat.image}
              onClick={() => navigate(`/categories/${cat.name}`)}
            />
          ))}
        </div>

        {/* ปุ่มขวา */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-30 bg-zinc-800/90 text-white p-3 rounded-full hover:bg-zinc-700 transition-all border border-white/10 shadow-2xl"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* 3. Dots บอกตำแหน่งแบบ Dynamic */}
      <div className="flex justify-center mt-10 gap-3">
        {categories.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === i
              ? "bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.6)]"
              : "bg-zinc-700"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;