'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-[#5850ec] selection:text-white bg-white">
      <Navbar />
      <Hero />
      
      {/* About Us Section matched to DOM: bg-[#F5F6FF] */}
      <section id="about" className="w-full bg-[#f5f6ff] flex justify-center py-14 overflow-hidden scroll-mt-24">
        <div className="container text-center">
          <h3 className="text-[#5850ec] font-black tracking-[0.2em] uppercase text-sm mb-6">
            Engineering Trust. Delivering Intelligence.
          </h3>
          <h2 className="text-3xl md:text-5xl font-extrabold max-w-4xl mx-auto leading-tight text-[#111827]">
            At Cogniq AI, we don't just develop features, we build full-scale AI systems designed for clarity, transparency, and long-term growth.
          </h2>
        </div>
      </section>

      <div id="services" className="scroll-mt-24 bg-white">
        <Services />
      </div>

      <div id="why-choose-us" className="scroll-mt-24 bg-gradient-to-br from-[#f8f9ff] to-[#f0f2ff]">
        <WhyChooseUs />
      </div>

      <div id="lab" className="scroll-mt-24 bg-white">
        <Process />
      </div>
      
      {/* Final CTA matched to DOM Footer style */}
      <section id="contact" className="section-padding bg-white">
        <div className="container">
          <div className="bg-gradient-to-br from-[#1e1b4b] to-[#4338ca] rounded-[2.5rem] p-12 md:p-20 text-center text-white shadow-2xl">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
              Ready to transform Your Workflow?
            </h2>
            <p className="text-xl text-indigo-100/80 mb-10 max-w-2xl mx-auto font-medium">
              Let's build a clear, actionable roadmap to solve your biggest operational challenges with AI.
            </p>
            <button className="px-10 py-4 bg-white text-[#1e1b4b] font-black rounded-xl hover:scale-105 transition-all shadow-xl text-lg">
              Book a Strategy Call
            </button>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .container {
          max-width: 1440px;
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
