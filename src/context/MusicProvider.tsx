// @ts-nocheck
'use client'

import { createContext, useContext, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useAudioStore } from "@/store/useAudioStore";

/**
 * MusicProvider
 *
 * Owns the actual <audio> elements (bgAudioRef, clickAudioRef).
 * All preference state (playing, soundEffects) lives in useAudioStore (Zustand).
 *
 * Music is route-aware:
 * - Paused on public routes (/, /welcome) — no game music on landing/onboarding
 * - Plays on all protected routes when `playing` is true in the store
 */

const PUBLIC_ROUTES = ["/", "/welcome"];

const MusicContext = createContext<{ playClick: () => void } | null>(null);

export function MusicProvider({ children }) {
    const bgAudioRef = useRef<HTMLAudioElement>(null);
    const clickAudioRef = useRef<HTMLAudioElement>(null);

    const pathname = usePathname();
    const playing = useAudioStore((s) => s.playing);
    const soundEffects = useAudioStore((s) => s.soundEffects);

    const playClick = () => {
        if (!soundEffects || !clickAudioRef.current) return;
        clickAudioRef.current.currentTime = 0;
        clickAudioRef.current.play().catch(() => { });
    };

    // Route-aware music control — pause on public routes, play on protected ones
    useEffect(() => {
        if (!bgAudioRef.current) return;
        const isPublic = PUBLIC_ROUTES.includes(pathname);

        if (isPublic || !playing) {
            bgAudioRef.current.pause();
        } else {
            bgAudioRef.current.loop = true;
            bgAudioRef.current.play().catch(() => { });
        }
    }, [pathname, playing]);

    // Start bg music on first user interaction (browser autoplay policy)
    useEffect(() => {
        const startMusic = () => {
            if (!bgAudioRef.current) return;
            const isPublic = PUBLIC_ROUTES.includes(pathname);
            if (!isPublic && playing) {
                bgAudioRef.current.loop = true;
                bgAudioRef.current.play().catch(() => { });
            }
        };
        window.addEventListener("click", startMusic, { once: true });
        return () => window.removeEventListener("click", startMusic);
    }, [pathname, playing]);

    return (
        <MusicContext.Provider value={{ playClick }}>
            {children}
            <audio ref={bgAudioRef} src="/sound/gamemusic.mp3" />
            <audio ref={clickAudioRef} src="/sound/clicksound.wav" />
        </MusicContext.Provider>
    );
}

export const useMusic = () => useContext(MusicContext);
