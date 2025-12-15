"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// We explicitly add 'delay' to the interface here so TypeScript knows it exists
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  noHover?: boolean;
  delay?: number; 
}

export function Card({ className, children, noHover, delay = 0, ...props }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay }} // Use the delay prop here
      whileHover={noHover ? {} : { y: -4, boxShadow: "0 10px 30px -10px rgba(74, 222, 128, 0.1)" }}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/5 bg-staff-surface/60 backdrop-blur-xl p-6",
        "shadow-lg transition-all duration-300",
        className
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
      
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 h-32 w-32 rounded-full bg-staff-primary/5 blur-3xl" />
    </motion.div>
  );
}
