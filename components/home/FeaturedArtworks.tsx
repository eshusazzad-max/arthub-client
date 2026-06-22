"use client";

import Image from "next/image";
import artworks from "@/data/artworks.json";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function FeaturedArtworks() {
  return (
    <section  id="featured"
     className="relative py-28 overflow-hidden">

      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-24 -translate-x-1/2 w-[400px] h-[150px] bg-violet-500/20 blur-[120px] rounded-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <motion.div
  animate={{
    scale: [1, 1.15, 1],
    opacity: [0.25, 0.5, 0.25],
    y: [0, -15, 0],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute left-1/2 top-20 -translate-x-1/2 w-[500px] h-[220px] bg-violet-500/20 blur-[140px] rounded-full"
/>

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

            <motion.span
            animate={{
             opacity:[0.5,1,0.5]
            }}
            transition={{
              duration:2,
              repeat:Infinity
            }}
             className="text-violet-300 uppercase tracking-[6px] text-sm"
          >
           FEATURED
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
                className="absolute left-1/2 top-20 -translate-x-1/2 w-[600px] h-[180px] bg-violet-500/25 blur-[200px] rounded-full"
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
                 className="absolute left-1/2 top-20 -translate-x-1/2 w-[700px] h-[220px] bg-cyan-500/25 blur-[200px] rounded-full"
            />

          <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-violet-200 to-cyan-300 bg-clip-text text-transparent">
            Featured Artworks
          </h2>

          <p className="text-gray-400 mt-4">
            Discover handpicked masterpieces from talented artists.
          </p>

        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">

          {artworks.map((art, index) => (

            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-violet-500/40 duration-500"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <span className="absolute top-4 right-4 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full">
                  Available
                </span>
                <Image
                  src={art.image}
                  alt={art.title}
                  width={600}
                  height={500}
                  className="h-[320px] w-full object-cover duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <span className="text-xs px-3 py-1 rounded-full bg-violet-500/20 text-violet-300">
                  {art.category}
                </span>

                <h3 className="text-2xl font-bold text-white mt-4">
                  {art.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  By {art.artist}
                </p>

                <p className="mt-4 text-sm text-gray-400 leading-relaxed line-clamp-2">
                 {art.description}
                </p>

                <div className="my-5 border-t border-white/10"></div>

                <div className="flex items-center justify-between mt-6">
                  <div className="my-5 border-t border-white/10"></div>

                  <h4 className="text-2xl font-bold text-cyan-400">
                    ${art.price}
                  </h4>

                  <button className="group flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 hover:scale-105 duration-300">

                    View Details

                    <FaArrowRight className="group-hover:translate-x-1 duration-300" />

                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}