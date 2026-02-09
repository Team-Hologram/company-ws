import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Cookie Policy",
    description: "Cookie Policy for Wideech.",
};

export default function CookiesPage() {
    return (
        <>
            <Header />
            <main>
                <section className="section-lg pt-32">
                    <div className="container-narrow">
                        <span className="text-caption mb-6 block">Legal</span>
                        <h1 className="text-display mb-6">Cookie Policy</h1>
                        <p className="text-smoke mb-10">Effective from: October 2022</p>

                        <div className="space-y-8 text-silver">
                            <p>
                                This Cookie Policy explains how Wideech uses cookies and similar technologies on
                                our website. Wideech is a Sri Lankan government-registered company based in
                                Colombo, Sri Lanka.
                            </p>

                            <section>
                                <h2 className="text-xl text-pure-white mb-3">1. What Are Cookies</h2>
                                <p>
                                    Cookies are small text files stored on your device when you visit a website.
                                    They help websites function, remember preferences, and understand usage.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl text-pure-white mb-3">2. Types of Cookies We May Use</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Essential cookies: required for core site functionality</li>
                                    <li>Analytics cookies: help us understand traffic and improve performance</li>
                                    <li>Preference cookies: remember settings such as language or display choices</li>
                                    <li>Security cookies: help detect abuse and protect systems</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl text-pure-white mb-3">3. Why We Use Cookies</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>To keep the website secure and functional</li>
                                    <li>To measure website performance and improve user experience</li>
                                    <li>To maintain session and preference settings</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl text-pure-white mb-3">4. Third-Party Cookies</h2>
                                <p>
                                    Some cookies may be set by third-party services we use, such as analytics,
                                    infrastructure, or embedded content providers. These providers control their
                                    own cookies under their respective privacy policies.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl text-pure-white mb-3">5. Managing Cookies</h2>
                                <p className="mb-3">
                                    You can manage or disable cookies through your browser settings. Disabling
                                    cookies may affect website functionality.
                                </p>
                                <p>
                                    You can also clear previously stored cookies from your browser at any time.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl text-pure-white mb-3">6. Updates to This Policy</h2>
                                <p>
                                    We may update this Cookie Policy to reflect legal, technical, or business
                                    changes. Updates will appear on this page with a revised effective date.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl text-pure-white mb-3">7. Contact</h2>
                                <p>
                                    Email: hello@wideech.com
                                    <br />
                                    Company: Wideech Pvt Ltd (Sri Lankan government-registered company)
                                    <br />
                                    Location: Colombo, Sri Lanka
                                </p>
                            </section>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
