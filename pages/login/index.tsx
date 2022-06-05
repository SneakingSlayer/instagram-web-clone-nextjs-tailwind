import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { Footer } from "../../src/component/footer/Footer";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  return (
    <>
      <div className="h-full w-full flex justify-between items-center flex-col bg-body overflow-auto">
        <div></div>
        <div className=" w-full justify-center items-center ">
          <div className="  flex flex-col justify-center items-center">
            <div className=" flex flex-col justify-center items-center space-y-2">
              <div className="bg-white border p-12 pb-4 w-full max-w-sm">
                <div className="login-logo-wrapper mb-8 ">
                  <img
                    alt="Instagram"
                    src="/7a252de00b20.png"
                    className="login-logo"
                  />
                </div>
                <form className="flex flex-col text-center ">
                  <div className="space-y-1 w-full">
                    <input
                      className="border rounded bg-body py-2 px-2 text-sm w-full"
                      placeholder="Phone number, username, or email"
                      type="text"
                    />
                    <input
                      className="border rounded bg-body py-2 px-2 text-sm w-full"
                      placeholder="Password"
                      type="password"
                    />
                  </div>
                  <div className="space-y-2 flex flex-col w-full">
                    <button
                      className="bg-ig font-semibold text-white rounded text-sm p-1 mt-3"
                      onClick={async () => {
                        await localStorage.setItem("token", "sample");
                        router.push("/");
                      }}
                    >
                      Log In
                    </button>
                    <div className="py-2 flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                      <p className="text-center font-semibold mx-4 mb-0 text-gray-400 text-xs">
                        OR
                      </p>
                    </div>
                    <button className="py-2 space-x-1 text-sm text-fb font-semibold flex justify-center  items-center w-full">
                      <span>
                        <FaFacebookSquare fontSize={20} />
                      </span>
                      <span>Log In with Facebook</span>
                    </button>
                    <Link href="#">
                      <a className="text-xs text-fb ">Forgot Password?</a>
                    </Link>
                  </div>
                </form>
              </div>
              <div className="bg-white border p-5 w-full max-w-sm">
                <p className="text-center text-sm">
                  Don't have an account?{" "}
                  <a href="#" className="font-semibold text-ig">
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
