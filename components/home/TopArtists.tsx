"use client";

import Image from "next/image";
import Link from "next/link";
import topArtists from "@/data/topArtists.json";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import {
  FaPalette,
  FaGlobe,
  FaCrown,
  FaMedal,
  FaStar,
} from "react-icons/fa";

export default function TopArtists() {
  return (
    <section
      id="artists"
       className="relative py-28 overflow-hidden bg-white/60 dark:bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center  mb-20"
       >

          <div className="flex items-center justify-center gap-4 mb-5">

            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-violet-500"></div>

            <FaCrown className="text-yellow-400 text-xl" />

            <motion.span
            animate={{
             opacity:[0.5,1,0.5]
            }}
            transition={{
              duration:2,
              repeat:Infinity
            }}
            className="text-violet-500 dark:text-violet-300 uppercase tracking-[6px] text-sm"
          >
           TOP ARTISTS
          </motion.span>

            <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-cyan-400"></div>

          </div>

           <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.4, 0.1],
              }}
               transition={{
                duration: 3,
                repeat: Infinity,
              }}
                className="absolute left-1/2 top-20 -translate-x-1/2 w-[600px] h-[200px] bg-violet-500/25 blur-[200px] rounded-full"
            />
           
            <motion.div
               animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.05, 0.2],
               }}
                transition={{
                 duration: 4,
                 repeat: Infinity,
               }}
                 className="absolute left-1/2 top-20 -translate-x-1/2 w-[700px] h-[220px] bg-cyan-500/25 blur-[180px] rounded-full"
            />

          <h2 className="text-5xl font-bold bg-gradient-to-r from-violet-500 via-slate-900 dark:via-white to-cyan-400 bg-clip-text text-transparent">
            Meet Our Top Creators
          </h2>

          <p className="text-slate-600 dark:text-gray-400 mt-4">
            Discover talented artists behind our most loved collections.
          </p>

        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {topArtists.map((artist, index) => (

            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl overflow-hidden border border-slate-200 dark:border-violet-500/20 bg-white/60 dark:bg-[#081121] backdrop-blur-xl hover:border-violet-500/50 hover:shadow-[0_0_40px_rgba(139,92,246,.2)] duration-500 "
            >

              {/* Cover */}
              <div className="relative h-40">

                <Image
                  src={artist.cover}
                  alt=""
                  fill
                  className="object-cover"
                />

              </div>

              {/* Avatar */}
              <div className="relative flex justify-center -mt-16">

                <div className="relative w-32 h-32">

                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="rounded-full object-cover border-4 border-violet-500"
                  />

                  <div className="absolute bottom-2 right-0 w-10 h-10 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center">
                    #{index + 1}
                  </div>

                </div>

              </div>

              {/* Content */}
              <div className="text-center px-8 pb-8">

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-5">
                  {artist.name}
                </h3>

                {/* Role */}
                <div className="flex items-center justify-center gap-2 mt-3 text-violet-300">

                  <FaPalette />

                  <span className="text-slate-600 dark:text-gray-300">
                    {artist.role}
                  </span>

                </div>

                
              
                {/* Divider */}
                  <div className="mt-4 flex items-center justify-center gap-2 text-yellow-400">
                     <FaMedal />
                     <span>{artist.sales}+ Sales</span>
                  </div>

                {/* Sales */}
                <Link
                 href={`/artworks/${artist.artworkId}`}
                 className="group mt-8 w-[180px] mx-auto px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 duration-300"
                >
                 View Profile
                 <FaArrowRight className="group-hover:translate-x-1 duration-300" />
                </Link>
              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}