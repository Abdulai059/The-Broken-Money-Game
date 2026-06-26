// @ts-nocheck
'use client'

import { useEffect } from "react";
import { useMusic } from "@/context/MusicProvider";

/**
 * ClickSound
 *
 * Mounts once in ShellLayout. Listens for mousedown on any interactive
 * element across the entire app and plays the click sound via MusicProvider.
 * The soundEffects toggle in useAudioStore gates whether sound plays.
 */
export default function ClickSound() {
    const { playClick } = useMusic();

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            const target = (e.target as Element).closest(
                'button, a, [role="button"], [role="tab"], [role="menuitem"], input[type="checkbox"], input[type="radio"], select'
            );
            if (target) playClick();
        };

        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [playClick]);

    return null;
}
