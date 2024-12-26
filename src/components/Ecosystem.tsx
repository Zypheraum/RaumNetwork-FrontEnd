"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Database, Lock, Cpu, Network, ExternalLink, type LucideIcon } from 'lucide-react';

interface EcosystemFeature {
  icon: LucideIcon;
  title: string;
  description: string;
  comingSoon?: boolean;
  link?: string;
}

const ecosystemFeatures: EcosystemFeature[] = [
  {
    icon: Network,
    title: 'Decentralized Exchange',
    description: 'Empowering seamless trading on Stellar with next-gen AMM V2 for optimized liquidity and precision swaps.',
    comingSoon: false,
    link: 'https://dex.raum.network'
  },
  {
    icon: Database,
    title: 'Decentralized Storage',
    description: 'Enterprise-grade storage solution with end-to-end encryption and distributed redundancy.',
    comingSoon: false
  },
{
  icon: Lock,
  title: 'ZK Proof',
  description: 'Privacy-preserving computation and verification using advanced ZK technology.',
  comingSoon: true
  },
  {
    icon: Cpu,
    title: 'Chrysalis',
    description: 'Stake your assets across multiple blockchain networks through unified protocol, earning rewards while contributing to network security and interoperability',
    comingSoon: true,
    link:'https://tally.so/r/wL7Y5j'
  },
  
];

function EcosystemHeader({ inView }: { inView: boolean }) {
  return (
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
  );
}

function EcosystemCard({ 
  icon: Icon, 
  title, 
  description, 
  comingSoon, 
  link, 
  delay,
  inView 
}: EcosystemFeature & { delay: number; inView: boolean }) {
  const CardContent = () => (
    <>
      <div className="flex items-center justify-between relative z-10">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon className="h-12 w-12 text-blue-600 mb-4" />
        </motion.div>
        {link && <ExternalLink className="h-6 w-6 text-blue-600 mb-8" />}
      </div>
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
        {title}
        {comingSoon && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-xs font-normal px-2 py-1 bg-blue-100 text-blue-600 rounded-full"
          >
            Coming Soon
          </motion.span>
        )}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      whileHover={{ scale: 1.02, translateY: -5 }}
      className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg overflow-hidden hover:bg-black hover:bg-opacity-10 transition-colors duration-300 h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full relative z-10"
        >
          <CardContent />
        </a>
      ) : (
        <CardContent />
      )}

      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export function Ecosystem() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-32 relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <EcosystemHeader inView={inView} />

        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-3">
            <EcosystemCard
              {...ecosystemFeatures[0]}
              delay={0}
              inView={inView}
            />
          </div>
          <div className="col-span-1">
            <EcosystemCard
              {...ecosystemFeatures[1]}
              delay={0.2}
              inView={inView}
            />
          </div>
          <div className="col-span-1">
            <EcosystemCard
              {...ecosystemFeatures[2]}
              delay={0.4}
              inView={inView}
            />
          </div>
          <div className="col-span-3">
            <EcosystemCard
              {...ecosystemFeatures[3]}
              delay={0.6}
              inView={inView}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

