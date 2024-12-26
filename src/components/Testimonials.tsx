import { useEffect, useState } from 'react';

const testimonials = [
  {
    name: "Alex Thompson",
    role: "DeFi Developer",
    image: "/avatars/user1.png", // Add actual image paths
    quote: "Raum Network's cross-chain infrastructure is revolutionary. The integration between RaumFi DEX and Chrysalis has simplified our development workflow significantly."
  },
  {
    name: "Sarah Chen",
    role: "Blockchain Architect",
    image: "/avatars/user2.png",
    quote: "The hybrid storage solution of RaumStore has been a game-changer for our enterprise needs. Perfect balance of decentralization and performance."
  },
  {
    name: "Marcus Williams",
    role: "Crypto Fund Manager",
    image: "/avatars/user3.png",
    quote: "Chrysalis's liquid staking integration has helped us maximize yields across multiple chains. The automation and security are top-notch."
  },
  {
    name: "Elena Rodriguez",
    role: "Web3 Project Lead",
    image: "/avatars/user4.png",
    quote: "What stands out about Raum Network is how well everything integrates. From storage to DeFi, it's a comprehensive ecosystem that just works."
  }
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-32">
      <div className="border border-gray-800 rounded-2xl backdrop-blur-sm p-12">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              What People Are Saying
            </h2>
            <p className="text-gray-600">
              Don't just take our word for it - hear from some of our users
            </p>
            <div className="flex gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? 'w-8 bg-blue-500' : 'w-2 bg-gray-600'
                  }`}
                  onClick={() => setActiveIndex(idx)}
                />
              ))}
            </div>
          </div>

          <div className="md:w-2/3 relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${activeIndex * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, idx) => (
                  <div
                    key={idx}
                    className="w-full flex-shrink-0 p-8"
                  >
                    <blockquote className="text-xl text-black mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full border border-gray-800"
                      />
                      <div>
                        <div className="font-medium text-black">{testimonial.name}</div>
                        <div className="text-sm text-black">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
