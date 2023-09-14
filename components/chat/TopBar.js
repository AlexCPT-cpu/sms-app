import { FiShield } from "react-icons/fi";
import { TrashIcon } from "@heroicons/react/24/outline";

const TopBar = () => {
  return (
    <div className="w-full bg-white h-14 rounded-tr-md flex">
      <div className="flex-1"></div>
      <div className="flex flex-row items-center justify-center mr-5 space-x-1">
        <div className="hover:bg-neutral-200 rounded-full p-2 cursor-pointer transition-all active:bg-neutral-300">
          <FiShield size={24} />
        </div>
        <div className="hover:bg-neutral-200 rounded-full p-2 cursor-pointer transition-all active:bg-neutral-300 text-red-500">
          <TrashIcon className="w-6" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
