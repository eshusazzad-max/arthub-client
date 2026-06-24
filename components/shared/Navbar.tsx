"use client";

import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { GoHome } from "react-icons/go";
import Link from "next/link"
import ThemeToggle from "./ThemeToggle";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  HiOutlineArrowRightOnRectangle,
  HiOutlineSquares2X2,
} from "react-icons/hi2";
import { IoPersonAddOutline, IoSearchOutline } from "react-icons/io5";

export default function Navbar() {
   const pathname = usePathname();
   const [search, setSearch] = useState("");
   const router = useRouter();

   const handleSearch = (e: React.FormEvent) => {
      e.preventDefault();

       if (!search.trim()) return;

       router.push(`/artworks?search=${search}`);
     };

  return (
    <nav className="sticky top-0 z-50 border-b border-black/10 dark:border-white/10 bg-white/60 dark:bg-[#050816]/80 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-5 flex items-center justify-between gap-8">

        {/* Logo */}
        <Logo />

        {/* Search */}
        {pathname !== "/artworks" && (
          <form
            onSubmit={handleSearch}
           className="hidden lg:flex items-center w-[380px] bg-gray-200 dark:bg-[#0c1120] border border-black/10 dark:border-white/10 rounded-full px-4 py-3"
          >

            <IoSearchOutline className="text-gray-700 text-xl" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search artworks..."
                className="bg-transparent outline-none ml-3 text-slate-800 dark:text-white  placeholder:text-slate-800 dark:placeholder:text-gray-400 text-sm w-full"
              />
          </form>
          
        )}
        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-10 text-slate-800 dark:text-white">

          <li>
           <Link
             href="/"
             className="group relative flex items-center gap-2 hover:text-violet-400 duration-300"
           >
            <GoHome />
              Home

             <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-violet-500 duration-300 group-hover:w-full"></span>
           </Link>
          </li>
          <li>
           <Link
            href="/artworks"
            className="group relative flex items-center gap-2 hover:text-violet-400 duration-300"
            >
             <HiOutlineSquares2X2 />
              Browse Artworks

             <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-violet-500 duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          <Link
            href="/login"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 dark:bg-transparent border border-slate-400 dark:border-violet-500 text-slate-800 dark:text-white transition-all duration-300 hover:bg-violet-500 hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/30 active:scale-95"
          >

            <HiOutlineArrowRightOnRectangle />
             Login

          </Link>

          <Link
            href="/register"
            className="group relative overflow-hidden flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/40 active:scale-95"
          >
            <IoPersonAddOutline />
            Register

            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full"></span>
          </Link>

        </div>
      </div>
    </nav>
  );
}