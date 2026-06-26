// @ts-nocheck
function NavCategory({ icon: Icon, label, active, onClick }) {
    return (
        <div
            onClick={onClick}
            className={`inline-flex items-center px-4 h-9 font-semibold cursor-pointer ${active ? "text-white border-[2px] rounded-full border-[#474e5e]" : "text-[#94979c]"
                }`}
        >
            <Icon className={`size-5 ${active ? "text-[#4f68ff]" : "text-[#38404d]"}`} />
            <span className="ml-2">{label}</span>
        </div>
    );
}

export default NavCategory;
