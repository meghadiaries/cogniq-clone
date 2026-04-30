'use client';

import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.mainHeading}>
          Building <span className={styles.accentText}>Intelligent</span>, scalable AI solutions for the <span className={styles.accentText}>Next Generation</span>
        </h1>

        <p className={styles.subText}>
          Your premier AI & Software engineering partner - transforming ideas into reliable, high-performance products.
        </p>

        <div className={styles.ctaGroup}>
          <Link href="#services" className={styles.secondaryAction}>
            Explore our services
          </Link>
          <Link href="#contact" className={styles.primaryAction}>
            Book a Strategy Call
          </Link>
        </div>
      </div>
    </section>
  );
}
