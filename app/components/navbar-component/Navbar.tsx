"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import LeftNavLinks from "./LeftNavLinks";
import RightNavLinks from "./RightNavLinks";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

type Props = {};

const Header = (props: Props) => {
  const [isActive, setIsActive] = useState(false);

  const leftLinks = [
    {
      link: "/",
      linkName: "home",
    },
    {
      link: "/projects",
      linkName: "projects",
    },
    {
      link: "/open-source",
      linkName: "open source",
    },
    // uncomment this to make it appear in navbar.
    // add resume in public directory as "Resume.pdf" to make it work again
    // {
    //   link: "/Resume.pdf",
    //   linkName: "resume",
    // },
  ];

  const rightLinks = [
    {
      link: "https://github.com/SAMURAii-7",
      linkName: <FaGithub />,
    },
    {
      link: "https://www.linkedin.com/in/shubhamprasad7",
      linkName: <FaLinkedin />,
    },
    {
      link: "https://twitter.com/SAMURAii_7",
      linkName: <FaXTwitter />,
    },
  ];

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleLinkClick = () => {
    setIsActive(false);
  };

  return (
    <nav className="flex flex-row items-center justify-start pt-[40px]">
      <div className="flex w-full flex-row items-center justify-between max-md:w-full">
        {/* left side links */}
        <div
          className={`flex flex-row items-center justify-start max-md:absolute max-md:left-[-100%] max-md:top-[5rem] max-md:h-[200px] max-md:w-[300px] max-md:flex-col max-md:justify-center max-md:rounded-[10px] max-md:border max-md:border-white max-md:bg-[#111010] max-md:text-center ${
            isActive && "max-md:left-auto"
          }`}
        >
          {leftLinks.map((link) => (
            <LeftNavLinks
              key={uuidv4()}
              link={link.link}
              linkName={link.linkName}
              handleLinkClick={handleLinkClick}
            />
          ))}
        </div>
        <div
          className="hidden max-md:block max-md:cursor-pointer"
          onClick={handleClick}
        >
          <span
            className={`mx-[3px] my-[5px] block h-[3px] w-[25px] bg-[#a1a1a1] transition-all duration-500 ease-in-out ${
              isActive && "translate-y-[8px] rotate-45"
            }`}
          ></span>
          <span
            className={`mx-[3px] my-[5px] block h-[3px] w-[25px] bg-[#a1a1a1] transition-all duration-500 ease-in-out ${
              isActive && "opacity-0"
            }`}
          ></span>
          <span
            className={`mx-[3px] my-[5px] block h-[3px] w-[25px] bg-[#a1a1a1] transition-all duration-500 ease-in-out ${
              isActive && "-translate-y-[8px] -rotate-45"
            }`}
          ></span>
        </div>

        {/* right side links */}
        <div className="flex flex-row items-center justify-end">
          {rightLinks.map((link) => (
            <RightNavLinks
              key={uuidv4()}
              link={link.link}
              linkName={link.linkName}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
