import React from "react";
import Avatar from "./Avatar";

const ChatItem = ({ chat }) => {
  return (
    <>
      {chat.author === "User" ? (
        <div className="flex flex-row justify-end space-x-2">
          <div
            className={`text-sm font-normal shadow-2xl p-2 rounded-md w-fit ${
              chat.author === "User"
                ? "bg-[#703be7] text-white"
                : "bg-gray-100 text-black"
            }`}
          >
            {chat.message}
          </div>
          <div className="ring rounded-full ring-white">
            <Avatar />
          </div>
        </div>
      ) : (
        <div className="flex flex-row items-center space-x-2">
          <div className="ring rounded-full ring-white">
            <Avatar />
          </div>
          <div
            className={`text-sm font-normal shadow-2xl p-2 rounded-md w-fit ${
              chat.author === "User"
                ? "bg-[#703be7] text-white"
                : "bg-gray-100 text-black"
            }`}
          >
            {chat.message}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatItem;
