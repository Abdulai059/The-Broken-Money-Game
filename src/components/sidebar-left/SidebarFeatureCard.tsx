// @ts-nocheck
function SidebarFeatureCard({ children }) {
    return (
        <div className="bg-[#3b4252] pt-0.5 mt-2" style={{ borderRadius: 6 }}>
            <div className="rounded-md px-2 py-4 bg-[#2e3442] space-y-3">
                {children}
            </div>
        </div>
    );
}

export default SidebarFeatureCard;
