"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn, { StaggerChildren, StaggerItem } from "@/components/motion/FadeIn";
import Button, { ArrowIcon } from "@/components/ui/Button";
import Card from "@/components/ui/Card";

// Services data
const services = [
    {
        id: "strategy",
        title: "Strategy & Consulting",
        description: "We help you define your digital roadmap with data-driven insights and industry expertise.",
        icon: "◆",
        features: [
            "Digital Transformation Strategy",
            "Technology Roadmapping",
            "Product Strategy",
            "Market Research & Analysis",
            "Competitive Landscape Assessment",
        ],
    },
    {
        id: "design",
        title: "Product Design",
        description: "Create intuitive, beautiful experiences that users love and remember.",
        icon: "○",
        features: [
            "User Experience Design",
            "User Interface Design",
            "Design Systems",
            "Prototyping & Testing",
            "Brand Identity",
        ],
    },
    {
        id: "engineering",
        title: "Engineering",
        description: "Build scalable, performant systems with modern technologies and best practices.",
        icon: "△",
        features: [
            "Full-Stack Development",
            "Mobile App Development",
            "Cloud Infrastructure",
            "API Development",
            "DevOps & CI/CD",
        ],
    },
    {
        id: "ai",
        title: "AI & Machine Learning",
        description: "Harness the power of AI to automate, predict, and transform your business.",
        icon: "□",
        features: [
            "Machine Learning Models",
            "Natural Language Processing",
            "Computer Vision",
            "Predictive Analytics",
            "AI Integration",
        ],
    },
    {
        id: "growth",
        title: "Growth & Marketing",
        description: "Scale your digital presence with data-driven marketing strategies.",
        icon: "◇",
        features: [
            "SEO & Content Strategy",
            "Performance Marketing",
            "Analytics & Insights",
            "Conversion Optimization",
            "Growth Hacking",
        ],
    },
    {
        id: "support",
        title: "Support & Maintenance",
        description: "Keep your digital products running smoothly with our dedicated support.",
        icon: "⬡",
        features: [
            "24/7 Technical Support",
            "Performance Monitoring",
            "Security Updates",
            "Feature Enhancements",
            "Scalability Management",
        ],
    },
];

// Process steps
const process = [
    { step: "01", title: "Discovery", description: "We dive deep to understand your goals, challenges, and vision." },
    { step: "02", title: "Strategy", description: "We develop a clear roadmap tailored to your specific needs." },
    { step: "03", title: "Design", description: "We craft intuitive experiences that delight your users." },
    { step: "04", title: "Build", description: "We engineer robust solutions with clean, maintainable code." },
    { step: "05", title: "Launch", description: "We deploy carefully with thorough testing and monitoring." },
    { step: "06", title: "Grow", description: "We iterate and optimize based on real user feedback." },
];

export default function ServicesPage() {
    const [expandedService, setExpandedService] = useState<string | null>(null);

    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="section-lg pt-32">
                    <div className="container-wide">
                        <div className="max-w-4xl">
                            <FadeIn>
                                <span className="text-caption mb-6 block">Our Services</span>
                            </FadeIn>
                            <FadeIn delay={0.1}>
                                <h1 className="text-display mb-8">
                                    End-to-end solutions for ambitious companies
                                </h1>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <p className="text-body text-xl max-w-2xl">
                                    From strategy to execution, we provide comprehensive services
                                    designed to help you build, launch, and scale world-class digital products.
                                </p>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="section">
                    <div className="container-wide">
                        <StaggerChildren className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {services.map((service) => (
                                <StaggerItem key={service.id}>
                                    <Card
                                        padding="lg"
                                        className="cursor-pointer"
                                        onClick={() => setExpandedService(
                                            expandedService === service.id ? null : service.id
                                        )}
                                    >
                                        <div className="flex items-start gap-4 mb-4">
                                            <span className="text-3xl text-smoke">{service.icon}</span>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-xl font-semibold">{service.title}</h3>
                                                    <motion.span
                                                        animate={{ rotate: expandedService === service.id ? 45 : 0 }}
                                                        className="text-smoke text-xl"
                                                    >
                                                        +
                                                    </motion.span>
                                                </div>
                                                <p className="text-silver text-sm mt-2">{service.description}</p>
                                            </div>
                                        </div>

                                        <AnimatePresence>
                                            {expandedService === service.id && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pt-4 border-t border-graphite mt-4">
                                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                            {service.features.map((feature) => (
                                                                <li
                                                                    key={feature}
                                                                    className="flex items-center gap-2 text-silver text-sm"
                                                                >
                                                                    <span className="text-smoke">→</span>
                                                                    {feature}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </Card>
                                </StaggerItem>
                            ))}
                        </StaggerChildren>
                    </div>
                </section>

                {/* Process */}
                <section className="section bg-obsidian">
                    <div className="container-wide">
                        <FadeIn className="text-center mb-16">
                            <span className="text-caption mb-4 block">Our Process</span>
                            <h2 className="text-headline">How we work</h2>
                        </FadeIn>

                        <StaggerChildren className="grid grid-cols-2 lg:grid-cols-6 gap-8">
                            {process.map((step, index) => (
                                <StaggerItem key={step.step}>
                                    <div className="text-center">
                                        <span className="text-smoke text-sm font-mono mb-4 block">
                                            {step.step}
                                        </span>
                                        <h3 className="font-semibold mb-2">{step.title}</h3>
                                        <p className="text-smoke text-xs leading-relaxed">
                                            {step.description}
                                        </p>
                                        {index < process.length - 1 && (
                                            <span className="hidden lg:block text-graphite text-2xl mt-4">→</span>
                                        )}
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerChildren>
                    </div>
                </section>

                {/* CTA */}
                <section className="section">
                    <div className="container-narrow text-center">
                        <FadeIn>
                            <h2 className="text-headline mb-6">
                                Ready to get started?
                            </h2>
                            <p className="text-body text-lg mb-8">
                                Tell us about your project and let&apos;s explore how we can help.
                            </p>
                            <Button href="/contact" icon={<ArrowIcon />}>
                                Start a Conversation
                            </Button>
                        </FadeIn>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
