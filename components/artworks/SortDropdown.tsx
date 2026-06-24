"use client";

import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

interface SortDropdownProps {
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
}

export default function SortDropdown({
  sortOption,
  setSortOption,
}: SortDropdownProps) {
  const [open, setOpen] = useState(false);

  const options = [
    "Default",
    "Price Low → High",
    "Price High → Low",
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="
        w-[220px]
        rounded-full
        bg-white
        dark:bg-[#0c1120]
        border border-slate-300 dark:border-white/10
        px-6 py-4
        text-slate-700 dark:text-gray-300
        shadow-md
        flex items-center justify-between
        hover:border-violet-500
        duration-300
        "
      >
        {sortOption}

        <HiChevronDown
          className={`text-xl duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          className="
          absolute right-0 mt-3 w-full
          rounded-3xl
          bg-white
          dark:bg-[#0B1220]
          border border-slate-300 dark:border-white/10
          shadow-xl
          backdrop-blur-xl
          overflow-hidden
          z-50
          "
        >
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                setSortOption(option);
                setOpen(false);
              }}
              className="
              w-full px-6 py-4 text-left
              text-slate-700 dark:text-gray-400
              hover:bg-violet-500/10
              dark:hover:bg-violet-500/20
              hover:text-violet-600
              dark:hover:text-white
              duration-300
              "
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}