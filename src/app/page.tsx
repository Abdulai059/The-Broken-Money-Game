"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";
import LandingNav from "./landing/_components/LandingNav";
import LandingHero from "./landing/_components/LandingHero";
import LandingWorldsBar from "./landing/_components/LandingWorldsBar";

export default function Page() {
    const router = useRouter();
    const { ready, authenticated, login } = usePrivy();

    useEffect(() => {
        if (!ready) return;
        if (authenticated) {
            router.replace("/game");
        }
    }, [ready, authenticated, router]);

    // Authenticated — about to redirect, show nothing
    if (ready && authenticated) return null;

    // Render the landing page immediately — buttons are disabled until Privy is ready
    // This prevents the dark body flash on refresh
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <header className="h-16 border-b border-gray-200 flex-shrink-0">
                <div className="max-w-5xl mx-auto h-full px-6 flex items-center justify-between">
                    <LandingNav onLogin={login} disabled={!ready} />
                </div>
            </header>

            <main className="flex-1 flex items-center justify-center px-6 py-16">
                <div className="max-w-5xl mx-auto w-full">
                    <LandingHero onLogin={login} disabled={!ready} />
                </div>
            </main>

            <footer className="h-16 border-t border-gray-300 flex-shrink-0">
                <LandingWorldsBar />
            </footer>
        </div>
    );
}
