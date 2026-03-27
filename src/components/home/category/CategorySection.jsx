import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { name: "คดีปริศนา", image: "/cat1.jpg" },
  { name: "คดีอำพราง", image: "/cat2.jpg" },
  { name: "บุคคลสูญหาย", image: "/cat3.jpg" },
  { name: "คดีฆาตกรรม", image: "/cat4.jpg" },
];

const CategorySection = () => {
  const scrollRef = useRef();

  const scroll = (dir) => {
    const amount = 300;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="px-4 md:px-10 py-10 bg-black relative">
      
      <h2 className="text-xl md:text-2xl font-bold mb-6">
        หมวดหมู่คดี
      </h2>

      {/* arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 p-2 rounded-full"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 p-2 rounded-full"
      >
        <ChevronRight />
      </button>

      {/* scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide"
      >
        {categories.map((cat, i) => (
          <div
            key={i}
            className="min-w-[250px] h-[150px] relative rounded-xl overflow-hidden group"
          >
            <img
              src={cat.image}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="border border-white px-4 py-1 font-semibold">
                {cat.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* dots */}
      <div className="flex justify-center mt-4 gap-2">
        <div className="w-2 h-2 bg-red-500 rounded-full" />
        <div className="w-2 h-2 bg-gray-500 rounded-full" />
        <div className="w-2 h-2 bg-gray-500 rounded-full" />
      </div>
    </div>
  );
};

export default CategorySection;