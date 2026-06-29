// @ts-nocheck
'use client'

import React from 'react';
import { ArrowLeft, HelpCircle, Users, MessageSquare, Gamepad2, ChevronRight } from 'lucide-react';
import LinkButton from '@/components/ui/LinkButton';
import PageHeader from '@/components/ui/PageHeader';

export default function Rewards() {
    return (
        <div className="md:min-h-screen md:flex md:items-center md:justify-center">
            <div className="w-full max-w-md mx-auto">
                <PageHeader title="Rewards" />

                <div className="border bg-[#161920] border-[#373e51] rounded-3xl p-5 flex items-center justify-between mb-6 shadow-lg shadow-[#373e51]/40">
                    <div className="flex items-center gap-3">
                        <div className="backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center">
                            <img src="/btccoin.png" alt="" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div>
                            <p className="text-white/90 text-sm font-medium">GenCoins</p>
                            <p className="text-white text-3xl font-bold">15</p>
                        </div>
                    </div>
                    <button className="text-white hover:text-white/80 transition">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                <div className="bg-[#161920] border border-[#373e51] rounded-3xl p-4 mb-6 shadow-xl">
                    <h2 className="text-gray-100 text-center text-base font-semibold mb-5">
                        Complete tasks &amp; Earn GenCoins
                    </h2>

                    <div className="grid grid-cols-3 gap-3 mb-6">
                        <button className="bg-[#161920] hover:bg-[#373e51] border border-[#3f4760] rounded-2xl p-4 flex flex-col items-center gap-2 transition-all hover:scale-105">
                            <Users className="w-8 h-8 text-[#2dd4bf]" />
                            <span className="text-gray-400 text-xs font-semibold">Invite</span>
                        </button>
                        <button className="bg-[#161920] hover:bg-[#373e51] border border-[#3f4760] rounded-2xl p-4 flex flex-col items-center gap-2 transition-all hover:scale-105">
                            <MessageSquare className="w-8 h-8 text-[#a78bfa]" />
                            <span className="text-gray-400 text-xs font-semibold">Posts</span>
                        </button>
                        <button className="bg-linear-to-br from-[#7080ec] to-[#5f6fe4] rounded-2xl p-4 flex flex-col items-center gap-2 shadow-lg shadow-[#5f6fe4]/30 transition-all hover:scale-105">
                            <Gamepad2 className="w-8 h-8 text-white" />
                            <span className="text-white text-xs font-bold">Games</span>
                        </button>
                    </div>

                    <h3 className="text-gray-200 text-sm font-semibold mb-4">Play Games &amp; Earn More</h3>

                    <div className="bg-[#161920] border border-[#373e51] rounded-2xl p-4 mb-3 flex items-center justify-between hover:bg-[#373e51] transition">
                        <div className="flex flex-col items-start gap-3">
                            <span className="text-gray-200 text-xs font-semibold">Your Today&apos;s Wins</span>
                            <div className="bg-linear-to-br from-[#5f6fe4] to-[#7080ec] rounded-xl px-3 py-1 shadow-md">
                                <span className="text-white text-xs font-bold">10/10</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div className="rounded-full w-6 h-6 flex items-center justify-center">
                                <img src="/btccoin.png" alt="" className="w-full h-full object-cover rounded-full" />
                            </div>
                            <span className="text-gray-100 text-sm font-bold">10 Coins</span>
                        </div>
                    </div>

                    <div className="bg-[#161920] border border-[#373e51] rounded-2xl p-4 mb-6 flex items-center justify-between hover:bg-[#373e51] transition">
                        <div className="flex flex-col items-start gap-3">
                            <span className="text-gray-200 text-xs font-semibold">You Won Out of the Day</span>
                            <div className="bg-linear-to-br from-[#7080ec] to-[#5f6fe4] rounded-xl px-3 py-1 shadow-md">
                                <span className="text-white text-xs font-bold">10/10</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div className="rounded-full w-6 h-6 flex items-center justify-center">
                                <img src="/btccoin.png" alt="" className="w-full h-full object-cover rounded-full" />
                            </div>
                            <span className="text-gray-100 text-sm font-bold">20 Coins</span>
                        </div>
                    </div>

                    <div>
                        {/* <h3 className="text-gray-100 text-center text-base font-bold mb-4">Mint NFTs &amp; Win Coins</h3>
                        <div className="grid grid-flow-col auto-cols-[4.75rem] gap-3 mb-5 overflow-x-auto pb-2 scrollbar-hide">
                            {['/nft-card01.avif', '/nft.avif', '/fun-3d-.avif', '/3d--nft8.avif', '/nft-auction.avif'].map((src, i) => (
                                <div key={i} className="h-24 rounded-xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer">
                                    <img src={src} alt="" className="w-full h-full object-cover rounded-xl" />
                                </div>
                            ))}
                        </div>
                        <button className="w-full bg-[#161920] border border-[#373e51] rounded-2xl py-4 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all mb-3">
                            <Gamepad2 className="w-5 h-5 text-white" />
                            <span className="text-white font-bold tracking-wide">MINT</span>
                        </button> */}
                        {/* <button className="w-full text-gray-400 hover:text-gray-300 font-semibold text-sm flex items-center justify-center  gap-1 transition-colors"> */}


                        {/* New styling from the mint btn */}
                        <button className="w-full bg-[#8291f2] border border-[#373e51] rounded-xl py-4 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all mb-3"
                        >
                            <span className="text-gray-100  font-bold tracking-wide"> CHECK LEADERBOARD</span>
                            <ChevronRight className="w-4 h-4 text-gray-100  " />
                        </button>
                    </div>
                </div>

                <div className="text-center flex items-center">
                    <div className="mr-5 h-0.5 w-10 bg-linear-to-l from-transparent to-gray-600"></div>
                    <p className="text-gray-400 text-sm font-medium">How to earn more coins in Games</p>
                    <div className="ml-5 h-0.5 w-10 bg-linear-to-l from-transparent to-gray-600"></div>
                </div>
            </div>
        </div>
    );
}
