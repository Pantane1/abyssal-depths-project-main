import ParticleCanvas from "@/components/ParticleCanvas";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import GameplaySection from "@/components/GameplaySection";
import StorySection from "@/components/StorySection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";
import AmbientSoundToggle from "@/components/AmbientSoundToggle";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleCanvas />
      <Navbar />
      <AmbientSoundToggle />
      <HeroSection />
      <StorySection />
      <FeaturesSection />
      <GameplaySection />
      <GallerySection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
