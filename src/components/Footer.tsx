
import React from 'react';
import Logo from './ui/Logo';
import { Mail, Phone, ExternalLink, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-16 pb-8 bg-cyber-darkest relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="space-y-6">
            <Logo size="lg" />
            <p className="text-white/60 text-sm">
              Advanced AI-powered property intelligence delivering comprehensive, accurate 
              property data from multiple verified sources.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:Contact@ai-webtools.com" 
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Email contact"
              >
                <Mail className="w-5 h-5 text-white/80" />
              </a>
              <a 
                href="tel:+14758008096" 
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Phone contact"
              >
                <Phone className="w-5 h-5 text-white/80" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <FooterLink href="https://chatgpt.com/g/g-TZOj6RYcq-property-data-finder">
                Property Data Search
              </FooterLink>
              <FooterLink href="https://realestategpt.lovable.app/?via=aiwebtools">
                Real Estate GPT
              </FooterLink>
              <FooterLink href="https://www.aiwebtools.ai">
                More AI Tools
              </FooterLink>
              <FooterLink href="https://openai.com/policies/privacy-policy/">
                Privacy Policy
              </FooterLink>
              <FooterLink href="https://aiwebtools.ai/terms-of-services">
                Terms of Service
              </FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">Contact Us</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0 text-cyber-blue" />
                <a href="tel:+14758008096" className="hover:text-white transition-colors">
                  (475) 800-8096
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0 text-cyber-blue" />
                <a href="mailto:Contact@ai-webtools.com" className="hover:text-white transition-colors">
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">Try Our AI Tools</h4>
            <p className="text-white/60 mb-4 text-sm">
              Get comprehensive property information and expert real estate assistance with our powerful AI tools.
            </p>
            <div className="space-y-3">
              <a 
                href="https://chatgpt.com/g/g-TZOj6RYcq-property-data-finder" 
                className="inline-flex items-center text-cyber-green hover:text-cyber-blue transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                Property Data Finder
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <div className="block"></div>
              <a 
                href="https://realestategpt.lovable.app/?via=aiwebtools" 
                className="inline-flex items-center text-cyber-pink hover:text-cyber-purple transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                Real Estate GPT
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <div className="block"></div>
              <a 
                href="https://www.aiwebtools.ai" 
                className="inline-flex items-center text-cyber-blue hover:text-cyber-accent transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                More AI Tools
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; 2025 <a href="https://www.aiwebtools.ai" className="hover:text-white transition-colors">AI WEB TOOLS LLC</a> All rights reserved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="https://realestategpt.lovable.app/?via=aiwebtools" 
              className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-cyber-green to-cyber-teal text-white text-sm font-medium rounded-full hover:shadow-[0_0_15px_-3px_rgba(56,249,215,0.6)] transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Real Estate GPT
              <ExternalLink className="ml-2 w-3.5 h-3.5" />
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white text-sm font-medium rounded-full hover:shadow-[0_0_15px_-3px_rgba(54,163,255,0.6)] transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              More AI Tools
              <ExternalLink className="ml-2 w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <li>
      <a 
        href={href}
        className="text-white/70 hover:text-white transition-colors group flex items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="w-1.5 h-1.5 bg-cyber-blue rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all"></span>
        {children}
      </a>
    </li>
  );
};

export default Footer;
