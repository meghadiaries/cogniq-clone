'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Cpu, LayoutTemplate } from 'lucide-react';
import styles from './Layout.module.css';

// Why Choose Us - Using a 2x2 card layout to match the original structure
export default function WhyChooseUs() {
  const items = [
    { title: 'High-Trust Engineering', icon: <ShieldCheck /> },
    { title: 'Built for Scale', icon: <TrendingUp /> },
    { title: 'Gen AI Expertise', icon: <Cpu /> },
    { title: 'User-Centered Design', icon: <LayoutTemplate /> },
  ];

  return (
    <section className="bg-[#f5f6ff] py-24 px-[5%]">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-20">
        <div className="lg:max-w-[300px]">
          <h2 className="text-2xl font-black text-[#1e1b4b] uppercase tracking-wider">Why Choose Us</h2>
          <div className="w-10 h-1 bg-[#5850ec] rounded-full my-4" />
          <p className="text-gray-500 font-medium">Passion for precision, commitment to quality.</p>
        </div>
        
        <div className={styles.featureGrid}>
          {items.map((item, i) => (
            <div key={i} className={styles.featureCard}>
              <div className="w-12 h-12 bg-[#5850ec] rounded-xl flex items-center justify-center text-white shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-[#1e1b4b] mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">Research-backed methods with transparent delivery.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
