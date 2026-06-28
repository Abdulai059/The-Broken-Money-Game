'use client'

import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useOnboardingStore } from "@/store/useOnboardingStore";

type Step = "welcome" | "drain" | "decision" | "spend-result" | "plant-result" | "day-two";

// ─── Welcome ──────────────────────────────────────────────────────────────────

function WelcomeStep({ onReady }: { onReady: () => void }) {
    const ref = useRef<HTMLDivElement>(null);
    const called = useRef(false);

    useEffect(() => {
        if (!ref.current || called.current) return;
        called.current = true;
        gsap.fromTo(
            ref.current,
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 1.4, ease: "power2.out", onComplete: onReady }
        );
    }, [onReady]);

    return (
        <div ref={ref} className="flex flex-col items-center gap-8 opacity-0">
            {/* Village scene — art assets slot in here later */}
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-[#2a3050]">
                <div className="h-28 bg-gradient-to-b from-[#0d1124] to-[#1e2a50] flex items-end justify-center pb-2">
                    <span className="text-3xl">🌙</span>
                </div>
                <div className="h-24 bg-[#1a3320] flex items-center justify-around px-8">
                    <span className="text-4xl">🏚️</span>
                    <span className="text-4xl">🌱</span>
                    <span className="text-5xl">👛</span>
                </div>
            </div>

            <p className="text-2xl font-bold text-white tracking-wide text-center">
                Welcome to The Hustle.
            </p>

            <div className="bg-[#12161f] border border-[#373e51] rounded-2xl px-8 py-4 text-center">
                <p className="text-gray-500 text-xs mb-1">Wallet Balance</p>
                <p className="text-3xl font-bold text-white">💵 100 Coins</p>
            </div>

            <p className="text-gray-400 text-sm italic">This is all the money you own.</p>
        </div>
    );
}

// ─── Drain ────────────────────────────────────────────────────────────────────

function DrainStep({ onTap }: { onTap: () => void }) {
    const balance = useOnboardingStore((s) => s.balance);
    const draining = useOnboardingStore((s) => s.draining);
    const walletTapped = useOnboardingStore((s) => s.walletTapped);
    const startDrain = useOnboardingStore((s) => s.startDrain);
    const tapWallet = useOnboardingStore((s) => s.tapWallet);
    const tapDone = useRef(false);
    const walletRef = useRef<HTMLButtonElement>(null);
    const messageRef = useRef<HTMLDivElement>(null);
    const shakeRef = useRef<gsap.core.Tween | null>(null);

    // Begin drain after 3 seconds
    useEffect(() => {
        const t = setTimeout(startDrain, 3000);
        return () => clearTimeout(t);
    }, [startDrain]);

    // Tick balance down while draining
    useEffect(() => {
        if (!draining || walletTapped) return;
        const id = setInterval(() => {
            const { draining: d, walletTapped: t, balance: b } = useOnboardingStore.getState();
            if (!d || t || b <= 0) { clearInterval(id); return; }
            useOnboardingStore.setState({ balance: b - 1 });
        }, 400);
        return () => clearInterval(id);
    }, [draining, walletTapped]);

    // Shake wallet while draining
    useEffect(() => {
        if (draining && !walletTapped && walletRef.current) {
            shakeRef.current = gsap.to(walletRef.current, {
                x: 5, duration: 0.08, repeat: -1, yoyo: true, ease: "none",
            });
        }
        if (walletTapped && shakeRef.current) {
            shakeRef.current.kill();
            gsap.set(walletRef.current, { x: 0 });
        }
    }, [draining, walletTapped]);

    const handleTap = useCallback(() => {
        if (tapDone.current) return;
        tapDone.current = true;
        tapWallet();
        if (walletRef.current) {
            gsap.killTweensOf(walletRef.current);
            gsap.set(walletRef.current, { x: 0 });
            gsap.fromTo(walletRef.current, { scale: 1 }, { scale: 1.2, duration: 0.12, yoyo: true, repeat: 1 });
        }
        if (messageRef.current) {
            gsap.fromTo(
                messageRef.current,
                { opacity: 0, y: 12 },
                { opacity: 1, y: 0, duration: 0.7, delay: 0.3, onComplete: () => setTimeout(onTap, 1400) }
            );
        }
    }, [tapWallet, onTap]);

    return (
        <div className="flex flex-col items-center gap-8">
            <div className="bg-[#12161f] border border-[#373e51] rounded-2xl px-8 py-4 text-center">
                <p className="text-gray-500 text-xs mb-1">Wallet Balance</p>
                <p className="text-3xl font-bold text-yellow-400">💵 {balance} Coins</p>
                {draining && !walletTapped && (
                    <p className="text-red-400 text-xs mt-1 animate-pulse">leaking...</p>
                )}
            </div>

            <button
                ref={walletRef}
                onClick={handleTap}
                disabled={walletTapped}
                className="text-8xl cursor-pointer select-none disabled:cursor-default"
                aria-label="Tap to stop the leak"
            >
                👛
            </button>

            <div ref={messageRef} className="opacity-0 text-center px-4 max-w-xs">
                <p className="text-white text-lg font-semibold leading-snug">
                    Money loses value when it sits still.
                </p>
            </div>
        </div>
    );
}

// ─── Decision ─────────────────────────────────────────────────────────────────

function DecisionStep({ onDecide }: { onDecide: (choice: "spend" | "plant") => void }) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;
        gsap.fromTo(ref.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.8 });
    }, []);

    return (
        <div ref={ref} className="flex flex-col items-center gap-8 opacity-0">
            <p className="text-white text-xl font-bold text-center">
                What will you do?
            </p>
            <div className="flex gap-4 w-full max-w-xs">
                <button
                    onClick={() => onDecide("spend")}
                    className="flex-1 bg-[#12161f] border border-[#373e51] hover:border-red-500 rounded-2xl py-6 flex flex-col items-center gap-2 transition-all hover:scale-105 active:scale-95"
                >
                    <span className="text-4xl">💸</span>
                    <span className="text-white font-semibold text-xs text-center">Spend the money</span>
                </button>
                <button
                    onClick={() => onDecide("plant")}
                    className="flex-1 bg-[#12161f] border border-[#373e51] hover:border-green-500 rounded-2xl py-6 flex flex-col items-center gap-2 transition-all hover:scale-105 active:scale-95"
                >
                    <span className="text-4xl">🌱</span>
                    <span className="text-white font-semibold text-xs text-center">Plant a Money Seed</span>
                </button>
            </div>
        </div>
    );
}

// ─── Spend Result ─────────────────────────────────────────────────────────────

function SpendResult({ onDone }: { onDone: () => void }) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;
        gsap.fromTo(ref.current, { opacity: 0 }, { opacity: 1, duration: 0.6 });
        const t = setTimeout(onDone, 2800);
        return () => clearTimeout(t);
    }, [onDone]);

    return (
        <div ref={ref} className="flex flex-col items-center gap-6 opacity-0">
            <span className="text-6xl">🫙</span>
            <p className="text-gray-400 text-lg text-center">Nothing happened.</p>
            <p className="text-gray-500 text-sm text-center">The coins are gone. The field is empty.</p>
        </div>
    );
}

// ─── Plant Result ─────────────────────────────────────────────────────────────

function PlantResult({ onDone }: { onDone: () => void }) {
    const treeRef = useRef<HTMLDivElement>(null);
    const growTree = useOnboardingStore((s) => s.growTree);

    useEffect(() => {
        growTree();
        if (!treeRef.current) return;
        gsap.fromTo(
            treeRef.current,
            { scale: 0, opacity: 0 },
            {
                scale: 1, opacity: 1, duration: 1.4,
                ease: "elastic.out(1, 0.45)",
                onComplete: () => setTimeout(onDone, 1200),
            }
        );
    }, [growTree, onDone]);

    return (
        <div className="flex flex-col items-center gap-6">
            <p className="text-white text-lg font-semibold">You planted a seed.</p>
            <div ref={treeRef} className="text-8xl" style={{ transformOrigin: "50% 100%" }}>
                🌳
            </div>
            <p className="text-green-400 text-sm text-center">
                Come back tomorrow to see what grows.
            </p>
        </div>
    );
}

// ─── Day Two Reward ───────────────────────────────────────────────────────────

function DayTwoReward({ onDone }: { onDone: () => void }) {
    const coinsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!coinsRef.current) return;
        gsap.fromTo(
            coinsRef.current,
            { y: -40, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1.0,
                ease: "bounce.out",
                onComplete: () => setTimeout(onDone, 2200),
            }
        );
    }, [onDone]);

    return (
        <div className="flex flex-col items-center gap-6">
            <span className="text-7xl">🌳</span>
            <div ref={coinsRef} className="opacity-0 text-center">
                <p className="text-4xl font-bold text-yellow-400">+18 Coins</p>
                <p className="text-gray-400 text-sm mt-3">Your money worked while you were away.</p>
            </div>
        </div>
    );
}

// ─── Main Orchestrator ────────────────────────────────────────────────────────

export default function OnboardingScene() {
    const router = useRouter();
    const decision = useOnboardingStore((s) => s.decision);
    const lastVisitDate = useOnboardingStore((s) => s.lastVisitDate);
    const makeDecision = useOnboardingStore((s) => s.makeDecision);
    const completeOnboarding = useOnboardingStore((s) => s.completeOnboarding);
    const showReward = useOnboardingStore((s) => s.showReward);
    const containerRef = useRef<HTMLDivElement>(null);

    const getInitialStep = (): Step => {
        if (decision === "plant" && lastVisitDate) {
            const last = new Date(lastVisitDate);
            const now = new Date();
            const newDay =
                now.getFullYear() !== last.getFullYear() ||
                now.getMonth() !== last.getMonth() ||
                now.getDate() !== last.getDate();
            if (newDay) return "day-two";
        }
        return "welcome";
    };

    const [step, setStep] = useState<Step>(getInitialStep);

    const transitionTo = useCallback((next: Step) => {
        if (!containerRef.current) { setStep(next); return; }
        gsap.to(containerRef.current, {
            opacity: 0, y: -8, duration: 0.3,
            onComplete: () => {
                setStep(next);
                gsap.fromTo(containerRef.current, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.35 });
            },
        });
    }, []);

    const finish = useCallback(() => {
        completeOnboarding();
        router.replace("/game");
    }, [completeOnboarding, router]);

    const handleDecision = useCallback((choice: "spend" | "plant") => {
        makeDecision(choice);
        transitionTo(choice === "spend" ? "spend-result" : "plant-result");
    }, [makeDecision, transitionTo]);

    const handleDayTwoDone = useCallback(() => {
        showReward();
        completeOnboarding();
        router.replace("/game");
    }, [showReward, completeOnboarding, router]);

    return (
        <div
            ref={containerRef}
            className="min-h-screen flex flex-col items-center justify-center px-6 py-12"
            style={{ background: "radial-gradient(ellipse at top, #1a1f35 0%, #0d0f1a 100%)" }}
        >
            {step === "welcome" && (
                <WelcomeStep onReady={() => transitionTo("drain")} />
            )}
            {step === "drain" && (
                <DrainStep onTap={() => transitionTo("decision")} />
            )}
            {step === "decision" && (
                <DecisionStep onDecide={handleDecision} />
            )}
            {step === "spend-result" && (
                <SpendResult onDone={finish} />
            )}
            {step === "plant-result" && (
                <PlantResult onDone={finish} />
            )}
            {step === "day-two" && (
                <DayTwoReward onDone={handleDayTwoDone} />
            )}
        </div>
    );
}
