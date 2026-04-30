'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-[#5850ec] selection:text-white bg-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Process />
      
      {/* Interaction Conversion Section - Using global CSS classes */}
      <section id="contact" className="py-24 container">
        <div className="cta-box" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?auto=format&fit=crop&q=80&w=1200")' }}>
          <div className="cta-overlay" />
          <div className="cta-content">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
              Ready to transform Your Workflow?
            </h2>
            <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto font-medium">
              Let's build a clear, actionable roadmap to solve your biggest operational challenges with AI
            </p>
            <button className="btn-primary inline-flex items-center gap-2">
              Book a Strategy Call <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
