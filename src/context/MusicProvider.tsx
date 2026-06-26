// @ts-nocheck
'use client'

import { createContext, useContext, useEffect, useRef } from "react";
import { useAudioStore } from "@/store/useAudioStore";

/**
 * MusicProvider
 *
 * Owns the actual <audio> elements (bgAudioRef, clickAudioRef).
 * All preference state (playing, soundEffects) now lives in
 * useAudioStore (Zustand) and is persisted to localStorage automatically.
 *
 * This context now only exposes playClick() — the one action that
 * needs direct access to the audio ref at call time.
 * Components that need to toggle music/effects import useAudioStore directly.
 */

const MusicContext = createContext<{ playClick: () => void } | null>(null);

export function MusicProvider({ children }) {
    const bgAudioRef = useRef<HTMLAudioElement>(null);
    const clickAudioRef = useRef<HTMLAudioElement>(null);

    const playing = useAudioStore((s) => s.playing);
    const soundEffects = useAudioStore((s) => s.soundEffects);
    const toggleMusic = useAudioStore((s) => s.toggleMusic);

    const playClick = () => {
        if (!soundEffects || !clickAudioRef.current) return;
        clickAudioRef.current.currentTime = 0;
        clickAudioRef.current.play().catch(() => { });
    };

    // React to playing changes — play or pause bg music accordingly
    useEffect(() => {
        if (!bgAudioRef.current) return;
        if (playing) {
            bgAudioRef.current.loop = true;
            bgAudioRef.current.play().catch(() => { });
        } else {
            bgAudioRef.current.pause();
        }
    }, [playing]);

    // Start bg music on first user interaction (browser autoplay policy)
    useEffect(() => {
        const startMusic = () => {
            if (bgAudioRef.current && playing) {
                bgAudioRef.current.loop = true;
                bgAudioRef.current.play().catch(() => { });
            }
        };
        window.addEventListener("click", startMusic, { once: true });
        return () => window.removeEventListener("click", startMusic);
    }, [playing]);

    return (
        <MusicContext.Provider value={{ playClick }}>
            {children}
            <audio ref={bgAudioRef} src="/sound/gamemusic.mp3" />
            <audio ref={clickAudioRef} src="/sound/clicksound.wav" />
        </MusicContext.Provider>
    );
}

export const useMusic = () => useContext(MusicContext);
