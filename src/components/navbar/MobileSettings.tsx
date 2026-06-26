// @ts-nocheck
'use client'

import { useMusic } from "@/context/MusicProvider";

export default function MobileSettings({ onClose }) {
    const { playing, toggleMusic, soundEffects, toggleSoundEffects, playClick } = useMusic();

    const toggles = [
        { key: "soundEffects", title: "Sound Effects", desc: "Game sounds and feedback", value: soundEffects, onToggle: toggleSoundEffects },
        { key: "backgroundMusic", title: "Background Music", desc: "Regional atmospheric music", value: playing, onToggle: toggleMusic },
    ];

    return (
        <div className="h-70 pb-12">
            <div className="flex items-center justify-between border-b border-gray-700 mb-0">
                <div className="flex justify-between w-full p-5">
                    <h2 className="text-gray-100 text-xl font-bold flex items-center gap-2">⚙️ Settings</h2>
                    <button onClick={() => { playClick(); onClose?.(); }} className="text-gray-400 text-xl">✖️</button>
                </div>
            </div>

            <div className="flex flex-col gap-4 p-5">
                <div className="text-lg text-gray-100 flex items-center gap-2">
                    🔊 <span className="font-semibold">Audio</span>
                </div>
                {toggles.map(({ key, title, desc, value, onToggle }) => (
                    <div key={key} className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-100 font-semibold text-xs">{title}</p>
                            <p className="text-gray-400 text-xs">{desc}</p>
                        </div>
                        <button
                            onClick={() => { playClick(); onToggle(); }}
                            className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${value ? "bg-blue-500" : "bg-gray-600"}`}
                        >
                            <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${value ? "translate-x-6" : "translate-x-0"}`} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
