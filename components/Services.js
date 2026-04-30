'use client';

import { Bot, Zap, BarChart, MousePointer2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import styles from './Services.module.css';

const SERVICES = [
  { title: 'AI-Powered Customer Service', icon: <Bot /> },
  { title: 'Automated Scheduling & Operations', icon: <Zap /> },
  { title: 'Intelligent Inventory Management', icon: <BarChart /> },
  { title: 'Micro Tools & Extensions', icon: <MousePointer2 /> },
];

export default function Services() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.mainTitle}>Our Services</h2>
        <div className={styles.titleUnderline} />
        <p className="text-gray-500 font-medium">Solve your biggest challenges with end-to-end AI solutions.</p>
      </div>

      <div className={styles.servicesGrid}>
        {SERVICES.map((s, i) => (
          <div key={i} className={styles.serviceCard}>
            <div className={styles.iconCircle}>
              {s.icon}
            </div>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardDescription}>
              Scalable AI-driven solutions tailored for operational efficiency and measurable business ROI.
            </p>
          </div>
        ))}
      </div>

      <div className={styles.viewAllWrapper}>
        <Link href="#services" className={styles.viewAllLink}>
          View all Services <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
