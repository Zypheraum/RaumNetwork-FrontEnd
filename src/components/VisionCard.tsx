import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface VisionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  number: string;
  comingSoon?: boolean;
  delay: number;
  inView: boolean;
}

export function VisionCard({ 
  icon: Icon, 
  title, 
  description, 
  number, 
  comingSoon, 
  delay, 
  inView 
}: VisionCardProps) {
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
      className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="absolute top-0 right-0 p-4 opacity-10 text-4xl font-bold text-blue-600">
        {number}
      </div>

      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative z-10"
      >
        <Icon className="h-12 w-12 text-blue-600 mb-6 transform transition-transform" />
      </motion.div>

      <div className="relative z-10">
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
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}