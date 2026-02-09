import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Terms of Service for Wideech.",
};

export default function TermsPage() {
    return (
        <>
            <Header />
            <main>
                <section className="section-lg pt-32">
                    <div className="container-narrow">
                        <span className="text-caption mb-6 block">Legal</span>
                        <h1 className="text-display mb-6">Terms of Service</h1>
                        <p className="text-smoke mb-10">Effective from: October 2022</p>

                        <div className="space-y-8 text-silver">
                            <p>
                                These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Wideech
                                website and services. By accessing our website or engaging our services, you agree
                                to these Terms.
                            </p>
                            <p>
                                Wideech is a Sri Lankan government-registered company based in Colombo, Sri Lanka.
                            </p>

                            <section>
                                <h2 className="text-xl text-pure-white mb-3">1. Services</h2>
                                <p>
                                    Wideech provides software engineering, product design, consulting, and related
                                    digital services. Specific scope, delivery timelines, and pricing are defined in
                                    a separate proposal, statement of work, or service agreement.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl text-pure-white mb-3">2. Eligibility and Acceptable Use</h2>
                                <p className="mb-3">You agree not to misuse our website or services, including:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Attempting unauthorized access to systems or data</li>
                                    <li>Uploading malicious code or content</li>
                                    <li>Violating applicable laws or third-party rights</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl text-pure-white mb-3">3. Quotes, Fees, and Payment</h2>
                                <p>
                                    Pricing, billing schedules, and payment terms are specified in the applicable
                                    agreement. Unless otherwise agreed, invoices are due within the period stated on
                                    the invoice. Late payments may result in paused work or late fees as permitted by law.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl text-pure-white mb-3">4. Intellectual Property</h2>
                                <p className="mb-3">
                                    Each party retains ownership of its pre-existing intellectual property.
                                    Unless otherwise stated in a signed agreement:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Wideech retains ownership of its methods, tools, frameworks, and know-how</li>
                                    <li>Client deliverables are licensed or assigned according to the project contract</li>
                                    <li>Third-party software remains subject to its own license terms</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl text-pure-white mb-3">5. Confidentiality</h2>
                                <p>
                                    Both parties agree to protect confidential information shared during discussions
                                    and project delivery, and to use such information only for the intended business
                                    purpose unless disclosure is required by law.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl text-pure-white mb-3">6. Warranties and Disclaimers</h2>
                                <p>
                                    We provide services using commercially reasonable care and skill. Except where
                                    expressly stated in writing, services and website content are provided &quot;as is&quot;
                                    and &quot;as available&quot; without warranties of uninterrupted availability or fitness
                                    for a particular purpose.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl text-pure-white mb-3">7. Limitation of Liability</h2>
                                <p>
                                    To the maximum extent permitted by law, Wideech is not liable for indirect,
                                    incidental, special, consequential, or punitive damages, or loss of profits,
                                    revenues, data, or goodwill. Aggregate liability is limited to fees paid for
                                    the relevant services in the 3 months preceding the claim, unless a written
                                    agreement states otherwise.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl text-pure-white mb-3">8. Termination</h2>
                                <p>
                                    Either party may terminate services as set out in the applicable agreement.
                                    Upon termination, outstanding fees remain payable for work performed, and clauses
                                    that naturally survive termination remain in effect.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl text-pure-white mb-3">9. Governing Law</h2>
                                <p>
                                    These Terms are governed by the laws of Sri Lanka, unless otherwise agreed in a
                                    separate signed contract.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl text-pure-white mb-3">10. Changes to Terms</h2>
                                <p>
                                    We may update these Terms from time to time. Updated Terms will be posted with
                                    a revised effective date.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl text-pure-white mb-3">11. Contact</h2>
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
