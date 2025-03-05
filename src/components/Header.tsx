
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './ui/Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-xl bg-cyber-darker/80 shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <HeaderButton 
            href="https://chatgpt.com/g/g-TZOj6RYcq-property-data-finder"
            isPrimary
          >
            CONDUCT PROPERTY DATA SEARCH
          </HeaderButton>
          <HeaderButton href="https://www.aiwebtools.ai">
            More AI Tools
          </HeaderButton>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-cyber-darker/95 backdrop-blur-xl transition-all duration-300 shadow-lg ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
          <HeaderButton 
            href="https://chatgpt.com/g/g-TZOj6RYcq-property-data-finder"
            isPrimary
            className="w-full justify-center"
          >
            CONDUCT PROPERTY DATA SEARCH
          </HeaderButton>
          <HeaderButton 
            href="https://www.aiwebtools.ai"
            className="w-full justify-center"
          >
            More AI Tools
          </HeaderButton>
        </div>
      </div>
    </header>
  );
};

interface HeaderButtonProps {
  children: React.ReactNode;
  href: string;
  isPrimary?: boolean;
  className?: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ 
  children, 
  href, 
  isPrimary = false,
  className = ""
}) => {
  return (
    <a 
      href={href}
      className={`
        relative px-4 py-2 rounded-full font-medium transition-all duration-300
        ${isPrimary 
          ? 'text-white bg-gradient-to-r from-cyber-blue to-cyber-purple hover:shadow-[0_0_15px_-3px_rgba(54,163,255,0.6)] scale-100 hover:scale-[1.03]' 
          : 'text-white/90 hover:text-white hover:bg-white/5'
        }
        ${className}
      `}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="relative z-10 flex items-center justify-center">{children}</span>
      {isPrimary && (
        <span className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full opacity-0 hover:opacity-20 transition-opacity"></span>
      )}
    </a>
  );
};

export default Header;
