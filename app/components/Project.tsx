import Link from "next/link";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

type Props = {
    name: string;
    description: string;
    link: string;
    github: string;
};

const Project = ({ name, description, link, github }: Props) => {
    return (
        <div className="flex flex-col justify-center items-start bg-[#262626] m-[8px] p-[10px] rounded-md hover:scale-105 transition-all w-full">
            <div className="flex flex-row justify-between items-center w-full">
                <h1 className="text-lg font-semibold">{name}</h1>
                <div className="flex flex-row justify-center items-center">
                    <Link
                        href={link}
                        target="_blank"
                        className={`${link.length === 0 && "hidden"} m-[8px]`}
                    >
                        <FaExternalLinkAlt />
                    </Link>
                    <Link href={github} target="_blank" className="m-[8px]">
                        <FaCode />
                    </Link>
                </div>
            </div>
            <p className="text-[#d4d4d4] text-sm">{description}</p>
        </div>
    );
};

export default Project;
