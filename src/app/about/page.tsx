import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn, { StaggerChildren, StaggerItem } from "@/components/motion/FadeIn";
import { SectionReveal } from "@/components/motion/ParallaxSection";
import Button, { ArrowIcon } from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
    title: "About",
    description: "Learn about our vision, mission, and the team behind our premium technology studio.",
};

// Team members
const team = [
    { name: "Founder Name", role: "CEO & Founder", image: "/team/founder.jpg" },
    { name: "Design Lead", role: "Head of Design", image: "/team/design.jpg" },
    { name: "Tech Lead", role: "CTO", image: "/team/tech.jpg" },
    { name: "Product Lead", role: "Head of Product", image: "/team/product.jpg" },
];

// Values
const values = [
    {
        title: "Excellence",
        description: "We pursue mastery in everything we create, never settling for mediocrity.",
        icon: "◈",
    },
    {
        title: "Innovation",
        description: "We push boundaries and embrace emerging technologies to solve complex problems.",
        icon: "◇",
    },
    {
        title: "Integrity",
        description: "We build trust through transparency, honesty, and ethical practices.",
        icon: "○",
    },
    {
        title: "Impact",
        description: "We measure success by the meaningful difference we make for our clients.",
        icon: "△",
    },
];

// Trust signals
const clients = [
    "Global Tech Corp",
    "Innovation Labs",
    "Future Finance",
    "Digital First",
    "Smart Solutions",
    "Next Gen Systems",
];

export default function AboutPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="section-lg pt-32">
                    <div className="container-wide">
                        <div className="max-w-4xl">
                            <FadeIn>
                                <span className="text-caption mb-6 block">About Us</span>
                            </FadeIn>
                            <FadeIn delay={0.1}>
                                <h1 className="text-display mb-8">
                                    We believe technology should empower, not complicate.
                                </h1>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <p className="text-body text-xl max-w-2xl">
                                    Founded with a vision to bridge the gap between cutting-edge technology
                                    and human-centered design, we&apos;re building the future from Sri Lanka
                                    for the world.
                                </p>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* Vision & Mission */}
                <section className="section">
                    <div className="container-wide">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <SectionReveal>
                                <Card padding="lg" className="h-full">
                                    <span className="text-caption mb-4 block">Our Vision</span>
                                    <h2 className="text-title mb-6">
                                        To be the most trusted technology partner for ambitious companies worldwide.
                                    </h2>
                                    <p className="text-body">
                                        We envision a world where technology amplifies human potential,
                                        where digital experiences bring joy, and where innovation serves
                                        everyone—not just the privileged few.
                                    </p>
                                </Card>
                            </SectionReveal>
                            <SectionReveal>
                                <Card padding="lg" className="h-full">
                                    <span className="text-caption mb-4 block">Our Mission</span>
                                    <h2 className="text-title mb-6">
                                        To craft exceptional digital experiences that transform businesses.
                                    </h2>
                                    <p className="text-body">
                                        Through relentless pursuit of excellence, we deliver solutions that
                                        not only meet technical requirements but exceed expectations in usability,
                                        performance, and aesthetic quality.
                                    </p>
                                </Card>
                            </SectionReveal>
                        </div>
                    </div>
                </section>

                {/* Our Story */}
                <section className="section bg-obsidian">
                    <div className="container-narrow text-center">
                        <FadeIn>
                            <span className="text-caption mb-6 block">Our Story</span>
                            <h2 className="text-headline mb-8">
                                From humble beginnings to global impact
                            </h2>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="text-body text-lg space-y-6">
                                <p>
                                    What started as a small team of passionate technologists in Colombo has
                                    grown into a globally recognized studio serving clients across five continents.
                                </p>
                                <p>
                                    We&apos;ve stayed true to our founding principles: never compromise on quality,
                                    always put the user first, and continuously push the boundaries of what&apos;s possible.
                                </p>
                                <p>
                                    Today, we work with startups and enterprises alike, bringing the same level of
                                    dedication and craftsmanship to every project, regardless of size or budget.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Values */}
                <section className="section">
                    <div className="container-wide">
                        <FadeIn className="text-center mb-16">
                            <span className="text-caption mb-4 block">Our Values</span>
                            <h2 className="text-headline">What drives us forward</h2>
                        </FadeIn>

                        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value) => (
                                <StaggerItem key={value.title}>
                                    <div className="text-center">
                                        <span className="text-4xl mb-6 block text-smoke">{value.icon}</span>
                                        <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                                        <p className="text-silver text-sm">{value.description}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerChildren>
                    </div>
                </section>

                {/* Team */}
                <section className="section bg-obsidian">
                    <div className="container-wide">
                        <FadeIn className="text-center mb-16">
                            <span className="text-caption mb-4 block">The Team</span>
                            <h2 className="text-headline">People behind the magic</h2>
                        </FadeIn>

                        <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {team.map((member) => (
                                <StaggerItem key={member.name}>
                                    <div className="text-center group">
                                        <div className="relative aspect-square bg-charcoal rounded-2xl overflow-hidden mb-4 group-hover:scale-[1.02] transition-transform duration-300">
                                            <div className="absolute inset-0 flex items-center justify-center text-smoke">
                                                <span className="text-4xl opacity-30">◉</span>
                                            </div>
                                        </div>
                                        <h3 className="font-semibold mb-1">{member.name}</h3>
                                        <p className="text-smoke text-sm">{member.role}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerChildren>
                    </div>
                </section>

                {/* Trust Signals */}
                <section className="section border-t border-graphite">
                    <div className="container-wide">
                        <FadeIn className="text-center mb-12">
                            <span className="text-caption">Trusted by leading companies</span>
                        </FadeIn>
                        <StaggerChildren className="flex flex-wrap justify-center items-center gap-12">
                            {clients.map((client) => (
                                <StaggerItem key={client}>
                                    <span className="text-smoke text-lg font-medium opacity-50 hover:opacity-100 transition-opacity">
                                        {client}
                                    </span>
                                </StaggerItem>
                            ))}
                        </StaggerChildren>
                    </div>
                </section>

                {/* CTA */}
                <section className="section">
                    <div className="container-narrow text-center">
                        <FadeIn>
                            <h2 className="text-headline mb-8">
                                Ready to work with us?
                            </h2>
                            <Button href="/contact" icon={<ArrowIcon />}>
                                Get in Touch
                            </Button>
                        </FadeIn>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
