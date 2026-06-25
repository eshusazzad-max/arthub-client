"use client";

import { useState } from "react";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import { signIn } from "next-auth/react";

import Link from "next/link";
import { HiOutlineEnvelope, HiOutlineLockClosed } from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-white/60 dark:bg-[#050816]">

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div className="hidden lg:block">
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-violet-500/30 blur-[180px] rounded-full"></div>

            <div className="absolute left-32 bottom-0 w-[300px] h-[300px] bg-cyan-500/30 blur-[180px] rounded-full"></div>

          <div className="flex items-center gap-5 mb-8">

           <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-violet-500"></div>

            <span className="uppercase tracking-[8px] text-sm bg-gradient-to-r from-violet-300 to-cyan-400 bg-clip-text text-transparent">
             WELCOME BACK
             </span>

            <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-cyan-400"></div>

          </div>

          <h1 className="text-6xl font-bold text-slate-900 dark:text-white mt-6 leading-tight">
            Sign in to continue your
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Art Journey
            </span>
          </h1>

          <p className="text-slate-600 dark:text-gray-400 mt-6 text-lg leading-8">
            Explore, collect and discover amazing artworks from talented artists around the world.
          </p>

          <div className="mt-12 p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5">

           <p className="text-slate-600 dark:text-gray-300 italic leading-8">
           "Every masterpiece begins with imagination. Join thousands of art lovers and discover creativity without limits."
          </p>

         </div>

        </div>

        {/* Right Side */}
        <div className="border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 rounded-[32px] p-10 backdrop-blur-xl shadow-[0_0_40px_rgba(139,92,246,.1)]">

          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-10">
            Login
          </h2>

          {/* Email */}
          <div className="relative mb-6">

            <HiOutlineEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl py-4 pl-14 pr-5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 outline-none focus:border-violet-500"
            />

          </div>

          {/* Password */}
          <div className="relative mb-4">

            <HiOutlineLockClosed className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

            <div className="relative mb-4">

             <HiOutlineLockClosed className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

             <input
               type={showPassword ? "text" : "password"}
               placeholder="Enter your password"
              className="w-full bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl py-4 pl-14 pr-14 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 outline-none focus:border-violet-500"
             />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-violet-400 duration-300"
            >
             {showPassword ? (
            <HiOutlineEyeSlash className="text-xl" />
             ) : (
            <HiOutlineEye className="text-xl" />
           )}
          </button>

            </div>

          </div>

          <div className="flex items-center justify-between mb-8">

           <label className="flex items-center gap-2 text-slate-600 dark:text-gray-400">
              <input type="checkbox" />
              Remember me
            </label>

            <button className="text-violet-400 hover:text-violet-300">
              Forgot Password?
            </button>

          </div>

          {/* Login Button */}
          <button className="w-full py-4 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white font-semibold hover:scale-[1.02] duration-300">

            Sign In

          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">

            <div className="flex-1 h-[1px] bg-slate-400 dark:bg-white/10"></div>

            <span className="text-slate-500 dark:text-gray-500 text-sm">
              OR
            </span>

            <div className="flex-1 h-[1px] bg-slate-400 dark:bg-white/10"></div>

          </div>

          {/* Google Button */}
          <button 
          onClick={() => signIn("google")}
          className="w-full py-4 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-slate-900 dark:text-white flex items-center justify-center gap-3 hover:border-violet-500 duration-300">

            <FcGoogle className="text-2xl" />

            Continue with Google

          </button>

          <p className="text-center text-slate-600 dark:text-gray-400 mt-8">

            Don't have an account?{" "}

            <Link
              href="/register"
              className="text-violet-400 hover:text-violet-300"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </section>
  );
}