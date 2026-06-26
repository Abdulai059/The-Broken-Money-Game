// @ts-nocheck
import { EllipsisIcon } from "lucide-react";

function ChatMessage({ name, image, message, time }) {
    return (
        <div className="bg-[#1f232e] p-2 relative rounded-md">
            <div className="flex pb-1">
                <img src={image} className="size-9 rounded-full" alt="" />
                <div className="ml-2">
                    <div className="font-semibold">{name}</div>
                    <div className="text-xs mt-1 text-[#92959c]">{message}</div>
                </div>
            </div>
            <div className="flex justify-end text-xs text-[#92959c]">{time}</div>
            <button className="absolute top-1 right-1 size-5 grid place-items-center">
                <EllipsisIcon className="size-4" />
            </button>
        </div>
    );
}

export default ChatMessage;
