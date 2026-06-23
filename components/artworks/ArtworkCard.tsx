import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ArtworkCard({ artwork }: any) {
  return (
    <div className="group rounded-3xl overflow-hidden border border-white/10 bg-[#0d1527] hover:border-violet-500/40 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(139,92,246,.2)] transition-all duration-500">

      {/* Image */}
      <div className="relative h-72 overflow-hidden">

        <Image
          src={artwork.image}
          alt={artwork.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Available Badge */}
        <div className="absolute top-5 right-5 z-10 transition-all duration-500 group-hover:opacity-0 group-hover:translate-x-8">

         <span className="px-4 py-2 rounded-full bg-emerald-500 text-white text-sm font-semibold shadow-lg">
           Available
         </span>

        </div>

      </div>

      {/* Content */}
      <div className="p-6">

        {/* Category */}
        <span className="inline-block px-3 py-1.5 rounded-full bg-violet-500/20 text-violet-300 text-xs font-medium">
          {artwork.category}
        </span>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mt-5">
          {artwork.title}
        </h3>

        {/* Artist */}
        <p className="text-gray-400 mt-2">
          By {artwork.artist}
        </p>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-8 mt-5">
          {artwork.description}
        </p>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-8 pt-8 flex items-center justify-between">

          {/* Price */}
          <p className="text-cyan-400 text-2xl font-bold">
            ${artwork.price}
          </p>

          {/* Button */}
          <Link
            href={`/artworks/${artwork.id}`}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white font-semibold hover:scale-105 duration-300"
          >
            View Details

            <FaArrowRight className="group-hover:translate-x-1 duration-300" />
          </Link>

        </div>

      </div>

    </div>
  );
}