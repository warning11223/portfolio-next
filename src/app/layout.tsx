import type {Metadata} from "next";
import {Inter, Calistoga} from "next/font/google"
import "./globals.css";
import {twMerge} from "tailwind-merge";
import React from "react";

const inter = Inter({
    subsets: ['latin'],
    variable: "--font-sans"
})

const calistoga = Calistoga({
    subsets: ['latin'],
    variable: "--font-serif",
    weight: ["400"]
})

const siteUrl = "https://denis-frontend.ru/"

export const metadata: Metadata = {
    title: "Frontend Web Development",
    description: "Discover projects and insights from a frontend developer passionate about building modern, fast, and accessible web apps.",
    keywords: ["Frontend developer", "Next.js", "React", "Web development", "UI/UX", "High-load applications", "TypeScript", "JavaScript", "Redux", "Vue", "Nuxt", "HTML", "CSS"],
    authors: [{ name: "denis-frontend", url: siteUrl }],
    creator: "denis-frontend",
    metadataBase: new URL(siteUrl),
    openGraph: {
        title: "Frontend Web Development",
        description: "Discover projects and insights from a frontend developer passionate about building modern, fast, and accessible web apps.",
        url: siteUrl,
        siteName: "Frontend Web Development",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Frontend Developer Portfolio Preview",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Frontend Web Development",
        description: "Discover projects and insights from a frontend developer passionate about building modern, fast, and accessible web apps.",
        images: ["/og-image.jpg"],
    },
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={twMerge(
            "bg-gray-900 text-white antialiased font-sans",
            inter.variable,
            calistoga.variable
        )}>
        <body>{children}</body>
        </html>
    );
}
