import React from 'react';
import { Code, MessageSquareCode, Smartphone, Cloud, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const serviceItems = [
    {
      icon: Code,
      title: 'Web & Custom Web Applications',
      description: 'Custom-built enterprise software, customer management panels, and secure portals built with React and lightweight nodes to perform flawlessly on local data metrics.',
    },
    {
      icon: MessageSquareCode,
      title: 'WhatsApp Sales & Automation Bots',
      description: 'Unlock regional commerce channels with native AI integrations, automated ordering bots, and customer care pathways operating 24/7 on Zimbabwe’s favorite application.',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and hybrid iOS/Android mobile applications designed with offline-first capabilities, lightning-fast sync runtimes, and accessible user onboarding steps.',
    },
    {
      icon: Cloud,
      title: 'Cloud, Hosting & ICT',
      description: 'Dependable containerized server structures, domain registration, continuous deployment configurations, and scalable database systems engineered for regional stability.',
    },
  ];

  return (
    <section id="services" class="py-20 lg:py-28 bg-brand-secondary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div class="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <h2 class="text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">
            Core Service Architecture
          </h2>
          <p class="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-primary mb-4">
            Engineered Capabilities For Modern Commerce
          </p>
          <div class="w-12 h-1 bg-brand-accent mx-auto rounded-full" />
        </div>

        {/* Responsive Multi-Column Layout Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {serviceItems.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                class="group bg-white rounded-2xl p-6 lg:p-8 border border-slate-200/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/5 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Block Frame */}
                  <div class="inline-flex items-center justify-center p-3 rounded-xl bg-brand-primary text-brand-accent mb-6 transition-colors duration-300 group-hover:bg-brand-accent group-hover:text-brand-primary">
                    <IconComponent class="w-6 h-6" />
                  </div>
                  
                  {/* Service Text Metadata */}
                  <h3 class="text-xl font-bold text-brand-primary mb-3">
                    {service.title}
                  </h3>
                  <p class="text-sm leading-relaxed text-brand-text-dark/80">
                    {service.description}
                  </p>
                </div>

                {/* Subtext Action Interface */}
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-accent opacity-80 group-hover:opacity-100 transition-opacity">
                  <span>Learn application parameters</span>
                  <ArrowUpRight class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

