const WORLDS = [
    { emoji: "🏘️", label: "Leaking Village" },
    { emoji: "🌳", label: "Seed Forest" },
    { emoji: "⛰️", label: "Debt Mountain" },
    { emoji: "🌪️", label: "Market Storm" },
    { emoji: "🏙️", label: "Business City" },
    { emoji: "🏠", label: "Real Estate" },
    { emoji: "🌍", label: "Global Markets" },
    { emoji: "₿", label: "Crypto Kingdom" },
    { emoji: "🏝️", label: "Legacy Island" },
];

export default function LandingWorldsBar() {
    return (
        <div className="h-16  max-w-6xl mx-auto flex items-center px-2">
            <button className="text-[#9198ae] hover:text-white text-xl px-2 flex-shrink-0 transition-colors">
                &#8249;
            </button>

            <div className="flex items-center gap-1 overflow-x-auto flex-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {WORLDS.map((world) => (
                    <button
                        key={world.label}
                        className="flex items-center gap-1.5 text-xs font-bold text-[#9198ae] uppercase tracking-wide px-3 py-1.5 rounded-lg hover:bg-[#242834] hover:text-white transition-colors whitespace-nowrap flex-shrink-0"
                    >
                        <span className="text-lg">{world.emoji}</span>
                        {world.label}
                    </button>
                ))}
            </div>

            <button className="text-[#9198ae] hover:text-white text-xl px-2 flex-shrink-0 transition-colors">
                &#8250;
            </button>
        </div>
    );
}