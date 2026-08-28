import React from 'react';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" class="relative min-h-[85vh] flex items-center justify-center bg-brand-primary overflow-hidden py-20">
      {/* Ambient Grid Blurs */}
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Startup Pill Tag */}
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/60 border border-slate-700/50 text-xs font-medium text-brand-accent mb-6 animate-fade-in">
          <Sparkles class="w-3.5 h-3.5" />
          <span>Next-Gen Enterprise Engineering</span>
        </div>

        {/* Hero Title Heading */}
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
          Scale Your Operations with <br />
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-brand-accent via-cyan-400 to-indigo-400">
            High-Performance Software
          </span>
        </h1>

        {/* Corporate Tagline */}
        <p class="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-10">
          We build tools that help Zimbabwean businesses sell faster, work smarter, and grow online. Engineered for local market realities with cloud infrastructure that never sleeps.
        </p>

        {/* Strategic CTA Nodes */}
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold rounded-xl text-brand-primary bg-brand-accent hover:bg-brand-accent-hover transition-all duration-200 shadow-lg shadow-brand-accent/10 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-primary"
          >
            Book Free Consultation
            <Calendar class="w-4 h-4 ml-2" />
          </a>
          
          <a
            href="#services"
            class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold rounded-xl text-slate-300 bg-slate-800/40 border border-slate-700/60 hover:bg-slate-800/80 hover:text-white transition-all duration-200 hover:-translate-y-0.5 focus:outline-none"
          >
            View Services
            <ArrowRight class="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}

