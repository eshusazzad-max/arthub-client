import Categories from "@/components/home/Categories";
import FeaturedArtworks from "@/components/home/FeaturedArtworks";
import Hero from "@/components/home/Hero";
import TopArtists from "@/components/home/TopArtists";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero/>
      <Categories/>
      <FeaturedArtworks/>
      <TopArtists/>
    </main>
  );
}