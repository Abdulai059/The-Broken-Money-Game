// @ts-nocheck
'use client'

import { useEffect, useState } from "react";
import GameDashboard from "@/app/_components/GameDashboard";
import JackpotModal from "@/components/ui/JackpotModal";

// Auth guard is handled centrally in ShellLayout
export default function GamePage() {
    const [showJackpot, setShowJackpot] = useState(false);

    // Show jackpot modal once per login session, 3s after dashboard loads
    useEffect(() => {
        if (sessionStorage.getItem("jackpot_shown")) return;
        const timer = setTimeout(() => {
            setShowJackpot(true);
            sessionStorage.setItem("jackpot_shown", "1");
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <GameDashboard />
            <JackpotModal
                isOpen={showJackpot}
                onClose={() => setShowJackpot(false)}
                onCtaClick={() => setShowJackpot(false)}
            />
        </>
    );
}
