'use client';

import { Bot, Zap, BarChart, MousePointer2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import styles from './Services.module.css';

const SERVICES_DATA = [
  {
    title: 'AI-Powered Customer Service',
    description: 'Automate 80% of routine queries and turn your support center into a revenue driver.',
    icon: <Bot className="w-6 h-6" />,
  },
  {
    title: 'Automated Scheduling & Operations',
    description: 'Eliminate no-shows and recover thousands in lost revenue with intelligent automation.',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'Intelligent Inventory Management',
    description: 'Prevent stockouts and make data-driven decisions with predictive forecasting.',
    icon: <BarChart className="w-6 h-6" />,
  },
  {
    title: 'Micro Tools & Extensions',
    description: 'Lightweight tools powered by AI to boost productivity and workflow efficiency.',
    icon: <MousePointer2 className="w-6 h-6" />,
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.mainTitle}>Our Services</h2>
        <div className={styles.titleUnderline} />
        <p className={styles.subtitle}>
          Solve your biggest challenges with end-to-end AI solutions.
        </p>
      </div>

      <div className={styles.servicesGrid}>
        {SERVICES_DATA.map((service) => (
          <div key={service.title} className={styles.serviceCard}>
            <div className={styles.iconCircle}>
              {service.icon}
            </div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDescription}>
              {service.description}
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
