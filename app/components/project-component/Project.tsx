import Link from "next/link";
import { FaCode, FaLink } from "react-icons/fa";
import ProjectTechStack from "@/app/components/project-component/ProjectTechStack";
import ProjectGithub from "./ProjectGithub";

type Props = {
    name: string;
    description: string;
    link: string;
    github: string;
    tech: string[];
};

const Project = ({ name, description, link, github, tech }: Props) => {
    return (
        <div className="flex flex-col justify-center items-start bg-[#262626] m-[8px] p-[20px] rounded-md w-full outline outline-[1px] outline-[#a5a5a5]">
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
                </div>
            </div>
            <p className="text-[#d4d4d4] text-sm py-[5px]">{description}</p>
            <ProjectGithub github={github} name={name} />
            <ProjectTechStack tech={tech} />
        </div>
    );
};

export default Project;
