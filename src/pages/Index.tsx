import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import StatsSection from "@/components/StatsSection";
import FeatureBento from "@/components/FeatureBento";
import GlobalAvailability from "@/components/GlobalAvailability";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="home">
        <Hero />
        <div id="features">
          <Features />
        </div>
        <FeatureBento />
        <GlobalAvailability />
        <StatsSection />
        <div id="pricing">
          <Pricing />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="faq">
          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
