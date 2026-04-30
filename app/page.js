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
      
      {/* New About Us section inserted above Services */}
      <AboutUs />

      <Services />

      <WhyChooseUs />

      <div id="lab">
        <Process />
      </div>
      
      {/* Interaction Conversion Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container px-6">
          <div className="bg-gradient-to-br from-[#1e1b4b] to-[#4338ca] rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl">
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
        }
      `}</style>
    </main>
  );
}
