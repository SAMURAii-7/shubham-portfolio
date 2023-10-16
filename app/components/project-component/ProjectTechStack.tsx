import React from "react";
import Image from "next/image";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiSpringboot,
  SiFlask,
  SiMysql,
} from "react-icons/si";
import PyLogo from "@/assets/python.svg";
import JavaLogo from "@/assets/java.svg";

type Props = {
  tech: string[];
};

// Create a mapping of technology names to their corresponding icons/images
const techIcons: Record<string, React.ReactNode> = {
  react: <FaReact className="m-[5px] text-lg text-[#61dafb]" />,
  node: <FaNodeJs className="m-[5px] text-lg text-[#3c873a]" />,
  express: <SiExpress className="m-[5px] text-lg" />,
  mongodb: <SiMongodb className="m-[5px] text-lg text-[#3fa037]" />,
  springboot: <SiSpringboot className="m-[5px] text-lg text-[#6db33f]" />,
  python: <Image src={PyLogo} alt="python-icon" width={35} height={35} />,
  flask: <SiFlask className="m-[5px] text-lg" />,
  java: <Image src={JavaLogo} alt="java-icon" width={35} height={35} />,
  mysql: <SiMysql className="m-[5px] text-3xl text-[#00758f]" />,
  javafx: <span className="m-[5px] text-xs text-[#d4d4d4]">JavaFx</span>,
};

const ProjectTechStack = ({ tech }: Props) => {
  return (
    <div className="flex flex-row items-center pt-[5px]">
      {tech.map((t) => techIcons[t])}
    </div>
  );
};

export default ProjectTechStack;
