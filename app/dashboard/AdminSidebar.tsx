"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiOutlineHome,
  HiOutlineUsers,
  HiOutlinePhoto,
  HiOutlineChartBar,
  HiOutlineUser,
} from "react-icons/hi2";

const menus = [
  {
    title: "Dashboard",
    href: "/dashboard/admin",
    icon: HiOutlineHome,
  },
  {
    title: "Manage Users",
    href: "/dashboard/admin/manage-users",
    icon: HiOutlineUsers,
  },
  {
    title: "Manage Artworks",
    href: "/dashboard/admin/manage-artworks",
    icon: HiOutlinePhoto,
  },
  {
    title: "Analytics",
    href: "/dashboard/admin/analytics",
    icon: HiOutlineChartBar,
  },
  {
    title: "Profile",
    href: "/dashboard/admin/profile",
    icon: HiOutlineUser,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 min-h-screen border-r border-slate-200 dark:border-white/10 bg-white/65 dark:bg-[#0B1120]">

      <div className="p-8">

        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
          ArtHub
        </h2>

        <p className="mt-2 text-sm text-slate-500 dark:text-gray-400">
          Admin Dashboard
        </p>

      </div>

      <nav className="px-4 space-y-2">

        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 ${
                pathname === item.href
                  ? "bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-lg"
                  : "text-slate-700 dark:text-gray-300 hover:bg-violet-500/10 hover:text-violet-500"
              }`}
            >
              <Icon className="text-2xl" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-4 mt-8">
        <Link
          href="/"
          className="flex items-center justify-center gap-3 rounded-xl border border-violet-500/30 bg-white/70 dark:bg-white/5 py-3 font-semibold"
        >
          <HiOutlineHome className="text-xl" />
          Back to Website
        </Link>
      </div>
    </aside>
  );
}