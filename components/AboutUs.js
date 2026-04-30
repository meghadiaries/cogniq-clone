'use client';

import { ArrowUpRight } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="about-section">
      <div className="container about-flex">
        <div className="flex items-center gap-6 flex-1">
          <div className="grad-bar" />
          <div className="flex-1 aspect-video bg-white rounded-2xl shadow-sm border border-gray-100" />
        </div>

        <div className="flex-1">
          <div className="bg-slate-200 text-slate-500 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest w-fit mb-6">
            About Us
          </div>
          <h3 className="text-lg font-extrabold text-[#3730a3] mb-2">
            Engineering Trust. <span className="text-[#5850ec]">Delivering Intelligence.</span>
          </h3>
          <h2 className="text-4xl font-black text-[#111827] mb-6">At Cogniq AI</h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            we don't just develop features, we build <span className="text-[#5850ec] font-bold">full-scale AI systems</span> designed for clarity and growth.
          </p>
          <button className="btn-primary inline-flex items-center gap-2">
            Know more about Us <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
