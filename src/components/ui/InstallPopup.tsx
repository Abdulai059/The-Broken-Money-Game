// @ts-nocheck
'use client'

import { useEffect, useState } from "react";

export default function InstallPopup() {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const handler = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setShowPopup(true);
        };
        window.addEventListener("beforeinstallprompt", handler);
        return () => window.removeEventListener("beforeinstallprompt", handler);
    }, []);

    const installApp = async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const choiceResult = await deferredPrompt.userChoice;
        console.log("User choice:", choiceResult.outcome);
        setDeferredPrompt(null);
        setShowPopup(false);
    };

    if (!showPopup) return null;

    return (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[9999] w-[92%] max-w-sm bg-slate-900 text-white px-5 py-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] animate-slideUp">
            <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                    <h3 className="text-lg font-semibold mb-1">Install App</h3>
                    <img src="/emoji/rocket.gif" alt="rocket emoji" className="w-8 h-8 ml-2" />
                </div>
                <p className="text-sm text-slate-300">Install this app on your device for a better experience.</p>
                <div className="mt-3 flex gap-2 justify-center">
                    <button onClick={installApp} className="bg-green-500 text-black px-4 py-1.5 rounded-md text-sm font-medium hover:bg-green-400 active:scale-95 transition">
                        Install
                    </button>
                    <button onClick={() => setShowPopup(false)} className="bg-slate-700 text-white px-4 py-1.5 rounded-md text-sm hover:bg-slate-600 active:scale-95 transition">
                        Later
                    </button>
                </div>
            </div>
        </div>
    );
}
