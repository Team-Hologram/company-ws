"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxSectionProps {
    children: React.ReactNode;
    speed?: number;
    className?: string;
}

export default function ParallaxSection({
    children,
    speed = 0.5,
    className = "",
}: ParallaxSectionProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const tween = gsap.to(ref.current, {
            y: () => -100 * speed,
            ease: "none",
            scrollTrigger: {
                trigger: ref.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });

        return () => {
            tween.kill();
        };
    }, [speed]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}

// Horizontal scroll section
interface HorizontalScrollProps {
    children: React.ReactNode;
    className?: string;
}

export function HorizontalScroll({
    children,
    className = "",
}: HorizontalScrollProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !scrollRef.current) return;

        const scrollWidth = scrollRef.current.scrollWidth;
        const containerWidth = containerRef.current.offsetWidth;

        const tween = gsap.to(scrollRef.current, {
            x: () => -(scrollWidth - containerWidth),
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: () => `+=${scrollWidth}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            },
        });

        return () => {
            tween.kill();
        };
    }, []);

    return (
        <div ref={containerRef} className={`overflow-hidden ${className}`}>
            <div ref={scrollRef} className="flex">
                {children}
            </div>
        </div>
    );
}

// Section reveal animation
interface SectionRevealProps {
    children: React.ReactNode;
    className?: string;
}

export function SectionReveal({ children, className = "" }: SectionRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        gsap.fromTo(
            ref.current,
            {
                opacity: 0,
                y: 60,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
