import Link from "next/link";
import Image from "next/image";

const footerLinks = {
    company: [
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/products", label: "Products" },
    ],
    resources: [
        { href: "/blog", label: "Blog" },
        { href: "/careers", label: "Careers" },
        { href: "/press", label: "Press" },
        { href: "/contact", label: "Contact" },
    ],
    legal: [
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
        { href: "/cookies", label: "Cookie Policy" },
    ],
    social: [
        { href: "https://twitter.com", label: "Twitter", icon: "𝕏" },
        { href: "https://linkedin.com", label: "LinkedIn", icon: "in" },
        { href: "https://github.com", label: "GitHub", icon: "⌥" },
    ],
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-obsidian border-t border-graphite">
            <div className="container-wide">
                {/* Main Footer Content */}
                <div className="py-12 sm:py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="/logo.png"
                                alt="Wideech"
                                width={140}
                                height={36}
                                className="h-8 w-auto"
                            />
                        </Link>
                        <p className="text-silver text-sm max-w-xs mb-8 leading-relaxed">
                            Crafting the future of technology. Premium digital experiences
                            for a global audience.
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {footerLinks.social.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-graphite flex items-center justify-center text-silver hover:text-pure-white hover:border-smoke transition-all duration-300"
                                    aria-label={link.label}
                                >
                                    <span className="text-sm font-mono">{link.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-caption mb-6">Company</h4>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-silver text-sm hover:text-pure-white transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h4 className="text-caption mb-6">Resources</h4>
                        <ul className="space-y-4">
                            {footerLinks.resources.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-silver text-sm hover:text-pure-white transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-caption mb-6">Legal</h4>
                        <ul className="space-y-4">
                            {footerLinks.legal.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-silver text-sm hover:text-pure-white transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="py-6 sm:py-8 border-t border-graphite flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-smoke text-sm">
                        © {currentYear} Wideech. All rights reserved.
                    </p>
                    <p className="text-smoke text-sm">
                        Designed in Sri Lanka. Built for the world.
                    </p>
                </div>
            </div>
        </footer>
    );
}
