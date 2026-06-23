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
          className={`px-6 py-3 rounded-full border duration-300
          ${
            selectedCategory === category
              ? "bg-gradient-to-r from-pink-500 to-violet-500 text-white border-transparent"
              : "bg-white/5 border-white/10 text-gray-300 hover:border-violet-500 hover:text-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}