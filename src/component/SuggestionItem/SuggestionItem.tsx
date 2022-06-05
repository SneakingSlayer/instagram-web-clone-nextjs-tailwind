import React from "react";

const SuggestionItem = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <div className="sugg-user-img-wrapper">
          <img className="sugg-user-img" src="/profs/1.jpg" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-semibold">thelancethe</p>
          <p className="text-xs text-gray-400">New to Instagram</p>
        </div>
      </div>
      <button className="font-semibold text-xs text-ig">Follow</button>
    </div>
  );
};
export default SuggestionItem;
