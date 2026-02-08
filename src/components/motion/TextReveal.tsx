"use client";

import { useRef, useEffect, ReactNode, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
    duration?: number;
    stagger?: number;
    trigger?: "load" | "scroll";
}

export default function TextReveal({
    children,
    className = "",
    delay = 0,
    duration = 1,
    stagger = 0.03,
    trigger = "scroll",
}: TextRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [chars, setChars] = useState<string[]>([]);

    useEffect(() => {
        // Split text into characters
        setChars(children.split(""));
    }, [children]);

    useEffect(() => {
        if (!containerRef.current || chars.length === 0) return;

        const charElements = containerRef.current.querySelectorAll(".char");

        const tween = gsap.fromTo(
            charElements,
            {
                opacity: 0,
                y: 50,
                rotateX: -90,
            },
            {
                opacity: 1,
                y: 0,
                rotateX: 0,
                duration,
                stagger,
                delay,
                ease: "power3.out",
                scrollTrigger:
                    trigger === "scroll"
                        ? {
                            trigger: containerRef.current,
                            start: "top 80%",
                            toggleActions: "play none none none",
                        }
                        : undefined,
            }
        );

        return () => {
            tween.kill();
        };
    }, [chars, delay, duration, stagger, trigger]);

    return (
        <div
            ref={containerRef}
            className={className}
            style={{ perspective: "1000px" }}
        >
            {chars.map((char, index) => (
                <span
                    key={index}
                    className="char"
                    style={{
                        display: "inline-block",
                        transformOrigin: "center bottom",
                        whiteSpace: char === " " ? "pre" : undefined,
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </div>
    );
}

// Line-by-line reveal for paragraphs
interface LineRevealProps {
    children: ReactNode;
    className?: string;
}

export function LineReveal({ children, className = "" }: LineRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const lines = ref.current.querySelectorAll(".reveal-line");

        gsap.fromTo(
            lines,
            {
                opacity: 0,
                y: 40,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 80%",
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
