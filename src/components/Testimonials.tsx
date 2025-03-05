
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  position: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    position: "Real Estate Agent",
    quote: "Property Data Finder GPT has revolutionized how I prepare for client meetings. I can get complete property information in seconds, making me look incredibly prepared and professional.",
    rating: 5
  },
  {
    name: "Michael Chen",
    position: "Property Investor",
    quote: "The level of detail this tool provides is unmatched. From property values to topography and orientation - it gives me all the data I need to make informed investment decisions.",
    rating: 5
  },
  {
    name: "Jessica Martinez",
    position: "Home Buyer",
    quote: "As a first-time homebuyer, I was overwhelmed with the property search process. This tool helped me understand important details about potential homes before even visiting.",
    rating: 4
  },
  {
    name: "David Williams",
    position: "Property Appraiser",
    quote: "The accuracy of the data is what impresses me most. I've cross-checked the information against my professional databases, and it's consistently reliable.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const nextTestimonial = () => {
    setActiveIndex(prev => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Add intersection observer to animate in
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(containerRef.current);
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  
  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-20 relative bg-cyber-darker">
      <div 
        ref={containerRef}
        className="container mx-auto px-4 opacity-0 translate-y-10 transition-all duration-700"
      >
        <div className="text-center mb-12">
          <h2 className="text-gradient-blue mb-4">What Users Are Saying</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Discover how Property Data Finder GPT is helping professionals and individuals 
            access accurate property information
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="glass-card p-8 md:p-10 rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyber-purple/5 to-cyber-blue/5 rounded-2xl"></div>
            
            <div className="relative">
              <div className="mb-8 flex justify-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full mx-1.5 transition-all duration-300 ${
                      index === activeIndex 
                        ? 'bg-cyber-green' 
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="overflow-hidden">
                <div 
                  className="transition-all duration-500 ease-in-out flex"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={index}
                      className="w-full flex-shrink-0 px-4"
                    >
                      <div className="flex justify-center mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating 
                                ? 'text-cyber-green fill-cyber-green' 
                                : 'text-white/20'
                            }`}
                          />
                        ))}
                      </div>
                      
                      <blockquote className="text-xl md:text-2xl text-white/90 text-center mb-8 italic">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="text-center">
                        <p className="font-medium text-white">{testimonial.name}</p>
                        <p className="text-sm text-white/60">{testimonial.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0">
                <button
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 grid place-items-center border border-white/10 transition-all duration-300 -left-5 absolute"
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 grid place-items-center border border-white/10 transition-all duration-300 -right-5 absolute"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
