import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const visionSteps = [
  {
    number: '01',
    title: 'Vision',
    description: 'Build a Secure and User-Friendly Decentralized Finance Platform allowing users to quickly find the services they need and execute transactions with minimal friction.'
  },
  {
    number: '02',
    title: 'Inception',
    description: 'The second step in Raum network\'s vision is to integrate decentralized storage services into its platform. This integration should be seamless and user-friendly.'
  },
  {
    number: '03',
    title: 'Equate',
    description: 'The final step in Raum network\'s vision is to enable cross-chain interoperability, allowing users to seamlessly move their assets and data between different blockchain networks.'
  }
];

export function Vision() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-32 relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Vision for Raum Network Ecosystem
          </h2>
          <p className="text-lg text-gray-600">
            What we have planned for our Raum Network.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {visionSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-start mb-4">
                <span className="text-4xl font-bold text-blue-600 opacity-50">
                  {step.number}
                </span>
                <h3 className="text-2xl font-semibold ml-4">{step.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}