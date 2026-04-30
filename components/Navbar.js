'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Cpu } from 'lucide-react';

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
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container flex justify-between items-center w-full">
        <Link href="/" className="flex items-center gap-2">
          <Cpu className="w-8 h-8 text-[#5850ec]" />
          <span className="text-xl font-extrabold text-[#3730a3]">Cogniq AI</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {['Home', 'About Us', 'Services', 'Our Lab'].map((item) => (
            <Link key={item} href={`#${item.toLowerCase().replace(' ', '')}`} className="text-sm font-semibold text-[#5850ec]">
              {item}
            </Link>
          ))}
          <Link href="#contact" className="btn-primary ml-4">
            Contact Us
          </Link>
        </div>

        <button className="lg:hidden text-[#3730a3]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}
