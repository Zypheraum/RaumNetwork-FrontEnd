import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Database, Lock, Cpu, Network } from 'lucide-react';

const ecosystemFeatures = [
  {
    icon: Database,
    title: 'Decentralized Storage',
    description: 'Enterprise-grade storage solution with end-to-end encryption and distributed redundancy.',
    comingSoon: false
  },
  {
    icon: Lock,
    title: 'Zero-Knowledge Proofs',
    description: 'Privacy-preserving computation and verification using advanced ZK technology.',
    comingSoon: true
  },
  {
    icon: Cpu,
    title: 'Cross-Chain Computing',
    description: 'Distributed computation network spanning multiple blockchain ecosystems.',
    comingSoon: true
  },
  {
    icon: Network,
    title: 'Interoperability Protocol',
    description: 'Seamless asset and data transfer across different blockchain networks.',
    comingSoon: false
  }
];

export function Ecosystem() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-32 relative z-10 " ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Raum Network Ecosystem
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive suite of Web3 infrastructure solutions designed for the next generation of decentralized applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {ecosystemFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg relative overflow-hidden"
            >
              <feature.icon className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                {feature.title}
                {feature.comingSoon && (
                  <span className="text-xs font-normal px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                    Coming Soon
                  </span>
                )}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 