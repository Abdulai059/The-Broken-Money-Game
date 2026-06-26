// @ts-nocheck
import { gsap } from "gsap";

let initialized = false;
let ang = 0;

function rotateWheel() {
    const d = 5 + Math.floor(Math.random() * 9);

    const duration = d * 3;
    const offset = d * 10;

    const direction = Math.random() > 0.5 ? 1 : -1;
    ang += offset * direction;

    gsap.to("#roll", {
        rotation: ang,
        transformOrigin: "50% 50%",
        duration,
        ease: "sine.out",
        onComplete: () => {
            // Wait 1 minute before the next rotation
            gsap.delayedCall(60, rotateWheel);
        },
    });
}

export function startWheel() {
    if (!initialized) {
        initialized = true;

        // Wait 1 minute before the first rotation
        gsap.delayedCall(60, rotateWheel);
    }
}