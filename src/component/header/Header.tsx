import React, { useEffect, useState } from "react";
import { FaSearch, FaCog, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import {
  AiFillHome,
  AiOutlineHome,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { BsGearWide } from "react-icons/bs";
import { RiMessengerFill, RiMessengerLine } from "react-icons/ri";
import {
  MdOutlineAddBox,
  MdAddBox,
  MdExplore,
  MdOutlineExplore,
} from "react-icons/md";

import { Menu } from "@headlessui/react";

import { useRouter } from "next/router";

import { Dialog } from "@headlessui/react";
import { AiOutlineCloudUpload, AiOutlineUserAdd } from "react-icons/ai";

import Link from "next/link";

export const Header = () => {
  const router = useRouter();
  const route = router.route;
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const setCreatePosts = () => {
    return (
      <Dialog
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
          setCount(0);
        }}
        className="relative z-50 "
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center ">
          <Dialog.Panel className="mx-auto max-w-sm rounded-lg bg-white  w-full">
            <Dialog.Title className="border-b border-gray-200 p-2 text-center font-semibold">
              Create New Post
            </Dialog.Title>

            <div className="p-4 text-center flex items-center flex-col justify-center ">
              <AiOutlineCloudUpload
                className="text-center w-full text-gray-400"
                fontSize={100}
              />
              <h1 className="text-2xl font-thin pb-4">
                Drag photos and videos here
              </h1>
              <button className="bg-ig rounded px-3 py-1 font-semibold text-white text-sm">
                Select from computer
              </button>
            </div>

            {/* ... */}
          </Dialog.Panel>
        </div>
      </Dialog>
    );
  };

  return (
    <>
      <div className="sm:flex hidden w-full flex justify-center items-center bg-white border-b  fixed z-50 ">
        {count === 2 ? setCreatePosts() : null}
        <div className="header-width flex justify-between items-center w-full ">
          <div className="grow">
            <Link href="/">
              <img
                src="/7a252de00b20.png"
                className="header-logo cursor-pointer"
              />
            </Link>
          </div>
          <div className="relative grow ">
            <input
              placeholder="Search"
              className="search-input  text-sm px-4 py-2 pl-10 rounded-lg w-2/3"
            />
            <FaSearch className="absolute top-2.5 left-4 text-gray-400" />
          </div>
          <div>
            <div className="space-x-4 grow flex">
              <button
                onClick={() => {
                  setCount(0);
                  router.push("/");
                }}
              >
                {route === "/" ? (
                  <AiFillHome fontSize={28} />
                ) : (
                  <AiOutlineHome fontSize={28} />
                )}
              </button>
              <button
                onClick={() => {
                  setCount(1);
                  router.push("/direct");
                }}
              >
                {route === "/direct" ? (
                  <RiMessengerFill fontSize={28} />
                ) : (
                  <RiMessengerLine fontSize={28} />
                )}
              </button>
              <button
                onClick={() => {
                  setCount(2);
                  setIsOpen(true);
                }}
              >
                {count === 2 ? (
                  <MdAddBox fontSize={28} />
                ) : (
                  <MdOutlineAddBox fontSize={28} />
                )}
              </button>
              <button
                onClick={() => {
                  setCount(3);
                  router.push("/explore");
                }}
              >
                {route === "/explore" ? (
                  <MdExplore fontSize={28} />
                ) : (
                  <MdOutlineExplore fontSize={28} />
                )}
              </button>

              {/**Likes Menu */}
              <div className="relative inline-block text-left ">
                <Menu>
                  {({ open }) => (
                    <div>
                      <Menu.Button className=" flex items-center">
                        {open ? (
                          <AiFillHeart fontSize={28} />
                        ) : (
                          <AiOutlineHeart fontSize={28} />
                        )}
                      </Menu.Button>

                      <Menu.Items className="flex justify-center align-items-center divide-y divide-gray-200 p-2 absolute right-0 flex flex-col w-52 h-28 top-9 border border-gray-100 origin-top-right bg-white rounded-md shadow-md outline-none z-10">
                        <div className="flex flex-col justify-center items-center">
                          <div className=" border border-2 border-gray-300 w-10 h-10 rounded-full flex justify-center mb-1">
                            <AiOutlineHeart
                              fontSize={26}
                              className="h-full text-gray-300"
                            />
                          </div>
                          <p className="text-center text-sm text-gray-400">
                            You have no notifications yet.
                          </p>
                        </div>
                      </Menu.Items>
                    </div>
                  )}
                </Menu>
              </div>

              {/**Profile Menu */}
              <div className="relative inline-block text-left ">
                <Menu>
                  <div>
                    <Menu.Button className=" flex items-center outline outline-0 outline-offset-2 focus:outline-1 rounded-full">
                      <div className="header-img-wrapper ">
                        <img src="/profs/4.jpg" className="header-img" />
                      </div>
                    </Menu.Button>
                    <Menu.Items className=" divide-y divide-gray-200 pt-2 pb-2 absolute right-0 flex flex-col w-32 top-9 border border-gray-100 origin-top-right bg-white rounded-md shadow-md outline-none z-10">
                      <div className="w-full">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => router.push("/elephantguy")}
                              className={`${
                                active && "bg-gray-100   w-full "
                              } p-1.5 pt-1.5 text-sm flex items-center   px-3 ps-3  w-full`}
                            >
                              <FaUserCircle className="mr-2 text-lg" /> Profile
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${" text-gray-200  divide-y divide-gray-100 w-full"} p-1 pb-2 text-sm flex items-center text-gray-400  px-3 ps-3  divide-y divide-gray-100 w-full`}
                            >
                              <FaCog className="mr-2 text-lg" /> Settings
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="w-full">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={async () => {
                                await localStorage.clear();
                                router.push("/login");
                              }}
                              className={`${
                                active && "bg-gray-100   w-full "
                              } p-1.5 text-sm flex items-center  px-3 ps-3  w-full`}
                            >
                              <FaSignOutAlt className="mr-2 text-lg" /> Logout
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </div>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**Header mobile */}
      <div className="sm:hidden flex w-full flex justify-center items-center bg-white border-b  fixed z-50 ">
        <div className="header-width flex justify-between items-center w-full px-4">
          <button>
            <BsGearWide fontSize={24} />
          </button>
          <p className="font-semibold text-lg">elephantguy</p>
          <button>
            <AiOutlineUserAdd fontSize={28} />
          </button>
        </div>
      </div>

      {/**Bottom nav mobile */}
      <div className="w-full sm:hidden flex justify-center items-center bg-white border-t  fixed z-50 bottom-0 ">
        {count === 2 ? setCreatePosts() : null}
        <div className="header-width  w-full flex items-center w-full justify-center">
          <div className=" flex justify-between items-center w-full px-4">
            <button
              onClick={() => {
                setCount(0);
                router.push("/");
              }}
            >
              {route === "/" ? (
                <AiFillHome fontSize={28} />
              ) : (
                <AiOutlineHome fontSize={28} />
              )}
            </button>
            <button
              onClick={() => {
                setCount(1);
                router.push("/direct");
              }}
            >
              {route === "/direct" ? (
                <RiMessengerFill fontSize={28} />
              ) : (
                <RiMessengerLine fontSize={28} />
              )}
            </button>
            <button
              onClick={() => {
                setCount(2);
                setIsOpen(true);
              }}
            >
              {count === 2 ? (
                <MdAddBox fontSize={28} />
              ) : (
                <MdOutlineAddBox fontSize={28} />
              )}
            </button>
            <button
              onClick={() => {
                setCount(3);
                router.push("/explore");
              }}
            >
              {route === "/explore" ? (
                <MdExplore fontSize={28} />
              ) : (
                <MdOutlineExplore fontSize={28} />
              )}
            </button>

            {/**Likes Menu */}
            <div className="relative inline-block text-left ">
              <Menu>
                {({ open }) => (
                  <div>
                    <Menu.Button className=" flex items-center">
                      {open ? (
                        <AiFillHeart fontSize={28} />
                      ) : (
                        <AiOutlineHeart fontSize={28} />
                      )}
                    </Menu.Button>

                    <Menu.Items className="flex justify-center align-items-center divide-y divide-gray-200 p-2 absolute right-0 flex flex-col w-52 h-28 bottom-10 border border-gray-100 origin-top-right bg-white rounded-md shadow-md outline-none z-10">
                      <div className="flex flex-col justify-center items-center">
                        <div className=" border border-2 border-gray-300 w-10 h-10 rounded-full flex justify-center mb-1">
                          <AiOutlineHeart
                            fontSize={26}
                            className="h-full text-gray-300"
                          />
                        </div>
                        <p className="text-center text-sm text-gray-400">
                          You have no notifications yet.
                        </p>
                      </div>
                    </Menu.Items>
                  </div>
                )}
              </Menu>
            </div>

            {/**Profile Menu */}
            <div className="relative inline-block text-left ">
              <Menu>
                <div>
                  <Menu.Button className=" flex items-center outline outline-0 outline-offset-2 focus:outline-1 rounded-full">
                    <div className="header-img-wrapper ">
                      <img src="/profs/4.jpg" className="header-img" />
                    </div>
                  </Menu.Button>
                  <Menu.Items className=" divide-y divide-gray-200 pt-2 pb-2 absolute right-0 flex flex-col w-32 bottom-10 border border-gray-100 origin-top-right bg-white rounded-md shadow-md outline-none z-10">
                    <div className="w-full">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => router.push("/elephantguy")}
                            className={`${
                              active && "bg-gray-100   w-full "
                            } p-1.5 pt-1.5 text-sm flex items-center   px-3 ps-3  w-full`}
                          >
                            <FaUserCircle className="mr-2 text-lg" /> Profile
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${" text-gray-200  divide-y divide-gray-100 w-full"} p-1 pb-2 text-sm flex items-center text-gray-400  px-3 ps-3  divide-y divide-gray-100 w-full`}
                          >
                            <FaCog className="mr-2 text-lg" /> Settings
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="w-full">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active && "bg-gray-100   w-full "
                            } p-1.5 text-sm flex items-center  px-3 ps-3  w-full`}
                          >
                            <FaSignOutAlt className="mr-2 text-lg" /> Logout
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </div>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
