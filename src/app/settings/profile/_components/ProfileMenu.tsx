// @ts-nocheck
'use client'

import { ChevronRight, Edit, Lock, HelpCircle, Bell, UserX, LogOut, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import LinkButton from '@/components/ui/LinkButton';

export default function ProfileMenu() {
    const router = useRouter();

    const menuItems = [
        { icon: Edit, label: 'Edit Info', color: 'text-gray-400', path: '/settings/profile/edit-profile' },
        { icon: Lock, label: 'Change Password', color: 'text-gray-400', path: '/settings/profile/account' },
        { icon: UserX, label: 'Close Accounts', color: 'text-gray-400', path: '/settings/close-account' },

    ];

    return (
        <div className="flex items-center justify-center p-4">
            <div className="w-full max-w-sm">
                <div className="flex items-center justify-between mb-6">
                    <button className="w-10 h-10 rounded-full border-2 border-[#373e51] flex items-center justify-center hover:bg-[#5f6fe4]/10 transition">
                        <LinkButton
                            to="/settings"
                            className="bg-[#2a2f3a] hover:bg-[#373e51] rounded-full p-2.5 transition"
                        >
                            <ArrowLeft className="w-6 h-6 text-gray-300" />
                        </LinkButton>
                    </button>

                    <h1 className="text-gray-100 text-xl font-semibold">Profile</h1>

                    <button className="w-10 h-10 rounded-full bg-[#2a2f3a] flex items-center justify-center hover:bg-[#373e51] transition relative">
                        <Bell size={20} className="text-gray-400" />
                        <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#5f6fe4] rounded-full"></span>
                    </button>
                </div>

                <div className="text-center mb-6">
                    <div className="relative inline-block mb-3">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-[#373e51]">
                            <img
                                src="https://assets.codepen.io/3685267/wheel-of-fortune-evsxajkr.png"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <h2 className="text-gray-100 text-lg font-bold mb-2">Rafa</h2>
                    <button className="px-5 py-1.5 border border-[#373e51] text-gray-400 rounded-full text-sm font-medium hover:bg-[#5f6fe4]/10 transition">
                        Change Avatar
                    </button>
                </div>

                <button className="w-full bg-[#5f6fe4] hover:bg-[#7080ec] text-white font-semibold py-3.5 rounded-xl mb-6 transition shadow-lg shadow-[#5f6fe4]/20">
                    Invite a Friend
                </button>

                <div className="space-y-0.5 mb-6">
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => router.push(item.path)}
                            className="w-full flex items-center justify-between px-4 py-4 hover:bg-[#2a2f3a] rounded-xl transition group"
                        >
                            <div className="flex items-center gap-3">
                                <item.icon size={20} className={item.color} />
                                <span className="text-gray-300 text-sm font-medium">{item.label}</span>
                            </div>
                            <ChevronRight size={18} className="text-gray-500 group-hover:text-gray-400 transition" />
                        </button>
                    ))}
                </div>

                <button className="w-full flex items-center justify-center gap-2 px-4 py-3.5 border border-[#373e51] text-gray-400 rounded-xl hover:bg-[#5f6fe4]/10 transition font-medium">
                    <LogOut size={20} />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
}
