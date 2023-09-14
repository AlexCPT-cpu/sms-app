import { format } from "date-fns";
import clsx from "clsx";
import Avatar from "./Avatar";

const ConversationBox = ({ selected, index, setSelected }) => {
  return (
    <div
      onClick={() => setSelected(index)}
      className={clsx(
        `
        w-full 
        relative 
        flex 
        items-center 
        space-x-3 
        p-3 
        rounded-lg
        transition
        cursor-pointer
        ${
          selected === index
            ? "bg-[#703be7] text-white"
            : "hover:bg-neutral-100 text-black"
        }
        `
      )}
    >
      <Avatar />

      <div className="min-w-0 flex-1">
        <div className="focus:outline-none">
          <span className="absolute inset-0" aria-hidden="true" />
          <div className="flex justify-between items-center mb-1">
            <p className="text-md font-medium">{"User" || "Other User"}</p>
            <div className="flex flex-col">
              <p
                className="
                  text-xs 
                  font-light
                "
              >
                {format(new Date(), "p")}
              </p>
              {selected === index ? null : (
                <p className="w-5 h-5 rounded-full bg-[#703be7] justify-center items-center flex text-center text-white text-xs absolute right-3 top-9">
                  1
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col"></div>
          <p
            className={clsx(
              `
              truncate 
              text-sm
              `
            )}
          >
            Last Message
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConversationBox;
