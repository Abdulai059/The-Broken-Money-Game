// @ts-nocheck
'use client'

import ResourceButton from "./ResourceButton";
import MobileSettings from "../ui/MobileSettings";
import Modal from "@/components/ui/Modal";
import { usePlayerStore } from "@/store/usePlayerStore";
import UserMenu from "@/components/nav/UserMenu";

export default function TopBar({ notify }) {
    const gold = usePlayerStore((s) => s.gold);
    const fire = usePlayerStore((s) => s.fire);
    const water = usePlayerStore((s) => s.water);
    const earn = usePlayerStore((s) => s.earn);

    const handleEarn = (type) => {
        earn(type);
        const inc = type === "gold" ? 10 : 1;
        notify(`+${inc} ${type}! 🎉`);
    };

    return (
        <>
            <div className="flex md:hidden justify-between items-center px-2 py-3">
                <UserMenu />

                <div className="flex scale-88 gap-1.5">
                    <ResourceButton icon="/emoji/trophy.gif" value={gold} onClick={() => handleEarn("gold")} />
                    <ResourceButton icon="/emoji/fire.gif" value={fire} onClick={() => handleEarn("fire")} />
                    <ResourceButton icon="/emoji/globe.gif" value={water} onClick={() => handleEarn("water")} />
                </div>

                <div className="flex gap-1">
                    <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                        <img src="/emoji/gifts.png" alt="Gift" className="w-7 h-7 object-contain" />
                    </button>
                    <div>
                        <Modal.Open opens="settings">
                            <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                                <img src="/emoji/gear.png" alt="Settings" className="w-7 h-7 object-contain" />
                            </button>
                        </Modal.Open>
                    </div>
                </div>
            </div>

            <Modal.Window name="settings">
                <MobileSettings />
            </Modal.Window>
        </>
    );
}
