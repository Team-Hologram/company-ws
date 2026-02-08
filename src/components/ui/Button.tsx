"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    href?: string;
    isExternal?: boolean;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
}

const variants: Record<ButtonVariant, string> = {
    primary:
        "bg-pure-white text-void-black hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)]",
    secondary:
        "bg-transparent text-pure-white border border-graphite hover:bg-glass-white hover:border-smoke",
    ghost: "bg-transparent text-silver hover:text-pure-white",
};

const sizes: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            variant = "primary",
            size = "md",
            href,
            isExternal = false,
            icon,
            iconPosition = "right",
            className = "",
            ...props
        },
        ref
    ) => {
        const baseStyles = `
      inline-flex items-center justify-center gap-2
      font-medium tracking-wide
      rounded-full
      transition-all duration-300
      disabled:opacity-50 disabled:cursor-not-allowed
    `;

        const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

        const content = (
            <>
                {icon && iconPosition === "left" && <span className="icon">{icon}</span>}
                {children}
                {icon && iconPosition === "right" && <span className="icon">{icon}</span>}
            </>
        );

        const motionProps = {
            whileHover: { y: -2 },
            whileTap: { scale: 0.98 },
            transition: { duration: 0.2 },
        };

        if (href) {
            if (isExternal) {
                return (
                    <motion.a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={combinedStyles}
                        {...motionProps}
                    >
                        {content}
                    </motion.a>
                );
            }
            return (
                <Link href={href} passHref legacyBehavior>
                    <motion.a className={combinedStyles} {...motionProps}>
                        {content}
                    </motion.a>
                </Link>
            );
        }

        return (
            <motion.button
                ref={ref}
                className={combinedStyles}
                {...motionProps}
                {...props}
            >
                {content}
            </motion.button>
        );
    }
);

Button.displayName = "Button";

export default Button;

// Arrow icon component for CTAs
export function ArrowIcon({ className = "" }: { className?: string }) {
    return (
        <svg
            className={`w-4 h-4 ${className}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
        </svg>
    );
}
