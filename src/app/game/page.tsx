// @ts-nocheck
'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";
import { useOnboardingStore } from "@/store/useOnboardingStore";
import HomePage from "@/app/_components/HomePage";

export default function GamePage() {
    const router = useRouter();
    const { ready, authenticated } = usePrivy();
    const onboardingComplete = useOnboardingStore((s) => s.onboardingComplete);

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

    if (!ready || !authenticated || !onboardingComplete) return null;

    return <HomePage />;
}
