import { ChevronRightIcon } from "@heroicons/react/24/outline";

const DesktopItem = ({ route, handleRoute, active }) => {
  return (
    <div
      onClick={() => handleRoute(route.link, route.path)}
      key={route.path}
      className={`text-black flex flex-row w-full px-2 py-2 rounded-md cursor-pointer transition-all ${
        active === route.path
          ? "bg-[#703be7] text-white shadow-xl backdrop-blur-md"
          : " hover:bg-neutral-100"
      }`}
    >
      <div className="flex-1 flex flex-row">
        {route.provider === "tailwind" ? (
          <route.icon className="w-6 mr-5" />
        ) : (
          <route.icon size={22} className="mr-5" />
        )}
        {route.path}
      </div>
      {route.arrow ? (
        <div className="flex items-end">
          <ChevronRightIcon className="w-5" />
        </div>
      ) : null}
    </div>
  );
};

export default DesktopItem;
