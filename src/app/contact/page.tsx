"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/motion/FadeIn";
import Button from "@/components/ui/Button";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
    const [formStatus, setFormStatus] = useState<FormStatus>("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        budget: "",
        message: "",
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setFormStatus("submitting");

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setFormStatus("success");
    };

    const inputClasses = `
    w-full bg-charcoal border border-graphite rounded-xl px-4 py-4
    text-pure-white placeholder:text-smoke
    focus:outline-none focus:border-silver focus:bg-obsidian
    transition-all duration-300
  `;

    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="section-lg pt-32">
                    <div className="container-wide">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                            {/* Left: Content */}
                            <div>
                                <FadeIn>
                                    <span className="text-caption mb-6 block">Contact</span>
                                </FadeIn>
                                <FadeIn delay={0.1}>
                                    <h1 className="text-display mb-8">
                                        Let&apos;s build something extraordinary
                                    </h1>
                                </FadeIn>
                                <FadeIn delay={0.2}>
                                    <p className="text-body text-xl mb-12">
                                        Whether you have a clear vision or just a spark of an idea,
                                        we&apos;re here to help you bring it to life.
                                    </p>
                                </FadeIn>

                                <FadeIn delay={0.3}>
                                    <div className="space-y-8">
                                        <div>
                                            <span className="text-caption mb-2 block">Email</span>
                                            <a
                                                href="mailto:hello@wideech.com"
                                                className="text-xl hover:text-silver transition-colors"
                                            >
                                                hello@wideech.com
                                            </a>
                                        </div>
                                        <div>
                                            <span className="text-caption mb-2 block">Location</span>
                                            <p className="text-silver">Colombo, Sri Lanka</p>
                                            <p className="text-smoke text-sm">Available globally</p>
                                        </div>
                                        <div>
                                            <span className="text-caption mb-2 block">Social</span>
                                            <div className="flex gap-4">
                                                <a href="#" className="text-silver hover:text-pure-white transition-colors">
                                                    Twitter
                                                </a>
                                                <a href="#" className="text-silver hover:text-pure-white transition-colors">
                                                    LinkedIn
                                                </a>
                                                <a href="#" className="text-silver hover:text-pure-white transition-colors">
                                                    GitHub
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>

                            {/* Right: Form */}
                            <div>
                                <FadeIn delay={0.4}>
                                    {formStatus === "success" ? (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="glass-card p-12 text-center"
                                        >
                                            <div className="text-4xl mb-6">✓</div>
                                            <h3 className="text-xl font-semibold mb-2">Message Sent</h3>
                                            <p className="text-silver">
                                                Thank you for reaching out. We&apos;ll be in touch within 24 hours.
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <motion.div
                                                    whileFocus={{ scale: 1.01 }}
                                                >
                                                    <label htmlFor="name" className="text-caption mb-2 block">
                                                        Name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        required
                                                        placeholder="John Doe"
                                                        className={inputClasses}
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    />
                                                </motion.div>

                                                <div>
                                                    <label htmlFor="email" className="text-caption mb-2 block">
                                                        Email *
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        required
                                                        placeholder="john@company.com"
                                                        className={inputClasses}
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <div>
                                                    <label htmlFor="company" className="text-caption mb-2 block">
                                                        Company
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="company"
                                                        placeholder="Company Inc."
                                                        className={inputClasses}
                                                        value={formData.company}
                                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                    />
                                                </div>

                                                <div>
                                                    <label htmlFor="budget" className="text-caption mb-2 block">
                                                        Budget Range
                                                    </label>
                                                    <select
                                                        id="budget"
                                                        className={inputClasses}
                                                        value={formData.budget}
                                                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                                    >
                                                        <option value="">Select...</option>
                                                        <option value="10k-25k">$10k - $25k</option>
                                                        <option value="25k-50k">$25k - $50k</option>
                                                        <option value="50k-100k">$50k - $100k</option>
                                                        <option value="100k+">$100k+</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="message" className="text-caption mb-2 block">
                                                    Tell us about your project *
                                                </label>
                                                <textarea
                                                    id="message"
                                                    required
                                                    rows={6}
                                                    placeholder="What are you building? What challenges are you facing? How can we help?"
                                                    className={inputClasses}
                                                    value={formData.message}
                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                />
                                            </div>

                                            <Button
                                                type="submit"
                                                disabled={formStatus === "submitting"}
                                                className="w-full"
                                            >
                                                {formStatus === "submitting" ? "Sending..." : "Send Message"}
                                            </Button>

                                            <p className="text-smoke text-xs text-center">
                                                By submitting, you agree to our Privacy Policy.
                                            </p>
                                        </form>
                                    )}
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
