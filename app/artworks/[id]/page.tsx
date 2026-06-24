
import artworks from "@/data/artworks.json";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import RelatedArtworksSlider from "@/components/artworks/RelatedArtworksSlider";
export default async function ArtworkDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const artwork = artworks.find(
    (art) => art.id === Number(id)
  );

  const relatedArtworks = artworks
  .filter((art) => art.id !== artwork?.id)
  

  if (!artwork) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Artwork not found
      </div>
    );
  }

  return (
    <>
    <Navbar />

    <section className="min-h-screen py-28 bg-white/60 dark:bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <div className="relative h-[550px] rounded-3xl overflow-hidden border border-slate-400 dark:border-white/10 shadow-lg">
            <Image
              src={artwork.image}
              alt={artwork.title}
              fill
              className="object-cover hover:scale-105 duration-700"
            />
          </div>

          {/* Content */}
          <div className="bg-white/55 dark:bg-[#0d1527] border border-slate-400 dark:border-white/10 rounded-[32px] p-10 backdrop-blur-xl shadow-[0_0_40px_rgba(139,92,246,.1)]">

            <span className="px-4 py-2 rounded-full bg-violet-500/20 text-violet-600 dark:text-violet-300">
              {artwork.category}
            </span>

            <h1 className="text-5xl font-bold text-slate-900 dark:text-white mt-8">
              {artwork.title}
            </h1>

            <div className="mt-8 border  rounded-3xl p-5 border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-white/5 flex items-center justify-between">

             <div className="flex items-center gap-4">

               <Image
                 src={artwork.artistImage}
                 alt={artwork.artist}
                 width={70}
                 height={70}
                 className="rounded-full object-cover border border-violet-500"
               />

               <div>
                <p className="text-slate-500 dark:text-gray-500 text-sm uppercase">
                  Artist
                </p>

                <h3 className="text-xl text-slate-900 dark:text-white/50 font-semibold">
                 {artwork.artist}
               </h3>
               </div>

             </div>

             <span className="text-emerald-400 font-medium">
             ✔ Verified
            </span>

            </div>

            <p className="text-slate-600 dark:text-gray-400 text-lg leading-9 mt-10">
              {artwork.description}
            </p>

            <div className="border-t border-slate-300 dark:border-white/10 mt-10 pt-10 flex justify-between">

             <div>
              <p className="text-gray-500 text-sm uppercase">
                Purchase Price
              </p>

              <h2 className="text-cyan-400 text-5xl font-bold mt-2">
                ${artwork.price}
              </h2>
            </div>

            <div>
              <p className="text-gray-500 text-sm uppercase">
                Availability
              </p>

              <h2 className="text-emerald-400 text-2xl font-bold mt-2">
                Available
              </h2>
            </div>

           </div>

            <div className="flex gap-5 mt-10">

             <button className="flex-1 py-5 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white font-semibold shadow-[0_0_40px_rgba(168,85,247,.35)] hover:scale-105 duration-300 flex items-center justify-center gap-3">

             <HiOutlineShoppingBag className="text-xl" />

             <span>Buy Now</span>

             </button>

             <Link
                href="/artworks"
               className="flex-1 py-5 rounded-full border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-transparent text-slate-800 dark:text-white hover:border-violet-500 hover:bg-violet-50 dark:hover:bg-white/5 duration-300 flex items-center justify-center"
             >
               Back
             </Link>

            </div>
          </div>

        </div>

      </div>

      {/* Related Artworks */}
      <div className="max-w-7xl mx-auto mt-32 px-6">
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-violet-500"></div>

          <span className="uppercase tracking-[6px] text-sm text-violet-500 dark:text-violet-300">
            DISCOVER MORE
          </span>

         <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-cyan-400"></div>
       </div>

       <div className="absolute left-1/2 -translate-x-1/2 w-[500px] h-[180px] bg-violet-500/15 blur-[180px] rounded-full"></div>

       <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-violet-200 to-cyan-300 bg-clip-text text-transparent text-center">
         Related Artworks
       </h2>

        <p className="text-gray-400 mt-4 text-center">
          Explore more masterpieces from talented artists.
        </p>
         
        <div className="mt-16">
        <RelatedArtworksSlider relatedArtworks={relatedArtworks} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-28">

         <div className="border border-slate-300 dark:border-white/10 rounded-[32px] bg-white/50 dark:bg-white/5 p-10">

          <h2 className="flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white mb-8">
             <div className="p-3 rounded-2xl bg-violet-500/10 border border-violet-500/20">
              <HiOutlineChatBubbleLeftRight className="text-violet-400 text-2xl" />
             </div>

           Reviews & Comments (0)
          </h2>

          <div className="border border-slate-300 dark:border-white/20 rounded-2xl px-6 py-5 bg-white/70 dark:bg-white/5 text-slate-700 dark:text-gray-500">
             Please sign in and verify your purchase history to leave a review.
          </div>

          <div className="mt-16 text-center text-slate-500 dark:text-gray-600">
           No comments or reviews have been posted yet.
          </div>

         </div>

      </div>
    </section>

    <Footer />
  </>
  );
}