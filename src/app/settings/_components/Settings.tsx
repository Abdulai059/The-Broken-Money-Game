'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
    User,
    Shield,
    HelpCircle,
    Info,
    Volume2,
    Languages,
} from "lucide-react";

import PageHeader from "@/components/ui/PageHeader";
import SettingsItem from "@/components/ui/SettingsItem";

export default function SettingsPage() {
    const [language, setLanguage] = useState<string>("English");
    const router = useRouter();

    return (
        <div className="mx-auto">
            <div className="max-w-md mx-auto text-gray-100 px-6 py-4">

                <PageHeader title="Settings" backHref="/game" />

                <div className="py-6">
                    <h1 className="text-2xl font-bold mb-2">Settings</h1>
                    <p className="text-sm pr-6 text-gray-400">
                        Your health privacy matters. Control and own your data here.
                    </p>
                </div>

                <div className="space-y-4 border bg-[#161920] border-[#373e51] rounded-3xl p-5 mb-6 shadow-lg shadow-[#373e51]/40">

                    <SettingsItem
                        icon={<User className="text-blue-400" />}
                        label="Profile"
                        onClick={() => router.push("/settings/profile")}
                    />

                    <SettingsItem
                        icon={<Volume2 className="text-blue-400" />}
                        label="Game Sounds"
                        onClick={() => router.push("/settings/game-sound")}
                    />

                    <SettingsItem
                        icon={<Shield className="text-red-400" />}
                        label="Security"
                        onClick={() => router.push("/settings/security")}
                    />

                    <SettingsItem
                        icon={<Languages className="text-emerald-400" />}
                        label="Language"
                        rightElement={
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className="bg-transparent text-sm text-gray-300 outline-none"
                            >
                                <option value="English">English</option>
                                <option value="French">French</option>
                                <option value="Twi">Twi</option>
                                <option value="Hausa">Hausa</option>
                            </select>
                        }
                    />

                    <SettingsItem
                        icon={<HelpCircle className="text-blue-400" />}
                        label="Help / FAQ"
                        onClick={() => router.push("/settings/help")}
                    />

                    <SettingsItem
                        icon={<Info className="text-gray-400" />}
                        label="About Spin Quest"
                        onClick={() => router.push("/settings/about")}
                    />

                </div>
            </div>
        </div>
    );
}