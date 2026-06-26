// @ts-nocheck
import { PawIcon } from "@/components/icons/PawIcon";

function SubscriptionCard({ image, title, description }) {
    return (
        <div className="px-3">
            <div className="bg-[#7080ec] pt-0.5 relative rounded-md">
                <div className="p-3 flex items-center bg-[#5f6fe4] rounded-md">
                    <img src={image} className="size-14 object-cover" alt="" />
                    <div className="ml-2">
                        <div className="font-bold">{title}</div>
                        <div className="text-xs">{description}</div>
                    </div>
                </div>
                <div className="absolute top-1 right-1 size-5 rounded-full bg-[#7689ff] grid place-items-center">
                    <PawIcon className="size-3" />
                </div>
            </div>
        </div>
    );
}

export default SubscriptionCard;
