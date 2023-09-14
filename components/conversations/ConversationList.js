//import ConversationBox from "./ConversationBox";
import { useState } from "react";
import Search from "../Search";
import ConversationBox from "./ConversationBox";
import TopBar from "../chat/TopBar";
import ChatItem from "../chat/ChatItem";

const ConversationList = () => {
  const items = ["1,", "2", "3", "2", "3", "2"];
  const chats = [
    {
      message: "This is a chat Message",
      author: "Default User",
    },
    {
      message: "This is a User chat Message 11",
      author: "User",
    },
    {
      message: "This is a Second chat Message 22",
      author: "Default User 2",
    },
    {
      message: "This is a Third chat Message 333",
      author: "Default User 3",
    },
    {
      message: "This is a User chat Message 22",
      author: "User",
    },
  ];
  const [selected, setSelected] = useState(0);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="flex flex-row mt-16"
    >
      <div className="max-w-sm min-h-[840px] relative flex bg-white rounded-l-md py-3 border-r border-r-black/25">
        <div className="px-5">
          <div className="flex justify-center items-center mb-5">
            <Search />
          </div>
          {/* <div className="w-[382px] border-t border-black mt-5"></div> */}
          <div className="flex w-full h-full rounded-md">
            <div className="w-full space-y-1">
              {items.map((item, index) => (
                <ConversationBox
                  key={index}
                  index={index}
                  selected={selected}
                  setSelected={setSelected}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[60vw]  min-h-[440px] lg:min-h-[840px] flex bg-gray-300 rounded-r-md text-3xl text-black flex-col">
        <div className="flex min-w-full">
          <TopBar />
        </div>

        <div className="w-full h-full p-2 overflow-y-auto space-y-8">
          {chats.map((chat, index) => (
            <ChatItem chat={chat} key={index} />
          ))}
        </div>
      </div>
      <div className="bottom-4 w-[51%] lg:w-[58%] right-6 lg:right-6 fixed flex flex-row items-center justify-center bg-white p-2 space-x-2 border-l border-l-black/25">
        <div className="rounded-md border h-10 justify-center items-center flex w-full">
          <input className="w-full text-black outline-none border-none p-1" />
        </div>

        <button
          type="submit"
          className="p-2 rounded-md bg-[#703be7] active:bg-[#6f3be7e8]"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ConversationList;
