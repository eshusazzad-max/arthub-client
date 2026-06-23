"use client";
import { useState } from "react";
import artworks from "@/data/artworks.json";
import ArtworkCard from "@/components/artworks/ArtworkCard";
import SearchBar from "@/components/artworks/SearchBar";
import SortDropdown from "@/components/artworks/SortDropdown";
import CategoryFilter from "@/components/artworks/CategoryFilter";
import { motion } from "framer-motion";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
await new Promise((resolve) => setTimeout(resolve, 1000));
  export default function ArtworksPage() {
    

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("Default");
  const searchParams = useSearchParams();

     useEffect(() => {
       const query = searchParams.get("search");

      if (query) {
        setSearchTerm(query);
       }
       }, [searchParams]);

  let filteredArtworks = artworks.filter(
  (artwork) =>
    artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artwork.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artwork.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artwork.description.toLowerCase().includes(searchTerm.toLowerCase())
);
  if (selectedCategory !== "All") {
    filteredArtworks = filteredArtworks.filter(
      (artwork) => artwork.category === selectedCategory
    );
  }

  if (sortOption === "Price Low → High") {
    filteredArtworks.sort((a, b) => a.price - b.price);
  }

  if (sortOption === "Price High → Low") {
    filteredArtworks.sort((a, b) => b.price - a.price);
  }

  return (
   <>
    <Navbar />
    <section className="min-h-screen py-28">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
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
           EXPLORE
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

          <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-violet-200 to-cyan-300 bg-clip-text text-transparent">
            Browse Artworks
          </h1>

          <p className="text-gray-400 mt-4">
            Discover and collect extraordinary masterpieces.
          </p>

        </motion.div>

        {/* Search + Sort */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">

          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          <SortDropdown
            sortOption={sortOption}
            setSortOption={setSortOption}
          />

        </div>

        {/* Category */}
        <div className="mb-16">

          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredArtworks.map((artwork) => (

            <ArtworkCard
              key={artwork.id}
              artwork={artwork}
            />

          ))}

        </div>

      </div>

    </section>

    <Footer />
   </>
  );
}