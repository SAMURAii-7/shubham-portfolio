import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

type Props = {
  github: string;
  name: string;
};

const ProjectGithub = ({ github, name }: Props) => {
  return (
    <Link href={github} target="_blank">
      <div className="flex flex-row items-center rounded-[50px] bg-[#3d3d3d] p-[10px]">
        <FaGithub className="my-[2px] ml-[2px] mr-[5px]" />
        <p className="text-xs">{" / " + github.slice(30)}</p>
      </div>
    </Link>
  );
};

export default ProjectGithub;
