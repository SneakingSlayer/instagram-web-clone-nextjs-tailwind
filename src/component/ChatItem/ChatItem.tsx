import React from "react";
import Link from "next/link";
const ChatItem = (props: any) => {
  return (
    <Link href={`/direct/t/${props.id}`}>
      <div className="hover:bg-gray-50 hover:cursor-pointer px-4 py-1.5">
        <div className="flex items-center">
          <div className="chat-img-wrapper w-full">
            <img src={`/profs/${props.img}`} />
          </div>
          <div className="mx-2">
            <p className="text-sm font-semibold ">{props.name}</p>
            <p className="text-xs text-gray-400 ">{props.status}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ChatItem;
