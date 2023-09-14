import { IoMdChatbubbles } from "react-icons/io";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { primary } from "@/config/config";

const Logo = () => {
  return (
    <div className="text-[#703be7] font-bold italic flex flex-row items-center space-x-6 justify-between">
      <div className="flex flex-row items-center whitespace-nowrap">
        <IoMdChatbubbles size={30} className="mr-5" color={primary} /> Yama
        Palace
      </div>
      <div>
        <Cog6ToothIcon className="w-6 text-black" />
      </div>
    </div>
  );
};

export default Logo;
