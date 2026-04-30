'use client';

import { motion } from 'framer-motion';
import { Bot, Zap, BarChart, MousePointer2 } from 'lucide-react';
import styles from './Services.module.css';

const SOLUTIONS = [
  {
    title: 'AI-Powered Customer Service',
    info: 'Automate 80% of routine queries and turn your support center into a revenue driver.',
    icon: <Bot className="w-8 h-8 text-[#5850ec]" />,
  },
  {
    title: 'Automated Scheduling & Operations',
    info: 'Eliminate no-shows and recover thousands in lost revenue with intelligent automation.',
    icon: <Zap className="w-8 h-8 text-[#5850ec]" />,
  },
  {
    title: 'Intelligent Inventory Management',
    info: 'Prevent stockouts and make data-driven decisions with predictive forecasting.',
    icon: <BarChart className="w-8 h-8 text-[#5850ec]" />,
  },
  {
    title: 'Micro Tools & Extensions',
    info: 'Lightweight tools powered by AI to boost productivity and workflow efficiency.',
    icon: <MousePointer2 className="w-8 h-8 text-[#5850ec]" />,
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.servicesContainer}>
      <div className={styles.headingArea}>
        <h2 className={styles.title}>Our Services</h2>
        <p className={styles.description}>
          Solve your biggest challenges with end-to-end AI solutions tailored for clarity, transparency, and long-term growth.
        </p>
      </div>

      <div className={styles.servicesGrid}>
        {SOLUTIONS.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={styles.serviceCard}
          >
            <div className={styles.iconWrapper}>
              {item.icon}
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>
              {item.info}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
