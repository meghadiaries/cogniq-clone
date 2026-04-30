'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-[#5850ec] selection:text-white">
      <Navbar />
      <Hero />
      
      {/* Trust/About Section */}
      <div id="about" className="section-padding bg-white relative overflow-hidden">
        {/* Subtle grid accent */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#5850ec_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="container relative z-10 text-center">
          <h3 className="text-[#5850ec] font-black tracking-[0.2em] uppercase text-sm mb-8">
            Engineering Trust. Delivering Intelligence.
          </h3>
          <h2 className="text-3xl md:text-5xl font-extrabold max-w-5xl mx-auto leading-tight text-[#111827]">
            At Cogniq AI, we don't just develop features, we build full-scale AI systems designed for clarity, transparency, and long-term growth.
          </h2>
        </div>
      </div>

      <Services />
      <WhyChooseUs />
      <Process />
      
      {/* Final CTA */}
      <section id="contact" className="section-padding bg-white">
        <div className="container">
          <div className="bg-gradient-to-br from-[#1e1b4b] to-[#4338ca] rounded-[3rem] p-12 md:p-24 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Background decorative circles */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-10 leading-tight">
                Ready to transform Your Workflow?
              </h2>
              <p className="text-xl text-indigo-100/80 mb-12 max-w-2xl mx-auto font-medium">
                Let's build a clear, actionable roadmap to solve your biggest operational challenges with AI.
              </p>
              <button className="px-12 py-5 bg-white text-[#1e1b4b] font-black rounded-2xl hover:scale-105 transition-all shadow-xl text-lg">
                Book a Strategy Call
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .section-padding {
          padding: 10rem 0;
        }
      `}</style>
    </main>
  );
}
