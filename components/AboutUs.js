'use client';

import { ArrowUpRight } from 'lucide-react';
import styles from './Layout.module.css';

// About Us Section - Simplified visual elements for the 2-hour sprint
export default function AboutUs() {
  return (
    <section id="about" className={`${styles.section} ${styles.aboutWrap}`}>
      <div className="flex items-center gap-8 w-full max-w-[500px]">
        <div className={styles.gradientBar} />
        <div className="flex-1 aspect-video bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative">
           <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 to-transparent" />
        </div>
      </div>

      <div className="flex-1">
        <div className="bg-gray-200 text-gray-600 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest w-fit mb-6">
          About Us
        </div>
        <h3 className="text-lg font-extrabold text-[#3730a3] mb-4">
          Engineering Trust. <span className="text-[#5850ec]">Delivering Intelligence.</span>
        </h3>
        <h2 className="text-4xl font-black text-[#111827] mb-6">At Cogniq AI</h2>
        <p className="text-gray-500 leading-relaxed mb-8 max-w-[550px]">
          we don't just develop features, we build <span className="text-[#5850ec] font-bold">full-scale AI systems</span> designed for clarity and growth. We partner with teams that want to innovate without compromise.
        </p>
        <button className="flex items-center gap-2 bg-[#1e1b4b] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#3730a3] transition-colors">
          Know more about Us <ArrowUpRight size={18} />
        </button>
      </div>
    </section>
  );
}
