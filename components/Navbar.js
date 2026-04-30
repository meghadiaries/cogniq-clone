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
    <nav className={`fixed top-0 left-0 right-0 z-[60] h-[80px] flex items-center transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-white/90'}`}>
      <div className="container flex items-center justify-between px-6 md:px-12 lg:px-20">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center">
            <Cpu className="w-7 h-7 text-[#5850ec]" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#3730a3]">Cogniq AI</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-[15px] font-semibold text-[#5850ec] hover:text-[#3730a3] transition-colors">
              {link.name}
            </Link>
          ))}
          <Link href="#contact" className="ml-4 px-6 py-2.5 bg-[#3730a3] hover:bg-[#1e1b4b] text-white text-[15px] font-bold rounded-[8px] transition-all">
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
        <div className="lg:hidden fixed inset-0 top-[80px] bg-white z-[55] py-10 px-8 flex flex-col gap-6 animate-fade-in">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-xl font-bold text-[#3730a3]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
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
