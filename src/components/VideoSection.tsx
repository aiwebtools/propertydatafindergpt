
import React, { useRef, useEffect } from 'react';

const VideoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Add intersection observer to animate in the container
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
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-30 z-0"></div>
      
      <div 
        ref={containerRef} 
        className="container mx-auto px-4 relative z-10 opacity-0 translate-y-10 transition-all duration-700"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-gradient-blue mb-4">See Property Data Finder in Action</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Watch how Property Data Finder GPT delivers comprehensive property information in seconds
            </p>
          </div>
          
          <div className="relative aspect-video rounded-xl overflow-hidden cyber-border cyber-glow">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyber-blue/20 to-cyber-purple/20 z-0"></div>
            <iframe 
              className="absolute inset-0 w-full h-full z-10"
              src="https://www.youtube.com/embed/0ZGBGn9yYwY?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&showinfo=0&enablejsapi=1&widgetid=1&hd=1" 
              title="Property Data Finder GPT Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
