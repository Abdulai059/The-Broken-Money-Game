// @ts-nocheck
'use client'

import { createContext, useContext, useEffect, useRef, useState } from "react";

const MusicContext = createContext();

export function MusicProvider({ children }) {
    const bgAudioRef = useRef(null);
    const clickAudioRef = useRef(null);

    const [playing, setPlaying] = useState(true);
    const [soundEffects, setSoundEffects] = useState(true);
    const [initialized, setInitialized] = useState(false);

    const toggleMusic = () => {
        if (!bgAudioRef.current) return;
        setPlaying((prev) => {
            const next = !prev;
            if (next) bgAudioRef.current.play().catch(() => { });
            else bgAudioRef.current.pause();
            return next;
        });
    };

    const toggleSoundEffects = () => setSoundEffects((prev) => !prev);

    const playClick = () => {
        if (!soundEffects || !clickAudioRef.current) return;
        clickAudioRef.current.currentTime = 0;
        clickAudioRef.current.play().catch(() => { });
    };

    useEffect(() => {
        if (initialized) return;

        const startMusic = () => {
            if (bgAudioRef.current && playing) {
                bgAudioRef.current.loop = true;
                bgAudioRef.current.play().catch(() => { });
                setInitialized(true);
            }
            window.removeEventListener("click", startMusic);
        };

        window.addEventListener("click", startMusic, { once: true });
        return () => window.removeEventListener("click", startMusic);
    }, [initialized, playing]);

    return (
        <MusicContext.Provider
            value={{ playing, toggleMusic, soundEffects, toggleSoundEffects, playClick }}
        >
            {children}
            <audio ref={bgAudioRef} src="/sound/gamemusic.mp3" />
            <audio ref={clickAudioRef} src="/sound/clicksound.wav" />
        </MusicContext.Provider>
    );
}

export const useMusic = () => useContext(MusicContext);
