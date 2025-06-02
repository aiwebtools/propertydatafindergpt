
import React, { useRef, useEffect } from 'react';
import { Info } from 'lucide-react';

const LegalDisclaimer: React.FC = () => {
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
    <section className="py-12 bg-cyber-darkest">
      <div 
        ref={containerRef}
        className="container mx-auto px-4 opacity-0 translate-y-10 transition-all duration-700"
      >
        <div className="max-w-4xl mx-auto glass p-6 rounded-xl">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-full bg-white/5 flex-shrink-0">
              <Info className="w-5 h-5 text-cyber-blue" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Legal Disclaimer</h3>
              <div className="space-y-3 text-sm text-white/70">
                <p className="text-white/80 font-medium">
                  This tool is provided for informational, educational, and research purposes only.
                </p>
                <p>
                  The information provided by Property Data Finder GPT is gathered from publicly available sources and is intended for informational purposes only. While we strive for accuracy, the data may not always be complete, up-to-date, or error-free.
                </p>
                <p>
                  Property Data Finder GPT is not a substitute for professional advice. Users should verify all information independently before making any decisions based on the data provided. We recommend consulting with qualified professionals for legal, financial, or other specific advice related to property matters.
                </p>
                <p>
                  AI WEB TOOLS LLC makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained in this tool for any purpose.
                </p>
                <p>
                  By using Property Data Finder GPT, you acknowledge and agree that AI WEB TOOLS LLC shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or related to your use of the tool or the information it provides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalDisclaimer;
