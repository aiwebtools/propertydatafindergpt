
import React, { useRef, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What kind of property information can Property Data Finder GPT provide?",
    answer: "Property Data Finder GPT provides comprehensive information including property value, topography, living area dimensions, year built, facing direction, and exact coordinates. It also includes additional details like number of bedrooms and bathrooms, lot size, zoning information, and sale history when available."
  },
  {
    question: "How accurate is the property information provided?",
    answer: "Property Data Finder GPT scans multiple authoritative sources and cross-references the data to ensure high accuracy. It prioritizes recent information and never fabricates data. All information is verified across multiple reliable sources before being presented."
  },
  {
    question: "Can it find information for any property address?",
    answer: "The tool is designed to find information for residential and commercial properties with registered addresses in public records. Coverage may vary depending on the availability of public data for specific regions or for very new constructions."
  },
  {
    question: "How recent is the property data provided?",
    answer: "Property Data Finder GPT prioritizes the most recent available data from multiple sources. For rapidly changing information like property values, it scans the latest listings and sales data to provide the most up-to-date information possible."
  },
  {
    question: "Is there a limit to how many properties I can look up?",
    answer: "There are no hard limits on the number of properties you can research. You can search for as many different properties as needed for your research or business purposes."
  },
  {
    question: "Can I use this tool for commercial purposes?",
    answer: "Yes, Property Data Finder GPT can be used for commercial purposes such as real estate business, property appraisal, investment research, and other professional applications related to property research."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const toggleFAQ = (index: number) => {
    setActiveIndex(prev => prev === index ? null : index);
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
  
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
      <div 
        ref={containerRef}
        className="container mx-auto px-4 relative z-10 opacity-0 translate-y-10 transition-all duration-700"
      >
        <div className="text-center mb-12">
          <h2 className="text-gradient-blue mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Find answers to common questions about Property Data Finder GPT
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'cyber-border' : ''
              }`}
            >
              <button
                className="w-full p-5 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="text-left font-medium text-lg">{item.question}</span>
                <span className="flex-shrink-0 ml-4">
                  {activeIndex === index ? (
                    <Minus className="w-5 h-5 text-cyber-green" />
                  ) : (
                    <Plus className="w-5 h-5 text-white/70" />
                  )}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-5 pt-0 border-t border-white/10">
                  <p className="text-white/70">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/70 mb-6">Still have questions?</p>
          <a 
            href="mailto:Contact@ai-webtools.com" 
            className="inline-block px-6 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
