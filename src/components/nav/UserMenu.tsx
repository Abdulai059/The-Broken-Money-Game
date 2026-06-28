// @ts-nocheck
'use client'

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";
import { UserIcon, CreditCardIcon, LogOutIcon } from "lucide-react";

const AVATAR = "https://assets.codepen.io/3685267/wheel-of-fortune-tvcbwknt.png";

export default function UserMenu() {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const router = useRouter();
    const { user, logout } = usePrivy();

    // Derive display name from email or wallet address
    const email = user?.email?.address ?? "";
    const walletAddr = user?.wallet?.address ?? "";
    const displayName = email
        ? email.split("@")[0]
        : walletAddr
            ? `${walletAddr.slice(0, 6)}…${walletAddr.slice(-4)}`
            : "User";

    // Close on outside click
    useEffect(() => {
        function handleClick(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        }
        if (open) document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [open]);

    const go = (path) => {
        setOpen(false);
        router.push(path);
    };

    const handleLogout = async () => {
        setOpen(false);
        await logout();
    };

    return (
        <div ref={ref} className="relative flex items-center">
            {/* Avatar button */}
            <button
                onClick={() => setOpen((v) => !v)}
                className="size-9 rounded-full overflow-hidden border-2 border-[#404859] hover:border-[#58cc02] transition-colors focus:outline-none"
                aria-label="Open user menu"
            >
                <img
                    src={AVATAR}
                    alt="avatar"
                    className="w-full h-full object-cover"
                />
            </button>

            {/* Dropdown panel */}
            {open && (
                <div className="absolute right-0 top-full mt-2 w-56 rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden z-[200]">

                    {/* Header */}
                    <div className="flex items-center gap-3 px-4 py-3 bg-[#8291f2]">
                        <div className="size-10 rounded-xl bg-white flex items-center justify-center text-lg font-bold text-gray-700 border border-[#58cc02] flex-shrink-0">
                            {displayName.charAt(0).toUpperCase()}
                        </div>
                        <div className="min-w-0">
                            <p className="font-bold text-gray-900 truncate">{displayName}</p>
                            <p className="text-sm text-gray-600">User</p>
                        </div>
                    </div>

                    {/* Menu items */}
                    <div className="py-2">
                        <button
                            onClick={() => go("/settings/profile")}
                            className="flex items-center gap-3 w-full px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors text-sm font-medium"
                        >
                            <UserIcon className="size-5 text-gray-500" />
                            Profile
                        </button>
                        <button
                            onClick={() => go("/settings/profile/account")}
                            className="flex items-center gap-3 w-full px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors text-sm font-medium"
                        >
                            <CreditCardIcon className="size-5 text-gray-500" />
                            Wallet
                        </button>
                    </div>

                    <div className="border-t border-gray-100">
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 w-full px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors text-sm font-medium"
                        >
                            <LogOutIcon className="size-5 text-gray-500" />
                            Log out
                        </button>
                    </div>

                </div>
            )}
        </div>
    );
}
