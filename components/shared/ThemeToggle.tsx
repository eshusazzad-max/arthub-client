"use client";

import { useTheme } from "next-themes";
import { HiMoon, HiSun } from "react-icons/hi2";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
     onClick={() =>
       setTheme(theme === "dark" ? "light" : "dark")
     }
     className="w-12 h-12
      rounded-full
    bg-slate-50 dark:bg-white/5
      border border-slate-200 dark:border-white/10
      flex items-center justify-center
    hover:border-violet-500 
      hover:shadow-lg hover:shadow-violet-500/20
      duration-300"
    >
     {theme === "dark" ? (
      <HiSun className="text-lg text-yellow-400" />
     ) : (
      <HiMoon className="text-lg text-violet-500" />
    )}
    </button>
  );
}