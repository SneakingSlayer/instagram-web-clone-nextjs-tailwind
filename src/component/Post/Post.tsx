import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsChat, BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { HiOutlineEmojiHappy } from "react-icons/hi";
const Post = () => {
  return (
    <div className="border rounded-lg bg-white ">
      <div className="w-full flex justify-between items-center p-4">
        <button className="flex space-x-3 items-center">
          <div className="post-profile-img-wrapper outline outline-2 outline-offset-2">
            <div>
              <img className="post-profile-img" src="/profs/6.jpg" />
            </div>
          </div>
          <p className="text-sm font-semibold">iluvsocks</p>
        </button>
        <button>
          <BsThreeDots fontSize={20} />
        </button>
      </div>
      <div className="post-img-wrapper">
        <img src="/posts/1.jpg" className="post-img" />
      </div>
      <div>
        <div className="p-3">
          <div className="flex justify-between items-center">
            <div className="flex space-x-2 items-center justify-center">
              <button>
                <AiOutlineHeart fontSize={26} />
              </button>
              <button>
                <BsChat fontSize={23} />
              </button>
              <button>
                <IoPaperPlaneOutline fontSize={24} />
              </button>
            </div>
            <div>
              <button>
                <BsBookmark fontSize={21} />
              </button>
            </div>
          </div>
          <p className="font-semibold text-sm pt-3">51,578 likes</p>
          <div className="pt-1 pb-2">
            <p className="text-sm">
              <span className="font-semibold ">iluvsocks</span> Come on & let
              the bliss begin
            </p>
            <button className="text-sm text-gray-400">
              View all 5 comments
            </button>
          </div>
          <p className="text-xs text-gray-400">1 hour ago</p>
        </div>
        <div className="border-t flex justify-between items-center p-2 w-full">
          <button className=" ">
            <HiOutlineEmojiHappy fontSize={28} />
          </button>
          <input
            className=" text-sm  grow mx-1 p-2 focus:outline-0"
            placeholder="Add a comment..."
          />
          <button className=" font-semibold text-sm text-ig ">Post</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
