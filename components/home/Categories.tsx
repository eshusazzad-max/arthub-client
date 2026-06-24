"use client";

import { motion } from "framer-motion";
import {
  FaPaintBrush,
  FaLaptopCode,
  FaPenNib,
  FaCamera,
} from "react-icons/fa";
import { GiStoneBlock } from "react-icons/gi";
import { BsCircleSquare } from "react-icons/bs";

const categories = [
  {
    icon: <FaPaintBrush />,
    title: "Painting",
  },
  {
    icon: <FaLaptopCode />,
    title: "Digital Art",
  },
  {
    icon: <FaPenNib />,
    title: "Illustration",
  },
  {
    icon: <FaCamera />,
    title: "Photography",
  },
  {
    icon: <GiStoneBlock />,
    title: "Sculpture",
  },
  {
    icon: <BsCircleSquare />,
    title: "Abstract",
  },
];

export default function Categories() {
  return (
     <section className="relative pt-40 pb-24 bg-white/60 dark:bg-[#050816]">
      <div className="max-w-7xl mx-auto px-5">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-cyan-500/10 blur-[150px] rounded-full"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="flex items-center justify-center gap-5 mb-8">
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-violet-500"></div>

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
           CATEGORIES
          </motion.span>

          <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-cyan-500"></div>
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
                className="absolute left-1/2 top-20 -translate-x-1/2 w-[500px] h-[180px] bg-violet-500/15 blur-[180px] rounded-full"
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
                 className="absolute left-1/2 top-20 -translate-x-1/2 w-[600px] h-[220px] bg-cyan-500/15 blur-[180px] rounded-full"
            />

        <h2 className="relative text-5xl font-bold bg-gradient-to-r from-violet-500 via-slate-900 dark:via-white to-cyan-400 bg-clip-text text-transparent">
          Explore Categories
        </h2>
        <div className="absolute left-1/2 top-24 -translate-x-1/2 w-[350px] h-[120px] bg-violet-500/20 blur-[120px] rounded-full"></div>

        <p className="text-slate-600 dark:text-gray-400 mt-4">
          Find artworks across different styles and mediums.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            className="
            group
           bg-white/55 dark:bg-[#0c1120]/80
            border border-slate-200 dark:border-white/10
            rounded-3xl
            p-10
            text-center
            backdrop-blur-md
            hover:border-violet-500
            duration-500
            hover:-translate-y-3
            hover:shadow-[0_0_50px_rgba(139,92,246,0.35)]
            "
          >
            <motion.div
              whileHover={{
                rotate: 15,
                scale: 1.15,
              }}
              className="text-5xl text-violet-400 flex justify-center"
            >
              {category.icon}
            </motion.div>

            <h3 className="text-2xl font-semibold mt-6 text-slate-900 dark:text-white group-hover:text-violet-400 duration-300">
              {category.title}
            </h3>
          </motion.div>
        ))}

      </div>
     </div>
    </section>
  );
}