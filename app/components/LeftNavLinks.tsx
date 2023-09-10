"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    link: string;
    linkName: string;
};

const LeftNavLinks = ({ link, linkName }: Props) => {
    const isLinkActive = (path: string) => {
        return usePathname() === path;
    };

    return (
        <div className="m-[15px] ml-0">
            <Link
                href={link}
                className={`${
                    isLinkActive(link) ? "text-white" : "text-[#a1a1a1]"
                } hover:text-white text-[1rem] cursor-pointer`}
            >
                {linkName}
            </Link>
            <div
                className={`${
                    !isLinkActive(link) && "hidden"
                } h-[1.25px] bg-gradient-to-r from-[#313131] to-transparent transition-all duration-300`}
            ></div>
        </div>
    );
};

export default LeftNavLinks;
