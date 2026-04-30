'use client';

import { ArrowUpRight } from 'lucide-react';
import styles from './AboutUs.module.css';

export default function AboutUs() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.visualSide}>
          <div className={styles.gradientBar} />
          <div className={styles.placeholderBox}>
             {/* Gradient box instead of image */}
             <div className={styles.innerGlow} />
          </div>
        </div>

        <div className={styles.textSide}>
          <div className={styles.tag}>About Us</div>
          <h3 className={styles.headline}>
            Engineering Trust. <span className={styles.headlineAccent}>Delivering Intelligence.</span>
          </h3>
          <h2 className={styles.subHeadline}>At Cogniq AI</h2>
          <p className={styles.paragraph}>
            we don't just develop features, we build <span className={styles.paragraphAccent}>full-scale AI systems</span> designed for clarity, transparency, and long-term growth. From startups to enterprises, we partner with teams that want to innovate without compromising on <span className="font-bold text-[#111827]">quality</span>.
          </p>
          <button className={styles.ctaBtn}>
            Know more about Us <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
