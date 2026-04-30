'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Cpu, LayoutTemplate } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'High-Trust Engineering',
      description: 'Research-backed methods with transparent communication every step of the way.',
      icon: <ShieldCheck className="w-6 h-6 text-[#5850ec]" />,
    },
    {
      title: 'Built for Scale',
      description: 'We build systems that grow with your business without breaking under pressure.',
      icon: <TrendingUp className="w-6 h-6 text-[#5850ec]" />,
    },
    {
      title: 'Gen AI Expertise',
      description: 'Deep experience with Large Language Models and custom AI architectures.',
      icon: <Cpu className="w-6 h-6 text-[#5850ec]" />,
    },
    {
      title: 'User-Centered Design',
      description: 'Every feature is intuitive, purposeful, and designed for human interaction.',
      icon: <LayoutTemplate className="w-6 h-6 text-[#5850ec]" />,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-[#111827]">Why Choose Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {reasons.map((reason, index) => (
                <div key={reason.title} className="flex flex-col gap-5">
                  <div className="p-3 bg-[#eef2ff] rounded-xl w-fit">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#111827]">{reason.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full relative">
            <div className="aspect-[4/3] bg-gradient-to-tr from-[#eef2ff] to-[#f5f3ff] rounded-[3rem] overflow-hidden border border-gray-100 flex items-center justify-center p-16 shadow-inner">
               <div className="w-full h-full border-2 border-dashed border-[#5850ec]/20 rounded-full animate-[spin_20s_linear_infinite] flex items-center justify-center">
                 <div className="w-3/4 h-3/4 border-2 border-dotted border-[#5850ec]/10 rounded-full flex items-center justify-center">
                   <div className="w-1/2 h-1/2 bg-[#5850ec]/5 blur-3xl rounded-full" />
                 </div>
               </div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-3xl shadow-2xl flex items-center justify-center">
                    <Cpu className="w-16 h-16 text-[#5850ec]" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

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
    </section>
  );
}
