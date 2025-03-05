
import React, { useRef, useEffect } from 'react';
import { Search, Database, FileText, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Add intersection observer to animate in the sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const steps = containerRef.current?.querySelectorAll('.step-item');
            steps?.forEach((step, index) => {
              setTimeout(() => {
                step.classList.add('opacity-100', 'translate-y-0');
                step.classList.remove('opacity-0', 'translate-y-10');
              }, index * 200);
            });
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
    <section className="py-20 relative">
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        <div className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-700" ref={el => el && setTimeout(() => el.classList.add('opacity-100', 'translate-y-0'), 100)}>
          <h2 className="text-gradient-blue mb-4">How It Works</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Property Data Finder GPT follows a rigorous process to deliver accurate, comprehensive property information
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-green/50 via-cyber-blue/50 to-cyber-purple/50 hidden md:block"></div>
          
          <div className="space-y-24">
            <Step
              number="01"
              title="Address Collection"
              description="Simply provide the property address you need information about. The more specific, the better for accurate results."
              icon={<Search className="w-10 h-10 text-cyber-green" />}
              align="right"
            />
            
            <Step
              number="02"
              title="Comprehensive Data Search"
              description="Our AI scans multiple reliable sources including public records, real estate databases, and geographic information systems."
              icon={<Database className="w-10 h-10 text-cyber-blue" />}
              align="left"
            />
            
            <Step
              number="03"
              title="Data Verification & Compilation"
              description="All collected data is cross-verified across multiple sources to ensure accuracy before being compiled into a comprehensive report."
              icon={<FileText className="w-10 h-10 text-cyber-pink" />}
              align="right"
            />
            
            <Step
              number="04"
              title="Complete Property Profile Delivery"
              description="Receive a detailed property profile with all essential information including value, topography, living area, construction year, orientation, and coordinates."
              icon={<CheckCircle className="w-10 h-10 text-cyber-purple" />}
              align="left"
            />
          </div>
        </div>
        
        <div className="mt-24 text-center">
          <a 
            href="https://chatgpt.com/g/g-TZOj6RYcq-property-data-finder" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-medium rounded-full hover:shadow-[0_0_20px_-5px_rgba(56,249,215,0.6)] transition-all duration-300 scale-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            Try Property Data Finder Now
          </a>
        </div>
      </div>
    </section>
  );
};

interface StepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  align: 'left' | 'right';
}

const Step: React.FC<StepProps> = ({ number, title, description, icon, align }) => {
  return (
    <div className={`step-item flex flex-col md:flex-row items-center opacity-0 translate-y-10 transition-all duration-700 ${
      align === 'right' ? 'md:flex-row-reverse text-right' : ''
    }`}>
      <div className="flex-1 mb-6 md:mb-0">
        <div className={`max-w-md ${align === 'right' ? 'md:ml-auto' : ''}`}>
          <div className="flex items-center mb-4 gap-3 text-gradient-blue">
            <span className="text-3xl font-bold">{number}</span>
            <div className="h-px flex-grow bg-gradient-to-r from-cyber-blue to-cyber-green"></div>
          </div>
          <h3 className="text-2xl font-medium mb-3">{title}</h3>
          <p className="text-white/70">{description}</p>
        </div>
      </div>
      
      <div className="md:w-24 flex justify-center relative z-10">
        <div className="w-16 h-16 rounded-full glass grid place-items-center relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyber-green/20 to-cyber-blue/20 animate-pulse-slow"></div>
          {icon}
        </div>
      </div>
      
      <div className="flex-1"></div>
    </div>
  );
};

export default HowItWorks;
