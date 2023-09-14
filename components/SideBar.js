import { useState } from "react";
import DesktopItem from "./sidebar/DesktopItem";
import { RiBarChartLine } from "react-icons/ri";
import { FiShield, FiPhoneCall } from "react-icons/fi";
import { GiTwirlyFlower } from "react-icons/gi";
import {
  HomeIcon,
  UserIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import Avatar from "./Avatar";
import Logo from "./Logo";

const SideBar = ({ children }) => {
  const routes = [
    {
      path: "Home",
      link: "/",
      icon: HomeIcon,
      provider: "tailwind",
      arrow: false,
    },
    {
      path: "Chart",
      link: "/",
      icon: RiBarChartLine,
      provider: "react-icons",
      arrow: true,
    },
    {
      path: "User",
      link: "/",
      icon: UserIcon,
      provider: "tailwind",
      arrow: false,
    },
    {
      path: "Messages",
      link: "/",
      icon: PaperAirplaneIcon,
      provider: "tailwind",
      arrow: true,
    },
    {
      path: "Shield",
      link: "/",
      icon: FiShield,
      provider: "react-icons",
      arrow: false,
    },
    {
      path: "Chat",
      link: "/",
      icon: ChatBubbleLeftIcon,
      provider: "tailwind",
      arrow: true,
    },
    {
      path: "Phone",
      link: "/",
      icon: FiPhoneCall,
      provider: "react-icons",
      arrow: true,
    },
    {
      path: "Photos",
      link: "/",
      icon: PhotoIcon,
      provider: "tailwind",
      arrow: true,
    },
    {
      path: "Gallery",
      link: "/",
      icon: GiTwirlyFlower,
      provider: "react-icons",
      arrow: false,
    },
  ];

  const [active, setActive] = useState("Home");

  const handleRoute = (link, path) => {
    setActive(path);
  };

  return (
    <div className="h-full w-full flex flex-row justify-between">
      <div
        className="
    hidden 
    lg:fixed 
    h-full
    lg:z-40 
    lg:w-72 
    xl:px-6
    lg:overflow-y-auto 
    lg:bg-white 
    lg:border-r-[1px]
    lg:pb-4
    lg:flex
    lg:flex-col
    justify-between
  "
      >
        <nav className="mt-4 flex flex-col justify-between">
          <Logo />
          <div className="flex flex-col space-y-2 mt-6 w-full text-black">
            {routes?.map((route) => (
              <DesktopItem
                route={route}
                handleRoute={handleRoute}
                key={route.path}
                active={active}
              />
            ))}
          </div>
        </nav>
        <nav className="mt-4 flex flex-col justify-between items-center">
          <div
            onClick={() => setIsOpen(true)}
            className="cursor-pointer hover:opacity-75 transition"
          >
            <Avatar
            //user={currentUser}
            />
          </div>
        </nav>
      </div>

      <div className="lg:pl-[285px] h-full w-full">{children}</div>
    </div>
  );
};

export default SideBar;
