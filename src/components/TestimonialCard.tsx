import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  country: string;
  bandScore: string;
  previousScore?: string;
  testimonial: string;
  avatar?: string;
  delay?: string;
}

const TestimonialCard = ({
  name,
  country,
  bandScore,
  previousScore,
  testimonial,
  avatar,
  delay = "0s"
}: TestimonialCardProps) => {
  return (
    <Card 
      className="relative group p-8 hover:shadow-hover transition-all duration-500 hover:-translate-y-1 bg-card border-border/50 animate-fade-in-up h-full"
      style={{ animationDelay: delay }}
    >
      {/* Quote decoration */}
      <div className="absolute top-4 right-4 text-6xl text-accent/10 font-serif leading-none">
        "
      </div>
      
      <div className="relative z-10 space-y-6">
        {/* Rating */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className="w-5 h-5 fill-cta text-cta" 
            />
          ))}
        </div>

        {/* Testimonial */}
        <p className="text-foreground leading-relaxed text-lg">
          {testimonial}
        </p>

        {/* User Info */}
        <div className="flex items-center gap-4 pt-4 border-t border-border/50">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
              {name.split(' ').map(n => n[0]).join('')}
            </div>
            {avatar && (
              <img 
                src={avatar} 
                alt={name}
                className="absolute inset-0 w-12 h-12 rounded-full object-cover"
              />
            )}
          </div>
          
          <div className="flex-1">
            <h4 className="font-semibold text-foreground">{name}</h4>
            <p className="text-muted-foreground text-sm">{country}</p>
          </div>

          {/* Score Badge */}
          <div className="text-right">
            <div className="bg-gradient-accent text-white px-3 py-1 rounded-full text-sm font-bold">
              Band {bandScore}
            </div>
            {previousScore && (
              <div className="text-xs text-muted-foreground mt-1">
                from {previousScore}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent to-cta opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
    </Card>
  );
};

export default TestimonialCard;