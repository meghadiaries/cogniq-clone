'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Lightbulb, Target, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Floating Decorative Icons */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-[10%] p-4 bg-white rounded-full shadow-xl border border-gray-100 hidden lg:block"
      >
        <Lightbulb className="w-8 h-8 text-gray-400" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-52 right-[10%] p-4 bg-white rounded-full shadow-xl border border-gray-100 hidden lg:block"
      >
        <Target className="w-8 h-8 text-blue-400" />
      </motion.div>

      <motion.div 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-[15%] p-4 bg-white rounded-full shadow-xl border border-gray-100 hidden lg:block"
      >
        <Sparkles className="w-8 h-8 text-purple-400" />
      </motion.div>

      <div className="container relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-10 text-[#333]"
          >
            Building <span className="text-[#5850ec]">Intelligent</span>, scalable AI solutions for the <span className="text-[#5850ec]">Next Generation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-500 mb-12 max-w-3xl mx-auto font-medium"
          >
            Your premier AI & Software engineering partner - transforming ideas into reliable, high-performance products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <Link 
              href="#services" 
              className="px-10 py-4 bg-white text-[#3730a3] font-bold rounded-xl border-2 border-[#3730a3] hover:bg-gray-50 transition-all min-w-[240px]"
            >
              Explore our services
            </Link>
            <Link 
              href="#contact" 
              className="px-10 py-4 bg-gradient-to-r from-[#1e1b4b] to-[#6366f1] text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-lg min-w-[240px]"
            >
              Book a Strategy Call
            </Link>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
      `}</style>
    </section>
  );
}
