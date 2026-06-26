// @ts-nocheck
function MembersRow({ members }) {
    return (
        <div className="flex items-center justify-between px-3 py-2">
            <span className="font-semibold">Members :</span>
            <div className="inline-flex items-center -space-x-1.5">
                {members.map((img, i) => (
                    <img key={i} src={img} className="size-6 rounded-full object-cover" alt="" />
                ))}
            </div>
        </div>
    );
}

export default MembersRow;
