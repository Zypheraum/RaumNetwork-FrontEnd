
import { ArrowRight} from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  // {
  //   title: 'RaumFi DEX',
  //   description: 'V2 Styled AMM on Stellar/Soroban',
  //   Icon: Boxes
  // },
 
  // {
  //   title: 'Chrysalis',
  //   description: 'Chrysalis is a platform designed to aggregate Liquid Staking & Liquid Restaking benefits for seamless cross-chain interactions',
  //   Icon: GitBranch
  // } ,
  // {
  //   title: 'RaumStore',
  //   description: 'Raumstore integrates S3 object storage with IPFS to provide a computable storage solution for B2B clients.',
  //   Icon: Shield
  // },
];

export function Hero() {
  return (
    <div className="relative z-10 max-w-6xl mx-auto px-4 pt-20">
      <div className="text-center mb-0 mt-40"> {/* Reduced margin-bottom from 20 to 10 */}
        <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-8 tracking-tight">
          The Future of<br />Web3 Ecosystem
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Raum Network combines decentralized storage, cross-chain interoperability, and DeFi in one unified ecosystem.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="https://dex.raum.network"
            target='_blank'
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          {/* <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all transform hover:scale-105">
            Documentation
          </button> */}
        </div>
      </div>

      {/* Wrap features section in a div with overflow-hidden and a set height */}
      {/* <div className="overflow-hidden h-[calc(100vh-20rem)] mt-0"> */}
        <div className="grid md:grid-cols-3 gap-8 mt-20"> {/* Reduced margin-top from 20 to 10 */}
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              Icon={feature.Icon}
            />
          ))}
        </div>
      {/* </div> */}
    </div>
  );
}

