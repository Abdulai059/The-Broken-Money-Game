'use client'

import { usePathname, useRouter } from "next/navigation";

import { PlusIcon, ExternalLinkIcon, SettingsIcon } from "lucide-react";
import { CustomBellIcon2 } from "@/components/icons/CustomBellIcon2";
import { FlowerIcon } from "@/components/icons/FlowerIcon";
import { FriendsIcon } from "@/components/icons/FriendsIcon";

import SidebarMenuItem from "./SidebarMenuItem";
import SidebarSection from "./SidebarSection";
import SidebarFeatureCard from "./SidebarFeatureCard";
import SidebarFooter from "./SidebarFooter";
const MENU_ITEMS = [
    {
        title: "Home",
        image: "https://assets.codepen.io/3685267/wheel-of-fortune-xvtrdzgw.png",
        path: "/",
    },
    {
        title: "Shop",
        image: "https://assets.codepen.io/3685267/wheel-of-fortune-zileulop.png",
        path: "/shop",
    },
    {
        title: "Modules",
        image: "https://i.postimg.cc/XY6kSCd9/craiyon-070228-image.png",
        path: "/modules",
    },
    {
        title: "Daily Streak",
        image: "https://assets.codepen.io/3685267/wheel-of-fortune-bjjsgsee.png",
        path: "/daily-streak",
    },
    {
        title: "Leaderboard",
        image: "https://assets.codepen.io/3685267/wheel-of-fortune-smzxdvfg.png",
        path: "/leaderboard",
    },
    {
        title: "Liberty Circle",
        image: "https://i.postimg.cc/XY6kSCd9/craiyon-070228-image.png",
        path: "/liberty-circle",
    },
];

export default function SidebarLeft() {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <aside className="px-4 w-64 fixed top-16 left-4 bottom-4 bg-[#242834] rounded-md overflow-y-auto hidden xl:block pt-4">
            <SidebarSection
                title="Hustle Game"
                action={
                    <span className="border border-[#3f4453] px-2 py-0.5 rounded-full text-[#9198ae]">
                        Edit
                    </span>
                }
            />

            <div className="flex flex-col space-y-3 mt-2">
                {MENU_ITEMS.map((item) => (
                    <SidebarMenuItem
                        key={item.title}
                        selected={pathname === item.path}
                        {...item}
                        onClick={() => router.push(item.path)}
                    />
                ))}
            </div>

            <div className="py-4 mt-5 border-y-2 border-[#3a3f4f]">
                <SidebarSection
                    title="Custom Features"
                    action={
                        <span className="border border-[#3f4453] size-6 rounded-full grid place-items-center">
                            <PlusIcon className="size-4 text-[#9198ae]" />
                        </span>
                    }
                />

                <SidebarFeatureCard>

                    <button
                        onClick={() => router.push("/settings")}
                        className="flex items-center w-full cursor-pointer text-left hover:text-white transition-colors group"
                    >
                        <SettingsIcon className="size-5 text-[#9fa4b0] group-hover:text-white transition-colors" />
                        <span className="ml-2">Settings</span>
                    </button>

                    <button onClick={() => router.push("/rewards")}
                        className="flex items-center w-full cursor-pointer text-left hover:text-white transition-colors group">
                        <FlowerIcon className="size-5 text-[#9fa4b0] group-hover:text-white transition-colors" />
                        <span className="ml-2">Rewards</span>
                    </button>

                    <button
                        onClick={() => router.push("/game-reminders")}
                        className="flex items-center w-full cursor-pointer text-left hover:text-white transition-colors group">
                        <CustomBellIcon2 className="size-5 text-[#9fa4b0] group-hover:text-white transition-colors" />
                        <span className="ml-2">Notification</span>
                    </button>

                    <button className="flex items-center w-full cursor-pointer text-left hover:text-white transition-colors group">
                        <FriendsIcon className="size-5 text-[#9fa4b0] group-hover:text-white transition-colors" />
                        <span className="ml-2">Community</span>
                    </button>


                </SidebarFeatureCard>
            </div>

            <div className="flex flex-col space-y-2 mt-4">
                <span className="font-semibold text-white">Learn &amp; Earn</span>
                <span className="text-xs text-[#9198ae]">Daily Tasks</span>
                <span className="text-xs text-[#9198ae]">Complete tasks to unlock spins</span>
                <div className="flex items-center text-[#9198ae]">
                    <span className="text-xs">Docs &amp; Guides</span>
                    <ExternalLinkIcon className="size-4 ml-2" />
                </div>
            </div>

            <div className="mt-auto pt-6">
                <SidebarFooter />
            </div>
        </aside>
    );
}
