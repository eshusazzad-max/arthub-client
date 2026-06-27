"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

import {
  HiOutlineHome,
  HiOutlinePlusCircle,
  HiOutlinePhoto,
  HiOutlineChartBar,
  HiOutlineUser,
  HiOutlineArrowRightOnRectangle,
} from "react-icons/hi2";

const menus = [
  {
    title: "Dashboard",
    href: "/dashboard/artist",
    icon: HiOutlineHome,
  },
  {
    title: "Add Artwork",
    href: "/dashboard/artist/add-artwork",
    icon: HiOutlinePlusCircle,
  },
  {
    title: "My Artworks",
    href: "/dashboard/artist/my-artworks",
    icon: HiOutlinePhoto,
  },
  {
    title: "Sales History",
    href: "/dashboard/artist/sales-history",
    icon: HiOutlineChartBar,
  },
  {
    title: "Profile",
    href: "/dashboard/artist/profile",
    icon: HiOutlineUser,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 min-h-screen border-r border-slate-200 dark:border-white/10 bg-white/65 dark:bg-[#0B1120]">

      <div className="p-8">

        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
          ArtHub
        </h2>

        <p className="mt-2 text-sm text-slate-500 dark:text-gray-400">
          Artist Dashboard
        </p>

      </div>

      <nav className="px-4 space-y-2">

        {menus.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300
                ${
                  active
                    ? "bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-lg"
                    : "text-slate-700 dark:text-gray-300 hover:bg-violet-500/10 hover:text-violet-500"
                }`}
            >
              <Icon className="text-2xl" />

              <span className="font-medium">
                {item.title}
              </span>
            </Link>
          );
        })}

      </nav>
     <div className="px-4 mt-8">
      <Link
        href="/"
        className="group relative overflow-hidden flex items-center justify-center gap-3 rounded-xl border border-violet-500/30 bg-white/70 dark:bg-white/5 py-3 font-semibold text-slate-800 dark:text-white transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-violet-500 hover:shadow-[0_0_18px_rgba(139,92,246,0.35)] active:scale-95"
        >
        <HiOutlineHome className="text-xl transition-all duration-300 group-hover:scale-125 group-hover:text-violet-400" />

        <span className="transition-all duration-300 group-hover:tracking-wide">
         Back to Website
        </span>
       </Link>
     </div>

    </aside>
  );
}