// @ts-nocheck
'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";
import { useOnboardingStore } from "@/store/useOnboardingStore";
import HomePage from "@/app/_components/HomePage";
import JackpotModal from "@/components/ui/JackpotModal";

export default function GamePage() {
    const router = useRouter();
    const { ready, authenticated } = usePrivy();
    const onboardingComplete = useOnboardingStore((s) => s.onboardingComplete);
    const [showJackpot, setShowJackpot] = useState(false);

    // Auth guard
    useEffect(() => {
        if (!ready) return;
        if (!authenticated) {
            router.replace("/");
            return;
        }
        if (!onboardingComplete) {
            router.replace("/welcome");
        }
    }, [ready, authenticated, onboardingComplete, router]);

    // Show jackpot modal once per session, 3s after dashboard loads
    useEffect(() => {
        if (!ready || !authenticated || !onboardingComplete) return;
        if (sessionStorage.getItem("jackpot_shown")) return;

        const timer = setTimeout(() => {
            setShowJackpot(true);
            sessionStorage.setItem("jackpot_shown", "1");
        }, 3000);

        return () => clearTimeout(timer);
    }, [ready, authenticated, onboardingComplete]);

    if (!ready || !authenticated || !onboardingComplete) return null;

    return (
        <>
            <HomePage />
            <JackpotModal
                isOpen={showJackpot}
                onClose={() => setShowJackpot(false)}
                onCtaClick={() => setShowJackpot(false)}
            />
        </>
    );
}
