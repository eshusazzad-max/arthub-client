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
        className="w-[220px] rounded-full bg-white/5 border border-white/10 px-6 py-4 text-gray-300 flex items-center justify-between hover:border-violet-500 duration-300"
      >
        {sortOption}

        <HiChevronDown
          className={`text-xl duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-full rounded-3xl bg-[#0B1220] border border-white/10 backdrop-blur-xl overflow-hidden z-50">

          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                setSortOption(option);
                setOpen(false);
              }}
              className="w-full px-6 py-4 text-left text-gray-300 hover:bg-violet-500/20 hover:text-white duration-300"
            >
              {option}
            </button>
          ))}

        </div>
      )}
    </div>
  );
}