import React from "react";

interface storyItem {
  name: String;
  img: String;
}

const StoryItem = (props: storyItem) => {
  return (
    <button className="flex flex-col justify-center items-center">
      <div className=" stories-img-wrapper outline outline-2 outline-offset-2">
        <img src={`/profs/${props.img}`} className="stories-img" />
      </div>
      <p className="text-xs mt-2 truncate story-name">{props.name}</p>
    </button>
  );
};
export default StoryItem;
