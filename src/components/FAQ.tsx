import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is Raum Network?",
    answer: "Raum Network is a comprehensive Web3 ecosystem that combines decentralized storage, cross-chain interoperability, and DeFi solutions. It's designed to provide seamless integration of various blockchain services."
  },
  {
    question: "How does RaumFi DEX work?",
    answer: "RaumFi DEX is a V2-styled Automated Market Maker (AMM) built on Stellar/Soroban. It enables users to swap tokens efficiently with minimal slippage and competitive fees."
  },
  {
    question: "What is Chrysalis?",
    answer: "Chrysalis is our advanced platform that aggregates Liquid Staking & Liquid Restaking benefits, enabling seamless cross-chain interactions and maximizing yield opportunities."
  },
  {
    question: "What makes RaumStore unique?",
    answer: "RaumStore combines S3 object storage with IPFS to create a hybrid storage solution specifically designed for B2B clients, offering both reliability and decentralization."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="rounded-2xl backdrop-blur-sm p-8 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 flex items-center">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="md:w-2/3 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-lg overflow-hidden bg-opacity-5"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#2563eb] bg-gradient-to-br from-blue-50/50 to-transparent"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
