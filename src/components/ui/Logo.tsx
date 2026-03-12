
import React from 'react';
import { Home } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  size = "md", 
  showTagline = true 
}) => {
  const sizes = {
    sm: "text-base sm:text-lg",
    md: "text-lg sm:text-xl",
    lg: "text-xl sm:text-2xl",
  };
  
  return (
    <div className={`flex items-center gap-1.5 sm:gap-2 ${className}`}>
      <div className="relative p-1 sm:p-1.5 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/40 to-cyber-purple/40 animate-pulse-slow"></div>
        <Home className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
      </div>
      <div className="flex flex-col">
        <span className={`font-bold tracking-tight ${sizes[size]} text-gradient-blue`}>
          Property Data Finder GPT
        </span>
        {showTagline && (
          <span className="text-[10px] sm:text-xs text-muted-foreground mt-[-2px]">
            Presented by <a href="https://aiwebtools.lovable.app/?via=aiwebtools" className="hover:text-cyber-accent transition-colors">AiWebTools.Ai</a>
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
