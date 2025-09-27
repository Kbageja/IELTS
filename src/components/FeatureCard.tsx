import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  gradient?: string;
  delay?: string;
}

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  gradient = "from-blue-500 to-purple-600",
  delay = "0s"
}: FeatureCardProps) => {
  return (
    <Card 
      className="relative group hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 bg-white dark:bg-slate-800 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden animate-fade-in-up rounded-3xl"
      style={{ animationDelay: delay }}
    >
      {/* Background Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl transform -translate-x-12 translate-y-12 group-hover:-translate-x-4 group-hover:translate-y-4 transition-transform duration-700"></div>
      </div>
      
      <div className="relative p-10 space-y-8 z-10">
        {/* Icon Container */}
        <div className="relative">
          <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
            <Icon className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
          </div>
          {/* Icon glow effect */}
          <div className={`absolute inset-0 w-20 h-20 rounded-3xl bg-gradient-to-br ${gradient} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-125`}></div>
        </div>

        {/* Content Section */}
        <div className="space-y-5">
          <h3 className="text-3xl font-black text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500 leading-tight">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-medium group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Features List */}
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li 
              key={index} 
              className="flex items-start gap-4 text-base text-gray-800 dark:text-gray-200 group-hover:text-gray-700 dark:group-hover:text-gray-100 transition-all duration-300 transform group-hover:translate-x-2"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="relative mt-2 flex-shrink-0">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${gradient} group-hover:scale-125 transition-transform duration-300 shadow-sm`}></div>
                <div className={`absolute inset-0 w-3 h-3 rounded-full bg-gradient-to-r ${gradient} blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
              </div>
              <span className="font-medium leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-b-3xl"></div>
        
        {/* Side Accent Line */}
        <div className="absolute top-0 right-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top rounded-r-3xl"></div>

        {/* Floating Elements */}
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-2 group-hover:translate-y-0" style={{ transitionDelay: '200ms' }}>
          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white/20 to-transparent w-8 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>
      </div>

      {/* Border Glow Effect */}
      <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>


    </Card>
  );
};

export default FeatureCard;