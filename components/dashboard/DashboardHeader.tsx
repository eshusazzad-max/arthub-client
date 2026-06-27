"use client";

import { useSession } from "next-auth/react";
import { HiSparkles } from "react-icons/hi2";
import { PiPaletteFill } from "react-icons/pi";

export default function DashboardHeader() {
  const { data: session } = useSession();

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-[#0B1120] shadow-xl mb-10">

      {/* Glow */}
      <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-violet-500/20 blur-[120px]" />
      <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative flex items-center justify-between px-8 py-8">

        {/* Left */}
        <div className="flex items-center gap-6">

          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-violet-500/40 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 shadow-[0_0_40px_rgba(139,92,246,.35)]">

            <PiPaletteFill className="text-5xl text-violet-400" />

          </div>

          <div>

            <div className="flex items-center gap-3">

              <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">

                Welcome Back

              </h1>

              <HiSparkles className="text-4xl text-violet-400 animate-pulse" />

            </div>

            <p className="mt-3 text-xl font-medium tracking-[6px] uppercase bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">

              {session?.user?.name}

            </p>

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-5">

          <img
            src={
              session?.user?.image ||
              "https://i.pravatar.cc/150"
            }
            alt="Profile"
            className="h-20 w-20 rounded-full border-[3px] border-violet-500 shadow-[0_0_25px_rgba(139,92,246,.45)] object-cover"
          />

        </div>

      </div>

    </div>
  );
}