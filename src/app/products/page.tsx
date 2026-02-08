import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn, { StaggerChildren, StaggerItem } from "@/components/motion/FadeIn";
import Button, { ArrowIcon } from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
    title: "Products",
    description: "Explore our open-source tools and premium products designed to help you build better.",
};

// Open source products
const openSourceProducts = [
    {
        name: "DevKit",
        description: "A collection of utility functions and React hooks for modern web development.",
        stars: "2.4k",
        links: {
            github: "https://github.com/company/devkit",
            docs: "/docs/devkit",
        },
    },
    {
        name: "FormFlow",
        description: "Headless form validation library with TypeScript support and zero dependencies.",
        stars: "1.8k",
        links: {
            github: "https://github.com/company/formflow",
            docs: "/docs/formflow",
        },
    },
    {
        name: "AnimateCSS",
        description: "A lightweight CSS animation library with GSAP-like syntax and performance.",
        stars: "890",
        links: {
            github: "https://github.com/company/animatecss",
            docs: "/docs/animatecss",
        },
    },
];

// Paid products
const paidProducts = [
    {
        name: "Enterprise Suite",
        description: "Complete toolkit for building enterprise-grade applications with authentication, authorization, and audit logging.",
        pricing: "From $299/mo",
        features: ["SSO Integration", "Role-Based Access", "Audit Logs", "Priority Support"],
        cta: "Request Demo",
        ctaLink: "/contact?product=enterprise",
    },
    {
        name: "Analytics Pro",
        description: "Advanced analytics dashboard with real-time insights, custom reports, and AI-powered recommendations.",
        pricing: "From $99/mo",
        features: ["Real-time Data", "Custom Dashboards", "AI Insights", "Export Tools"],
        cta: "Start Trial",
        ctaLink: "/contact?product=analytics",
    },
    {
        name: "Design System Kit",
        description: "Production-ready component library with 100+ components, Figma files, and documentation.",
        pricing: "$499 one-time",
        features: ["100+ Components", "Figma Files", "Documentation", "Lifetime Updates"],
        cta: "Buy Now",
        ctaLink: "/checkout?product=design-kit",
    },
];

export default function ProductsPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="section-lg pt-32">
                    <div className="container-wide">
                        <div className="max-w-4xl">
                            <FadeIn>
                                <span className="text-caption mb-6 block">Products</span>
                            </FadeIn>
                            <FadeIn delay={0.1}>
                                <h1 className="text-display mb-8">
                                    Tools built for builders
                                </h1>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <p className="text-body text-xl max-w-2xl">
                                    From open-source utilities to enterprise solutions, we create
                                    products that help developers and teams ship faster.
                                </p>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* Open Source Section */}
                <section className="section">
                    <div className="container-wide">
                        <FadeIn className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-2 h-2 bg-pure-white rounded-full" />
                                <span className="text-caption">Open Source</span>
                            </div>
                            <h2 className="text-headline">Free & open for everyone</h2>
                        </FadeIn>

                        <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {openSourceProducts.map((product) => (
                                <StaggerItem key={product.name}>
                                    <Card padding="lg" className="h-full flex flex-col">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="px-3 py-1 bg-pure-white/10 rounded-full text-xs">
                                                Open Source
                                            </span>
                                            <span className="text-smoke text-sm flex items-center gap-1">
                                                ★ {product.stars}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
                                        <p className="text-silver text-sm mb-6 flex-1">{product.description}</p>

                                        <div className="flex gap-3">
                                            <Button
                                                href={product.links.github}
                                                variant="secondary"
                                                size="sm"
                                                isExternal
                                            >
                                                GitHub
                                            </Button>
                                            <Button href={product.links.docs} variant="ghost" size="sm">
                                                Documentation
                                            </Button>
                                        </div>
                                    </Card>
                                </StaggerItem>
                            ))}
                        </StaggerChildren>
                    </div>
                </section>

                {/* Paid Products Section */}
                <section className="section bg-obsidian">
                    <div className="container-wide">
                        <FadeIn className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-2 h-2 bg-smoke rounded-full" />
                                <span className="text-caption">Premium</span>
                            </div>
                            <h2 className="text-headline">Enterprise-ready solutions</h2>
                        </FadeIn>

                        <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {paidProducts.map((product) => (
                                <StaggerItem key={product.name}>
                                    <Card variant="solid" padding="lg" className="h-full flex flex-col">
                                        <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
                                        <p className="text-silver text-sm mb-4">{product.description}</p>

                                        <div className="text-2xl font-semibold mb-6">{product.pricing}</div>

                                        <ul className="space-y-3 mb-8 flex-1">
                                            {product.features.map((feature) => (
                                                <li key={feature} className="flex items-center gap-2 text-silver text-sm">
                                                    <span className="text-smoke">✓</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <Button href={product.ctaLink} icon={<ArrowIcon />} className="w-full">
                                            {product.cta}
                                        </Button>
                                    </Card>
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
                                Need a custom solution?
                            </h2>
                            <p className="text-body text-lg mb-8">
                                We build bespoke products tailored to your specific requirements.
                            </p>
                            <Button href="/contact" variant="secondary" icon={<ArrowIcon />}>
                                Let&apos;s Talk
                            </Button>
                        </FadeIn>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
