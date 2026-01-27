import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/src/lib/utils";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus-visible-ring disabled:opacity-50 disabled:cursor-not-allowed rounded-lg";
    
    const variants = {
      primary: "bg-brand-primary text-white hover:bg-brand-primary-light shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40",
      secondary: "border border-brand-primary text-brand-primary hover:bg-brand-primary/10",
      ghost: "text-text-primary hover:bg-background-elevated",
    };
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;