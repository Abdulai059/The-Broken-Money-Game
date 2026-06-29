// @ts-nocheck
'use client'

import React, { useState } from 'react';
import { ChevronLeft, User, MapPin, Calendar } from 'lucide-react';
import LinkButton from '@/components/ui/LinkButton';
import PageHeader from '@/components/ui/PageHeader';

export default function ProfileSettings() {
    const [formData, setFormData] = useState({
        username: '',
        fullName: '',
        email: '',
        country: 'United States',
        gender: 'Female',
        dateOfBirth: '',
        phoneNumber: '',
        bio: ''
    });

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className='min-h-screen md:flex md:items-center md:justify-center'>
            <div className="max-w-md mx-auto">
                <PageHeader title="Edit Profile" backHref="/settings/profile" />

                <div className="px-6 py-6">
                    <h1 className="text-2xl font-bold text-gray-100 mb-1">Profile Settings</h1>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Your gaming profile matters. Control and customize your data here.
                    </p>
                </div>

                <div className="px-6 pb-6">

                    <div className="flex justify-center mb-8">
                        <div className="relative">
                            <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
                                <img
                                    src="https://assets.codepen.io/3685267/wheel-of-fortune-evsxajkr.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white shadow-md hover:bg-blue-600 transition">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
                                    <path d="M8 4V12M12 8H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="bg-[#161920] border border-[#373e51] rounded-3xl p-4 mb-6 shadow-xl">
                        <div>
                            <label className="block text-sm font-semibold text-gray-200 mb-2">Gamer Tag / Username</label>
                            <div className="relative">
                                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    value={formData.username}
                                    onChange={(e) => handleChange('username', e.target.value)}
                                    placeholder="Enter your username..."
                                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#373e51] focus:outline-none focus:ring-2 focus:ring-gray-700 focus:text-gray-100 focus:border-transparent text-sm text-gray-100 placeholder-gray-400"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-200 mb-2">Full Name</label>
                            <div className="relative">
                                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    value={formData.fullName}
                                    onChange={(e) => handleChange('fullName', e.target.value)}
                                    placeholder="Enter your full name..."
                                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#373e51] focus:outline-none focus:ring-2 focus:ring-gray-700 focus:text-gray-100 focus:border-transparent text-sm text-gray-100 placeholder-gray-400"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-200 mb-2">Email Address</label>
                            <div className="relative">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M2 6L9 10L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    placeholder="Enter your email..."
                                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#373e51] focus:outline-none focus:ring-2 focus:ring-gray-700 focus:text-gray-100 focus:border-transparent text-sm text-gray-100 placeholder-gray-400"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-200 mb-2">Country/Nationality</label>
                            <div className="relative">
                                <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <select
                                    value={formData.country}
                                    onChange={(e) => handleChange('country', e.target.value)}
                                    className="w-full pl-11 pr-10 py-3 rounded-xl border border-[#373e51] focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent text-sm text-gray-400 appearance-none cursor-pointer"
                                >
                                    <option value="United States">United States</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="France">France</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="text-gray-400">
                                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>



                        <div>
                            <label className="block text-sm font-semibold text-gray-200 mb-2">Phone Number</label>
                            <div className="relative">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    <path d="M4 3H7L8.5 7L6.5 8.5C7.5 10.5 9.5 12.5 11.5 13.5L13 11.5L17 13V16C17 16.5 16.5 17 16 17C8.5 17 1 9.5 1 2C1 1.5 1.5 1 2 1H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <input
                                    type="tel"
                                    value={formData.phoneNumber}
                                    onChange={(e) => handleChange('phoneNumber', e.target.value)}
                                    placeholder="Enter phone number"
                                    className="w-full pl-11 pr-4 py-3 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-700 focus:text-gray-100 focus:border-transparent text-sm text-gray-100 placeholder-gray-400"
                                />
                            </div>
                        </div>

                        <button className="w-full bg-[#5f6fe4] mt-5 hover:bg-[#7080ec] text-sm text-white font-semibold py-4 rounded-xl transition-colors shadow-sm">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
