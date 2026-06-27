
import Categories from "@/components/home/Categories";
import FAQSection from "@/components/home/FAQSection";
import FeaturedArtworks from "@/components/home/FeaturedArtworks";
import Hero from "@/components/home/Hero";
import TopArtists from "@/components/home/TopArtists";
import ContactCTA from "@/components/home/ContactCTA";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero/>
      <Categories/>
      <FeaturedArtworks/>
      <TopArtists/>
      <FAQSection/>
      <ContactCTA/>
      <Footer/>
    </main>
  );
}