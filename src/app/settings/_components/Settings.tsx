// @ts-nocheck
'use client'

import {
    Bell,
    Shield,
    User,
    Languages,
    HelpCircle,
    Info,
    ChevronLeft,
} from "lucide-react";
import { useState } from "react";
import LinkButton from "@/components/ui/LinkButton";
import { useRouter } from "next/navigation";

export default function Settings() {
    const [language, setLanguage] = useState("English");
    const router = useRouter();

    return (
        <div className="mx-auto">
            <div className="max-w-3xl mx-auto text-gray-100 px-6 py-4">
                <div className="sticky top-0 bg-[#161920] border-b border-gray-800 px-0 py-4">
                    <LinkButton
                        to="/"
                        className="group flex items-center gap-2 text-indigo-500 group-hover:text-indigo-600"
                    >
                        <ChevronLeft size={24} />
                        Back
                    </LinkButton>
                </div>

                <div className="py-6">
                    <h1 className="text-2xl font-bold mb-2">Settings</h1>
                    <p className="text-sm pr-6 text-gray-400">
                        Your health privacy matters. Control and own your data here.
                    </p>
                </div>

                <div className="space-y-4">
                    <div
                        onClick={() => router.push("/settings/profile")}
                        className="bg-[#12161f] rounded-xl border border-[#373e51] px-4 py-4 cursor-pointer hover:bg-[#1a2040] transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <User className="text-blue-400" />
                            <span>Profile</span>
                        </div>
                    </div>

                    <div
                        onClick={() => router.push("/settings/game-reminders")}
                        className="bg-[#12161f] rounded-xl border border-[#373e51] px-4 py-4 cursor-pointer hover:bg-[#1a2040] transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <Bell className="text-indigo-400" />
                            <span>Notifications</span>
                        </div>
                    </div>

                    <div
                        onClick={() => router.push("/settings/security")}
                        className="bg-[#12161f] rounded-xl border border-[#373e51] px-4 py-4 cursor-pointer hover:bg-[#1a2040] transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <Shield className="text-red-400" />
                            <span>Security</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between bg-[#12161f] rounded-xl border border-[#373e51] px-4 py-4">
                        <div className="flex items-center gap-3">
                            <Languages className="text-emerald-400" />
                            <span>Language</span>
                        </div>
                        <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="bg-transparent text-sm text-gray-300 outline-none"
                        >
                            <option>English</option>
                            <option>French</option>
                            <option>Twi</option>
                            <option>Hausa</option>
                        </select>
                    </div>

                    <div className="flex items-center justify-between bg-[#12161f] rounded-xl border border-[#373e51] px-4 py-4 cursor-pointer hover:bg-[#1a2040] transition-colors">
                        <div className="flex items-center gap-3">
                            <HelpCircle className="text-blue-400" />
                            <span>Help / FAQ</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between bg-[#12161f] rounded-xl border border-[#373e51] px-4 py-4 cursor-pointer hover:bg-[#1a2040] transition-colors">
                        <div className="flex items-center gap-3">
                            <Info className="text-gray-400" />
                            <span>About Spin Quest</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
