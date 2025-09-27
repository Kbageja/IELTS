import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
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

  // ===== DATA ARRAYS =====
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  const quickLinks = [
    { name: "Home", id: "hero" },
    { name: "Features", id: "features" },
    { name: "Testimonials", id: "testimonials" },
    { name: "About Us", id: "hero" },
    { name: "Blog", id: "hero" },
    { name: "FAQ", id: "hero" }
  ];

  const ieltsResources = [
    "Speaking Practice",
    "Writing Templates", 
    "Reading Strategies",
    "Listening Tips",
    "Vocabulary Builder",
    "Grammar Guide"
  ];

  const contactInfo = [
    { 
      icon: Mail, 
      title: "Email", 
      content: "support@ieltselite.com" 
    },
    { 
      icon: Phone, 
      title: "Phone", 
      content: "+1 (555) 123-4567" 
    },
    { 
      icon: MapPin, 
      title: "Address", 
      content: "123 Education St, Learning City, LC 12345" 
    }
  ];

  return (
    <footer id="footer" className="bg-primary text-primary-foreground">
      {/* ===== MAIN FOOTER CONTENT ===== */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* ===== COMPANY INFO ===== */}
          <CompanySection socialLinks={socialLinks} />
          
          {/* ===== LINKS SECTIONS (SIDE BY SIDE) ===== */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:col-span-1">
            <div className="flex-1">
              <LinksSection 
                title="Quick Links" 
                links={quickLinks} 
                scrollToSection={scrollToSection} 
                isClickable={true}
              />
            </div>
            <div className="flex-1">
              <LinksSection 
                title="IELTS Resources" 
                links={ieltsResources.map(resource => ({ name: resource, id: "" }))} 
                scrollToSection={scrollToSection} 
                isClickable={false}
              />
            </div>
          </div>
          
          {/* ===== CONTACT INFO ===== */}
          <ContactSection contactInfo={contactInfo} />
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <BottomBar />
    </footer>
  );
};

// ===== COMPANY SECTION COMPONENT =====
const CompanySection = ({ socialLinks }: { socialLinks: Array<{icon: any, href: string, label: string}> }) => (
  <div className="space-y-4 sm:space-y-6">
    <div>
      <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-accent to-cta bg-clip-text text-transparent mb-3 sm:mb-4">
        IELTS Elite
      </h3>
      <p className="text-primary-foreground/80 leading-relaxed text-sm sm:text-base">
        The world's most advanced IELTS preparation platform, powered by AI technology and expert tutoring.
      </p>
    </div>
    
    {/* Social Links */}
    <div className="flex gap-3 sm:gap-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-200 group"
          aria-label={label}
        >
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
        </a>
      ))}
    </div>
  </div>
);

// ===== LINKS SECTION COMPONENT =====
const LinksSection = ({ 
  title, 
  links, 
  scrollToSection, 
  isClickable 
}: { 
  title: string; 
  links: Array<{name: string, id: string}>; 
  scrollToSection: (id: string) => void; 
  isClickable: boolean;
}) => (
  <div className="space-y-3 sm:space-y-4">
    <h4 className="text-base sm:text-lg font-semibold text-accent">{title}</h4>
    <ul className="space-y-2 sm:space-y-3">
      {links.map((link) => (
        <li key={link.name}>
          <button
            onClick={() => isClickable && scrollToSection(link.id)}
            className={`text-primary-foreground/80 hover:text-accent transition-all duration-200 hover:translate-x-1 transform inline-block text-sm sm:text-base ${
              !isClickable ? "cursor-default" : ""
            }`}
          >
            {link.name}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

// ===== CONTACT SECTION COMPONENT =====
const ContactSection = ({ contactInfo }: { contactInfo: Array<{icon: any, title: string, content: string}> }) => (
  <div className="space-y-4 sm:space-y-6">
    <h4 className="text-base sm:text-lg font-semibold text-accent">Contact Us</h4>
    
    <div className="space-y-3 sm:space-y-4">
      {contactInfo.map(({ icon: Icon, title, content }) => (
        <div key={title} className="flex items-start gap-3">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
          </div>
          <div className="min-w-0">
            <div className="font-medium text-sm sm:text-base">{title}</div>
            <div className="text-primary-foreground/80 text-xs sm:text-sm break-words">{content}</div>
          </div>
        </div>
      ))}
    </div>

    {/* Newsletter Signup */}
    <NewsletterSignup />
  </div>
);

// ===== NEWSLETTER COMPONENT =====
const NewsletterSignup = () => (
  <div className="bg-white/5 rounded-lg p-3 sm:p-4 space-y-2 sm:space-y-3">
    <h5 className="font-medium text-sm sm:text-base">Stay Updated</h5>
    <p className="text-xs sm:text-sm text-primary-foreground/80">Get IELTS tips and updates</p>
    <div className="flex flex-col sm:flex-row gap-2">
      <input 
        type="email" 
        placeholder="Your email"
        className="flex-1 bg-white/10 border border-white/20 rounded px-3 py-2 text-xs sm:text-sm placeholder:text-primary-foreground/60 focus:outline-none focus:border-accent min-w-0"
      />
      <button className="bg-accent hover:bg-accent/90 text-white px-3 sm:px-4 py-2 rounded text-xs sm:text-sm font-medium transition-colors whitespace-nowrap">
        Subscribe
      </button>
    </div>
  </div>
);

// ===== BOTTOM BAR COMPONENT =====
const BottomBar = () => (
  <div className="border-t border-white/10">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
        <div className="text-primary-foreground/80 text-xs sm:text-sm text-center md:text-left">
          © 2024 IELTS Elite. All rights reserved. | Helping students achieve their IELTS dreams since 2020.
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 text-xs sm:text-sm">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((policy) => (
            <button 
              key={policy}
              className="text-primary-foreground/80 hover:text-accent transition-colors whitespace-nowrap"
            >
              {policy}
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Footer;