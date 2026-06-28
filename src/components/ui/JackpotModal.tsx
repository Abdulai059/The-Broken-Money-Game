"use client";

import { useEffect, useRef, useState } from "react";

interface JackpotModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    price?: number;
    title?: string;
    subtitle?: string;
    ctaText?: string;
    onCtaClick?: () => void;
    initialMinutes?: number;
}

export default function JackpotModal({
    isOpen = true,
    onClose,
    price = 100,
    title = "Welcome to The Hustle",
    subtitle = "Every empire starts with a single decision.",
    ctaText = "Claim & Start Playing",
    onCtaClick = () => { },
}: JackpotModalProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animFrameRef = useRef<number>(0);


    // Confetti canvas
    useEffect(() => {
        if (!isOpen) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const colors = ["#f0abfc", "#a3e635", "#fbbf24", "#60a5fa", "#f87171", "#fb923c"];
        const pieces = Array.from({ length: 70 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            rx: Math.random() * 6 + 3,
            ry: Math.random() * 3 + 2,
            tilt: Math.random() * Math.PI,
            tiltSpeed: (Math.random() - 0.5) * 0.05,
            speed: Math.random() * 1.5 + 0.8,
            color: colors[Math.floor(Math.random() * colors.length)],
        }));

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            pieces.forEach((p) => {
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.tilt);
                ctx.beginPath();
                ctx.ellipse(0, 0, p.rx, p.ry, 0, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = 0.85;
                ctx.fill();
                ctx.restore();
                p.y += p.speed;
                p.tilt += p.tiltSpeed;
                if (p.y > canvas.height) {
                    p.y = -10;
                    p.x = Math.random() * canvas.width;
                }
            });
            animFrameRef.current = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            cancelAnimationFrame(animFrameRef.current);
            window.removeEventListener("resize", resize);
        };
    }, [isOpen]);

    if (!isOpen) return null;



    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.55)" }}
        >
            {/* Confetti */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none"
            />

            {/* Modal outer — padding-top creates space for the mascot */}
            <div
                className="relative w-[300px] sm:w-[340px]"
                style={{ paddingTop: "60px", animation: "popIn 0.4s cubic-bezier(0.34,1.56,0.64,1) both" }}
            >
                {/* Mascot — sits above the card */}
                <div
                    className="absolute left-1/2 top-0 z-10 text-[80px] leading-none select-none"
                    style={{
                        transform: "translateX(-50%)",
                        animation: "mascotBounce 2s ease-in-out infinite",
                        filter: "drop-shadow(0 6px 14px rgba(0,0,0,0.3))",
                    }}
                    aria-hidden="true"
                >
                    🎂
                </div>

                {/* Modal card */}
                <div className="relative z-[1] rounded-3xl overflow-hidden shadow-2xl">
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="absolute top-3 right-3 z-20 w-7 h-7 rounded-full flex items-center justify-center text-[#4a044e] text-sm font-bold transition-colors hover:bg-white/60"
                        style={{ background: "rgba(255,255,255,0.3)" }}
                    >
                        ✕
                    </button>

                    {/* Header band */}
                    <div
                        className="px-6 pb-5 text-center"
                        style={{ background: "#f0abfc", paddingTop: "56px" }}
                    >
                        <h2
                            className="text-xl font-black leading-snug"
                            style={{ color: "#4a044e" }}
                        >
                            {title}
                        </h2>
                    </div>

                    {/* Body */}
                    <div className="px-6 pb-6 pt-4" style={{ background: "#fdf4ff" }}>
                        {/* Subtitle */}
                        <p
                            className="text-center text-sm font-bold mb-4"
                            style={{ color: "#7e22ce" }}
                        >
                            {subtitle}
                        </p>

                        {/* Price card */}
                        <div className="rounded-2xl px-5 py-4 mb-4 flex items-center justify-between bg-gradient-to-br from-white to-purple-50 border border-purple-200 shadow-lg shadow-purple-200/40">
                            {/* Left side */}
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-extrabold text-purple-950">
                                    🎁 Welcome Gift
                                </p>

                                <p className="text-xs font-medium text-purple-700/80">
                                    Your starting capital
                                </p>

                                <span className="mt-2 w-fit px-2 py-1 rounded-full text-[10px] font-bold bg-purple-100 text-purple-700">
                                    Starter Bonus
                                </span>
                            </div>

                            {/* Right side */}
                            <div className="flex items-start gap-1">
                                <span className="text-xl mt-2">💰</span>

                                <span className="text-4xl sm:text-5xl font-black tracking-tight text-fuchsia-600 drop-shadow-sm">
                                    {price}
                                </span>
                            </div>
                        </div>

                        {/* Countdown */}
                        {/* <div
                            className="flex items-center justify-center gap-1.5 mb-4 text-[10px] font-bold tracking-widest uppercase"
                            style={{ color: "#6b21a8" }}
                        >
                            <span>Starting Balance</span>
                            <span
                                className="rounded-md px-2 py-1 text-base font-black tabular-nums"
                                style={{ background: "#3b0764", color: "#f0abfc" }}
                            >
                                {pad(time.m)}
                            </span>
                            <span>Coins</span>
                            <span
                                className="rounded-md px-2 py-1 text-base font-black tabular-nums"
                                style={{ background: "#3b0764", color: "#f0abfc" }}
                            >
                                {pad(time.s)}
                            </span>
                            <span></span>
                            <span
                                className="rounded-md px-2 py-1 text-base font-black tabular-nums"
                                style={{ background: "#3b0764", color: "#f0abfc" }}
                            >
                                {pad(time.ms)}
                            </span>
                            <span></span>
                        </div> */}

                        <div
                            className="flex items-center justify-center gap-2 mb-4"
                            style={{ color: "#6b21a8" }}
                        >
                            <span
                                className="rounded-md px-3 py-2 text-base font-black"
                                style={{
                                    background: "#3b0764",
                                    color: "#f0abfc",
                                }}
                            >
                                💰 {price} Coins
                            </span>
                        </div>

                        {/* CTA */}
                        <button
                            onClick={onCtaClick}
                            className="w-full py-4 rounded-full text-base font-black tracking-widest uppercase transition-colors"
                            style={{
                                background: "#a3e635",
                                color: "#1a2e05",
                                animation: "pulse 1.8s ease-in-out infinite",
                            }}
                            onMouseEnter={(e) =>
                                ((e.target as HTMLButtonElement).style.background = "#bef264")
                            }
                            onMouseLeave={(e) =>
                                ((e.target as HTMLButtonElement).style.background = "#a3e635")
                            }
                        >
                            {ctaText}
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes popIn {
          from { transform: scale(0.6); opacity: 0; }
          to   { transform: scale(1);   opacity: 1; }
        }
        @keyframes mascotBounce {
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50%       { transform: translateX(-50%) translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.03); }
        }
      `}</style>
        </div>
    );
}