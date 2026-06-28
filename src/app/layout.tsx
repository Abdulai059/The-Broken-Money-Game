// @ts-nocheck
import "./globals.css";
import { MusicProvider } from "@/context/MusicProvider";
import Providers from "@/components/auth/Providers";
import ShellLayout from "@/components/shell/ShellLayout";
import { Playpen_Sans } from "next/font/google";


import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "The Hustle",
        template: "%s | The Hustle",
    },
    description:
        "The strategy game that rewires how you think about money. Build assets, grow wealth, and develop lifelong investing habits through play.",
    applicationName: "The Hustle",
    keywords: [
        "financial game",
        "investment game",
        "wealth building",
        "strategy game",
        "financial literacy",
        "money mindset",
        "personal finance",
        "investing",
        "Web3 game",
    ],
    authors: [{ name: "The Hustle Team" }],
    creator: "The Hustle",
    publisher: "The Hustle",
    icons: {
        icon: "/assets/logo.png",
        shortcut: "/assets/logo.png",
        apple: "/assets/logo.png",
    },
};

const playpen = Playpen_Sans({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={playpen.className} suppressHydrationWarning>
                <Providers>
                    <MusicProvider>
                        <div className="text-sm min-h-screen text-white">
                            <ShellLayout>
                                {children}
                            </ShellLayout>
                        </div>
                    </MusicProvider>
                </Providers>
            </body>
        </html>
    );
}
