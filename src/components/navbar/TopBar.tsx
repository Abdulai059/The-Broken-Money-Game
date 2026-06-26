// @ts-nocheck
'use client'

import { useState } from "react";
import ResourceButton from "./ResourceButton";
import MobileSettings from "./MobileSettings";
import Modal from "@/components/ui/Modal";
import { useMusic } from "@/context/MusicProvider";

export default function TopBar({ notify }) {
    const { playClick } = useMusic();

    const [resources, setResources] = useState({ gold: 150, fire: 0, water: 0 });

    const earn = (type) => {
        const inc = type === "gold" ? 10 : 1;
        setResources((r) => ({ ...r, [type]: r[type] + inc }));
        notify(`+${inc} ${type}! 🎉`);
        playClick();
    };

    return (
        <>
            <div className="flex md:hidden justify-between items-center px-2 py-3">
                <button className="w-14 h-14 rounded-full border-b-4 border-white/20 bg-[#12161f]/50 text-white shadow-inner">
                    G
                </button>

                <div className="flex scale-88 gap-1.5">
                    <ResourceButton icon="/emoji/trophy.gif" value={resources.gold} onClick={() => earn("gold")} />
                    <ResourceButton icon="/emoji/fire.gif" value={resources.fire} onClick={() => earn("fire")} />
                    <ResourceButton icon="/emoji/globe.gif" value={resources.water} onClick={() => earn("water")} />
                </div>

                <div className="flex gap-1">
                    <button onClick={playClick} className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                        <img src="/emoji/gifts.png" alt="Gift" className="w-7 h-7 object-contain" />
                    </button>
                    <div onClick={playClick}>
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
