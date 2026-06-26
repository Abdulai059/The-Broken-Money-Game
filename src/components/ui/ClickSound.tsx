// @ts-nocheck
'use client'

import { useEffect } from "react";

export default function ClickSound() {
    useEffect(() => {
        const clickAudio = new Audio("/sound/clicksound.wav");
        clickAudio.volume = 0.5;

        const handler = (e) => {
            const target = e.target.closest(
                'button, a, [role="button"], [role="tab"], [role="menuitem"], input[type="checkbox"], input[type="radio"], select'
            );
            if (target) {
                const sound = clickAudio.cloneNode();
                sound.volume = 0.5;
                sound.play().catch(() => { });
            }
        };

        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return null;
}
