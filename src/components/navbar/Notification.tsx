// @ts-nocheck
export default function Notification({ message, visible }) {
    return (
        <div
            className={`fixed top-[100px] left-1/2 -translate-x-1/2 px-8 py-4 rounded-full bg-black/85 text-white transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-24"
                }`}
        >
            {message}
        </div>
    );
}
