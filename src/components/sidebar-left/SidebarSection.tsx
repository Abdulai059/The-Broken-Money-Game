// @ts-nocheck
function SidebarSection({ title, action }) {
    return (
        <div className="flex items-center justify-between">
            <span className="font-semibold text-white">{title}</span>
            {action}
        </div>
    );
}

export default SidebarSection;
