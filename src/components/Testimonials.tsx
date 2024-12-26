'use client'

import { useEffect, useState } from 'react'
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const testimonials = [
  {
    name: "Roviksi",
    handle: "@roviksiw",
    avatar: "/placeholder.svg?height=40&width=40",
    quote: "What I appreciated most about using tanX was the ability to trade without the need for a middleman."
  },
  {
    name: "Creative Mind",
    handle: "@creativityflow35",
    avatar: "/placeholder.svg?height=40&width=40",
    quote: "The decentralised nature of tanX app meant that I had complete control over my funds at all times."
  },
  {
    name: "Aryan",
    handle: "Trader, Ex JP Morgan",
    avatar: "/placeholder.svg?height=40&width=40",
    quote: "Spreads are fair, orders execute instantly, and the platform is easy to use. It's like someone finally built a DEX for traders, not for profit margins."
  },
  {
    name: "Shane Dickson",
    handle: "@shadison",
    avatar: "/placeholder.svg?height=40&width=40",
    quote: "The ease of integration, the powerful features, and the transparent fee structure are exactly why we use tanX."
  },
  {
    name: "AJ",
    handle: "Wazirx",
    avatar: "/placeholder.svg?height=40&width=40",
    quote: "What impressed me most about this orderbook DEX was the instant trade execution. No more waiting!"
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

