
import React, { useRef, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const ToolButtons: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
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
  
  return (
    <section className="py-16 bg-cyber-dark relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      
      <div 
        ref={containerRef}
        className="container mx-auto px-4 opacity-0 translate-y-10 transition-all duration-700"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            <span className="text-cyber-blue">Explore</span> Our AI Tools
          </h2>
          
          <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
            Get comprehensive property information and expert real estate assistance with our powerful AI-powered solutions.
          </p>
          
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6">
            <a 
              href="https://chatgpt.com/g/g-TZOj6RYcq-property-data-finder" 
              className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyber-accent to-cyber-blue text-white text-lg font-medium rounded-xl hover:shadow-[0_0_20px_-3px_rgba(103,232,249,0.6)] transition-all duration-300 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-3 text-3xl">🏠</span>
              <div className="flex flex-col items-start">
                <span className="text-sm opacity-80">Try Now</span>
                <span>Property Data Finder GPT</span>
              </div>
              <ExternalLink className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a 
              href="https://realestategpt.lovable.app/?via=aiwebtools" 
              className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyber-green to-cyber-teal text-white text-lg font-medium rounded-xl hover:shadow-[0_0_20px_-3px_rgba(56,249,215,0.6)] transition-all duration-300 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-3 text-3xl">🤖</span>
              <div className="flex flex-col items-start">
                <span className="text-sm opacity-80">Try Now</span>
                <span>Real Estate GPT</span>
              </div>
              <ExternalLink className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a 
              href="https://personfindergpt.lovable.app/?via=aiwebtools" 
              className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyber-pink to-cyber-purple text-white text-lg font-medium rounded-xl hover:shadow-[0_0_20px_-3px_rgba(255,66,161,0.6)] transition-all duration-300 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-3 text-3xl">👤</span>
              <div className="flex flex-col items-start">
                <span className="text-sm opacity-80">Try Now</span>
                <span>Person Information Finder GPT</span>
              </div>
              <ExternalLink className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolButtons;
