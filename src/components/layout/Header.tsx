"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        };
    }, [isMobileMenuOpen]);

    const closeMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(false);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled
                    ? "py-3 sm:py-4 bg-obsidian/80 backdrop-blur-xl border-b border-graphite/50"
                    : "py-4 sm:py-6 bg-transparent"
                    }`}
            >
                <div className="container-wide flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative z-[110]" onClick={closeMobileMenu}>
                        <motion.div
                            whileHover={{ opacity: 0.7 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center"
                        >
                            {/* Mobile: icon.png */}
                            <Image
                                src="/icon.png"
                                alt="Wideech"
                                width={40}
                                height={40}
                                className="h-9 w-9 sm:hidden"
                                priority
                            />
                            {/* Desktop: logo.png */}
                            <Image
                                src="/logo.png"
                                alt="Wideech"
                                width={120}
                                height={32}
                                className="hidden sm:block h-8 w-auto"
                                priority
                            />
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm text-silver hover:text-pure-white transition-colors duration-300 relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-pure-white transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Link href="/contact" className="btn btn-primary text-sm">
                            Get in Touch
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden relative p-2 -mr-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-center items-center">
                            <motion.span
                                className="absolute w-6 h-0.5 bg-pure-white rounded-full"
                                animate={{
                                    rotate: isMobileMenuOpen ? 45 : 0,
                                    y: isMobileMenuOpen ? 0 : -6,
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.span
                                className="absolute w-6 h-0.5 bg-pure-white rounded-full"
                                animate={{
                                    opacity: isMobileMenuOpen ? 0 : 1,
                                    scaleX: isMobileMenuOpen ? 0 : 1,
                                }}
                                transition={{ duration: 0.2 }}
                            />
                            <motion.span
                                className="absolute w-6 h-0.5 bg-pure-white rounded-full"
                                animate={{
                                    rotate: isMobileMenuOpen ? -45 : 0,
                                    y: isMobileMenuOpen ? 0 : 6,
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Button (Fixed Above Menu) */}
            {isMobileMenuOpen && (
                <button
                    className="lg:hidden fixed top-4 right-4 sm:top-6 sm:right-6 z-[120] p-2"
                    onClick={closeMobileMenu}
                    aria-label="Close menu"
                >
                    <div className="w-6 h-5 relative flex flex-col justify-center items-center">
                        <motion.span
                            className="absolute w-6 h-0.5 bg-pure-white rounded-full"
                            initial={{ rotate: 0, y: -6 }}
                            animate={{ rotate: 45, y: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            className="absolute w-6 h-0.5 bg-pure-white rounded-full"
                            initial={{ rotate: 0, y: 6 }}
                            animate={{ rotate: -45, y: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </button>
            )}

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[110] lg:hidden overflow-hidden"
                        style={{
                            backgroundColor: '#0A0A0B',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            height: '100dvh',
                        }}
                    >
                        <nav className="h-full w-full flex flex-col items-center justify-center gap-4 sm:gap-5 px-6 py-16 overflow-y-auto">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: index * 0.08 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-2xl sm:text-3xl font-semibold text-pure-white hover:text-silver transition-colors"
                                        onClick={closeMobileMenu}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: navLinks.length * 0.08 }}
                                className="mt-6 sm:mt-8"
                            >
                                <Link
                                    href="/contact"
                                    className="btn btn-primary"
                                    onClick={closeMobileMenu}
                                >
                                    Get in Touch
                                </Link>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}