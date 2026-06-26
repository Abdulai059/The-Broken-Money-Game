// @ts-nocheck
import { PlusIcon } from "lucide-react";

function BalanceBadge({ amount, icon }) {
    return (
        <div className="inline-flex items-center px-2 pr-6 h-9 rounded-full relative bg-[#25282f] border-[2px] border-[#404859e5]">
            <img src={icon} className="size-7" alt="" />
            <span className="ml-2 font-semibold text-white">{amount}</span>
            <div className="absolute -right-2.5 top-1/2 -translate-y-1/2 size-6 grid place-items-center plus-icon-bg">
                <PlusIcon className="size-4 text-white" />
            </div>
        </div>
    );
}

export default BalanceBadge;
