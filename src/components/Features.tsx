import React, { useRef, useEffect } from 'react';
import { 
  Search, 
  Home, 
  Map, 
  DollarSign, 
  Compass, 
  Calendar, 
  MapPin, 
  Eye, 
  Check 
} from 'lucide-react';

const Features: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Add intersection observer to animate in the cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = containerRef.current?.querySelectorAll('.feature-card');
            cards?.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('opacity-100', 'translate-y-0');
                card.classList.remove('opacity-0', 'translate-y-10');
              }, index * 100);
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
    <section 
      ref={containerRef}
      className="py-20 relative bg-cyber-darker"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-700" ref={el => el && setTimeout(() => el.classList.add('opacity-100', 'translate-y-0'), 100)}>
          <h2 className="text-gradient-blue mb-4">AI WEB TOOLS - Comprehensive Property Intelligence</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            AIWEBTOOLS.AI leverages advanced AI technology to scan multiple sources and deliver accurate, 
            complete property data. Our AI tools ensure you have all the real estate information needed for informed decisions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<DollarSign className="w-6 h-6 text-cyber-green" />}
            title="AI Property Valuation"
            description="Advanced AI algorithms analyze current market value and historical sales data to provide accurate property valuations"
          />
          <FeatureCard
            icon={<Map className="w-6 h-6 text-cyber-blue" />}
            title="AI Topography Analysis"
            description="Our AI tools provide detailed property size, terrain features, and zoning information for comprehensive real estate analysis"
          />
          <FeatureCard
            icon={<Home className="w-6 h-6 text-cyber-pink" />}
            title="Smart Living Area Calculator"
            description="AI-powered precise square footage measurements and accurate number of stories calculation for any property"
          />
          <FeatureCard
            icon={<Calendar className="w-6 h-6 text-cyber-purple" />}
            title="Property History AI"
            description="Construction year analysis and complete history of major renovations using advanced AI data processing"
          />
          <FeatureCard
            icon={<Compass className="w-6 h-6 text-cyber-green" />}
            title="AI Orientation Analysis"
            description="Smart property orientation detection to understand sun exposure patterns and optimal views using AI technology"
          />
          <FeatureCard
            icon={<MapPin className="w-6 h-6 text-cyber-blue" />}
            title="GPS Coordinate AI"
            description="Precise latitude and longitude calculation using AI for exact property location and boundary identification"
          />
        </div>
        
        <div className="mt-16 glass p-8 rounded-xl opacity-0 translate-y-10 transition-all duration-700" ref={el => el && setTimeout(() => el.classList.add('opacity-100', 'translate-y-0'), 700)}>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-medium mb-4">AI WEB TOOLS Data Verification Process</h3>
              <p className="text-white/80 mb-6">
                Unlike other property data tools that rely on single sources, 
                AI WEB TOOLS' Property Data Finder GPT uses advanced AI to cross-reference multiple reliable sources, 
                ensuring the highest level of accuracy for every real estate data point.
              </p>
              <ul className="space-y-3">
                {[
                  "AI-powered cross-referencing of multiple authoritative real estate sources",
                  "Smart prioritization of recent data over outdated property information",
                  "Advanced AI verification of data consistency across different platforms",
                  "Ethical AI that never fabricates missing real estate information",
                  "Transparent source attribution for all property data points"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1 p-1 rounded-full bg-cyber-green/20">
                      <Check className="w-3 h-3 text-cyber-green" />
                    </span>
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-80 h-64 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/30 to-cyber-blue/30 rounded-lg blur-[80px]"></div>
              <div className="relative h-full cyber-border rounded-lg overflow-hidden">
                <div className="absolute inset-0 cyber-grid opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Eye className="w-16 h-16 text-cyber-green opacity-60" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-cyber-darker to-transparent">
                  <p className="text-center text-sm text-white/90 font-medium">AI-Powered Data Verification</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    <div className="feature-card glass-card p-6 rounded-xl opacity-0 translate-y-10 transition-all duration-700">
      <div className="p-3 bg-white/5 rounded-lg inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

export default Features;
