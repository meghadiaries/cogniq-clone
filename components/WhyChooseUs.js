'use client';

import { ShieldCheck, TrendingUp, Cpu, LayoutTemplate } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

const VALUE_PROPS = [
  {
    title: 'High-Trust Engineering',
    desc: 'Research-backed methods with transparent communication.',
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    title: 'Built for Scale',
    desc: 'Your product grows without breaking.',
    icon: <TrendingUp className="w-8 h-8" />,
  },
  {
    title: 'Gen AI Expertise',
    desc: 'Deep experience with LLMs and custom AI.',
    icon: <Cpu className="w-8 h-8" />,
  },
  {
    title: 'User-Centered Design',
    desc: 'Every feature is intuitive and purposeful.',
    icon: <LayoutTemplate className="w-8 h-8" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.brandingSection}>
      <div className={styles.layoutGrid}>
        <div className={styles.titleArea}>
          <h2 className={styles.mainTitle}>Why Choose Us</h2>
          <div className={styles.titleUnderline} />
          <p className={styles.subtitle}>
            Passion for precision, commitment to quality.
          </p>
        </div>
        
        <div className={styles.featureGrid}>
          {VALUE_PROPS.map((prop) => (
            <div key={prop.title} className={styles.featureCard}>
              <div className={styles.iconContainer}>
                {prop.icon}
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{prop.title}</h3>
                <p className={styles.cardText}>{prop.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
