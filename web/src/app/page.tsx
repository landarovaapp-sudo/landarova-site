import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedGrid from "@/components/FeaturedGrid";
import FeatureShowcase from "@/components/FeatureShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedGrid />
        <FeatureShowcase />
        <WhyChooseUs />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
