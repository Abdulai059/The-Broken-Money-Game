// @ts-nocheck
'use client'

import { Home, Gift, Clipboard, Trophy, Settings } from "lucide-react";
import Link from "next/link";

const BottomNav = ({ active }) => {
    const items = [
        { name: "Rewards", icon: Gift, href: "/rewards" },
        { name: "Tasks", icon: Clipboard, href: "/game" },
        { name: "Home", icon: Home, href: "/game" },
        { name: "Leaderboard", icon: Trophy, href: "/game" },
        { name: "Settings", icon: Settings, href: "/settings" },
    ];

    return (
        <nav className="fixed bottom-0 w-full bg-[#12161f] md:hidden flex rounded-full border-t-2 border-[#373e51] text-white justify-around py-2 shadow-lg">
            {items.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.name;
                return (
                    <Link key={item.name} href={item.href} className="flex flex-col items-center text-xs">
                        <Icon size={24} className={isActive ? "text-yellow-400" : "text-gray-400"} />
                        <span className={isActive ? "text-yellow-400" : "text-gray-400"}>{item.name}</span>
                    </Link>
                );
            })}
        </nav>
    );
};

export default BottomNav;
