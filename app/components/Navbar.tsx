"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
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
            link: "/Shubham-Prasad.pdf",
            linkName: "resume",
        },
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
            linkName: <FaTwitter />,
        },
    ];

    const handleClick = () => {
        setIsActive(!isActive);
    };

    const handleLinkClick = () => {
        setIsActive(false);
    };

    return (
        <nav className="flex flex-row justify-start items-center pt-[40px]">
            <div className="flex flex-row justify-between items-center w-full max-md:w-full">
                {/* left side links */}
                <div
                    className={`flex flex-row justify-start items-center max-md:fixed max-md:left-[-100%] max-md:top-[5rem] max-md:flex-col max-md:w-[300px] max-md:text-center max-md:h-[200px] max-md:border max-md:border-white max-md:justify-center max-md:rounded-[10px] max-md:bg-[#111010] ${
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
                        className={`block w-[25px] h-[3px] my-[5px] mx-[3px] transition-all duration-500 ease-in-out bg-[#a1a1a1] ${
                            isActive && "translate-y-[8px] rotate-45"
                        }`}
                    ></span>
                    <span
                        className={`block w-[25px] h-[3px] my-[5px] mx-[3px] transition-all duration-500 ease-in-out bg-[#a1a1a1] ${
                            isActive && "opacity-0"
                        }`}
                    ></span>
                    <span
                        className={`block w-[25px] h-[3px] my-[5px] mx-[3px] transition-all duration-500 ease-in-out bg-[#a1a1a1] ${
                            isActive && "-translate-y-[8px] -rotate-45"
                        }`}
                    ></span>
                </div>

                {/* right side links */}
                <div className="flex flex-row justify-end items-center">
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
