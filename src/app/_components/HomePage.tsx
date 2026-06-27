// @ts-nocheck
'use client'

import { useEffect } from "react";
import OtherItems from "@/components/wheel/OtherItems";
import Roll from "@/components/wheel/Roll";
import { startWheel } from "@/components/wheel/MainWheel";

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

function HomePage() {
    useEffect(() => {
        startWheel();
    }, []);

    return (
        <div>
            <Main />
        </div>
    );
}

export default HomePage;
