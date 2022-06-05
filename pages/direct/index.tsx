import React from "react";
import { Header } from "../../src/component/header/Header";
import { HiPencilAlt } from "react-icons/hi";
import ChatItem from "../../src/component/ChatItem/ChatItem";
import { chats } from "../../src/fakeData";
const Direct = () => {
  return (
    <>
      <Header />
      <div className="bg-body w-full h-full flex justify-center pt-20 pb-10 ">
        <div className="bg-white border w-full max-w-4xl h-full overflow-auto ">
          <div className="py-2 px-4 border-b flex justify-between items-center">
            <p className="text-sm font-semibold">elephantguy</p>
            <button>
              <HiPencilAlt
                fontSize={26}
                className="text-gray-300 hover:text-gray-800"
              />
            </button>
          </div>
          <div className="w-full my-3">
            {chats.map((chat, index) => (
              <ChatItem
                key={index}
                id={index}
                name={chat.name}
                status={chat.status}
                img={chat.img}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Direct;
