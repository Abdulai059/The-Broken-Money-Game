'use client'

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";
import { useOnboardingStore } from "@/store/useOnboardingStore";
import Navbar from "@/components/navbar/Navbar";
import Nav from "@/components/nav/Nav";
import SidebarLeft from "@/components/sidebar-left/SidebarLeft";
import SidebarRight from "@/components/sidebar-right/SidebarRight";
import BottomNav from "@/components/nav/BottomNav";
import ClickSound from "@/components/ui/ClickSound";

const PATH_TO_NAV_LABEL: Record<string, string> = {
    "/game": "Home",
    "/rewards": "Rewards",
    "/settings": "Settings",
};

// Routes that render without shell chrome and without auth checks
const PUBLIC_ROUTES = ["/", "/welcome"];

export default function ShellLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const { ready, authenticated } = usePrivy();
    const onboardingComplete = useOnboardingStore((s) => s.onboardingComplete);

    const isPublic = PUBLIC_ROUTES.includes(pathname);
    const activeNav = PATH_TO_NAV_LABEL[pathname] ?? "";

    // Centralized auth guard — only runs on protected routes
    useEffect(() => {
        if (!ready || isPublic) return;
        if (!authenticated) {
            router.replace("/");
            return;
        }
        if (!onboardingComplete) {
            router.replace("/welcome");
        }
    }, [ready, authenticated, onboardingComplete, pathname, isPublic, router]);

    // Public routes — no chrome, no auth block
    if (isPublic) {
        return <>{children}</>;
    }

    // Block render on protected routes until auth is confirmed
    if (!ready || !authenticated || !onboardingComplete) return null;

    return (
        <div className="bg-[#161920]">
            <ClickSound />
            <Navbar />
            <Nav />
            <SidebarLeft />
            <SidebarRight />
            <div className="pt-14 pb-16 md:pb-0 xl:ml-[17rem] xl:mr-[17rem]">
                {children}
            </div>
            <BottomNav active={activeNav} />
        </div>
    );
}
