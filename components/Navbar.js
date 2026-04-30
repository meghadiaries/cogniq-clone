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

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className="flex items-center gap-2" style={{textDecoration: 'none'}}>
          <Cpu className="w-8 h-8 text-[#5850ec]" />
          <span className={styles.logoText}>Cogniq AI</span>
        </Link>

        <div className={styles.linksList}>
          {['Home', 'About Us', 'Services', 'Our Lab'].map((item) => (
            <Link key={item} href={`#${item.toLowerCase().replace(' ', '')}`} className={styles.navLink}>
              {item}
            </Link>
          ))}
          <Link href="#contact" className={styles.contactBtn}>
            Contact Us
          </Link>
        </div>

        <button className="lg:hidden" style={{background: 'none', border: 'none', cursor: 'pointer', color: '#3730a3'}} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
