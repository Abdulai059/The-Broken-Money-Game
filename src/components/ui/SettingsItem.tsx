import { ReactNode } from "react";

type SettingsItemProps = {
    icon: ReactNode;
    label: string;
    onClick?: () => void;
    rightElement?: ReactNode;
};

export default function SettingsItem({
    icon,
    label,
    onClick,
    rightElement,
}: SettingsItemProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="w-full flex items-center justify-between bg-[#12161f] rounded-xl border border-[#373e51] px-4 py-4 hover:bg-[#5f6fe4] transition-colors"
        >
            <div className="flex items-center gap-3">
                {icon}
                <span>{label}</span>
            </div>

            {rightElement}
        </button>
    );
}