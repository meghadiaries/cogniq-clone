'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Cpu, LayoutTemplate } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'High-Trust Engineering',
      description: 'Research-backed methods with transparent communication every step of the way.',
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
    },
    {
      title: 'Built for Scale',
      description: 'We build systems that grow with your business without breaking under pressure.',
      icon: <TrendingUp className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: 'Gen AI Expertise',
      description: 'Deep experience with Large Language Models and custom AI architectures.',
      icon: <Cpu className="w-6 h-6 text-cyan-500" />,
    },
    {
      title: 'User-Centered Design',
      description: 'Every feature is intuitive, purposeful, and designed for human interaction.',
      icon: <LayoutTemplate className="w-6 h-6 text-purple-500" />,
    },
  ];

  return (
    <section className="section-padding bg-[#0a0a0b] border-y border-white/5">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Choose Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <div key={reason.title} className="flex flex-col gap-4">
                  <div className="p-2 bg-white/5 rounded-lg w-fit">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-bold">{reason.title}</h3>
                  <p className="text-gray-400 text-sm">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-square bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center p-12">
               {/* Decorative AI visual element */}
               <div className="w-full h-full border border-blue-500/30 rounded-full animate-pulse flex items-center justify-center">
                 <div className="w-3/4 h-3/4 border border-indigo-500/20 rounded-full flex items-center justify-center">
                   <div className="w-1/2 h-1/2 bg-blue-600/10 blur-2xl rounded-full" />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

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
    </section>
  );
}
