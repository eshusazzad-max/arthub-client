import Link from "next/link";
import { HiOutlineHome, HiOutlineSquares2X2 } from "react-icons/hi2";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-white/60 dark:bg-[#050816]">

      {/* Glow */}
      <div className="absolute -top-32 left-20 w-[300px] h-[300px] bg-violet-500/20 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-0 right-20 w-[300px] h-[300px] bg-cyan-500/20 blur-[150px] rounded-full"></div>

      {/* Card */}
      <div className="max-w-3xl text-center bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[40px] p-16 backdrop-blur-xl shadow-[0_0_40px_rgba(139,92,246,.08)]">

        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-pink-500 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
          404
        </h1>

        {/* Title */}
        <h2 className="text-5xl font-bold text-slate-900 dark:text-white mt-8">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-slate-600 dark:text-gray-400 text-lg mt-6 leading-8">
          The page you are looking for doesn't exist or may have been moved.
          Explore amazing artworks or return to the homepage.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-12">

          {/* Home */}
          <Link
            href="/"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white font-semibold hover:scale-105 duration-300 shadow-[0_0_30px_rgba(168,85,247,.25)]"
          >
            <HiOutlineHome className="text-xl" />
            Back To Home
          </Link>

          {/* Browse */}
          <Link
            href="/artworks"
            className="
            flex items-center gap-3
            px-8 py-4
            rounded-full
            border border-slate-300 dark:border-white/10
            bg-white/80 dark:bg-transparent
            text-slate-800 dark:text-white
            hover:border-violet-500
            hover:bg-violet-50 dark:hover:bg-white/5
            duration-300
            "
          >
            <HiOutlineSquares2X2 className="text-xl" />
            Browse Artworks
          </Link>

        </div>

      </div>

    </section>
  );
}