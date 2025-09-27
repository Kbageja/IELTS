import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "HOME", id: "hero" },
    { name: "FEATURES", id: "features" },
    { name: "TESTIMONIALS", id: "testimonials" },
    { name: "CONTACT", id: "footer" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#192E68] backdrop-blur-lg shadow-xl border-b border-gray-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="group relative text-lg sm:text-xl lg:text-2xl xl:text-3xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent hover:scale-110 transition-all duration-300 tracking-tight"
            >
              <span className="relative z-10 text-white text-2xl">KB INSTITUTE</span>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-500/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </button>
          </div>

          {/* Desktop Navigation - Keep exact same styling */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-10">
              {navLinks.map((link, index) => (
                <div
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative group px-4 py-2 text-lg font-semibold rounded-4xl transition-all duration-300 cursor-pointer ${
                    isScrolled 
                      ? "text-white hover:text-blue-600" 
                      : "text-white hover:text-blue-300"
                  }`} 
                  style={{
                    animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10 text-sm">{link.name}</span>
                  {/* Animated underline */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button Desktop - Keep exact same styling */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => scrollToSection("features")}
              className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-3 text-base rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 border-0 group"
            >
              <span className="relative z-10 text-white">Get Started</span>
              {/* Shine effect */}
              <div className="absolute inset-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white/20 to-transparent w-8 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
          </div>

          {/* Tablet Navigation (md:lg) */}
          <div className="hidden md:flex lg:hidden items-center space-x-6">
            {navLinks.slice(0, 2).map((link) => (
              <div
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative group px-3 py-2 text-base font-semibold rounded-lg transition-all duration-300 cursor-pointer ${
                  isScrolled 
                    ? "text-white hover:text-blue-600" 
                    : "text-white hover:text-blue-300"
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </div>
            ))}
            
            {/* More button for tablet */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`relative px-3 py-2 text-base font-semibold rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? "text-white hover:text-blue-600 hover:bg-blue-500/10" 
                  : "text-white hover:text-blue-300 hover:bg-white/10"
              }`}
            >
              More
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`relative p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 group ${
                isScrolled 
                  ? "text-white hover:bg-blue-500/10" 
                  : "text-white hover:bg-white/10"
              }`}
            >
              <div className="relative z-10">
                {isMenuOpen ? (
                  <X size={20} className="sm:w-6 sm:h-6 transition-transform duration-300 group-hover:rotate-90" />
                ) : (
                  <Menu size={20} className="sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
                )}
              </div>
              {/* Button background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg sm:rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </Button>
          </div>

          {/* Tablet More Menu Button */}
          <div className="hidden md:block lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`relative p-3 rounded-xl transition-all duration-300 group ${
                isScrolled 
                  ? "text-white hover:bg-blue-500/10" 
                  : "text-white hover:bg-white/10"
              }`}
            >
              <div className="relative z-10">
                {isMenuOpen ? (
                  <X size={24} className="transition-transform duration-300 group-hover:rotate-90" />
                ) : (
                  <Menu size={24} className="transition-transform duration-300 group-hover:scale-110" />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </Button>
          </div>
        </div>

        {/* Mobile & Tablet Navigation Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMenuOpen 
              ? "max-h-96 opacity-100" 
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-xl sm:rounded-2xl mx-2 sm:mx-4 my-3 sm:my-4 shadow-2xl">
            <div className="p-4 sm:p-6 space-y-1 sm:space-y-2">
              {/* For tablet, show only remaining links */}
              {(window.innerWidth >= 768 && window.innerWidth < 1024 ? navLinks.slice(2) : navLinks).map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="group relative w-full text-left px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg sm:rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20"
                  style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute left-4 sm:left-6 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-6 sm:group-hover:w-8"></div>
                </button>
              ))}
              
              {/* Mobile & Tablet CTA Button */}
              <div className="pt-3 sm:pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                <Button 
                  onClick={() => scrollToSection("features")}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 sm:py-4 text-base sm:text-lg rounded-lg sm:rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 border-0 group relative overflow-hidden"
                >
                  <span className="relative z-10 text-white">Get Started</span>
                  {/* Mobile shine effect */}
                  <div className="absolute inset-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white/20 to-transparent w-8 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;