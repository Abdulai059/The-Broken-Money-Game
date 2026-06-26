// @ts-nocheck
import "./globals.css";
import { MusicProvider } from "@/context/MusicProvider";
import Providers from "@/components/auth/Providers";
import ShellLayout from "@/components/shell/ShellLayout";
import { Playpen_Sans } from "next/font/google";


export const metadata = {
    title: "Wealth-Tree",
    description: "Financial freedom starts here.",
    icons: {
        icon: "/assets/logo.png",
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
