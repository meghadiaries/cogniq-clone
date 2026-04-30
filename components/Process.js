'use client';

import styles from './Process.module.css';

const STEPS = [
  { id: '01', title: 'Discovery & Strategy', text: 'Understand challenges and design a strategic AI roadmap.' },
  { id: '02', title: 'Design & Prototype', text: 'Detailed wireframes and interactive prototypes.' },
  { id: '03', title: 'Development & Testing', text: 'Rigorous testing and continuous collaboration.' },
  { id: '04', title: 'Launch & Growth', text: 'Deploy and optimize for continued success.' },
];

export default function Process() {
  return (
    <section id="lab" className={styles.processSection}>
      <div className={styles.processHeader}>
        <div>
          <h2 className={styles.mainTitle}>Our Process</h2>
          <div className={styles.titleUnderline} />
        </div>
        <p className="text-gray-500 font-medium italic">From concept to creation, seamlessly.</p>
      </div>

      <div className={styles.processGrid}>
        {STEPS.map((s) => (
          <div key={s.id} className={styles.processCard}>
            <div className={styles.stepCircle}>
              {s.id}
            </div>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardDescription}>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
