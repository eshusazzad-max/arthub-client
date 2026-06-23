import Link from "next/link";
import { HiOutlineHome, HiOutlineSquares2X2 } from "react-icons/hi2";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-32 left-20 w-[300px] h-[300px] bg-violet-500/20 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-0 right-20 w-[300px] h-[300px] bg-cyan-500/20 blur-[150px] rounded-full"></div>

      <div className="max-w-3xl text-center">

        <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-pink-500 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="text-5xl font-bold text-white mt-8">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-400 text-lg mt-6 leading-8">
          The page you are looking for doesn't exist or may have been moved.
          Explore amazing artworks or return to the homepage.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-12">

          <Link
            href="/"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white font-semibold hover:scale-105 duration-300"
          >
            <HiOutlineHome />
            Back To Home
          </Link>

          <Link
            href="/artworks"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 text-white hover:border-violet-500 duration-300"
          >
            <HiOutlineSquares2X2 />
            Browse Artworks
          </Link>

        </div>

      </div>

    </section>
  );
}