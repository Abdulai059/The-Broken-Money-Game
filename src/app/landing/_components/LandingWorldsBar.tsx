'use client'

import { useRef } from "react";
import Image from "next/image";


const WORLDS = [
    {
        image: "/assets/worlds/leaking-village.png",
        label: "Leaking Village",
    },
    {
        image: "/assets/worlds/seed-forest.png",
        label: "Seed Forest",
    },
    {
        image: "/assets/worlds/debt-mountain.png",
        label: "Debt Mountain",
    },
    {
        image: "/assets/worlds/market-storm.png",
        label: "Market Storm",
    },
    {
        image: "/assets/worlds/business-city.png",
        label: "Business City",
    },

    {
        image: "/assets/worlds/global-markets.png",
        label: "Global Markets",
    },
    {
        image: "/assets/worlds/crypto-kingdom.png",
        label: "Crypto Kingdom",
    },
    {
        image: "/assets/worlds/legacy-island.png",
        label: "Legacy Island",
    },

    {
        image: "/assets/worlds/real-estate.png",
        label: "Real Estate",
    },
];

export default function LandingWorldsBar() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({
            left: -250,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({
            left: 250,
            behavior: "smooth",
        });
    };

    return (
        <div className="h-16  max-w-6xl mx-auto flex items-center px-2">

            <button
                onClick={scrollLeft}
                className="text-[#9198ae] cursor-pointer text-xl px-2 flex-shrink-0 transition-colors">

                &#8249;
            </button>

            <div
                ref={scrollRef}
                className="flex items-center gap-1 overflow-x-auto flex-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {WORLDS.map((world) => (
                    <button
                        key={world.label}
                        className="flex items-center gap-2 text-xs font-bold text-[#9198ae] uppercase tracking-wide px-3 py-1.5 rounded-lg cursor-pointer transition-colors whitespace-nowrap flex-shrink-0"
                    >
                        <Image
                            src={world.image}
                            alt={world.label}
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                        <span>{world.label}</span>
                    </button>
                ))}
            </div>

            <button
                onClick={scrollRight}
                className="text-[#9198ae] cursor-pointer text-xl px-2 flex-shrink-0 transition-colors">
                &#8250;
            </button>
        </div>
    );
}