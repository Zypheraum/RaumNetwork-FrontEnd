import React from 'react';
import { motion } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';

interface VisionStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  comingSoon?: boolean;
}

export function VisionCard({ 
  number, 
  title, 
  description, 
  icon: Icon, 
  comingSoon, 
  delay, 
  inView 
}: VisionStep & { delay: number; inView: boolean }) {
  return (
    <motion.div
  whileHover="hover"
  initial="idle"
  animate="idle"
  transition={{
    duration: 0.4,
    delay,
    ease: [0.22, 1, 0.36, 1],
  }}
  variants={{
    idle: { scale: 1, y: 0, transition: { duration: 0.1 } },
    hover: { scale: 1.02, y: -5, transition: { duration: 0.1 } },
  }}
  className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg overflow-hidden hover:bg-[#2563eb] transition-all duration-150 h-full"
>
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150"></div>
  <div className="flex items-center justify-between relative z-10">
    <motion.div
      variants={{
        idle: { scale: 1, rotate: 0 },
        hover: { scale: 1.1, rotate: 5 },
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Icon className="h-12 w-12 text-blue-600 mb-4 group-hover:text-white" />
    </motion.div>
    {/* <span className="text-2xl font-bold text-blue-600 group-hover:text-white">{number}</span> */}
  </div>
  <h3 className="text-xl font-semibold mb-4 flex items-center gap-3 group-hover:text-white">
    {title}
    {comingSoon && (
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-xs font-normal px-2 py-1 bg-blue-100 text-blue-600 rounded-full group-hover:bg-white group-hover:text-blue-600"
      >
        Coming Soon
      </motion.span>
    )}
  </h3>
  <p className="text-gray-600 leading-relaxed group-hover:text-white">{description}</p>
</motion.div>

  );
}