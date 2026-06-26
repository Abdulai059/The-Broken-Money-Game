// @ts-nocheck
import clsx from "clsx";

function SidebarMenuItem({ title, image, selected, onClick }) {
    return (
        <div className={clsx(selected && "bg-[#8291f2] pt-0.5")} style={{ borderRadius: 6 }}>
            <div
                onClick={onClick}
                className={clsx(
                    "flex items-center px-1 py-1 rounded-md cursor-pointer transition-colors duration-200",
                    selected ? "menu-items-selected text-white" : "bg-[#1d212c] text-[#93969d]"
                )}
                style={{ borderRadius: 6 }}
            >
                <img src={image} className="size-8 object-cover" alt="" />
                <span className="ml-2 font-semibold">{title}</span>
            </div>
        </div>
    );
}

export default SidebarMenuItem;
