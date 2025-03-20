
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Search, Database, Map } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;
      
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      const elements = container.querySelectorAll('[data-parallax]');
      elements.forEach(el => {
        const strength = parseFloat(el.getAttribute('data-strength') || '0.05');
        const offsetX = (x - 0.5) * strength * 100;
        const offsetY = (y - 0.5) * strength * 100;
        
        (el as HTMLElement).style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section className="relative pt-28 pb-20 overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
      {/* Decorative elements */}
      <div 
        className="absolute top-20 right-[10%] w-64 h-64 bg-cyber-purple/20 rounded-full blur-[100px]" 
        data-parallax 
        data-strength="0.03"
      ></div>
      <div 
        className="absolute bottom-20 left-[15%] w-80 h-80 bg-cyber-blue/30 rounded-full blur-[120px]" 
        data-parallax 
        data-strength="0.02"
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-3 px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full animate-fade-in">
            <p className="text-sm font-medium text-cyber-green">
              Advanced Real Estate & Property Intelligence
            </p>
          </div>
          
          <h1 className="text-gradient mb-6 animate-fade-in animate-delay-100">
            Comprehensive Property Data Insights Powered by AI
          </h1>
          
          <p className="text-lg text-white/80 mb-8 animate-fade-in animate-delay-200">
            Get accurate, complete property information for any address in seconds.
            From valuations to topography, we deliver verified, up-to-date property insights.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in animate-delay-300">
            <a 
              href="https://chatgpt.com/g/g-TZOj6RYcq-property-data-finder" 
              className="px-8 py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-medium rounded-full hover:shadow-[0_0_20px_-5px_rgba(56,249,215,0.6)] transition-all duration-300 scale-100 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center justify-center">
                Search Property Data
                <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </a>
            <a 
              href="https://realestategpt.lovable.app/?via=aiwebtools" 
              className="px-8 py-3 bg-gradient-to-r from-cyber-green to-cyber-teal text-white font-medium rounded-full hover:shadow-[0_0_20px_-5px_rgba(56,249,215,0.6)] transition-all duration-300 scale-100 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center justify-center">
                Use Real Estate GPT
                <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </a>
            <a 
              href="https://personfindergpt.lovable.app/?via=aiwebtools" 
              className="px-8 py-3 bg-gradient-to-r from-cyber-pink to-cyber-purple text-white font-medium rounded-full hover:shadow-[0_0_20px_-5px_rgba(56,249,215,0.6)] transition-all duration-300 scale-100 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center justify-center">
                Person Information Finder
                <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              className="px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore More AI Tools
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in animate-delay-500">
            <FeatureCard 
              icon={<Search className="w-5 h-5 text-cyber-green" />}
              title="Comprehensive Search"
              description="Scans multiple sources to find every detail about your property"
            />
            <FeatureCard 
              icon={<Database className="w-5 h-5 text-cyber-pink" />}
              title="Verified Data"
              description="All data is verified against multiple reliable sources"
            />
            <FeatureCard 
              icon={<Map className="w-5 h-5 text-cyber-blue" />}
              title="Detailed Insights"
              description="From value to topography, orientation, and coordinates"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative floating elements - Repositioned to avoid overlapping with text and buttons */}
      <div 
        className="absolute top-[15%] left-[5%] w-24 h-24 glass rounded-2xl grid place-items-center animate-float-slow" 
        data-parallax 
        data-strength="0.08"
      >
        <Search className="w-10 h-10 text-cyber-green/80" />
      </div>
      <div 
        className="absolute bottom-[10%] right-[5%] w-20 h-20 glass rounded-2xl grid place-items-center animate-float" 
        data-parallax 
        data-strength="0.1"
      >
        <Database className="w-8 h-8 text-cyber-pink/80" />
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center">
      <div className="p-3 bg-white/5 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-white/70">{description}</p>
    </div>
  );
};

export default Hero;
