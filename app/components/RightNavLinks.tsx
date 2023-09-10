"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    link: string;
    linkName: JSX.Element;
};

const RightNavLinks = ({ link, linkName }: Props) => {
    const isLinkActive = (path: string) => {
        return usePathname() === path;
    };

    return (
        <div className="m-[15px] ml-0">
            <Link
                href={link}
                target="_blank"
                className={`${
                    isLinkActive(link) ? "text-white" : "text-[#a1a1a1]"
                } hover:text-white text-[1rem] cursor-pointer`}
            >
                {linkName}
            </Link>
        </div>
    );
};

export default RightNavLinks;
