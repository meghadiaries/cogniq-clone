'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Cpu, LayoutTemplate } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

const VALUE_PROPS = [
  {
    title: 'High-Trust Engineering',
    desc: 'Research-backed methods with transparent communication every step of the way.',
    icon: <ShieldCheck className="w-6 h-6 text-[#5850ec]" />,
  },
  {
    title: 'Built for Scale',
    desc: 'We build systems that grow with your business without breaking under pressure.',
    icon: <TrendingUp className="w-6 h-6 text-[#5850ec]" />,
  },
  {
    title: 'Gen AI Expertise',
    desc: 'Deep experience with Large Language Models and custom AI architectures.',
    icon: <Cpu className="w-6 h-6 text-[#5850ec]" />,
  },
  {
    title: 'User-Centered Design',
    desc: 'Every feature is intuitive, purposeful, and designed for human interaction.',
    icon: <LayoutTemplate className="w-6 h-6 text-[#5850ec]" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.brandingSection}>
      <div className={styles.layoutGrid}>
        <div className={styles.textContent}>
          <h2 className={styles.sectionTitle}>Why Choose Us</h2>
          <div className={styles.featureList}>
            {VALUE_PROPS.map((prop) => (
              <div key={prop.title} className={styles.featureItem}>
                <div className={styles.iconBox}>
                  {prop.icon}
                </div>
                <h3 className={styles.featureTitle}>{prop.title}</h3>
                <p className={styles.featureText}>{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.visualContent}>
          <div className={styles.interactionLayer}>
             <div className={styles.spinner}>
               <div className="w-3/4 h-3/4 border border-indigo-100 rounded-full flex items-center justify-center">
                 <div className="w-1/2 h-1/2 bg-blue-500/5 blur-3xl rounded-full" />
               </div>
             </div>
             <div className={styles.coreIcon}>
               <Cpu className="w-16 h-16 text-[#5850ec]" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
