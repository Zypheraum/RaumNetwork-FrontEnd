import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Boxes, GitBranch, Box, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { VisionCard } from './VisionCard';

const visionSteps = [
  {
    number: '01',
    title: 'Infrastructure',
    description: 'Building a robust decentralized infrastructure that combines storage, computation, and cross-chain communication.',
    icon: Boxes,
    comingSoon: false
  },
  {
    number: '02',
    title: 'Integration',
    description: 'Creating seamless integrations with major blockchain networks and establishing a comprehensive DeFi ecosystem.',
    icon: GitBranch,
    comingSoon: false
  },
  {
    number: '03',
    title: 'Innovation',
    description: 'Advancing Web3 technology through continuous innovation in cryptography, consensus mechanisms, and cross-chain protocols.',
    icon: Box,
    comingSoon: false
  },
  {
    number: '04',
    title: 'Adoption',
    description: 'Fostering mass adoption by focusing on user-friendly interfaces, developer tools, and real-world applications.',
    icon: User,
    comingSoon: false
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
          <h2 className="text-4xl md:text-5xl font-bebas-neue gradient-text mb-6">
            Vision for Raum Network Ecosystem
          </h2>
          <p className="text-lg text-gray-600">
            What we have planned for our Raum Network.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {visionSteps.map((step, index) => (
            <VisionCard
              key={step.number}
              {...step}
              delay={index * 0.2}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}