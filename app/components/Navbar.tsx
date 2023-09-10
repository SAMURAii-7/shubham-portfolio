"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import LeftNavLinks from "./LeftNavLinks";
import RightNavLinks from "./RightNavLinks";
import { v4 as uuidv4 } from "uuid";

type Props = {};

const Header = (props: Props) => {
    const leftLinks = [
        {
            link: "/",
            linkName: "home",
        },
        {
            link: "/projects",
            linkName: "projects",
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

    return (
        <nav className="flex flex-row justify-start items-center pt-[40px]">
            <div className="flex flex-row justify-between items-center w-full">
                {/* left side links */}
                <div className="flex flex-row justify-start items-center">
                    {leftLinks.map((link) => (
                        <LeftNavLinks
                            key={uuidv4()}
                            link={link.link}
                            linkName={link.linkName}
                        />
                    ))}
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
