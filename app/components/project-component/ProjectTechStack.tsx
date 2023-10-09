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
    react: <FaReact className="text-[#61dafb] text-lg m-[5px]" />,
    node: <FaNodeJs className="text-[#3c873a] text-lg m-[5px]" />,
    express: <SiExpress className="text-lg m-[5px]" />,
    mongodb: <SiMongodb className="text-[#3fa037] text-lg m-[5px]" />,
    springboot: <SiSpringboot className="text-[#6db33f] text-lg m-[5px]" />,
    python: <Image src={PyLogo} alt="python-icon" width={35} height={35} />,
    flask: <SiFlask className="text-lg m-[5px]" />,
    java: <Image src={JavaLogo} alt="java-icon" width={35} height={35} />,
    mysql: <SiMysql className="text-[#00758f] text-3xl m-[5px]" />,
    javafx: <span className="text-[#d4d4d4] text-xs m-[5px]">JavaFx</span>,
};

const ProjectTechStack = ({ tech }: Props) => {
    return (
        <div className="flex flex-row items-center pt-[5px]">
            {tech.map((t) => techIcons[t])}
        </div>
    );
};

export default ProjectTechStack;
