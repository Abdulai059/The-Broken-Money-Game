// @ts-nocheck
'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

function LinkButton({ children, to, className = "" }) {
    const router = useRouter();

    const baseClasses = "text-base font-medium text-indigo-500 cursor-pointer hover:text-indigo-600";
    const combinedClasses = `${baseClasses} ${className}`.trim();

    if (to === "-1") {
        return (
            <button className={combinedClasses} onClick={() => router.back()}>
                {children}
            </button>
        );
    }

    return (
        <Link href={to} className={combinedClasses}>
            {children}
        </Link>
    );
}

export default LinkButton;
