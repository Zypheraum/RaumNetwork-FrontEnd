import React from 'react';
import { ArrowRight, Shield, Boxes, GitBranch } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    title: 'RaumStore',
    description: 'Decentralized storage solution with military-grade encryption and instant access.',
    Icon: Shield
  },
  {
    title: 'RaumSwap',
    description: 'Cross-chain DEX with optimized routing and minimal slippage.',
    Icon: Boxes
  },
  {
    title: 'RaumBridge',
    description: 'Seamless asset bridging across multiple blockchain networks.',
    Icon: GitBranch
  }
];

export function Hero() {
  return (
    <div className="relative z-10 max-w-6xl mx-auto px-4 pt-32">
      <div className="text-center mb-20">
        <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-8 tracking-tight">
          The Future of<br />Web3 Infrastructure
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Raum Network combines decentralized storage, cross-chain interoperability, and DeFi in one unified ecosystem.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all transform hover:scale-105">
            Documentation
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-20">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            Icon={feature.Icon}
          />
        ))}
      </div>
    </div>
  );
}