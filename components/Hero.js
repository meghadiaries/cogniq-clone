'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Layout.module.css';

// Hero Section - Using Framer Motion for quick reveal animations
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="max-w-[1000px] px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.heroHeading}
        >
          Building <span className={styles.accent}>Intelligent</span>, scalable AI solutions for the <span className={styles.accent}>Next Generation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-500 mb-10 font-medium"
        >
          Your premier AI & Software engineering partner - transforming ideas into reliable products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="#services" className="px-8 py-4 border-2 border-[#3730a3] text-[#3730a3] font-bold rounded-xl hover:bg-gray-50">
            Explore our services
          </Link>
          <Link href="#contact" className="px-8 py-4 bg-[#3730a3] text-white font-bold rounded-xl hover:opacity-90 shadow-lg shadow-indigo-200">
            Book a Strategy Call
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
