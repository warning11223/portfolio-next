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

export const metadata: Metadata = {
    title: "Frontend developer portfolio",
    description: "I'm a frontend developer and I specialize in creating and optimizing high-load web applications",
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
