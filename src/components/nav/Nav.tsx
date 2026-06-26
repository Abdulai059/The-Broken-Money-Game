// @ts-nocheck
'use client'

import { PawIcon } from "@/components/icons/PawIcon";
import { BallIcon } from "@/components/icons/BallIcon";
import { CustomBellIcon } from "@/components/icons/CustomBellIcon";
import NavCategory from "./NavCategory";
import IconButton from "./IconButton";
import BalanceBadge from "./BalanceBadge";
import { useState } from "react";
import Logo from "@/components/ui/Logo";
import Search from "@/components/ui/Search";
import ConnectWallet from "@/components/ui/ConnectWallet";

function Nav() {
    const [activeCategory, setActiveCategory] = useState("Dashboard");

    return (
        <div className="fixed hidden inset-x-0 top-0 h-14 md:flex justify-between items-center px-4 bg-[#31353e] border-b border-[#3b4253]">
            <Logo />

            <div className="grow hidden md:flex items-center pl-30">
                <div className="flex bg-[#25282f] rounded-full border-2 border-[#404859e5]">
                    <NavCategory
                        icon={PawIcon}
                        label="Dashboard"
                        active={activeCategory === "Dashboard"}
                        onClick={() => setActiveCategory("Dashboard")}
                    />
                    <NavCategory
                        icon={BallIcon}
                        label="Earnings"
                        active={activeCategory === "Earnings"}
                        onClick={() => setActiveCategory("Earnings")}
                    />
                </div>
                <Search />
            </div>

            <div className="flex items-center">
                <div className="pr-4">
                    <IconButton>
                        <CustomBellIcon className="size-5 text-[#94979c]" />
                    </IconButton>
                </div>
                <div className="md:flex gap-5">
                    <div className="hidden md:flex">
                        <BalanceBadge icon="https://assets.codepen.io/3685267/wheel-of-fortune-aetkeerk.png" />
                    </div>
                    <div>
                        <ConnectWallet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;
