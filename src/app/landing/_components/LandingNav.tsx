import type { FC } from "react";

interface LandingNavProps {
    onLogin: () => void;
}

function LogoOwl() {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <ellipse cx="16" cy="17" rx="13" ry="12" fill="#58cc02" />
            <ellipse cx="16" cy="16" rx="13" ry="12" fill="#89e219" />
            <ellipse cx="11.5" cy="14" rx="4" ry="4.5" fill="white" />
            <ellipse cx="20.5" cy="14" rx="4" ry="4.5" fill="white" />
            <circle cx="11.5" cy="14.5" r="2.5" fill="#1a1a1a" />
            <circle cx="20.5" cy="14.5" r="2.5" fill="#1a1a1a" />
            <circle cx="12.5" cy="13.5" r="1" fill="white" />
            <circle cx="21.5" cy="13.5" r="1" fill="white" />
            <ellipse cx="16" cy="19" rx="3" ry="2" fill="#ff9600" />
            <ellipse cx="16" cy="20" rx="2" ry="1.2" fill="#ff6b00" />
            <ellipse cx="10" cy="22" rx="3.5" ry="2" fill="#58cc02" />
            <ellipse cx="22" cy="22" rx="3.5" ry="2" fill="#58cc02" />
        </svg>
    );
}

const LandingNav: FC<LandingNavProps> = ({ onLogin }) => {
    return (
        <>
            <div className="flex items-center gap-2">
                <LogoOwl />
                <span className="text-[22px] font-extrabold text-[#8291f2] tracking-tight">
                    The Hustle
                </span>
            </div>
            <button
                onClick={onLogin}
                className="bg-[#8D9CF4] hover:bg-[#8291f2] text-white text-[13px] font-extrabold uppercase tracking-widest px-5 py-2.5 rounded-2xl border-b-[3px] border-[#5F6AB4] transition-colors"
            >
                Get started
            </button>
        </>
    );
};

export default LandingNav;