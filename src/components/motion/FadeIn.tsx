"use client";

import { useRef, useEffect, ReactNode } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    distance?: number;
    once?: boolean;
    className?: string;
}

export default function FadeIn({
    children,
    delay = 0,
    duration = 0.6,
    direction = "up",
    distance = 30,
    once = true,
    className = "",
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-100px" });

    const getInitialPosition = () => {
        switch (direction) {
            case "up":
                return { y: distance };
            case "down":
                return { y: -distance };
            case "left":
                return { x: distance };
            case "right":
                return { x: -distance };
            case "none":
                return {};
            default:
                return { y: distance };
        }
    };

    const variants: Variants = {
        hidden: {
            opacity: 0,
            ...getInitialPosition(),
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Staggered children component
interface StaggerChildrenProps {
    children: ReactNode;
    staggerDelay?: number;
    className?: string;
}

export function StaggerChildren({
    children,
    staggerDelay = 0.1,
    className = "",
}: StaggerChildrenProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: 0.2,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Stagger item wrapper
interface StaggerItemProps {
    children: ReactNode;
    className?: string;
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
}
