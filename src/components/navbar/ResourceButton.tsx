// @ts-nocheck
export default function ResourceButton({ icon, value, onClick }) {
    return (
        <div
            onClick={onClick}
            className="inline-flex items-center px-3.5 py-1 gap-1.5 bg-black/25 rounded-full border border-white/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
        >
            <span className="flex items-center justify-center w-4.5 h-4.5">
                <img src={icon} alt="resource" className="w-[120%] h-[120%] object-contain rounded-full" />
            </span>
            <span className="text-sm font-semibold text-white leading-none">{value}</span>
        </div>
    );
}
