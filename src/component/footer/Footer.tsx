import React from "react";

const links = [
  {
    link: "Meta",
  },
  {
    link: "About",
  },

  {
    link: "Blog",
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
    link: "Top Accounts",
  },

  {
    link: "Hashtags",
  },

  {
    link: "Locations",
  },
  {
    link: "Instagram Lite",
  },
  {
    link: "Contact Uploading & Non-Users",
  },
];

export const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center bg-body p-10">
      <div className="flex flex-col">
        <div className="text-xs text-gray-400 flex flex-wrap justify-center">
          {links.map((link, index) => (
            <a key={index} href="#" className="px-2">
              {link.link}
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          <p className="text-xs text-gray-400">English</p>
          <p className="text-xs text-gray-400">© 2022 Instagram from Meta</p>
        </div>
      </div>
    </footer>
  );
};
