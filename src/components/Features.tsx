
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
          <h2 className="text-gradient-blue mb-4">Comprehensive Property Intelligence</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Our AI scans multiple sources to deliver accurate and complete property details,
            ensuring you have all the information you need for informed decisions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<DollarSign className="w-6 h-6 text-cyber-green" />}
            title="Property Value"
            description="Current market value and historical sales data to understand property worth"
          />
          <FeatureCard
            icon={<Map className="w-6 h-6 text-cyber-blue" />}
            title="Topography"
            description="Detailed information about property size, terrain features, and zoning"
          />
          <FeatureCard
            icon={<Home className="w-6 h-6 text-cyber-pink" />}
            title="Living Area"
            description="Precise square footage measurements and number of stories"
          />
          <FeatureCard
            icon={<Calendar className="w-6 h-6 text-cyber-purple" />}
            title="Year Built"
            description="Construction year and history of major renovations"
          />
          <FeatureCard
            icon={<Compass className="w-6 h-6 text-cyber-green" />}
            title="Facing Direction"
            description="Property orientation details to understand sun exposure and views"
          />
          <FeatureCard
            icon={<MapPin className="w-6 h-6 text-cyber-blue" />}
            title="Coordinates"
            description="Precise latitude and longitude for exact property location"
          />
        </div>
        
        <div className="mt-16 glass p-8 rounded-xl opacity-0 translate-y-10 transition-all duration-700" ref={el => el && setTimeout(() => el.classList.add('opacity-100', 'translate-y-0'), 700)}>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-medium mb-4">Data Verification Process</h3>
              <p className="text-white/80 mb-6">
                Unlike other property data tools that rely on single sources, 
                Property Data Finder GPT cross-references multiple reliable sources 
                to ensure the highest level of accuracy for every data point.
              </p>
              <ul className="space-y-3">
                {[
                  "Cross-references multiple authoritative sources",
                  "Prioritizes recent data over outdated information",
                  "Verifies data consistency across different platforms",
                  "Never fabricates missing information",
                  "Provides source attribution for all data points"
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
                  <p className="text-center text-sm text-white/90 font-medium">Accurate Data Verification</p>
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
