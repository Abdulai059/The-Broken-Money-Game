// @ts-nocheck
import { CustomSendIcon } from "@/components/icons/CustomSendIcon";

function ChatInput() {
    return (
        <div className="bg-[#1c202b] p-2 rounded-b-md" style={{ borderTop: "2px solid #363d4f" }}>
            <div className="relative">
                <input
                    placeholder="Send a message"
                    className="w-full h-9 rounded-md px-2 bg-[#1c202b] border-2 border-[#1c202b] focus:border-[#363d4f] text-zinc-400 font-semibold focus:outline-none"
                />
                <div className="size-9 absolute top-0 right-0 grid place-items-center">
                    <CustomSendIcon className="size-5" />
                </div>
            </div>
        </div>
    );
}

export default ChatInput;
