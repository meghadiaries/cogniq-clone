'use client';

import { motion } from 'framer-motion';
import styles from './Layout.module.css';

// Process - 2x2 Dark Grid implementation
export default function Process() {
  const steps = [
    { id: '01', title: 'Discovery & Strategy', text: 'Understand challenges and design a strategic AI roadmap.' },
    { id: '02', title: 'Design & Prototype', text: 'Detailed wireframes and interactive prototypes.' },
    { id: '03', title: 'Development & Testing', text: 'Rigorous testing and continuous collaboration.' },
    { id: '04', title: 'Launch & Growth', text: 'Deploy and optimize for continued success.' },
  ];

  return (
    <section id="lab" className={styles.section}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4">
        <div>
          <h2 className="text-2xl font-black text-[#1e1b4b] uppercase tracking-wider">Our Process</h2>
          <div className="w-10 h-1 bg-[#5850ec] rounded-full my-4" />
        </div>
        <p className="text-gray-500 font-medium italic">From concept to creation, seamlessly.</p>
      </div>

      <div className={styles.processGrid}>
        {steps.map((step) => (
          <div key={step.id} className={styles.processCard}>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-black text-[#1e1b4b] mb-12">
              {step.id}
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-white mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed font-medium">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
