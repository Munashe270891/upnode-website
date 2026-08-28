import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail, MapPin, Code, Layers } from 'lucide-react';

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor viewport scrolling to add visual elevation depth to the header frame
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
  ];

  return (
    <div class="min-h-screen flex flex-col font-sans bg-brand-secondary selection:bg-brand-accent/20">
      
      {/* --- STICKY NAV HEADFRAME --- */}
      <header 
        class={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-brand-primary/95 backdrop-blur-md shadow-lg border-b border-slate-800/50 py-3' 
            : 'bg-brand-primary py-5'
        }`}
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between">
            
            {/* Startup Identity / Logo */}
            <a href="#home" class="flex items-center space-x-2 group focus:outline-none">
              <div class="bg-gradient-to-br from-brand-accent to-brand-accent-hover p-2 rounded-lg text-brand-primary shadow-sm shadow-brand-accent/20">
                <Layers class="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <span class="text-xl font-bold tracking-tight text-white">
                UPNODE<span class="text-brand-accent">.</span>
              </span>
            </a>

            {/* Desktop Navigation Link Nodes */}
            <nav class="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  class="text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-brand-accent"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                class="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg text-brand-primary bg-brand-accent transition-all duration-200 hover:bg-brand-accent-hover hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-primary"
              >
                Contact Us
                <ArrowUpRight class="w-4 h-4 ml-1" />
              </a>
            </nav>

            {/* Mobile View Toggle Hamburg Element */}
            <div class="flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                class="text-slate-400 hover:text-white focus:outline-none"
                aria-label="Toggle menu navigation visibility"
              >
                {isMenuOpen ? <X class="w-6 h-6" /> : <Menu class="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Responsive Mobile Drawer Panel */}
        {isMenuOpen && (
          <div class="md:hidden absolute top-full left-0 w-full bg-brand-primary border-b border-slate-800 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div class="px-4 pt-3 pb-6 space-y-3 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-brand-accent hover:bg-slate-800/50"
                >
                  {link.label}
                </a>
              ))}
              <div class="pt-2 px-3">
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  class="flex items-center justify-center w-full px-4 py-3 text-base font-semibold rounded-lg text-brand-primary bg-brand-accent hover:bg-brand-accent-hover"
                >
                  Contact Us
                  <ArrowUpRight class="w-5 h-5 ml-1" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* --- MASTER APPLICATION VIEW INJECTION CORE --- */}
      {/* 
        The top padding ensures your layout content blocks are not hidden underneath the fixed navigation menu block.
        Future modules and web views render perfectly within this wrapper.
      */}
      <main class="flex-grow pt-20">
        {children}
      </main>

      {/* --- ENTERPRISE LEGAL & BRAND FOOTER WRAPPER --- */}
      <footer class="bg-brand-primary border-t border-slate-800 text-slate-400">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Corporate Summary Node */}
            <div class="space-y-4 md:col-span-1">
              <div class="flex items-center space-x-2">
                <div class="bg-brand-accent/10 p-1.5 rounded text-brand-accent">
                  <Code class="w-4 h-4" />
                </div>
                <span class="text-lg font-bold text-white tracking-tight">UPNODE</span>
              </div>
              <p class="text-xs leading-relaxed text-slate-400">
                Software Development, Cloud Solutions, Web & Mobile Applications, and ICT infrastructure services engineered for African scale.
              </p>
            </div>

            {/* Platform Quick Links Mapping */}
            <div>
              <h3 class="text-xs font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h3>
              <ul class="space-y-2.5 text-sm">
                <li><a href="#home" class="hover:text-brand-accent transition-colors">Home Base</a></li>
                <li><a href="#services" class="hover:text-brand-accent transition-colors">Core Offerings</a></li>
                <li><a href="#why-choose-us" class="hover:text-brand-accent transition-colors">Why Choose Us</a></li>
                <li><a href="#contact" class="hover:text-brand-accent transition-colors">Consultation Booking</a></li>
              </ul>
            </div>

            {/* Corporate Location Details */}
            <div>
              <h3 class="text-xs font-semibold text-white uppercase tracking-wider mb-4">Operational Office</h3>
              <ul class="space-y-3 text-sm">
                <li class="flex items-start">
                  <MapPin class="w-4 h-4 mr-2.5 text-brand-accent shrink-0 mt-0.5" />
                  <span class="text-xs leading-relaxed">
                    3778 Mainway Meadows,<br />
                    Waterfalls, Harare,<br />
                    Zimbabwe
                  </span>
                </li>
              </ul>
            </div>

            {/* Legal Governance Reference Nodes */}
            <div>
              <h3 class="text-xs font-semibold text-white uppercase tracking-wider mb-4">Governance Policies</h3>
              <ul class="space-y-2.5 text-sm">
                <li><a href="#terms" class="hover:text-brand-accent transition-colors text-xs">Terms & Conditions</a></li>
                <li><a href="#refunds" class="hover:text-brand-accent transition-colors text-xs">Payment & Refunds Policy</a></li>
              </ul>
            </div>

          </div>

          {/* Sub-Footer Framework Identity Disclaimer */}
          <div class="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
            <p class="mb-4 sm:mb-0">
              &copy; 2026 UPNODE TECHNOLOGIES [Pvt] Ltd. All Rights Reserved.
            </p>
            <p class="tracking-wide">
              Registered Local Entity • Zimbabwe
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}

