import React from "react";
import { Header } from "../../src/component/header/Header";
import { Footer } from "../../src/component/footer/Footer";
const Explore = () => {
  let skeletons = [];
  for (let i = 0; i < 33; i++) {
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
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 w-full h-full general-container">
          {skeletons}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Explore;
