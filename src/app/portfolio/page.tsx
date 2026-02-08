"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn, { StaggerChildren, StaggerItem } from "@/components/motion/FadeIn";

// Projects data
const projects = [
    {
        slug: "fintech-platform",
        title: "FinTech Revolution",
        category: "Product Design",
        description: "A complete redesign of a digital banking experience.",
        year: "2024",
        featured: true,
    },
    {
        slug: "healthcare-dashboard",
        title: "Healthcare Analytics",
        category: "Engineering",
        description: "Real-time monitoring dashboard for healthcare providers.",
        year: "2024",
        featured: true,
    },
    {
        slug: "ecommerce-experience",
        title: "E-Commerce Platform",
        category: "Strategy",
        description: "End-to-end digital transformation for retail.",
        year: "2023",
        featured: true,
    },
    {
        slug: "ai-assistant",
        title: "AI Assistant",
        category: "AI & ML",
        description: "Intelligent virtual assistant for customer support.",
        year: "2024",
        featured: false,
    },
    {
        slug: "saas-platform",
        title: "SaaS Management",
        category: "Engineering",
        description: "Subscription management platform for enterprises.",
        year: "2023",
        featured: false,
    },
    {
        slug: "mobile-banking",
        title: "Mobile Banking App",
        category: "Product Design",
        description: "Native mobile experience for a digital bank.",
        year: "2023",
        featured: false,
    },
];

const categories = ["All", "Product Design", "Engineering", "Strategy", "AI & ML"];

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory);

    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="section-lg pt-32">
                    <div className="container-wide">
                        <div className="max-w-4xl">
                            <FadeIn>
                                <span className="text-caption mb-6 block">Portfolio</span>
                            </FadeIn>
                            <FadeIn delay={0.1}>
                                <h1 className="text-display mb-8">
                                    Work that speaks for itself
                                </h1>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <p className="text-body text-xl max-w-2xl">
                                    A curated selection of projects that demonstrate our commitment
                                    to excellence, innovation, and meaningful impact.
                                </p>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* Filter */}
                <section className="pb-12">
                    <div className="container-wide">
                        <FadeIn>
                            <div className="flex flex-wrap gap-3">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${activeCategory === category
                                                ? "bg-pure-white text-void-black"
                                                : "bg-charcoal text-silver hover:bg-graphite"
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="section pt-0">
                    <div className="container-wide">
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredProjects.map((project) => (
                                    <motion.div
                                        key={project.slug}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Link href={`/portfolio/${project.slug}`} className="group block">
                                            <motion.div
                                                className="relative aspect-[4/3] bg-charcoal rounded-2xl overflow-hidden mb-6"
                                                whileHover={{ scale: 1.02 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {/* Placeholder for project image */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-graphite to-charcoal" />
                                                <div className="absolute inset-0 flex items-center justify-center text-smoke">
                                                    <span className="text-6xl opacity-30">◈</span>
                                                </div>
                                                {/* Featured badge */}
                                                {project.featured && (
                                                    <div className="absolute top-4 left-4">
                                                        <span className="px-3 py-1 bg-pure-white/10 backdrop-blur-md rounded-full text-xs text-pure-white">
                                                            Featured
                                                        </span>
                                                    </div>
                                                )}
                                                {/* Overlay */}
                                                <div className="absolute inset-0 bg-void-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                                                    <span className="text-pure-white font-medium">View Case Study</span>
                                                    <span className="text-smoke text-sm">→</span>
                                                </div>
                                            </motion.div>

                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-caption">{project.category}</span>
                                                <span className="text-graphite">•</span>
                                                <span className="text-caption">{project.year}</span>
                                            </div>

                                            <h3 className="text-xl font-semibold mb-2 group-hover:text-silver transition-colors">
                                                {project.title}
                                            </h3>

                                            <p className="text-silver text-sm">
                                                {project.description}
                                            </p>
                                        </Link>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
