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
    <div className="m-[8px] flex w-full flex-col items-start justify-center rounded-md bg-[#262626] p-[20px] outline outline-[1px] outline-[#a5a5a5]">
      <div className="flex w-full flex-row items-center max-md:justify-between">
        <h1 className="text-lg font-semibold max-md:text-base">{name}</h1>
        <div className="flex flex-row items-center justify-center">
          <Link
            href={link}
            target="_blank"
            className={`${link.length === 0 && "hidden"} m-[5px]`}
          >
            <FaLink className="text-sm text-[#a1a1a1] hover:text-white" />
          </Link>
        </div>
      </div>
      <p className="py-[5px] text-sm text-[#d4d4d4]">{description}</p>
      <ProjectGithub github={github} name={name} />
      <ProjectTechStack tech={tech} />
    </div>
  );
};

export default Project;
