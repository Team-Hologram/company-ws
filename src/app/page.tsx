"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn, { StaggerChildren, StaggerItem } from "@/components/motion/FadeIn";
import { SectionReveal } from "@/components/motion/ParallaxSection";
import Button, { ArrowIcon } from "@/components/ui/Button";
import Card from "@/components/ui/Card";

// Dynamically import 3D scene to avoid SSR issues
const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-radial opacity-50" />
  ),
});

// Services data
const services = [
  {
    title: "Strategy & Consulting",
    description: "Define your digital roadmap with data-driven insights and industry expertise.",
    icon: "◆",
  },
  {
    title: "Product Design",
    description: "Create intuitive, beautiful experiences that users love and remember.",
    icon: "○",
  },
  {
    title: "Engineering",
    description: "Build scalable, performant systems with modern technologies.",
    icon: "△",
  },
  {
    title: "AI & Machine Learning",
    description: "Harness the power of AI to automate, predict, and transform.",
    icon: "□",
  },
];

// Featured work data
const featuredWork = [
  {
    title: "FinTech Platform",
    category: "Product Design",
    image: "/projects/project-1.jpg",
    slug: "fintech-platform",
  },
  {
    title: "Healthcare Dashboard",
    category: "Engineering",
    image: "/projects/project-2.jpg",
    slug: "healthcare-dashboard",
  },
  {
    title: "E-Commerce Experience",
    category: "Strategy",
    image: "/projects/project-3.jpg",
    slug: "ecommerce-experience",
  },
];

// Stats data
const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Countries Served" },
  { value: "24/7", label: "Global Support" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 gradient-mesh" />

          {/* 3D Scene */}
          <HeroScene />

          {/* Noise overlay */}
          <div className="absolute inset-0 noise pointer-events-none" />

          {/* Content */}
          <div className="container-wide relative z-10 text-center pt-24">
            <FadeIn delay={0.2} duration={0.8}>
              <span className="text-caption mb-6 inline-block"></span>
            </FadeIn>

            <FadeIn delay={0.4} duration={1}>
              <h1 className="text-display max-w-6xl mx-auto mb-8">
                Crafting the Future of Technology
              </h1>
            </FadeIn>

            <FadeIn delay={0.6} duration={0.8}>
              <p className="text-body text-lg max-w-xl mx-auto mb-12">
                We build premium digital experiences that transform businesses
                and delight users. Based in Sri Lanka, trusted worldwide.
              </p>
            </FadeIn>

            <FadeIn delay={0.8} duration={0.8}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/portfolio" icon={<ArrowIcon />}>
                  Explore Our Work
                </Button>
                <Button href="/contact" variant="secondary">
                  Get in Touch
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border border-graphite rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-smoke rounded-full" />
            </div>
          </motion.div>
        </section>

        {/* Brand Statement */}
        <section className="section relative">
          <div className="container-narrow text-center">
            <SectionReveal>
              <h2 className="text-headline mb-8">
                We don&apos;t just build software.<br />
                <span className="text-smoke">We craft experiences that matter.</span>
              </h2>
            </SectionReveal>
            <SectionReveal>
              <p className="text-body text-lg max-w-2xl mx-auto">
                Every pixel, every line of code, every interaction is designed with
                purpose. We combine cutting-edge technology with human-centered design
                to create digital products that stand out.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Services Overview */}
        <section className="section bg-obsidian relative">
          <div className="absolute inset-0 gradient-radial" />
          <div className="container-wide relative z-10">
            <FadeIn>
              <span className="text-caption mb-4 block">What We Do</span>
              <h2 className="text-headline mb-16 max-w-2xl">
                Services designed for ambitious companies
              </h2>
            </FadeIn>

            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <StaggerItem key={service.title}>
                  <Card className="h-full group cursor-pointer">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl text-smoke group-hover:text-pure-white transition-colors">
                        {service.icon}
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-pure-white transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-silver text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerChildren>

            <FadeIn delay={0.4} className="mt-12 text-center">
              <Button href="/services" variant="secondary" icon={<ArrowIcon />}>
                View All Services
              </Button>
            </FadeIn>
          </div>
        </section>

        {/* Featured Work */}
        <section className="section">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-8">
              <FadeIn>
                <span className="text-caption mb-4 block">Selected Work</span>
                <h2 className="text-headline max-w-xl">
                  Projects we&apos;re proud of
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <Button href="/portfolio" variant="ghost" icon={<ArrowIcon />}>
                  View All Projects
                </Button>
              </FadeIn>
            </div>

            <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredWork.map((project) => (
                <StaggerItem key={project.slug}>
                  <Link href={`/portfolio/${project.slug}`} className="group block">
                    <motion.div
                      className="relative aspect-[4/3] bg-charcoal rounded-2xl overflow-hidden mb-6"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* Placeholder for project image */}
                      <div className="absolute inset-0 bg-gradient-to-br from-graphite to-charcoal" />
                      <div className="absolute inset-0 flex items-center justify-center text-smoke">
                        <span className="text-6xl opacity-30">◈</span>
                      </div>
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-void-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-pure-white font-medium">View Project</span>
                      </div>
                    </motion.div>
                    <span className="text-caption mb-2 block">{project.category}</span>
                    <h3 className="text-xl font-semibold group-hover:text-silver transition-colors">
                      {project.title}
                    </h3>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section border-t border-b border-graphite">
          <div className="container-wide">
            <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
              {stats.map((stat) => (
                <StaggerItem key={stat.label} className="text-center">
                  <div className="text-4xl lg:text-5xl font-semibold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-smoke text-sm">{stat.label}</div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-lg relative">
          <div className="absolute inset-0 gradient-mesh opacity-50" />
          <div className="container-narrow relative z-10 text-center">
            <FadeIn>
              <span className="text-caption mb-6 block">Ready to Start?</span>
              <h2 className="text-headline mb-8">
                Let&apos;s build something<br />extraordinary together
              </h2>
              <p className="text-body text-lg max-w-xl mx-auto mb-12">
                Whether you have a clear vision or just a spark of an idea,
                we&apos;re here to help you bring it to life.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/contact" icon={<ArrowIcon />}>
                  Start a Conversation
                </Button>
                <Button href="/about" variant="secondary">
                  Learn About Us
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
