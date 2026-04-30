'use client';

import { motion } from 'framer-motion';
import styles from './Process.module.css';

const WORKFLOW_STEPS = [
  {
    id: '01',
    title: 'Discovery & Strategy',
    text: 'Understand challenges and design a strategic AI roadmap tailored to your needs.',
  },
  {
    id: '02',
    title: 'Design & Prototype',
    text: 'Detailed wireframes and interactive prototypes to visualize the solution.',
  },
  {
    id: '03',
    title: 'Development & Testing',
    text: 'Rigorous testing and continuous collaboration to ensure peak performance.',
  },
  {
    id: '04',
    title: 'Launch & Growth',
    text: 'Deploy and optimize for continued success and measurable ROI.',
  },
];

export default function Process() {
  return (
    <section className={styles.workflowSection}>
      <div className={styles.stickyContainer}>
        <div className={styles.staticHeader}>
          <h2 className={styles.title}>Our Process</h2>
          <p className={styles.description}>
            From concept to creation, we work seamlessly to bring your AI vision to life with precision and speed.
          </p>
        </div>

        <div className={styles.stepsList}>
          {WORKFLOW_STEPS.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={styles.stepRow}
            >
              <div className={styles.stepNumber}>
                {step.id}
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>
                  {step.title}
                </h3>
                <p className={styles.stepText}>
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
