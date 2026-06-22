"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa";
import { FaUsers, FaPalette, FaGlobe } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home"
    className="min-h-[85vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        speed={1200}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative min-h-[85vh] flex items-center justify-center text-center overflow-hidden">

            {/* Glow Effect */}
            <motion.div
              animate={{
                x: [0, 120, 0, -80, 0],
                y: [0, -100, 50, 0, -50],
                scale: [1, 1.25, 1.1, 1.2, 1],
                opacity: [0.4, 0.8, 0.5, 0.7, 0.4],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-10 left-10 w-[700px] h-[700px] bg-violet-600/40 blur-[200px] rounded-full"
            />
            

            <motion.div
              animate={{
                x: [0, -100, 50, 0, 80],
                y: [0, 80, -50, 50, 0],
                scale: [1, 1.15, 1.3, 1.1, 1],
                opacity: [0.3, 0.7, 0.5, 0.8, 0.3],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-10 bottom-10 w-[600px] h-[600px] bg-cyan-600/40 blur-[200px] rounded-full"
            />


            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-[500px] h-[500px] bg-emerald-500/30 blur-[180px] rounded-full"
            />

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative z-20"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 border border-violet-500 rounded-full text-violet-400">
               <HiSparkles className="text-sm" />
               <span>Welcome To ArtHub Marketplace</span>
               </div>

              <h1 className="text-6xl md:text-7xl font-bold mt-8 leading-[1.1] bg-gradient-to-r from-white via-violet-300 to-cyan-300 bg-clip-text text-transparent">
                Discover & Buy <br />
                Original Artworks
              </h1>

              <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                Explore premium digital paintings and creative masterpieces.
              </p>

              <div className="mt-12 flex justify-center">
               <button className="group relative overflow-hidden flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 hover:-translate-y-1 duration-300 hover:shadow-xl hover:shadow-violet-500/40">

                <span className="relative z-10 font-semibold">
                  Browse Artworks
                </span>

                <FaArrowRight className="relative z-10 text-lg" />

                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full"></span>

               </button>
              </div>

              <div className="mt-10 flex items-center justify-center gap-14">

               <div className="flex flex-col items-center gap-1">
                <FaUsers className="text-2xl text-violet-400" />
                <h3 className="text-2xl font-bold text-violet-400">500+</h3>
                <p className="text-gray-400 text-xs">Artists</p>
              </div>

              <div className="flex flex-col items-center gap-1">
               <FaPalette className="text-2xl text-cyan-400" />
               <h3 className="text-2xl font-bold text-cyan-400">1200+</h3>
               <p className="text-gray-400 text-xs">Artworks</p>
             </div>

             <div className="flex flex-col items-center gap-1">
              <FaGlobe className="text-2xl text-emerald-400" />
              <h3 className="text-2xl font-bold text-emerald-400">50+</h3>
              <p className="text-gray-400 text-xs">Countries</p>
             </div>

            </div>
             
            </motion.div>

          </div>
        </SwiperSlide>



        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative min-h-[85vh] flex items-center justify-center text-center overflow-hidden">

            {/* Glow Effect */}
            <motion.div
              animate={{
                x: [0, 120, 0, -80, 0],
                y: [0, -100, 50, 0, -50],
                scale: [1, 1.25, 1.1, 1.2, 1],
                opacity: [0.4, 0.8, 0.5, 0.7, 0.4],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-10 left-10 w-[700px] h-[700px] bg-cyan-600/40 blur-[2000px] rounded-full"
            />

            
            <motion.div
              animate={{
                x: [0, -100, 50, 0, 80],
                y: [0, 80, -50, 50, 0],
                scale: [1, 1.15, 1.3, 1.1, 1],
                opacity: [0.3, 0.7, 0.5, 0.8, 0.3],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-10 bottom-10 w-[600px] h-[600px] bg-blue-600/40 blur-[200px] rounded-full"
            />


            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-[500px] h-[500px] bg-indigo-500/30 blur-[180px] rounded-full"
            />

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <span className="px-5 py-2 border border-cyan-500 rounded-full text-cyan-400">
                Creative Collection
              </span>

              <h1 className="text-6xl md:text-7xl font-bold mt-8 leading-[1.1] bg-gradient-to-r from-white via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Curated Digital <br />
                Masterpieces
              </h1>

              <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                Explore unique artworks from talented creators around the world and
                discover masterpieces crafted with passion.
              </p>

             <button className="group relative overflow-hidden mt-10 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:-translate-y-1 duration-300 hover:shadow-xl hover:shadow-cyan-500/40">

              <span className="relative z-10">
                Explore Gallery
              </span>

              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full"></span>

            </button>

            </motion.div>

          </div>
        </SwiperSlide>
        

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative min-h-[85vh] flex items-center justify-center text-center overflow-hidden">

            {/* Glow Effect */}
            
            <motion.div
              animate={{
                x: [0, 120, 0, -80, 0],
                y: [0, -100, 50, 0, -50],
                scale: [1, 1.25, 1.1, 1.2, 1],
                opacity: [0.4, 0.8, 0.5, 0.7, 0.4],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-10 left-10 w-[700px] h-[700px] bg-emerald-600/40 blur-[200px] rounded-full"
            />

           
           <motion.div
              animate={{
                x: [0, -100, 50, 0, 80],
                y: [0, 80, -50, 50, 0],
                scale: [1, 1.15, 1.3, 1.1, 1],
                opacity: [0.3, 0.7, 0.5, 0.8, 0.3],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-10 bottom-10 w-[600px] h-[600px] bg-cyan-600/40 blur-[200px] rounded-full"
            />

            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-[500px] h-[500px] bg-teal-500/30 blur-[180px] rounded-full"
            />

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <span className="px-5 py-2 border border-emerald-500 rounded-full text-emerald-400">
                Support Artists Worldwide
              </span>

              <h1 className="text-6xl md:text-7xl font-bold mt-8 leading-[1.1] bg-gradient-to-r from-white via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                Own Authentic <br />
                Art Pieces
              </h1>

              <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                Discover beautiful creations and support amazing artists from around the world. Collect exclusive pieces and bring creativity into your life.
              </p>

             <button className="group relative overflow-hidden mt-10 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-600 hover:-translate-y-1 duration-300 hover:shadow-xl hover:shadow-emerald-500/40">

              <span className="relative z-10">
                Get Started
              </span>

              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full"></span>

             </button>

            </motion.div>

          </div>
        </SwiperSlide>
        
      </Swiper>
    </section>
  );
}