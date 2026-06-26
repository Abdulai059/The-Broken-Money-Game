import { ExternalLinkIcon } from "lucide-react";

function SidebarFooter() {
    return (
        <div className="w-68 fixed bottom-0 px-4 pb-6 text-xs hidden xl:block">
            <div className="flex items-center text-[#9198ae]">
                <span>About</span>
                <span className="px-2 before:size-1.5 before:bg-[#656977] before:mr-2 before:rounded-full before:inline-block">
                    Discord
                </span>
                <span className="px-2 before:size-1.5 before:bg-[#656977] before:mr-2 before:rounded-full before:inline-block">
                    Twitter
                </span>
            </div>

            <div className="mt-2 pb-4 text-[#9198ae]">
                Copyright © <span>zesung Design</span>. All <br /> rights reserved
            </div>
        </div>
    );
}

export default SidebarFooter;