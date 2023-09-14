"use client";

//import useActiveList from "../hooks/useActiveList";
import Image from "next/image";

const Avatar = ({ user }) => {
  //const { members } = useActiveList();
  //const isActive = members.indexOf(user?.email!) !== -1;

  return (
    <div className="relative">
      <div
        className="
        relative 
        inline-block 
        rounded-full 
        overflow-hidden
        h-9 
        w-9 
        md:h-11 
        md:w-11
        cursor-pointer
        hover:ring-white
        hover:ring
      "
      >
        <Image
          fill
          src={user?.image || "/images/placeholder.jpg"}
          alt="Avatar"
        />
      </div>
      {
        //isActive
        true ? (
          <span
            className="
            absolute 
            block 
            rounded-full 
            bg-green-500 
            ring-2 
            ring-white 
            top-0 
            right-0
            h-2 
            w-2 
            md:h-3 
            md:w-3
          "
          />
        ) : null
      }
    </div>
  );
};

Avatar.defaultProps = {
  user: {
    image: "/images/placeholder.jpg",
  },
};
export default Avatar;