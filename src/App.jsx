import React from 'react';
import Layout from './Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import Trust from './components/Trust';
import Contact from './components/Contact';

export default function App() {
  /* 
    ==========================================================================
    FUTURE-PROOFING & ROUTING ARCHITECTURE SCALING GUIDE:
    ==========================================================================
    To migrate this single-page flow into a multi-page application (using 
    React Router `react-router-dom`), replace or wrap the standard component 
    sequence below with a <Routes> outlet container. 
    
    Example Scaled Structure:
    --------------------------------------------------------------------------
    import { Routes, Route } from 'react-router-dom';
    import ClientPortal from './features/portal/ClientPortal';
    import BookingManager from './features/booking/BookingManager';

    export default function App() {
      return (
        <Layout>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <Trust />
                <Contact />
              </>
            } />
            <Route path="/portal/*" element={<ClientPortal />} />
            <Route path="/booking" element={<BookingManager />} />
          </Routes>
        </Layout>
      );
    }
    ==========================================================================
  */

  return (
    <Layout>
      <main className="w-full overflow-hidden">
        {/* 1. Introductory High-Conversion Hero Banner */}
        <Hero />

        {/* 2. Core Technical Capabilities Matrix */}
        <Services />

        {/* 3. Regional Trust Pillars, Local Payments & 50/50 Terms */}
        <Trust />

        {/* 4. Direct Contact Channels, Map & Inquiry Form */}
        <Contact />
      </main>
    </Layout>
  );
}
