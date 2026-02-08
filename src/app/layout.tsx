import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import RouteScrollReset from "@/components/layout/RouteScrollReset";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Wideech — Crafting the Future of Technology",
    template: "%s | Wideech",
  },
  description:
    "A premium technology studio based in Sri Lanka, building innovative digital experiences for a global audience. We specialize in cutting-edge software, design, and strategic consulting.",
  keywords: [
    "technology",
    "software development",
    "digital experiences",
    "innovation",
    "design",
    "consulting",
    "Sri Lanka",
    "Wideech",
  ],
  authors: [{ name: "Wideech" }],
  creator: "Wideech",
  publisher: "Wideech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wideech.com",
    siteName: "Wideech",
    title: "Wideech — Crafting the Future of Technology",
    description:
      "A premium technology studio building innovative digital experiences for a global audience.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wideech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wideech — Crafting the Future of Technology",
    description:
      "A premium technology studio building innovative digital experiences for a global audience.",
    creator: "@wideech",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Wideech",
              url: "https://wideech.com",
              logo: "https://wideech.com/logo.png",
              description:
                "A premium technology studio building innovative digital experiences.",
              foundingDate: "2024",
              founders: [
                {
                  "@type": "Person",
                  name: "Founder Name",
                },
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "LK",
              },
              sameAs: [
                "https://twitter.com/wideech",
                "https://linkedin.com/company/wideech",
                "https://github.com/wideech",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <RouteScrollReset />
        {children}
      </body>
    </html>
  );
}
