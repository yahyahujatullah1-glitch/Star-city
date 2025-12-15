import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  noHover?: boolean;
}

export function Card({ className, children, noHover, ...props }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={noHover ? {} : { scale: 1.01, boxShadow: "0 0 20px rgba(74, 222, 128, 0.1)" }}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/5 bg-staff-surface/80 backdrop-blur-md p-6",
        "shadow-lg transition-all duration-300",
        className
      )}
      {...props}
    >
      {/* Subtle Glow Effect */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-staff-primary/5 blur-3xl" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
