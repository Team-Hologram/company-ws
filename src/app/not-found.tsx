import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Page Not Found",
    description: "The page you are looking for does not exist.",
};

export default function NotFound() {
    return (
        <>
            <Header />
            <main className="min-h-screen flex items-center justify-center relative">
                {/* Background */}
                <div className="absolute inset-0 gradient-mesh opacity-30" />
                <div className="absolute inset-0 noise pointer-events-none" />

                <div className="container-narrow text-center relative z-10 px-6">
                    {/* 404 Number */}
                    <div className="mb-6 sm:mb-8">
                        <span className="text-[8rem] sm:text-[12rem] lg:text-[16rem] font-bold leading-none text-charcoal select-none">
                            404
                        </span>
                    </div>

                    {/* Content */}
                    <h1 className="text-headline mb-4 sm:mb-6">
                        Page not found
                    </h1>
                    <p className="text-body text-lg mb-8 sm:mb-10 max-w-md mx-auto">
                        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
                    </p>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/" className="btn btn-primary">
                            Go Home
                        </Link>
                        <Link href="/contact" className="btn btn-secondary">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
