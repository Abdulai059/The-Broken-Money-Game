'use client'

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import Nav from "@/components/nav/Nav";
import SidebarLeft from "@/components/sidebar-left/SidebarLeft";
import SidebarRight from "@/components/sidebar-right/SidebarRight";
import BottomNav from "@/components/nav/BottomNav";
import ClickSound from "@/components/ui/ClickSound";

const PATH_TO_NAV_LABEL: Record<string, string> = {
    "/": "Home",
    "/rewards": "Rewards",
    "/settings": "Settings",
};

export default function ShellLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const activeNav = PATH_TO_NAV_LABEL[pathname] ?? "";

    return (
        <>
            <ClickSound />
            <Navbar />
            <Nav />
            <SidebarLeft />
            <SidebarRight />
            {/* Center outlet — offset from both sidebars on xl, top nav on md+, bottom nav on mobile */}
            <div className="pt-14 pb-16 md:pb-0 xl:ml-[17rem] xl:mr-[17rem]">
                {children}
            </div>
            <BottomNav active={activeNav} />
        </>
    );
}
