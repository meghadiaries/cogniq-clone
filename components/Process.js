'use client';

import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'Understand challenges and design a strategic AI roadmap tailored to your needs.',
    },
    {
      number: '02',
      title: 'Design & Prototype',
      description: 'Detailed wireframes and interactive prototypes to visualize the solution.',
    },
    {
      number: '03',
      title: 'Development & Testing',
      description: 'Rigorous testing and continuous collaboration to ensure peak performance.',
    },
    {
      number: '04',
      title: 'Launch & Growth',
      description: 'Deploy and optimize for continued success and measurable ROI.',
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3 sticky top-32">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
            <p className="text-gray-400">
              From concept to creation, we work seamlessly to bring your AI vision to life with precision and speed.
            </p>
          </div>

          <div className="md:w-2/3 flex flex-col gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-8 group"
              >
                <div className="text-5xl font-black text-white/5 group-hover:text-blue-500/20 transition-colors duration-500">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
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
