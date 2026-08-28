import React from 'react';
import { ShieldCheck, Zap, DollarSign, MessageSquare, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function Trust() {
  const trustPoints = [
    {
      icon: ShieldCheck,
      title: "Registered Local Entity",
      description: "Officially registered in Zimbabwe, complying with all local corporate standards and regional regulatory frameworks."
    },
    {
      icon: Zap,
      title: "Local Payment Integrations",
      description: "Seamless checkout and transaction processing via trusted local gateways including EcoCash, OneMoney, and Paynow."
    },
    {
      icon: MessageSquare,
      title: "Direct WhatsApp Support",
      description: "Instant communication channels linked directly with our Harare engineering team for rapid query resolution."
    },
    {
      icon: DollarSign,
      title: "Transparent, Clear Pricing",
      description: "No hidden fees or surprise maintenance costs. Straightforward packages structured for growing businesses."
    }
  ];

  return (
    <section className="py-20 bg-brand-primary text-white relative overflow-hidden">
      {/* Absolute background grid decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-secondary border border-slate-800 text-brand-accent text-xs font-semibold tracking-wider uppercase mb-4">
            <ShieldCheck className="w-4 h-4" /> Why Partner With Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Built for Zimbabwe. <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-indigo-400">Trusted Everywhere.</span>
          </h2>
          <p className="text-slate-400 text-lg">
            We combine world-class engineering standards with localized solutions, ensuring your business scales safely and reliably.
          </p>
        </div>

        {/* Grid of Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div 
                key={index}
                className="bg-brand-secondary/60 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 transition-all duration-300 hover:border-brand-accent/40 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-primary border border-slate-700 flex items-center justify-center text-brand-accent mb-5 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{point.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{point.description}</p>
              </div>
            );
          })}
        </div>

        {/* 50/50 Payment Structure & 7-Day Refund Guarantee Banner */}
        <div className="bg-gradient-to-r from-brand-secondary to-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* 50/50 Structure */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent shrink-0 mt-1">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Fair 50/50 Payment Structure</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  To protect your investment and build mutual trust, we operate on a secure milestone framework: 50% upfront deposit to commence development, and the remaining 50% only upon full deployment and your complete satisfaction.
                </p>
              </div>
            </div>

            {/* 7-Day Guarantee */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 mt-1">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">7-Day Risk-Free Guarantee</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We stand by the caliber of our code and solutions. If you aren't completely aligned with our direction within the first 7 days of kickoff, we offer a straightforward refund policy.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
