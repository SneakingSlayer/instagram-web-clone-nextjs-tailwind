import React from "react";
import { Header } from "../src/component/header/Header";
import { BsGearWide, BsGrid3X3 } from "react-icons/bs";
import { Footer } from "../src/component/footer/Footer";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { CgBookmark } from "react-icons/cg";
import { BiUserPin } from "react-icons/bi";
const Profile = () => {
  let skeletons = [];
  for (let i = 0; i < 6; i++) {
    skeletons.push(
      <div className="animate-pulse flex w-full h-full ">
        <div className="rounded bg-gray-200 w-full h-60 hover:bg-gray-300"></div>
      </div>
    );
  }
  return (
    <>
      <Header />
      <div className="bg-body w-full flex justify-center pt-20 h-auto ">
        <div className="w-full general-container">
          <div className="flex sm:items-center py-6">
            <div className="sm:w-72 w-28 flex justify-center">
              <div className="sm:w-36 sm:h-36 w-16 h-16 profile-pic-wrapper">
                <img src="/profs/4.jpg" />
              </div>
            </div>
            <div className="space-y-5">
              <div className="sm:flex sm:items-center sm:space-x-4 space-y-2">
                <p className="text-3xl font-light">elephantguy</p>
                <button className="border border-gray-300 px-2 py-1 rounded font-semibold text-sm">
                  Edit Profile
                </button>
                <button className="sm:block hidden">
                  <BsGearWide fontSize={24} />
                </button>
              </div>
              <div className="sm:flex hidden items-center space-x-8">
                <p>
                  <span className="font-bold">10</span> posts
                </p>
                <p>
                  <span className="font-bold">789 </span> followers
                </p>
                <p>
                  <span className="font-bold">402</span> following
                </p>
              </div>
              <p className="sm:block hidden font-semibold">Elephant Guy</p>
            </div>
          </div>
          <p className="sm:hidden block font-semibold px-4 pb-4">
            Elephant Guy
          </p>
          <div className="sm:hidden flex justify-center items-center space-x-8 border-t p-4 w-full">
            <div className="w-full justify-between flex items-center max-w-md">
              <p className="flex flex-col text-center">
                <span className="font-bold">10</span> posts
              </p>
              <p className="flex flex-col text-center">
                <span className="font-bold">789 </span> followers
              </p>
              <p className="flex flex-col text-center">
                <span className="font-bold">402</span> following
              </p>
            </div>
          </div>
          <div className=" border-t mb-2 flex w-full justify-center px-4">
            <div className="flex justify-between items-center w-full max-w-md">
              <button className="text-xs font-semibold border-t-2 border-gray-800 py-3 flex items-center space-x-1.5">
                <BsGrid3X3 /> <span className="sm:block hidden">POSTS</span>
              </button>
              <button className="text-xs font-semibold text-gray-400 py-3 flex items-center space-x-1.5">
                <AiOutlinePlayCircle fontSize={18} />{" "}
                <span className="sm:block hidden">VIDEOS</span>
              </button>
              <button className="text-xs font-semibold text-gray-400 py-3 flex items-center space-x-1.5">
                <CgBookmark fontSize={20} />{" "}
                <span className="sm:block hidden">SAVED</span>
              </button>
              <button className="text-xs font-semibold text-gray-400 py-3 flex items-center space-x-1.5">
                <BiUserPin fontSize={20} />{" "}
                <span className="sm:block hidden">TAGGED</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 w-full  ">
            {skeletons}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
