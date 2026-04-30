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
    <section className="section-padding bg-[#f9fafb] relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:w-1/3 lg:sticky lg:top-40">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#111827]">Our Process</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              From concept to creation, we work seamlessly to bring your AI vision to life with precision and speed.
            </p>
          </div>

          <div className="lg:w-2/3 flex flex-col gap-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-10 group"
              >
                <div className="text-6xl font-black text-gray-200 group-hover:text-[#5850ec]/20 transition-colors duration-500 tabular-nums">
                  {step.number}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold mb-4 text-[#111827] group-hover:text-[#5850ec] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
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
