import { forwardRef } from "react";

import { cn } from "@/src/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: React.ReactNode;
  hover?: boolean;
  glow?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hover = true, glow = false, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={hover ? { y: -4, scale: 1.01 } : {}}
        className={cn(
          "relative rounded-xl p-6 bg-background-card border border-white/5",
          "shadow-lg transition-all duration-300",
          hover && "hover:shadow-2xl hover:border-brand-primary/30",
          glow && "glow-effect",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export default Card;