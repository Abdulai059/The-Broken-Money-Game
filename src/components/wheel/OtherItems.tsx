// @ts-nocheck
import { PlusIcon } from "lucide-react";
import SpeechBubble from "@/components/ui/SpeechBubble";

export default function OtherItems() {
  return (
    <>
      {/* Top Left Balance */}
      <div className="absolute left-2 top-2 sm:left-4 sm:top-4">
        <div className="inline-flex items-center text-xs sm:text-sm pl-2 pr-6 h-10 rounded-full relative bg-[#25282f] text-[#94979c] border-[2px] border-[#404859e5]">
          <img
            src="https://assets.codepen.io/3685267/wheel-of-fortune-aetkeerk.png"
            alt=""
            className="size-7 sm:size-8 object-center object-cover"
          />
          <div className="ml-2 font-semibold text-base sm:text-lg">
            <span className="text-white">0.</span>0000
          </div>
          <div className="absolute size-6 top-1/2 -translate-y-1/2 -right-2.5 transform rounded-md grid place-items-center plus-icon-bg">
            <PlusIcon className="size-4 sm:size-5 text-white" />
          </div>
        </div>
      </div>

      {/* Decorative Image Top Right */}
      <div
        className="absolute right-0 top-8 md:-top-8 size-40 sm:size-64 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://assets.codepen.io/3685267/wheel-of-fortune-zjlspegv.png)`,
        }}
      ><div className="absolute -top-8 -right-20"> <SpeechBubble typewriter speed={80} tail="bottom"> your financial liberty circle! </SpeechBubble> </div></div>

      {/* <div className="absolute right-0 top-8 md:-top-8 size-40 sm:size-64 relative">  <div className="size-full bg-cover bg-center" style={{ backgroundImage: `url(https://assets.codepen.io/3685267/wheel-of-fortune-zjlspegv.png)`, }} />  <div className="absolute -top-8 -right-4"> <SpeechBubble tail="bottom"> Hi there! </SpeechBubble> </div> </div> */}


      {/* Middle Top Info */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[230px] md:top-[250px] w-43 sm:w-64">
        <div className="inline-flex items-center hidden md:flex  bg-[#262535] border-[2px] border-[#2f333f] w-36 sm:w-40 rounded-full px-3 py-1">
          <img
            src="https://assets.codepen.io/3685267/wheel-of-fortune-aetkeerk.png"
            alt=""
            className="size-6 sm:size-8 object-center object-cover"
          />
          <div className="text-lg sm:text-xl font-semibold ml-2 sm:ml-3">66.60</div>
        </div>
        <img
          src="https://assets.codepen.io/3685267/wheel-of-fortune-gydimcwp.png"
          alt=""
          className="size-25 sm:size-40 object-center object-cover absolute -right-2 sm:-right-2 -top-12 sm:-top-14"
        />
      </div>

      {/* Center Chest */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[150px] sm:top-[350px] w-48 sm:w-64 flex items-center flex-col px-4 sm:px-5 py-3 hidden md:flex space-y-1 bg-[#272b35c2] text-[#7d8ba8] border-[2px] border-[#3d44528c]"
        style={{ borderRadius: "23px" }}
      >
        <div className="text-base sm:text-lg font-semibold text-white">Witch Chest</div>
        <div className="text-center text-xs sm:text-sm">
          Dark magic and witches potions inside the chest
        </div>
        <div className="bg-[#7d8cff] pt-0.5 w-full" style={{ borderRadius: "8px" }}>
          <button className="text-sm sm:text-base font-semibold buy-button w-full py-1 text-white">
            Buy a Chest x 3
          </button>
        </div>
      </div >
    </>
  );
}

