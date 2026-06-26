// @ts-nocheck
'use client'

import { usePrivy } from "@privy-io/react-auth";
import UserMenu from "@/components/nav/UserMenu";

export default function ConnectWallet() {
    const { ready, authenticated, user, login, logout } = usePrivy();

    if (!ready) return (
        <button disabled className="w-full md:w-auto px-4 md:px-6 py-2 rounded-full font-semibold text-white/40 buy-button opacity-50 cursor-not-allowed">
            Login
        </button>
    );

    if (authenticated) {
        const avatarUrl =
            user?.google?.picture ||
            user?.twitter?.profilePictureUrl ||
            user?.farcaster?.pfp ||
            user?.github?.profilePictureUrl ||
            "https://assets.codepen.io/3685267/wheel-of-fortune-tvcbwknt.png";

        return (
            <button onClick={logout} className="flex items-center justify-center focus:outline-none">
                <UserMenu avatar={avatarUrl} />
            </button>
        );
    }

    return (
        <button
            onClick={login}
            className="w-full md:w-auto px-4 md:px-6 py-2 rounded-full font-semibold text-white buy-button hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg"
        >
            Login
        </button>
    );
}
