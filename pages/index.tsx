import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Header } from "../src/component/header/Header";
import Stories from "../src/component/stories/Stories";
import Post from "../src/component/Post/Post";
import Suggestions from "../src/component/Suggestions/Suggestions";
import { useRouter } from "next/router";
const Home: NextPage = () => {
  const router = useRouter();
  if (typeof window !== "undefined") {
    if (!localStorage.getItem("token")) {
      router.push("/login");
    }
  }

  return (
    <>
      <Header />
      <div className="bg-body w-full h-auto flex justify-center pt-20 pb-10">
        <div className="feed-container w-full space-x-8 h-full flex justify-center lg:justify-start">
          <div className="h-full w-full posts-container space-y-3">
            <Stories />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>

          <div className="sticky h-full  hidden lg:block">
            <Suggestions />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
