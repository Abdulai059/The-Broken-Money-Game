// @ts-nocheck
import { SearchIcon } from "lucide-react";

function Search() {
    return (
        <div className="ml-10 relative hidden lg:block">
            <input
                placeholder="Search for Games"
                className="w-64 h-10 rounded-full bg-[#25282f] border-[2px] border-[#404859e5] text-[#94979c] pl-3 pr-10 focus:outline-none"
            />
            <div className="absolute right-0 top-0 size-10 grid place-items-center">
                <SearchIcon className="size-5 text-[#94979c]" />
            </div>
        </div>
    );
}

export default Search;
