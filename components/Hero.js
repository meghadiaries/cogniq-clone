'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Lightbulb, Target, Sparkles } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* Decorative Assets */}
      <motion.div 
        className={styles.floatingDecoration}
        style={{ left: '5%', top: '15%' }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className={styles.iconCircle}>
          <Lightbulb className="w-8 h-8 text-gray-300" />
        </div>
      </motion.div>

      <motion.div 
        className={styles.floatingDecoration}
        style={{ right: '8%', top: '20%' }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className={styles.iconCircle}>
          <Target className="w-8 h-8 text-blue-400" />
        </div>
      </motion.div>

      <motion.div 
        className={styles.floatingDecoration}
        style={{ right: '15%', bottom: '20%' }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className={styles.iconCircle}>
          <Sparkles className="w-8 h-8 text-purple-400" />
        </div>
      </motion.div>

      <div className={styles.contentWrapper}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.mainHeading}
        >
          Building <span className={styles.accentText}>Intelligent</span>, scalable AI solutions for the <span className={styles.accentText}>Next Generation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.subText}
        >
          Your premier AI & Software engineering partner - transforming ideas into reliable, high-performance products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.ctaGroup}
        >
          <Link href="#services" className={styles.secondaryAction}>
            Explore our services
          </Link>
          <Link href="#contact" className={styles.primaryAction}>
            Book a Strategy Call
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
