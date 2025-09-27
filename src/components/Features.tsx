import { Mic, FileText, Brain, Users, Sparkles } from "lucide-react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      icon: Mic,
      title: "AI Speaking Practice",
      description: "Practice speaking with our advanced AI tutor that provides real-time pronunciation feedback and fluency scoring.",
      features: [
        "Real-time pronunciation analysis",
        "Fluency and coherence scoring", 
        "Topic-specific practice sessions",
        "Accent reduction training"
      ],
      gradient: "from-blue-500 to-cyan-500",
      delay: "0.1s"
    },
    {
      icon: FileText,
      title: "Mock Tests & Analytics",
      description: "Take unlimited practice tests with detailed analytics and personalized improvement recommendations.",
      features: [
        "Full-length IELTS simulations",
        "Detailed performance analytics",
        "Weakness identification",
        "Progress tracking dashboard"
      ],
      gradient: "from-purple-500 to-pink-500",
      delay: "0.2s"
    },
    {
      icon: Brain,
      title: "AI Band Score Prediction",
      description: "Our AI accurately predicts your IELTS band score and provides targeted strategies for improvement.",
      features: [
        "Accurate score prediction",
        "Personalized study plans",
        "Skill-specific recommendations",
        "Progress milestone tracking"
      ],
      gradient: "from-green-500 to-emerald-500",
      delay: "0.3s"
    },
    {
      icon: Users,
      title: "Expert Tutoring",
      description: "Connect with certified IELTS instructors for personalized coaching and advanced strategies.",
      features: [
        "1-on-1 expert sessions",
        "Group study programs",
        "Writing task feedback",
        "Speaking confidence building"
      ],
      gradient: "from-orange-500 to-red-500",
      delay: "0.4s"
    }
  ];

  return (
    <section id="features" className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3e%3cpath d='m 60 0 l 0 60 l -60 0 z' fill='none' stroke='%23000' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)' /%3e%3c/svg%3e")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 px-6 py-3 rounded-full text-sm font-bold mb-8 border border-blue-200 dark:border-blue-800 shadow-lg backdrop-blur-sm">
            <Sparkles className="w-4 h-4 fill-current text-yellow-500" />
            <span className="text-gray-800 dark:text-gray-200">Why Choose IELTS Elite</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-8 leading-[1.1] tracking-tight">
            Everything You Need to
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent block mt-2">
              Ace Your IELTS
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
            Our comprehensive platform combines cutting-edge AI technology with proven teaching methods 
            to help you achieve your target band score faster than ever before.
          </p>

          {/* Feature Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[
              { number: "50K+", label: "Students" },
              { number: "95%", label: "Success Rate" },
              { number: "24/7", label: "AI Support" },
              { number: "8.5+", label: "Avg Score" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-2xl font-black text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 mb-24">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                features={feature.features}
                gradient={feature.gradient}
                delay={feature.delay}
              />
              {/* Connecting Lines */}
              {index < features.length - 1 && (
                <div className="hidden lg:block absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-px h-16 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-3xl p-12 lg:p-16 shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]"></div>
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,white,transparent_50%)]"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,white,transparent_70%)]"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-8 right-8 w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-8 left-8 w-3 h-3 bg-cyan-300/50 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 right-16 w-2 h-2 bg-purple-300/50 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <h3 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                Ready to Start Your IELTS Journey?
              </h3>
              
              <p className="text-white/90 text-xl font-medium mb-10 max-w-3xl mx-auto leading-relaxed">
                Join thousands of successful students who achieved their target band scores with our proven methods.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="group relative bg-white text-gray-900 font-bold px-10 py-5 rounded-xl text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/25 overflow-hidden">
                  <span className="relative z-10">Start 7-Day Free Trial</span>
                  {/* Shine effect */}
                  <div className="absolute inset-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white/30 to-transparent w-8 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
                
                <button className="group relative border-2 border-white/40 text-white hover:bg-white/15 backdrop-blur-sm px-10 py-5 rounded-xl text-lg font-bold hover:scale-105 transition-all duration-300 hover:border-white/60 overflow-hidden">
                  <span className="relative z-10 text-white">Book Free Consultation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t border-white/20">
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="font-medium">No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="font-medium">Cancel Anytime</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="font-medium">Money-Back Guarantee</span>
                </div>
              </div>
            </div>

            {/* Border Glow */}
            <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-cyan-400/30 opacity-50 -z-10 blur-sm"></div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Features;