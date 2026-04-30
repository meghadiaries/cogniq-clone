'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './Services.module.css';

const SERVICES = [
  { title: 'AI-Powered Customer Service' },
  { title: 'Automated Scheduling & Operations' },
  { title: 'Intelligent Inventory Management' },
  { title: 'Micro Tools & Extensions' },
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
            {/* Kept the circle but removed the icon for realism */}
            <div className={styles.iconCircle} />
            
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
