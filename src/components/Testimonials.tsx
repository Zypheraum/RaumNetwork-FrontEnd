'use client'

import { useEffect, useState } from 'react'
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const testimonials = [

    {
      name: "Ethan Rivera",
      handle: "Blockchain Engineer at InnovateChain",
      avatar: "/placeholder.svg?height=40&width=40",
      quote: "RaumFi's decentralized exchange is a marvel of modern engineering. The seamless UX and consistently low gas fees make it stand out in a crowded market."
    },
    {
      name: "Sophia Kim",
      handle: "Head of Research at Digital Asset Partners",
      avatar: "/placeholder.svg?height=40&width=40",
      quote: "Chrysalis with Chainlink CCIP has truly redefined liquid staking. The ability to stake across chains and maximize yield while minting custom tokens is unmatched."
    },
    {
      name: "Liam Walker",
      handle: "Product Manager at DeFiStack",
      avatar: "/placeholder.svg?height=40&width=40",
      quote: "RaumFi’s pair creation feature is a lifesaver. It’s fast, intuitive, and avoids the usual headaches of token liquidity management."
    },
    {
      name: "Isabella Johnson",
      handle: "CTO at Quantum Finance Solutions",
      avatar: "/placeholder.svg?height=40&width=40",
      quote: "The cross-chain staking functionality in Chrysalis is groundbreaking. Managing assets across multiple networks has never been easier or more efficient."
    },
    {
      name: "Oliver Brooks",
      handle: "CEO of Nexus Ventures",
      avatar: "/placeholder.svg?height=40&width=40",
      quote: "RaumFi products are an essential part of our DeFi portfolio. From liquidity optimization to cross-chain staking, they deliver on every front."
    },
    {
      name: "Chloe Adams",
      handle: "DeFi Advisor at FutureBlocks",
      avatar: "/placeholder.svg?height=40&width=40",
      quote: "Chrysalis’s Chainlink CCIP integration enables secure and seamless token transfers across chains. It’s a game-changer for complex staking strategies."
    },
    {
      name: "Lucas Bennett",
      handle: "Lead Developer at OpenEdge Protocol",
      avatar: "/placeholder.svg?height=40&width=40",
      quote: "RaumFi’s ecosystem is built for scalability and efficiency. The hybrid approach to DeFi and storage has given our project a solid backbone."
    },
    {
      name: "Amelia Robinson",
      handle: "Chief Strategist at Adaptive Finance",
      avatar: "/placeholder.svg?height=40&width=40",
      quote: "RaumFi’s seamless integration of DeFi and storage solutions provides unmatched flexibility. It’s the future of blockchain innovation."
    }
  
  
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000) // 5 seconds per slide
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="rounded-2xl backdrop-blur-sm p-12">
        <div className="flex items-center gap-2 mb-8">
          <div className="h-5 w-5 rounded-full bg-gray-800/50" />
          <span className="text-sm font-medium text-gray-600">Our Customers</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-16">
          What People Are Saying
        </h2>

        <div className="overflow-hidden relative">
          <div 
            className="flex transition-transform duration-1000 ease-out"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 pr-8"
              >
                <div className="max-w-2xl">
                  <blockquote className="text-2xl font-light mb-8 leading-relaxed text-black">
                    {testimonial.quote}
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-medium text-black">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.handle}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex ? 'w-8 bg-blue-500' : 'w-2 bg-gray-600'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

