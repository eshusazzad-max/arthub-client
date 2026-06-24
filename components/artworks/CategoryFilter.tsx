"use client";

interface CategoryFilterProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

export default function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
}: CategoryFilterProps) {
  const categories = [
    "All",
    "Painting",
    "Landscape",
    "Digital Art",
    "Abstract",
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-8 py-3 rounded-full border shadow-md duration-300
          ${
            selectedCategory === category
              ? "bg-gradient-to-r from-pink-500 to-violet-600 text-white border-transparent"
              : `
                bg-white
                dark:bg-[#0c1120]
                border-slate-300
                dark:border-white/10
                text-slate-700
                dark:text-gray-400
                hover:border-violet-500
                hover:text-violet-500
                dark:hover:text-white
              `
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}