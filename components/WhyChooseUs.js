'use client';

import { ShieldCheck, TrendingUp, Cpu, LayoutTemplate } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

const FEATURES = [
  { title: 'High-Trust Engineering', icon: <ShieldCheck /> },
  { title: 'Built for Scale', icon: <TrendingUp /> },
  { title: 'Gen AI Expertise', icon: <Cpu /> },
  { title: 'User-Centered Design', icon: <LayoutTemplate /> },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.brandingSection}>
      <div className={styles.layoutGrid}>
        <div className={styles.titleArea}>
          <h2 className={styles.mainTitle}>Why Choose Us</h2>
          <div className={styles.titleUnderline} />
          <p className="text-gray-500 font-medium">Passion for precision, commitment to quality.</p>
        </div>
        
        <div className={styles.featureGrid}>
          {FEATURES.map((f, i) => (
            <div key={i} className={styles.featureCard}>
              <div className={styles.iconContainer}>
                {f.icon}
              </div>
              <div>
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardText}>Research-backed methods with transparent delivery.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
