import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  // ===== SCROLL HANDLER =====
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ===== NAVIGATION HELPER =====
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  // ===== STATS DATA =====
  const stats = [
    { value: "95%", label: "Success Rate", gradient: "from-green-400 to-emerald-500" },
    { value: "50K+", label: "Students", gradient: "from-blue-400 to-cyan-500" },
    { value: "8.5+", label: "Avg. Score", gradient: "from-purple-400 to-pink-500" }
  ];

  // ===== SKILL PROGRESS DATA =====
  const skillProgress = [
    { skill: "Listening", score: "8.5", percentage: 85, gradient: "from-green-400 to-emerald-500", color: "text-green-400" },
    { skill: "Reading", score: "8.0", percentage: 80, gradient: "from-blue-400 to-cyan-500", color: "text-blue-400" },
    { skill: "Writing", score: "7.5", percentage: 75, gradient: "from-purple-400 to-pink-500", color: "text-purple-400" },
    { skill: "Speaking", score: "8.0", percentage: 80, gradient: "from-orange-400 to-red-500", color: "text-orange-400" }
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900   "
    >
      {/* ===== ANIMATED BACKGROUND ===== */}
      <BackgroundPattern />
      <FloatingShapes scrollY={scrollY} />

      {/* ===== MAIN CONTENT ===== */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 my-24 ">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto py-12 lg:py-12">
          
          {/* ===== LEFT CONTENT ===== */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8 lg:space-y-10 animate-fade-in-up order-2 lg:order-1">
            
            {/* Badge */}
            <Badge />

            {/* Headline */}
            <Headline />

            {/* Stats - Responsive Layout */}
            <StatsSection stats={stats} />

            {/* CTA Buttons */}
            <CTAButtons scrollToSection={scrollToSection} />
          </div>

          {/* ===== RIGHT VISUAL ===== */}
          <div className="relative animate-scale-in order-1 lg:order-2 mb-8 lg:mb-0">
            <DashboardVisual skillProgress={skillProgress} />
            <FloatingCards />
          </div>
        </div>
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <ScrollIndicator />
    </section>
  );
};

// ===== BACKGROUND COMPONENTS =====
const BackgroundPattern = () => (
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)] animate-pulse"></div>
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
    <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.2),transparent_50%)]"></div>
  </div>
);

const FloatingShapes = ({ scrollY }: { scrollY: number }) => (
  <div 
    className="absolute inset-0 opacity-10"
    style={{ transform: `translateY(${scrollY * 0.3}px)` }}
  >
    <div className="absolute top-1/4 left-1/4 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl animate-pulse"></div>
    <div className="absolute top-1/3 right-1/4 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-r from-indigo-400 to-cyan-400 rotate-45 blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute bottom-1/4 left-1/3 w-24 sm:w-40 h-24 sm:h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    <div className="absolute bottom-1/3 right-1/3 w-20 sm:w-28 h-20 sm:h-28 bg-gradient-to-r from-cyan-400 to-blue-500 rotate-12 blur-lg animate-pulse" style={{ animationDelay: '1.5s' }}></div>
  </div>
);

// ===== CONTENT COMPONENTS =====
const Badge = () => (
  <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-yellow-400" />
    <span className="text-white">#1 IELTS Preparation Platform</span>
  </div>
);

const Headline = () => (
  <div className="space-y-4 sm:space-y-6">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight">
      Master IELTS with
      <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent block mt-1 sm:mt-2 animate-pulse">
        AI-Powered Training
      </span>
    </h1>
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
      Achieve your target band score with personalized coaching, real-time feedback, and proven strategies from IELTS experts.
    </p>
  </div>
);

const StatsSection = ({ stats }: { stats: Array<{ value: string; label: string; gradient: string }> }) => (
  <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 py-6 sm:py-8 border-t border-b border-gray-700/50">
    {stats.map((stat, index) => (
      <div key={index} className="text-center">
        <div className={`text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-gradient-to-r ${stat.gradient} bg-clip-text`}>
          {stat.value}
        </div>
        <div className="text-xs sm:text-sm text-gray-400 font-medium mt-1">
          {stat.label}
        </div>
      </div>
    ))}
  </div>
);

const CTAButtons = ({ scrollToSection }: { scrollToSection: (id: string) => void }) => (
  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
    <Button
      onClick={() => scrollToSection("features")}
      size="lg"
      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg rounded-xl shadow-2xl hover:scale-105 hover:shadow-blue-500/25 transition-all duration-300 group border-0"
    >
      <span className="text-white">Start Free Trial</span>
      <ChevronRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
    </Button>
    <Button
      onClick={() => scrollToSection("testimonials")}
      variant="outline"
      size="lg"
      className="border-2 border-gray-300/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg rounded-xl font-semibold hover:scale-105 transition-all duration-300 bg-transparent"
    >
      <span className="text-white">View Success Stories</span>
    </Button>
  </div>
);

// ===== DASHBOARD COMPONENTS =====
const DashboardVisual = ({ skillProgress }: { skillProgress: Array<{ skill: string; score: string; percentage: number; gradient: string; color: string }> }) => (
  <div className="relative">
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
      <div className="space-y-4 sm:space-y-6">
        
        {/* Header */}
        <DashboardHeader />
        
        {/* Progress Bars */}
        <SkillProgressBars skillProgress={skillProgress} />
        
        {/* Overall Score */}
        <OverallScore />
      </div>
    </div>
  </div>
);

const DashboardHeader = () => (
  <div className="flex items-center justify-between">
    <h3 className="text-white font-bold text-lg sm:text-xl">IELTS Dashboard</h3>
    <div className="flex gap-2">
      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
    </div>
  </div>
);

const SkillProgressBars = ({ skillProgress }: { skillProgress: Array<{ skill: string; score: string; percentage: number; gradient: string; color: string }> }) => (
  <div className="space-y-3 sm:space-y-4">
    {skillProgress.map((item, index) => (
      <div key={index}>
        <div className="flex justify-between text-xs sm:text-sm text-gray-300 mb-2">
          <span className="text-white">{item.skill}</span>
          <span className={`${item.color} font-semibold`}>{item.score}</span>
        </div>
        <div className="w-full bg-gray-700/50 rounded-full h-2.5 sm:h-3">
          <div 
            className={`bg-gradient-to-r ${item.gradient} h-2.5 sm:h-3 rounded-full transition-all duration-1000 ease-out`}
            style={{ width: `${item.percentage}%` }}
          ></div>
        </div>
      </div>
    ))}
  </div>
);

const OverallScore = () => (
  <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-500/30">
    <div className="text-3xl sm:text-4xl font-black text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">8.0</div>
    <div className="text-gray-300 text-xs sm:text-sm font-medium">Overall Band Score</div>
  </div>
);

const FloatingCards = () => (
  <>
    {/* Achievement Card */}
    <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-2xl animate-fade-in border border-green-400/30" style={{ animationDelay: "0.5s" }}>
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-300 rounded-full animate-pulse"></div>
        <span className="text-xs sm:text-sm font-bold text-white">Band 8.5 Achieved!</span>
      </div>
    </div>
    
    {/* Support Card */}
    <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg sm:rounded-xl p-3 sm:p-5 shadow-2xl animate-fade-in border border-blue-400/30" style={{ animationDelay: "0.8s" }}>
      <div className="text-center">
        <div className="text-xl sm:text-2xl font-black text-white">24/7</div>
        <div className="text-xs font-medium text-blue-100">AI Support</div>
      </div>
    </div>
  </>
);

const ScrollIndicator = () => (
  <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
    <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-white/40 rounded-full flex justify-center bg-white/5 backdrop-blur-sm">
      <div className="w-1.5 h-3 sm:w-2 sm:h-4 bg-gradient-to-b from-white to-gray-300 rounded-full mt-2 animate-pulse"></div>
    </div>
  </div>
);

export default Hero;