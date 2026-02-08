import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn, { StaggerChildren, StaggerItem } from "@/components/motion/FadeIn";
import { SectionReveal } from "@/components/motion/ParallaxSection";
import Button, { ArrowIcon } from "@/components/ui/Button";

// Mock project data - in production, this would come from a CMS
const projectData: Record<string, {
    title: string;
    category: string;
    year: string;
    client: string;
    overview: string;
    challenge: string;
    solution: string;
    results: { label: string; value: string }[];
    technologies: string[];
    nextProject: { slug: string; title: string };
}> = {
    "fintech-platform": {
        title: "FinTech Revolution",
        category: "Product Design",
        year: "2024",
        client: "Global Finance Corp",
        overview: "A complete redesign of a digital banking experience serving over 2 million users across 15 countries.",
        challenge: "The existing platform suffered from outdated UX patterns, slow performance, and low user engagement. Users were abandoning key financial tasks due to friction in the interface.",
        solution: "We conducted extensive user research, created a new design system, and rebuilt the entire frontend with modern technologies. The new experience prioritizes speed, accessibility, and delightful interactions.",
        results: [
            { label: "User Engagement", value: "+180%" },
            { label: "Task Completion", value: "+65%" },
            { label: "Load Time", value: "-70%" },
            { label: "NPS Score", value: "+42" },
        ],
        technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
        nextProject: { slug: "healthcare-dashboard", title: "Healthcare Analytics" },
    },
    "healthcare-dashboard": {
        title: "Healthcare Analytics",
        category: "Engineering",
        year: "2024",
        client: "MedTech Solutions",
        overview: "Real-time monitoring dashboard for healthcare providers managing patient data across multiple facilities.",
        challenge: "Healthcare providers needed a unified view of patient data from disparate systems with strict HIPAA compliance requirements.",
        solution: "We engineered a secure, real-time data pipeline with role-based access control and built an intuitive dashboard that surfaces actionable insights.",
        results: [
            { label: "Response Time", value: "-50%" },
            { label: "Data Accuracy", value: "99.9%" },
            { label: "Staff Efficiency", value: "+40%" },
            { label: "Cost Savings", value: "$2M/yr" },
        ],
        technologies: ["Next.js", "GraphQL", "Kafka", "Redis", "GCP"],
        nextProject: { slug: "ecommerce-experience", title: "E-Commerce Platform" },
    },
    "ecommerce-experience": {
        title: "E-Commerce Platform",
        category: "Strategy",
        year: "2023",
        client: "Retail Innovations Ltd",
        overview: "End-to-end digital transformation for a traditional retailer expanding into omnichannel commerce.",
        challenge: "A legacy retail business needed to modernize their entire digital infrastructure while maintaining business continuity.",
        solution: "We developed a phased transformation strategy, migrated to a headless commerce architecture, and created unified experiences across web, mobile, and in-store.",
        results: [
            { label: "Online Revenue", value: "+250%" },
            { label: "Conversion Rate", value: "+85%" },
            { label: "Customer LTV", value: "+120%" },
            { label: "Time to Market", value: "-60%" },
        ],
        technologies: ["Shopify Plus", "Next.js", "Contentful", "Segment", "Stripe"],
        nextProject: { slug: "fintech-platform", title: "FinTech Revolution" },
    },
};

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return Object.keys(projectData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = projectData[slug];
    return {
        title: project?.title || "Project",
        description: project?.overview || "Case study",
    };
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const project = projectData[slug];

    if (!project) {
        return (
            <>
                <Header />
                <main className="section-lg pt-32">
                    <div className="container-narrow text-center">
                        <h1 className="text-headline mb-4">Project Not Found</h1>
                        <p className="text-body mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
                        <Button href="/portfolio">Back to Portfolio</Button>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className="section-lg pt-32">
                    <div className="container-wide">
                        <FadeIn>
                            <Link
                                href="/portfolio"
                                className="text-caption mb-8 inline-flex items-center gap-2 hover:text-pure-white transition-colors"
                            >
                                ← Back to Portfolio
                            </Link>
                        </FadeIn>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2">
                                <FadeIn delay={0.1}>
                                    <h1 className="text-display mb-6">{project.title}</h1>
                                </FadeIn>
                                <FadeIn delay={0.2}>
                                    <p className="text-body text-xl">{project.overview}</p>
                                </FadeIn>
                            </div>

                            <div className="space-y-6">
                                <FadeIn delay={0.3}>
                                    <div>
                                        <span className="text-caption block mb-2">Client</span>
                                        <p className="text-silver">{project.client}</p>
                                    </div>
                                </FadeIn>
                                <FadeIn delay={0.4}>
                                    <div>
                                        <span className="text-caption block mb-2">Category</span>
                                        <p className="text-silver">{project.category}</p>
                                    </div>
                                </FadeIn>
                                <FadeIn delay={0.5}>
                                    <div>
                                        <span className="text-caption block mb-2">Year</span>
                                        <p className="text-silver">{project.year}</p>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hero Image */}
                <section className="pb-16">
                    <div className="container-wide">
                        <SectionReveal>
                            <div className="aspect-video bg-charcoal rounded-2xl overflow-hidden">
                                <div className="w-full h-full bg-gradient-to-br from-graphite to-charcoal flex items-center justify-center">
                                    <span className="text-8xl text-smoke opacity-20">◈</span>
                                </div>
                            </div>
                        </SectionReveal>
                    </div>
                </section>

                {/* Challenge */}
                <section className="section">
                    <div className="container-narrow">
                        <SectionReveal>
                            <span className="text-caption mb-4 block">The Challenge</span>
                            <p className="text-headline text-silver">{project.challenge}</p>
                        </SectionReveal>
                    </div>
                </section>

                {/* Solution */}
                <section className="section bg-obsidian">
                    <div className="container-narrow">
                        <SectionReveal>
                            <span className="text-caption mb-4 block">Our Solution</span>
                            <p className="text-title mb-8">{project.solution}</p>
                        </SectionReveal>

                        <SectionReveal>
                            <div className="flex flex-wrap gap-3">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 bg-charcoal rounded-full text-sm text-silver"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </SectionReveal>
                    </div>
                </section>

                {/* Results */}
                <section className="section">
                    <div className="container-wide">
                        <FadeIn className="text-center mb-16">
                            <span className="text-caption mb-4 block">The Results</span>
                            <h2 className="text-headline">Impact delivered</h2>
                        </FadeIn>

                        <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {project.results.map((result) => (
                                <StaggerItem key={result.label} className="text-center">
                                    <div className="text-4xl lg:text-5xl font-semibold mb-2 text-pure-white">
                                        {result.value}
                                    </div>
                                    <div className="text-smoke text-sm">{result.label}</div>
                                </StaggerItem>
                            ))}
                        </StaggerChildren>
                    </div>
                </section>

                {/* Next Project */}
                <section className="section border-t border-graphite">
                    <div className="container-wide">
                        <Link href={`/portfolio/${project.nextProject.slug}`} className="group block text-center">
                            <span className="text-caption mb-4 block">Next Project</span>
                            <h2 className="text-headline group-hover:text-silver transition-colors">
                                {project.nextProject.title}
                            </h2>
                            <span className="text-smoke text-2xl inline-block mt-4 group-hover:translate-x-2 transition-transform">
                                →
                            </span>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
