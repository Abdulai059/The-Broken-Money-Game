"use client";

import type { FC } from "react";

interface LandingHeroProps {
    onLogin: () => void;
    disabled?: boolean;
}

const DUO_VIDEO_SRC = "/video/coins.mp4";




function DuoOwl() {
    return (
        <video
            src={DUO_VIDEO_SRC}
            autoPlay
            loop
            muted
            playsInline
            className="w-20 h-[72px] object-contain"
        />
    );
}




function Phone() {
    return (
        <div className="relative w-40 h-56 flex-shrink-0">
            <div className="absolute bottom-0 left-2 w-36 h-52 bg-[#5F6AB4] rounded-[28px]" />
            <div className="absolute top-0 left-0 w-36 h-52 bg-white rounded-[28px] border-2 border-[#8291f2] flex items-center justify-center">
                <DuoOwl />
            </div>
        </div>
    );
}

const LandingHero: FC<LandingHeroProps> = ({ onLogin, disabled }) => {
    return (
        <main className="flex-1 flex items-center justify-center px-8 py-12">
            <div className="flex flex-row items-center justify-center gap-16 max-w-5xl w-full">

                <div>
                    <Phone />
                </div>

                <div className="flex flex-col items-start text-left max-w-md w-full gap-5">
                    <h1 className="text-3xl font-bold text-[#3c3c3c] leading-tight">
                        The free, fun, and effective way to build wealth!
                    </h1>

                    <div className="flex flex-col gap-3 w-full">
                        <button
                            onClick={onLogin}
                            disabled={disabled}
                            className="w-full bg-[#8D9CF4] hover:bg-[#8291f2] active:translate-y-[2px] active:border-b-2 text-white text-sm font-extrabold uppercase tracking-widest py-4 rounded-2xl border-b-4 border-[#5F6AB4] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Get started
                        </button>

                        <button
                            onClick={onLogin}
                            disabled={disabled}
                            className="w-full bg-white hover:bg-gray-50 active:translate-y-[1px] text-[#1cb0f6] text-sm font-extrabold uppercase tracking-widest py-4 rounded-2xl border-2 border-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            I already have an account
                        </button>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default LandingHero