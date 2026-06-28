import { useState, useEffect } from "react";

type TailDirection = "top" | "bottom" | "left" | "right";

interface SpeechBubbleProps {
    children: string;
    tail?: TailDirection;
    className?: string;
    typewriter?: boolean;
    speed?: number;
}

const tailStyles: Record<TailDirection, string> = {
    bottom:
        "border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-[#2e2e3a] -bottom-[10px] left-7",
    top:
        "border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[10px] border-b-[#2e2e3a] -top-[10px] left-7",
    left:
        "border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[10px] border-r-[#2e2e3a] -left-[10px] top-3",
    right:
        "border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[10px] border-l-[#2e2e3a] -right-[10px] top-3",
};

const originStyles: Record<TailDirection, string> = {
    bottom: "origin-bottom-left",
    top: "origin-top-left",
    left: "origin-left",
    right: "origin-right",
};

export default function SpeechBubble({
    children,
    tail = "bottom",
    className = "",
    typewriter = false,
    speed = 40,
}: SpeechBubbleProps) {
    const [displayed, setDisplayed] = useState(typewriter ? "" : children);
    const [done, setDone] = useState(!typewriter);

    useEffect(() => {
        if (!typewriter) return;

        setDisplayed("");
        setDone(false);

        let i = 0;
        const interval = setInterval(() => {
            i++;
            setDisplayed(children.slice(0, i));

            if (i === children.length) {
                clearInterval(interval);
                setDone(true);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [children, typewriter, speed]);

    return (
        <div className="relative inline-block">
            <div
                className={`
          bg-[#2e2e3a] text-[#e8e8e8]
          text-sm font-medium
          px-4 py-2 rounded-xl
          border border-[#44445a]
          animate-bubble-pop
          ${originStyles[tail]}
          ${className}
        `}
            >
                {displayed}
                {!done && (
                    <span className="inline-block w-[2px] h-[1em] bg-[#e8e8e8] ml-[2px] align-middle animate-pulse" />
                )}
            </div>

            <div className={`absolute w-0 h-0 ${tailStyles[tail]}`} />
        </div>
    );
}

// bg - [#2e2e3a] 