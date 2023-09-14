import React from "react";
import Avatar from "./Avatar";

const TopBar = ({ user }) => {
  return (
    <div className="bg-[#703be7] h-16 flex flex-row justify-between items-center fixed w-[1400px]">
      <div className="-1"></div>

      <div className="mtf flex flex-row space-x-4 mr-6">
        <div className="flex flex-col">
          <div className="font-bold">{user.email}</div>
          <div className="text-right">{user.name}</div>
        </div>
        <Avatar />
      </div>
    </div>
  );
};

TopBar.defaultProps = {
  user: {
    email: "example@gmail.com",
    name: "Default User",
  },
};
export default TopBar;
