// @ts-nocheck
'use client'

import { useEffect } from "react";
import OtherItems from "@/components/wheel/OtherItems";
import Roll from "@/components/wheel/Roll";
import { startWheel } from "@/components/wheel/MainWheel";

const BG_URL = "https://assets.codepen.io/3685267/wheel-of-fortune-smwdyono.png";

function Main() {
    return (
        <div className="flex justify-center md:pt-25 px-4 sm:px-6 md:px-12 pt-4">
            <div className="relative w-full max-w-[740px]">
                <OtherItems />
                <Roll />
            </div>
        </div>
    );
}

export default function GameDashboard() {
    useEffect(() => {
        startWheel();
    }, []);

    return (
        <div
            className="min-h-screen"
            style={{
                background: `url('${BG_URL}') repeat`,
                backgroundSize: "500px 500px",
            }}
        >
            <Main />
        </div>
    );
}
