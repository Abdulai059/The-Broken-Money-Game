// @ts-nocheck
'use client'

import { ChevronRight, Gift, Star, Scroll, Zap } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import { useNotificationStore } from '@/store/useNotificationStore';

const ToggleItem = ({ icon: Icon, iconColor = "text-blue-500", title, description, value, onToggle }) => (
    <div className="flex items-center bg-[#12161f] border border-[#373e51] rounded-xl justify-between p-4 gap-2">
        <div className="flex items-start gap-3 flex-1">
            <div className="mt-0.5">
                {Icon && <Icon size={22} className={iconColor} />}
            </div>
            <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-100 mb-0.5">{title}</h3>
                {description && <p className="text-xs text-gray-400 leading-relaxed">{description}</p>}
            </div>
        </div>
        <button
            onClick={onToggle}
            className={`relative w-12 h-6 rounded-full transition-colors ${value ? "bg-blue-500" : "bg-gray-300"}`}
        >
            <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${value ? "translate-x-6" : "translate-x-0"}`} />
        </button>
    </div>
);

export default function Notification() {
    const { dailySpin, completeTasks, claimRewards, boostPowerups, weeklyInsight, aiRecommendations, toggle } =
        useNotificationStore();

    const gameReminders = [
        { key: "dailySpin", icon: Star, color: "text-yellow-400", title: "Daily Spin", description: "Spin the wheel every day to earn points and rewards!" },
        { key: "completeTasks", icon: Scroll, color: "text-purple-400", title: "Complete Tasks", description: "Finish learning quests to level up." },
        { key: "claimRewards", icon: Gift, color: "text-pink-400", title: "Claim Rewards", description: "Collect your NFTs, tokens, and other prizes." },
        { key: "boostPowerups", icon: Zap, color: "text-green-400", title: "Use Power-ups", description: "Activate boosts to multiply your points." },
    ];

    const values = { dailySpin, completeTasks, claimRewards, boostPowerups, weeklyInsight, aiRecommendations };

    return (
        <div>
            <div className="max-w-md mx-auto">
                <PageHeader title="Reminder" />

                <div className="px-6 py-6">
                    <h1 className="text-2xl font-bold text-white mb-1">Notification Settings</h1>
                    <p className="text-sm text-gray-400">Change your notification here.</p>
                </div>

                <div className="px-6 pb-6 space-y-4 border bg-[#161920] border-[#373e51] rounded-3xl p-5 mb-6 shadow-lg shadow-[#373e51]/40">
                    <h2 className="text-base font-bold text-gray-400 mb-4">Game Reminder</h2>
                    <div className="space-y-4">
                        {gameReminders.map((item) => (
                            <ToggleItem
                                key={item.key}
                                icon={item.icon}
                                iconColor={item.color}
                                title={item.title}
                                description={item.description}
                                value={values[item.key]}
                                onToggle={() => toggle(item.key)}
                            />
                        ))}
                        <div className="flex items-center justify-between py-4 cursor-pointer -mx-6 px-6 rounded-lg transition">
                            <div className="flex items-start gap-3 flex-1">
                                <div className="mt-0.5">
                                    <div className="w-5 h-5 rounded-full border-2 border-blue-500 flex items-center justify-center">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-sm font-semibold text-gray-100 mb-0.5">Push Notification</h3>
                                    <p className="text-xs text-gray-400">Enable push notification</p>
                                </div>
                            </div>
                            <ChevronRight size={20} className="text-gray-400 shrink-0 ml-3" />
                        </div>
                    </div>

                    <div className="px-6 pb-6">
                        <h2 className="text-base font-bold text-gray-400 mb-4">Insight</h2>
                        <div className="mb-4">
                            <ToggleItem title="Weekly Insight" value={weeklyInsight} onToggle={() => toggle("weeklyInsight")} />
                        </div>
                        <ToggleItem title="AI Recommendations" value={aiRecommendations} onToggle={() => toggle("aiRecommendations")} />
                    </div>
                </div>
            </div>
        </div>
    );
}
