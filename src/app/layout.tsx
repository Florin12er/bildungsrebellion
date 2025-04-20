import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Optimized font loading with variable fonts
const geistSans = Geist({
    subsets: ["latin"],
    variable: "--font-geist-sans",
    display: "swap",
    adjustFontFallback: false,
});

const geistMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-geist-mono",
    display: "swap",
    adjustFontFallback: false,
});

export const metadata: Metadata = {
    title: {
        default: "BildungsRebellen - Revolution im Bildungssystem",
        template: "%s | BildungsRebellen"
    },
    description: "Wir sind die Stimme für radikale Bildungsreform. Digitale Bildung, Chancengleichheit und zukunftsorientierte Schulen - jetzt!",
    keywords: [
        "Bildungsreform",
        "Schulrevolution",
        "Digitale Bildung",
        "Chancengleichheit",
        "Bildungspolitik",
        "Schulsystem",
        "Bildungsrebellen"
    ],
    icons: {
        icon: [
            { url: "/image.png", type: "image/png", sizes: "192x192" },
        ],
    },
    openGraph: {
        title: "BildungsRebellen - Die Revolution beginnt im Klassenzimmer",
        description: "Kämpfe mit uns für ein modernes, gerechtes Bildungssystem in Deutschland",
        url: "https://bildungsrebellen.de",
        siteName: "BildungsRebellen",
        images: [
            {
                url: "https://bildungsrebellen.de/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "BildungsRebellen Kampagne",
            },
        ],
        locale: "de_DE",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "BildungsRebellen",
        description: "Die Bildungsrevolution startet jetzt!",
    },
    category: "education",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="de" className="scroll-smooth">
        <head>
            {/* Preload critical resources */}
            <link
                rel="preload"
                href="https://fonts.googleapis.com/css2?family=Bungee&family=Permanent+Marker&display=swap"
                as="style"
            />
            <noscript>
                <link
                    href="https://fonts.googleapis.com/css2?family=Bungee&family=Permanent+Marker&display=swap"
                    rel="stylesheet"
                />
            </noscript>
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-gray-950 text-gray-100`}
        >
        <Navbar />
        <main className="min-h-[calc(100vh-160px)]">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
}