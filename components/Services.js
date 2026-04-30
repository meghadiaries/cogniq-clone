'use client';

import { Bot, Zap, BarChart, MousePointer2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    { title: 'AI-Powered Customer Service', icon: <Bot /> },
    { title: 'Automated Scheduling & Operations', icon: <Zap /> },
    { title: 'Intelligent Inventory Management', icon: <BarChart /> },
    { title: 'Micro Tools & Extensions', icon: <MousePointer2 /> },
  ];

  return (
    <section id="services" className="py-24 container">
      <div className="mb-12">
        <h2 className="text-2xl font-black text-[#1e1b4b] uppercase tracking-wider">Our Services</h2>
        <div className="w-10 h-1 bg-[#5850ec] rounded-full my-4" />
        <p className="text-gray-500 font-medium">Solve your biggest challenges with end-to-end AI solutions.</p>
      </div>

      <div className="grid-2">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <div className="w-12 h-12 bg-[#5850ec] rounded-full flex items-center justify-center text-white mb-6">
              {s.icon}
            </div>
            <h3 className="text-xl font-extrabold text-[#5850ec] mb-4">{s.title}</h3>
            <p className="text-sm text-gray-500 font-medium">
              Scalable AI-driven solutions tailored for operational efficiency and measurable business ROI.
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="#services" className="inline-flex items-center gap-2 text-[#5850ec] font-bold">
          View all Services <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
