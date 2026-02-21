import StarField from "@/components/StarField";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SourceCodeSection from "@/components/SourceCodeSection";
import QuantumSection from "@/components/QuantumSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <StarField />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <div className="section-divider" />
        <SourceCodeSection />
        <div className="section-divider" />
        <QuantumSection />
        <div className="section-divider" />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
