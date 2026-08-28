import React from 'react';
import { Mail, MessageCircle, MapPin, Send, PhoneCall } from 'lucide-react';

export default function Contact() {
  const whatsappNumber = "+263718000000"; // Replace with actual company WhatsApp line if needed
  const whatsappMessage = encodeURIComponent("Hello Upnode Technologies, I would like to discuss a custom project/automation solution.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-20 bg-brand-secondary text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Direct Info & CTAs */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary border border-slate-800 text-brand-accent text-xs font-semibold tracking-wider uppercase mb-4">
              <PhoneCall className="w-4 h-4" /> Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6">
              Let's Build Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-indigo-400">Digital Advantage</span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Whether you need a custom web application, an automated WhatsApp sales bot, or reliable local cloud hosting, our Harare team is ready to engineer your solution. Reach out via email or connect with us instantly on WhatsApp.
            </p>

            <div className="space-y-6">
              {/* Email Deep Link */}
              <a 
                href="mailto:info@upnodetech.co.zw"
                className="flex items-center gap-4 p-4 rounded-xl bg-brand-primary border border-slate-800 hover:border-brand-accent/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-secondary border border-slate-700 flex items-center justify-center text-brand-accent group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">Email Us Directly</p>
                  <p className="text-white font-semibold text-lg group-hover:text-brand-accent transition-colors">info@upnodetech.co.zw</p>
                </div>
              </a>

              {/* WhatsApp Handler Link */}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-brand-primary border border-slate-800 hover:border-emerald-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-secondary border border-slate-700 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">Instant Chat Support</p>
                  <p className="text-white font-semibold text-lg group-hover:text-emerald-400 transition-colors">Chat via WhatsApp</p>
                </div>
              </a>

              {/* Physical Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-brand-primary border border-slate-800">
                <div className="w-12 h-12 rounded-lg bg-brand-secondary border border-slate-700 flex items-center justify-center text-indigo-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">Headquarters</p>
                  <p className="text-white font-medium text-sm">Mainway Meadows, Waterfalls, Harare, Zimbabwe</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Simple Quick Inquiry Form */}
          <div className="bg-brand-primary border border-slate-800 rounded-3xl p-8 shadow-2xl relative">
            <h3 className="text-2xl font-bold text-white mb-2">Send a Quick Inquiry</h3>
            <p className="text-slate-400 text-sm mb-6">Fill out the form below and an engineer will get back to you within hours.</p>

            <form onSubmit={(e) => { e.preventDefault(); alert("Inquiry submitted successfully! We will contact you shortly."); }} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Tendai Moyo" 
                  className="w-full px-4 py-3 rounded-xl bg-brand-secondary border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">Email or Phone Number</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. tendai@company.co.zw / +263..." 
                  className="w-full px-4 py-3 rounded-xl bg-brand-secondary border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">Project Details</label>
                <textarea 
                  rows="4"
                  required
                  placeholder="Tell us about your custom web app or automation needs..." 
                  className="w-full px-4 py-3 rounded-xl bg-brand-secondary border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition-colors text-sm resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-accent to-indigo-600 text-brand-primary font-bold text-sm tracking-wide uppercase flex items-center justify-center gap-2 shadow-lg shadow-brand-accent/20 hover:opacity-95 transition-opacity cursor-pointer"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
