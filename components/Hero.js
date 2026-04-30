'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero container">
      <h1>
        Building <span className="text-[#5850ec]">Intelligent</span>, scalable AI solutions for the <span className="text-[#5850ec]">Next Generation</span>
      </h1>

      <p className="text-lg text-gray-500 mb-10 max-w-2xl font-medium">
        Your premier AI & Software engineering partner - transforming ideas into reliable, high-performance products.
      </p>

      <div className="flex flex-col sm:row gap-4">
        <Link href="#services" className="btn-secondary">
          Explore our services
        </Link>
        <Link href="#contact" className="btn-primary">
          Book a Strategy Call
        </Link>
      </div>
    </section>
  );
}
