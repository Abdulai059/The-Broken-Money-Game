// @ts-nocheck
'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useOnboardingStore } from "@/store/useOnboardingStore";
import HomePage from "@/app/_components/HomePage";

/**
 * Root page — checks onboarding state before rendering.
 * First-time players are redirected to /onboarding.
 * Returning players see the game directly.
 */
export default function Page() {
    const router = useRouter();
    const onboardingComplete = useOnboardingStore((s) => s.onboardingComplete);

    useEffect(() => {
        if (!onboardingComplete) {
            router.replace("/onboarding");
        }
    }, [onboardingComplete, router]);

    // Don't flash the game world while redirecting
    if (!onboardingComplete) return null;

    return <HomePage />;
}
