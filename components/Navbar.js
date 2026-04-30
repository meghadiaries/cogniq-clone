'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Cpu } from 'lucide-react';
import styles from './Layout.module.css';

// Navbar implementation - focused on sticky behavior for the assessment
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className="flex items-center gap-2">
          <Cpu className="w-8 h-8 text-[#5850ec]" />
          <span className="text-xl font-extrabold text-[#3730a3]">Cogniq AI</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {['Home', 'About Us', 'Services', 'Our Lab'].map((item) => (
            <Link key={item} href={`#${item.toLowerCase().replace(' ', '')}`} className="text-sm font-semibold text-[#5850ec] hover:text-[#3730a3]">
              {item}
            </Link>
          ))}
          <Link href="#contact" className="ml-4 px-6 py-2.5 bg-[#3730a3] text-white text-sm font-bold rounded-lg hover:bg-[#1e1b4b]">
            Contact Us
          </Link>
        </div>

        <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}
