'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="about" className="section-padding container text-center">
        <h3 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-6">Engineering Trust. Delivering Intelligence.</h3>
        <h2 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          At Cogniq AI, we don't just develop features, we build full-scale AI systems designed for clarity, transparency, and long-term growth.
        </h2>
      </div>
      <Services />
      <WhyChooseUs />
      <Process />
      
      {/* Final CTA */}
      <section id="contact" className="section-padding bg-gradient-to-b from-[#0a0a0b] to-blue-900/20">
        <div className="container text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to transform Your Workflow?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Let's build a clear, actionable roadmap to solve your biggest operational challenges with AI.
          </p>
          <button className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all scale-110 hover:scale-115">
            Book a Strategy Call
          </button>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .section-padding {
          padding: 8rem 0;
        }
      `}</style>
    </main>
  );
}
