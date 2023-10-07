import Link from "next/link";
import { FaLink, FaCode } from "react-icons/fa";

type Props = {
    name: string;
    description: string;
    link: string;
    github: string;
};

const Project = ({ name, description, link, github }: Props) => {
    return (
        <div className="flex flex-col justify-center items-start bg-[#262626] m-[8px] p-[20px] rounded-md hover:scale-105 transition-all w-full outline outline-[1px] outline-[#a5a5a5]">
            <div className="flex flex-row items-center w-full max-md:justify-between">
                <h1 className="text-lg font-semibold max-md:text-base">
                    {name}
                </h1>
                <div className="flex flex-row justify-center items-center">
                    <Link
                        href={link}
                        target="_blank"
                        className={`${link.length === 0 && "hidden"} m-[5px]`}
                    >
                        <FaLink className="text-sm text-[#a1a1a1] hover:text-white" />
                    </Link>
                    <Link href={github} target="_blank" className="m-[5px]">
                        <FaCode className="text-[#a1a1a1] hover:text-white" />
                    </Link>
                </div>
            </div>
            <p className="text-[#d4d4d4] text-sm py-[5px]">{description}</p>
        </div>
    );
};

export default Project;
