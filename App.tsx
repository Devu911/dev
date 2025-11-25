import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { DemoSection } from './components/DemoSection';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        <Services />
        {/* The Demo Section acts as a Lead Magnet / Proof of Capability */}
        <DemoSection />
        <Pricing />
        
        {/* Contact / CTA Section */}
        <section id="contact" className="py-20 bg-brand-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to tell your story?</h2>
            <p className="text-brand-100 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free consultation call with our strategy team today. We'll audit your current content and propose a plan that works.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-white text-brand-700 rounded-lg font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg">
                Book Consultation
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
                View More Samples
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
