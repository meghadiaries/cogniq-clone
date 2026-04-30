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

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Lab', href: '#lab' },
    { name: 'Blogs', href: '#blog' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-white border border-gray-100 rounded-lg flex items-center justify-center shadow-sm">
            <Cpu className="w-6 h-6 text-[#5850ec]" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-[#3730a3]">Cogniq AI</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-[15px] font-semibold text-[#5850ec] hover:text-[#3730a3] transition-colors">
              {link.name}
            </Link>
          ))}
          <Link href="#contact" className="ml-4 px-7 py-3 bg-[#1e1b4b] hover:bg-[#3730a3] text-white text-[15px] font-bold rounded-xl transition-all shadow-md">
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-[#3730a3]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 py-8 px-6 flex flex-col gap-6 shadow-xl">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-lg font-bold text-[#3730a3]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#contact" 
            className="w-full py-4 bg-[#1e1b4b] text-center text-white font-bold rounded-xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}

      <style jsx>{`
        .container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      `}</style>
    </nav>
  );
}
