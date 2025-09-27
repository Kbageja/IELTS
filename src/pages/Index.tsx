import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Global mobile overflow prevention */}
      <div className="w-full max-w-full">
        <Navbar />
        <Hero />
        <Features />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default Index;