'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Lightbulb, Target, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex justify-center items-center w-full bg-white pt-[90px] overflow-hidden">
      <div className="w-full h-full absolute inset-0 z-0">
        {/* Subtle decorative background elements */}
      </div>

      <div className="container relative z-10 w-full max-w-[1440px] flex flex-col items-center justify-center px-4 sm:px-6 py-20">
        
        {/* Floating Icons with DOM-matched positions */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute left-[2%] lg:left-[5%] top-[12%] z-5 hidden md:block"
        >
          <div className="p-5 bg-white rounded-full shadow-2xl border border-gray-100 animate-bounce">
            <Lightbulb className="w-8 h-8 text-gray-400" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="absolute right-[5%] lg:right-[8%] top-[15%] z-5 hidden md:block"
        >
          <div className="p-5 bg-white rounded-full shadow-2xl border border-gray-100">
            <Target className="w-8 h-8 text-blue-400" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="absolute right-[5%] lg:right-[15%] bottom-[20%] z-5 hidden md:block"
        >
          <div className="p-5 bg-white rounded-full shadow-2xl border border-gray-100">
            <Sparkles className="w-8 h-8 text-purple-400" />
          </div>
        </motion.div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-[900px] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-10 text-[#333]"
          >
            Building <span className="text-[#5850ec]">Intelligent</span>, scalable AI solutions for the <span className="text-[#5850ec]">Next Generation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-gray-500 mb-12 max-w-3xl mx-auto font-medium"
          >
            Your premier AI & Software engineering partner - transforming ideas into reliable, high-performance products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
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
    </section>
  );
}
