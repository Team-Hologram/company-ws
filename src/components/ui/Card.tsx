"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
    variant?: "glass" | "solid" | "outline";
    hover?: boolean;
    padding?: "sm" | "md" | "lg" | "none";
}

const variants = {
    glass: `
    bg-[rgba(255,255,255,0.03)]
    backdrop-blur-xl
    border border-[rgba(255,255,255,0.06)]
  `,
    solid: "bg-obsidian border border-graphite",
    outline: "bg-transparent border border-graphite",
};

const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
};

const Card = forwardRef<HTMLDivElement, CardProps>(
    (
        {
            children,
            variant = "glass",
            hover = true,
            padding = "md",
            className = "",
            ...props
        },
        ref
    ) => {
        const baseStyles = `
      rounded-2xl
      transition-all duration-300
    `;

        const hoverStyles = hover
            ? "hover:border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.05)]"
            : "";

        const combinedStyles = `${baseStyles} ${variants[variant]} ${paddings[padding]} ${hoverStyles} ${className}`;

        return (
            <motion.div
                ref={ref}
                className={combinedStyles}
                whileHover={hover ? { y: -4 } : undefined}
                transition={{ duration: 0.3 }}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);

Card.displayName = "Card";

export default Card;
