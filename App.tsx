import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Cta from './components/Cta';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#0F0B19] text-white font-sans relative h-full">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-purple-900/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-[20%] right-[-20%] w-[50%] h-[50%] bg-indigo-900/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-[-30%] left-[10%] w-[70%] h-[70%] bg-fuchsia-900/20 rounded-full blur-3xl animate-pulse delay-4000"></div>
      </div>
      
      <Header />
      <div className="scroll-container relative z-10">
        <main>
          <section id="hero" className="scroll-section">
            <Hero />
          </section>
          <section id="partners" className="scroll-section">
            <Partners />
          </section>
          <section id="features" className="scroll-section-long">
            <Features />
          </section>
          <section id="howitworks" className="scroll-section">
            <HowItWorks />
          </section>
          <section id="testimonials" className="scroll-section-long">
            <Testimonials />
          </section>
          <section id="pricing" className="scroll-section">
            <Pricing />
          </section>
          <section id="faq" className="scroll-section-long">
            <Faq />
          </section>
          <section id="cta-footer" className="scroll-section flex-col justify-between">
            <Cta />
            <div className="w-full">
              <Footer />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;