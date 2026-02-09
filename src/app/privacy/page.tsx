import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Privacy Policy for Wideech.",
};

export default function PrivacyPage() {
    return (
        <>
            <Header />
            <main>
                <section className="section-lg pt-32">
                    <div className="container-narrow">
                        <span className="text-caption mb-6 block">Legal</span>
                        <h1 className="text-display mb-6">Privacy Policy</h1>
                        <p className="text-smoke mb-10">Effective from: October 2022</p>

                        <div className="space-y-8 text-silver">
                            <p>
                                Wideech (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy.
                                Wideech is a Sri Lankan government-registered company operating from Colombo,
                                Sri Lanka and serving clients globally.
                            </p>

                            <section>
                                <h2 className="text-xl text-pure-white mb-3">1. Information We Collect</h2>
                                <p className="mb-3">We collect information you provide directly, including:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Name, email address, and company details submitted via forms</li>
                                    <li>Project requirements, budget range, and other inquiry details</li>
                                    <li>Communications you send to us by email or contact form</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl text-pure-white mb-3">2. How We Use Information</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>To respond to inquiries and provide requested services</li>
                                    <li>To prepare proposals, contracts, and project delivery materials</li>
                                    <li>To improve our website, service quality, and security</li>
                                    <li>To comply with legal obligations and resolve disputes</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl text-pure-white mb-3">3. Legal Bases for Processing</h2>
                                <p>
                                    We process personal data based on one or more of the following legal bases:
                                    consent, performance of a contract, legitimate interests, and legal compliance.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl text-pure-white mb-3">4. Sharing of Information</h2>
                                <p className="mb-3">
                                    We do not sell personal information. We may share data with trusted service
                                    providers that help us operate our business, such as hosting, analytics,
                                    communication, and payment providers, under appropriate confidentiality and
                                    data protection obligations.
                                </p>
                                <p>
                                    We may also disclose information when required by law or to protect legal rights,
                                    users, or systems.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl text-pure-white mb-3">5. International Data Transfers</h2>
                                <p>
                                    As we serve clients globally, your information may be processed in countries
                                    outside your own. Where required, we take reasonable steps to ensure safeguards
                                    are in place for cross-border data transfers.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl text-pure-white mb-3">6. Data Retention</h2>
                                <p>
                                    We retain personal data only as long as necessary for the purposes described in
                                    this policy, including legal, accounting, and reporting obligations.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl text-pure-white mb-3">7. Security</h2>
                                <p>
                                    We implement reasonable technical and organizational safeguards to protect
                                    personal data. No method of transmission or storage is fully secure, so we cannot
                                    guarantee absolute security.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl text-pure-white mb-3">8. Your Rights</h2>
                                <p className="mb-3">Depending on applicable law, you may have rights to:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Access, correct, or delete your personal data</li>
                                    <li>Object to or restrict certain processing</li>
                                    <li>Withdraw consent where processing is based on consent</li>
                                    <li>Request data portability where legally applicable</li>
                                </ul>
                                <p className="mt-3">To exercise rights, contact us at hello@wideech.com.</p>
                            </section>

                            <section>
                                <h2 className="text-xl text-pure-white mb-3">9. Children&apos;s Privacy</h2>
                                <p>
                                    Our services are not directed to children under 16, and we do not knowingly
                                    collect personal data from children under 16.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl text-pure-white mb-3">10. Changes to This Policy</h2>
                                <p>
                                    We may update this Privacy Policy from time to time. Updates will be posted on
                                    this page with a revised effective date.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl text-pure-white mb-3">11. Contact Us</h2>
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
