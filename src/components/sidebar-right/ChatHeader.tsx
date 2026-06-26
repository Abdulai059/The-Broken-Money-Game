// @ts-nocheck
function ChatHeader({ title, action }) {
    return (
        <div className="px-3 pt-3">
            <div className="flex items-center justify-between border-b-2 border-[#414653] pb-2">
                <span className="flex items-center before:size-2.5 before:bg-[#2cc3f0] before:mr-2 before:rounded-full font-semibold">
                    {title}
                </span>
                {action}
            </div>
        </div>
    );
}

export default ChatHeader;
