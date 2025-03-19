
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import LegalDisclaimer from '@/components/LegalDisclaimer';
import ToolButtons from '@/components/ToolButtons';
import Footer from '@/components/Footer';
import DisclaimerPopup from '@/components/DisclaimerPopup';

const Index: React.FC = () => {
  useEffect(() => {
    // Smooth scroll to section when clicking on anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    // Apply animations to elements when they come into view
    const observeElements = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
      });
    };
    
    observeElements();
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-cyber-dark text-white overflow-hidden">
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <LegalDisclaimer />
        <ToolButtons />
      </main>
      <Footer />
      <DisclaimerPopup />
    </div>
  );
};

export default Index;
