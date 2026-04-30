'use client';

import { motion } from 'framer-motion';
import { Bot, Zap, BarChart, MousePointer2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'AI-Powered Customer Service',
      description: 'Automate 80% of routine queries and turn your support center into a revenue driver.',
      icon: <Bot className="w-8 h-8 text-blue-500" />,
    },
    {
      title: 'Automated Scheduling & Operations',
      description: 'Eliminate no-shows and recover thousands in lost revenue with intelligent automation.',
      icon: <Zap className="w-8 h-8 text-indigo-500" />,
    },
    {
      title: 'Intelligent Inventory Management',
      description: 'Prevent stockouts and make data-driven decisions with predictive forecasting.',
      icon: <BarChart className="w-8 h-8 text-cyan-500" />,
    },
    {
      title: 'Micro Tools & Extensions',
      description: 'Lightweight tools powered by AI to boost productivity and workflow efficiency.',
      icon: <MousePointer2 className="w-8 h-8 text-purple-500" />,
    },
  ];

  return (
    <section id="services" className="section-padding bg-[#0c0c0e]">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Solve your biggest challenges with end-to-end AI solutions tailored for clarity, transparency, and long-term growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-[#161618] border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all group"
            >
              <div className="mb-6 p-3 bg-white/5 rounded-xl w-fit group-hover:bg-blue-500/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .section-padding {
          padding: 8rem 0;
        }
      `}</style>
    </section>
  );
}
