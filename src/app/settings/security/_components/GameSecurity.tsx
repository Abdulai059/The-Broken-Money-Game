// @ts-nocheck
'use client'

import React from 'react';
import { ChevronLeft, Shield, Lock, Key, AlertTriangle, Wallet, LogOut } from 'lucide-react';
import LinkButton from '@/components/ui/LinkButton';
import PageHeader from '@/components/ui/PageHeader';

export default function GameSecurity() {
    return (
        <div>
            <div className="max-w-md mx-auto">
                <PageHeader title="Security" />

                <div className="px-6 py-6">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-[#12161f] rounded-full flex items-center justify-center">
                            <Shield size={24} className="text-red-400" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-200">Security</h1>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Spin Quest keeps your gameplay safe by design.
                    </p>
                </div>

                <div className="px-6 pb-6">
                    <div className="bg-[#12161f] border border-[#373e51] rounded-2xl p-6 mb-6">
                        <div className="flex items-start gap-3 mb-4">
                            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
                                <Lock size={20} className="text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-100 text-base mb-1">Your Security Matters</h3>
                                <p className="text-sm text-gray-400">
                                    We prioritize your safety with industry-standard security practices
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {[
                            { icon: Key, bg: 'bg-green-100', color: 'text-green-600', title: 'Private Keys Protected', desc: 'We never store your private keys or recovery phrase' },
                            { icon: Wallet, bg: 'bg-purple-100', color: 'text-purple-600', title: 'Wallet-Based Security', desc: 'Your wallet handles all approvals and security' },
                            { icon: Shield, bg: 'bg-blue-100', color: 'text-blue-600', title: 'Official Links Only', desc: 'Only connect your wallet on official Spin Quest links' },
                            { icon: AlertTriangle, bg: 'bg-red-100', color: 'text-red-600', title: 'No DM Requests', desc: 'We will never DM you asking for funds or keys' },
                            { icon: LogOut, bg: 'bg-orange-100', color: 'text-orange-600', title: 'Easy Disconnect', desc: 'Disconnect your wallet anytime from this app' },
                        ].map(({ icon: Icon, bg, color, title, desc }) => (
                            <div key={title} className="bg-[#12161f] border border-[#373e51] rounded-2xl p-5 shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className={`w-10 h-10 ${bg} rounded-lg flex items-center justify-center shrink-0`}>
                                        <Icon size={20} className={color} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-100 text-sm mb-1">{title}</h4>
                                        <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8">
                        <button className="w-full bg-red-500 hover:bg-red-400 text-white font-semibold py-4 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2">
                            <Shield size={20} />
                            View Security Tips
                        </button>
                    </div>

                    <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                        <div className="flex items-start gap-3">
                            <AlertTriangle size={18} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h5 className="font-semibold text-yellow-900 text-sm mb-1">Stay Alert</h5>
                                <p className="text-xs text-yellow-800 leading-relaxed">
                                    Always verify you're on the official Spin Quest domain before connecting your wallet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
