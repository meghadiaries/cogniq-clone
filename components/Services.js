'use client';

import { motion } from 'framer-motion';
import { Bot, Zap, BarChart, MousePointer2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'AI-Powered Customer Service',
      description: 'Automate 80% of routine queries and turn your support center into a revenue driver.',
      icon: <Bot className="w-8 h-8 text-[#5850ec]" />,
    },
    {
      title: 'Automated Scheduling & Operations',
      description: 'Eliminate no-shows and recover thousands in lost revenue with intelligent automation.',
      icon: <Zap className="w-8 h-8 text-[#5850ec]" />,
    },
    {
      title: 'Intelligent Inventory Management',
      description: 'Prevent stockouts and make data-driven decisions with predictive forecasting.',
      icon: <BarChart className="w-8 h-8 text-[#5850ec]" />,
    },
    {
      title: 'Micro Tools & Extensions',
      description: 'Lightweight tools powered by AI to boost productivity and workflow efficiency.',
      icon: <MousePointer2 className="w-8 h-8 text-[#5850ec]" />,
    },
  ];

  return (
    <section id="services" className="section-padding bg-[#f9fafb]">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#111827]">Our Services</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Solve your biggest challenges with end-to-end AI solutions tailored for clarity, transparency, and long-term growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-10 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="mb-8 p-4 bg-[#eef2ff] rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-5 text-[#111827]">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .section-padding {
          padding: 10rem 0;
        }
      `}</style>
    </section>
  );
}
