'use client';

import { ShieldCheck, TrendingUp, Cpu, LayoutTemplate } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    { title: 'High-Trust Engineering', icon: <ShieldCheck /> },
    { title: 'Built for Scale', icon: <TrendingUp /> },
    { title: 'Gen AI Expertise', icon: <Cpu /> },
    { title: 'User-Centered Design', icon: <LayoutTemplate /> },
  ];

  return (
    <section className="bg-[#f5f6ff] py-24">
      <div className="container flex flex-col lg:row gap-16">
        <div className="lg:max-w-[300px]">
          <h2 className="text-2xl font-black text-[#1e1b4b] uppercase tracking-wider">Why Choose Us</h2>
          <div className="w-10 h-1 bg-[#5850ec] rounded-full my-4" />
          <p className="text-gray-500 font-medium">Passion for precision, commitment to quality.</p>
        </div>
        
        <div className="grid-2 flex-1">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="w-12 h-12 bg-[#5850ec] rounded-xl flex items-center justify-center text-white shrink-0">
                {f.icon}
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-[#1e1b4b] mb-1">{f.title}</h3>
                <p className="text-sm text-gray-500 font-medium">Research-backed methods with transparent delivery.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
