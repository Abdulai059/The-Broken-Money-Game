// @ts-nocheck
'use client'

import { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import LinkButton from '@/components/ui/LinkButton';

export default function ChangePassword() {
    const [formData, setFormData] = useState({ oldPassword: '', newPassword: '', confirmPassword: '' });
    const [showPassword, setShowPassword] = useState({ old: false, new: false, confirm: false });

    const handleChange = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));
    const togglePasswordVisibility = (field) => setShowPassword(prev => ({ ...prev, [field]: !prev[field] }));
    const handleSubmit = () => console.log('Password change submitted:', formData);

    const fields = [
        { key: 'oldPassword', visKey: 'old', label: 'Old Password' },
        { key: 'newPassword', visKey: 'new', label: 'New password' },
        { key: 'confirmPassword', visKey: 'confirm', label: 'Confirm new password' },
    ];

    return (
        <div>
            <div className="max-w-md mx-auto">
                <div className="sticky top-0 bg-[#161920] border-b border-[#373e51] px-0 py-3 mx-6 flex items-center gap-4">
                    <LinkButton to="/settings/profile" className="bg-[#2a2f3a] hover:bg-[#373e51] rounded-full p-2.5 transition">
                        <ArrowLeft className="w-6 h-6 text-gray-300" />
                    </LinkButton>
                </div>

                <div className="px-6 py-6">
                    <h1 className="text-2xl font-bold text-gray-100 mb-1">Change Password</h1>
                </div>

                <div className="px-6 pb-6">
                    <h2 className="text-base font-semibold text-gray-300 mb-2">Choose a New Password</h2>
                    <p className="text-sm text-gray-400 leading-relaxed mb-8">
                        Enter and confirm your new password to regain access
                    </p>

                    <div className="space-y-6">
                        {fields.map(({ key, visKey, label }) => (
                            <div key={key}>
                                <label className="block text-sm font-medium text-gray-200 mb-2">{label}</label>
                                <div className="relative">
                                    <input
                                        type={showPassword[visKey] ? 'text' : 'password'}
                                        value={formData[key]}
                                        onChange={(e) => handleChange(key, e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full px-4 py-3.5 pr-12 bg-[#1e2329] border border-[#373e51] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5f6fe4] focus:border-transparent text-sm text-gray-100 placeholder-gray-500"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => togglePasswordVisibility(visKey)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 transition"
                                    >
                                        {showPassword[visKey] ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>
                        ))}

                        <button
                            onClick={handleSubmit}
                            className="w-full bg-[#5f6fe4] hover:bg-[#7080ec] text-white font-semibold py-4 rounded-xl transition-colors shadow-lg shadow-[#5f6fe4]/20 mt-6"
                        >
                            Update Password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
