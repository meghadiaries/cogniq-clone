'use client';

import { ArrowUpRight } from 'lucide-react';
import styles from './AboutUs.module.css';

export default function AboutUs() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.visualSide}>
          <div className={styles.gradientBar} />
          <div className={styles.placeholderBox} />
        </div>

        <div className={styles.textSide}>
          <div className={styles.tag}>About Us</div>
          <h3 className={styles.headline}>
            Engineering Trust. <span className="text-[#5850ec]">Delivering Intelligence.</span>
          </h3>
          <h2 className={styles.subHeadline}>At Cogniq AI</h2>
          <p className={styles.paragraph}>
            we don't just develop features, we build <span className="text-[#5850ec] font-bold">full-scale AI systems</span> designed for clarity and growth.
          </p>
          <button className={styles.ctaBtn}>
            Know more about Us <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
