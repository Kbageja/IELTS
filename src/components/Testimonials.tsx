import { useState, useEffect } from "react";
import { Star, Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi 
} from "@/components/ui/carousel";


type Testimonial = {
  name: string;
  country: string;
  bandScore: string;
  previousScore: string;
  testimonial: string;
};

interface TestimonialCardProps extends Testimonial {}

const TestimonialCard = ({ name, country, bandScore, previousScore, testimonial }: TestimonialCardProps) => (
  <div className="w-full">
    <div className="bg-white my-18  dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-200 dark:border-gray-700 h-full relative overflow-hidden group hover:shadow-3xl transition-all duration-500 mx-2 sm:mx-4">
      {/* Background gradient overlay */}
      <div className="absolute my-12 inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
     
      
      <div className="relative z-10 space-y-4 sm:space-y-6">
        {/* Stars */}
        <div className="flex gap-1">
          {[1,2,3,4,5].map((star) => (
            <Star key={star} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        
        {/* Testimonial Text */}
        
        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed italic">
          {testimonial}
        </p>
        
        {/* Score Improvement */}
        <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
          <div className="text-center">
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Previous</div>
            <div className="text-lg sm:text-2xl font-bold text-red-500">{previousScore}</div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-red-500 to-green-500"></div>
            <div className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mx-1 sm:mx-2">→</div>
          </div>
          <div className="text-center">
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Achieved</div>
            <div className="text-lg sm:text-2xl font-bold text-green-500">{bandScore}</div>
          </div>
        </div>
        
        {/* Student Info */}
        <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg">
            {name.charAt(0)}
          </div>
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold text-base sm:text-lg">{name}</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{country}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);



const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  const testimonials = [
    {
      name: "Sarah Ahmed",
      country: "Pakistan",
      bandScore: "8.5",
      previousScore: "6.0",
      testimonial: "IELTS Elite transformed my preparation completely. The AI feedback helped me identify my weak areas in speaking, and the expert tutors guided me step by step. I never thought I could achieve 8.5!"
    },
    {
      name: "Carlos Rodriguez", 
      country: "Mexico",
      bandScore: "7.5",
      previousScore: "5.5",
      testimonial: "The mock tests were incredibly realistic and the analytics showed exactly where I needed to improve. The speaking practice with AI felt like talking to a real examiner. Highly recommend!"
    },
    {
      name: "Priya Patel",
      country: "India", 
      bandScore: "8.0",
      previousScore: "6.5",
      testimonial: "What I loved most was the personalized study plan. The platform adapted to my learning pace and focused on my weak areas. The writing feedback was particularly helpful for Task 2 essays."
    },
    {
      name: "Ahmed Hassan",
      country: "Egypt", 
      bandScore: "8.0",
      previousScore: "6.0",
      testimonial: "The speaking practice sessions were game-changing. I went from being nervous and hesitant to confident and fluent. The AI provided instant feedback that helped me improve daily."
    },
    {
      name: "Liu Wei",
      country: "China", 
      bandScore: "7.5",
      previousScore: "5.5",
      testimonial: "The writing section improvement was remarkable. The detailed feedback on grammar, vocabulary, and task response helped me understand exactly what examiners look for."
    }
  ];

  // Update current index when carousel changes
  useEffect(() => {
    if (!api) return;

    const updateIndex = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on("select", updateIndex);
    return () => api.off("select", updateIndex);
  }, [api]);

  // Auto-play functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % testimonials.length;
      api.scrollTo(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [api, currentIndex, testimonials.length]);

  const goToTestimonial = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-6 sm:mb-8 border border-blue-200 dark:border-blue-800">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current text-yellow-500" />
            Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 dark:text-white mb-6 sm:mb-8 leading-tight">
            Real Students,
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent block">
              Real Results
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
            Don't just take our word for it. Hear from thousands of students who achieved 
            their dream IELTS scores with our proven methodology.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {[
            { value: "50K+", label: "Students Trained", color: "from-blue-500 to-cyan-500" },
            { value: "95%", label: "Success Rate", color: "from-green-500 to-emerald-500" },
            { value: "8.2", label: "Average Band Score", color: "from-purple-500 to-pink-500" },
            { value: "4.9", label: "Rating (5000+ Reviews)", color: "from-orange-500 to-red-500" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300`}>
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mb-16 sm:mb-20">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
              dragFree: true,
            }}
          >
            <CarouselContent className="-ml-2 sm:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 sm:pl-4 basis-full sm:basis-4/5 lg:basis-1/2 xl:basis-2/5">
                  <TestimonialCard {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-8 w-12 h-12 shadow-2xl border-2" />
            <CarouselNext className="hidden sm:flex -right-4 lg:-right-8 w-12 h-12 shadow-2xl border-2" />
          </Carousel>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 sm:w-12 h-2.5 sm:h-3 bg-gradient-to-r from-blue-500 to-purple-600"
                    : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Video Testimonials CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-16 shadow-2xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]"></div>
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,white,transparent_50%)]"></div>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4 sm:mb-6 hover:scale-110 transition-transform duration-300 cursor-pointer group">
                <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1 group-hover:scale-125 transition-transform duration-300" />
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                Want to See More Success Stories?
              </h3>
              <p className="text-white/90 text-base sm:text-lg lg:text-xl font-medium leading-relaxed">
                Watch video testimonials from our top-performing students and learn 
                about their IELTS journey with IELTS Elite.
              </p>
              <button className="bg-white text-gray-900 font-bold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl text-base sm:text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                <span className="relative z-10">Watch Video Testimonials</span>
                {/* Button shine effect */}
                <div className="absolute inset-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white/30 to-transparent w-8 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;