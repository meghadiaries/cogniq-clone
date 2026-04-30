'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Cpu } from 'lucide-react';
import styles from './Navbar.module.css';

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

  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '#about' },
    { label: 'Services', path: '#services' },
    { label: 'Our Lab', path: '#lab' },
    { label: 'Blogs', path: '#blog' },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logoWrapper}>
          <Cpu className="w-8 h-8 text-[#5850ec]" />
          <span className={styles.logoText}>Cogniq AI</span>
        </Link>

        <div className={styles.linksList}>
          {navigationItems.map((item) => (
            <Link key={item.label} href={item.path} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
          <Link href="#contact" className={styles.contactBtn}>
            Contact Us
          </Link>
        </div>

        <button className={styles.menuToggle} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[80px] bg-white z-[55] py-10 px-8 flex flex-col gap-6 animate-fade-in">
          {navigationItems.map((item) => (
            <Link 
              key={item.label} 
              href={item.path} 
              className="text-xl font-bold text-[#3730a3]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href="#contact" 
            className="w-full py-4 bg-[#3730a3] text-center text-white font-bold rounded-xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
