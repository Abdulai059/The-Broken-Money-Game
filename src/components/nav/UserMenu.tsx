// @ts-nocheck
import { ChevronDownIcon } from "lucide-react";

function UserMenu({ avatar }) {
    return (
        <div className="flex items-center ml-8">
            <img src={avatar} className="size-10 rounded-full border-[2px] border-[#404859e5]" alt="" />
            <ChevronDownIcon className="size-5 ml-2 text-white" />
        </div>
    );
}

export default UserMenu;
