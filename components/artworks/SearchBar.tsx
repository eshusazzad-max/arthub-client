"use client";

import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({
  searchTerm,
  setSearchTerm,
}: SearchBarProps) {
  return (
    <div className="relative w-full md:w-[400px]">
      <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-gray-400" />

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search artworks..."
        className="w-full rounded-full bg-white dark:bg-[#0c1120] border border-slate-300 dark:border-white/10 px-14 py-4  text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 shadow-md
        outline-none focus:border-violet-500 "
      />
    </div>
  );
}