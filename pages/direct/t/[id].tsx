import React, { useState, useEffect } from "react";
import { Header } from "../../../src/component/header/Header";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { chats } from "../../../src/fakeData";
import { useRouter } from "next/router";
import { AiOutlineHeart, AiOutlinePicture } from "react-icons/ai";
import { FiChevronLeft } from "react-icons/fi";
const T = () => {
  const router = useRouter();
  const { id }: any = router.query;
  return (
    <>
      <Header />
      <div className="bg-body w-full h-full flex justify-center pt-20 pb-20 ">
        <div className="bg-white border w-full max-w-4xl flex flex-col h-full">
          <div className=" w-full flex justify-between items-center py-2 px-4 border-b">
            <div className="flex items-center">
              <button className="mr-2">
                <FiChevronLeft
                  fontSize={24}
                  onClick={() => router.push("/direct")}
                />
              </button>
              <p className="text-sm font-semibold">{chats[id]?.name}</p>
            </div>
            <button>
              <HiOutlineInformationCircle fontSize={24} />
            </button>
          </div>
          <div className="grow overflow-auto px-4">
            {/**Messages goes here */}
          </div>
          <div className="p-4 relative">
            <input
              className="border rounded-full text-sm focus:outline-0 w-full px-4 py-2.5  "
              placeholder="Message..."
            />
            <AiOutlinePicture
              fontSize={28}
              className="absolute right-16 top-6 cursor-pointer"
            />
            <AiOutlineHeart
              fontSize={28}
              className="absolute right-7 top-6 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default T;
