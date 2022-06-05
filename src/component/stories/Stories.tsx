import React, { useRef } from "react";
import StoryItem from "../StoryItem/StoryItem";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
const Stories = () => {
  const stories = [
    {
      name: "thelancethe",
      img: "1.jpg",
    },
    {
      name: "charliethecrocodile",
      img: "2.jpg",
    },
    {
      name: "slowdough",
      img: "3.jpg",
    },
    {
      name: "elephantguy",
      img: "4.jpg",
    },
    {
      name: "chomp997",
      img: "5.jpg",
    },
    {
      name: "iluvsocks",
      img: "6.jpg",
    },
    {
      name: "mrhands9",
      img: "7.jpg",
    },
    {
      name: "gobert12",
      img: "8.jpg",
    },
  ];

  const ref = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: any) => {
    if (ref.current !== null) {
      ref.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div className="w-full border bg-white rounded-lg overflow-hidden  relative">
      <button
        className="stories-btn-prev absolute left-0 top-1/3 pl-1.5"
        onClick={() => scroll(-100)}
      >
        <FaChevronCircleLeft fontSize={20} />
      </button>
      <div
        ref={ref}
        className="flex space-x-4 overflow-auto p-4 scroll-smooth no-scrollbar"
      >
        {stories.map((story, index) => (
          <StoryItem key={index} name={story.name} img={story.img} />
        ))}
      </div>
      <button
        className="stories-btn-next absolute right-0 top-1/3 pr-1.5"
        onClick={() => scroll(100)}
      >
        <FaChevronCircleRight fontSize={20} />
      </button>
    </div>
  );
};

export default Stories;
