
import React, { useState, useEffect } from 'react';
import { Shield, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const DisclaimerPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  
  useEffect(() => {
    // Check if the user has already seen the disclaimer
    const hasSeenDisclaimer = localStorage.getItem('hasSeenDisclaimer');
    
    if (!hasSeenDisclaimer) {
      // Show popup with a slight delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAgree = () => {
    setIsClosing(true);
    // Allow animation to complete before hiding
    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem('hasSeenDisclaimer', 'true');
    }, 500);
  };
  
  if (!isVisible) return null;
  
  return (
    <div className={cn(
      "fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300",
      isClosing ? "opacity-0" : "opacity-100"
    )}>
      <div className={cn(
        "relative w-full max-w-md mx-4 p-6 rounded-xl glass transition-all duration-500 cyber-border overflow-hidden",
        isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
      )}>
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyber-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyber-blue/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="mb-4 flex justify-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-cyber-purple to-cyber-blue">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-center mb-4 text-gradient-purple">Legal Disclaimer</h3>
          
          <div className="space-y-4 mb-6 text-white/90">
            <p>
              The information provided by Property Data Finder GPT is for informational purposes only. Data is gathered from publicly available sources which may not always be complete or up-to-date.
            </p>
            <p>
              By continuing, you acknowledge that AI WEB TOOLS LLC shall not be liable for any damages arising from your use of this service.
            </p>
          </div>
          
          <button 
            onClick={handleAgree}
            className="w-full py-3 px-4 rounded-lg font-medium text-white bg-gradient-to-r from-cyber-purple to-cyber-blue 
            relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_-3px_rgba(54,163,255,0.6)] 
            active:scale-95 group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyber-green to-cyber-blue opacity-0 
            group-hover:opacity-30 transition-opacity duration-300"></span>
            <span className="relative flex items-center justify-center gap-2">
              <span className="text-lg tracking-wider font-bold">I AGREE</span>
              <Check className="w-5 h-5" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
