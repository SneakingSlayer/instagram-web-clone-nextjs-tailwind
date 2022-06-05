import React from "react";
import SuggestionItem from "../SuggestionItem/SuggestionItem";
const Suggestions = () => {
  const suggestions = [
    {
      username: "",
      label: "",
    },
    {
      username: "",
      label: "",
    },
    {
      username: "",
      label: "",
    },
    {
      username: "",
      label: "",
    },
    {
      username: "",
      label: "",
    },
  ];
  const links = [
    {
      link: "About",
    },

    {
      link: "Press",
    },

    {
      link: "Jobs",
    },

    {
      link: "Help",
    },

    {
      link: "API",
    },

    {
      link: "Privacy",
    },

    {
      link: "Terms",
    },
    {
      link: "Locations",
    },
    {
      link: "Top Accounts",
    },

    {
      link: "Hashtags",
    },

    {
      link: "Language",
    },
  ];
  return (
    <div className=" bg-body hidden lg:block fixed suggestions z-0">
      <div className="flex justify-between items-center ">
        <div className="flex justify-center items-center">
          <div className="sugg-img-wrapper">
            <img src="/profs/4.jpg" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-semibold">elephantguy</p>
            <p className="text-sm text-gray-400">Elephant Guy</p>
          </div>
        </div>
        <button className="text-xs text-ig  font-semibold">Switch</button>
      </div>
      <div className="mt-4 mb-2">
        <div className="flex justify-between mb-4">
          <p className="font-semibold text-sm text-gray-400">
            Suggestions For You
          </p>
          <a className="text-xs font-semibold" href="#">
            See All
          </a>
        </div>
        {/**Here */}
        <div className="space-y-3">
          {suggestions.map((suggestion, index) => (
            <SuggestionItem key={index} />
          ))}
        </div>
      </div>
      <div className="py-4">
        <div className=" flex flex-wrap">
          {links.map((link, index) => (
            <p key={index} className="text-xs text-gray-400 pr-1 py-1">
              {link.link}
            </p>
          ))}
        </div>
        <p className="text-gray-400 text-xs pt-3">© 2022 INSTAGRAM FROM META</p>
      </div>
    </div>
  );
};

export default Suggestions;
