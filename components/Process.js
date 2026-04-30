'use client';

import { motion } from 'framer-motion';
import styles from './Process.module.css';

const WORKFLOW_STEPS = [
  {
    id: '01',
    title: 'Discovery & Strategy',
    text: 'Understand challenges and design a strategic AI roadmap.',
  },
  {
    id: '02',
    title: 'Design & Prototype',
    text: 'Detailed wireframes and interactive prototypes.',
  },
  {
    id: '03',
    title: 'Development & Testing',
    text: 'Rigorous testing and continuous collaboration.',
  },
  {
    id: '04',
    title: 'Launch & Growth',
    text: 'Deploy and optimize for continued success.',
  },
];

export default function Process() {
  return (
    <section id="lab" className={styles.processSection}>
      <div className={styles.processHeader}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.mainTitle}>Our Process</h2>
          <div className={styles.titleUnderline} />
        </div>
        <p className={styles.headerTagline}>From concept to creation, seamlessly.</p>
      </div>

      <div className={styles.processGrid}>
        {WORKFLOW_STEPS.map((step, idx) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={styles.processCard}
          >
            <div className={styles.cardGlow} />
            
            <div className={styles.stepCircle}>
              {step.id}
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDescription}>
                {step.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
