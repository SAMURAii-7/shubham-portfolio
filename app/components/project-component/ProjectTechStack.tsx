import React from "react";
import Image from "next/image";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiPrisma,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiSpringboot,
  SiFlask,
  SiMysql,
} from "react-icons/si";
import PyLogo from "@/assets/python.svg";
import JavaLogo from "@/assets/java.svg";
import NextJsLogo from "@/assets/nextjs.svg";

type Props = {
  tech: string[];
};

// Create a mapping of technology names to their corresponding icons/images
const techIcons: Record<string, React.ReactNode> = {
  React: <FaReact className="m-1 text-lg text-[#61dafb]" />,
  "Next.js": (
    <Image src={NextJsLogo} alt="nextjs-icon" width={20} height={20} />
  ),
  TypeScript: (
    <SiTypescript className="m-1 rounded-sm bg-white text-lg text-[#007acc]" />
  ),
  "Tailwind CSS": <SiTailwindcss className="m-1 text-lg text-[#06b6d4]" />,
  Prisma: <SiPrisma className="m-1 text-lg text-[#d4d4d4]" />,
  "Node.js": <FaNodeJs className="m-1 text-lg text-[#3c873a]" />,
  "Express.js": <SiExpress className="m-1 text-lg" />,
  PostgreSQL: <SiPostgresql className="m-1 text-lg text-[#d4d4d4]" />,
  MongoDB: <SiMongodb className="m-1 text-lg text-[#3fa037]" />,
  "Spring Boot": <SiSpringboot className="m-1 text-lg text-[#6db33f]" />,
  Python: <Image src={PyLogo} alt="python-icon" width={35} height={35} />,
  Flask: <SiFlask className="m-1 text-lg" />,
  Java: <Image src={JavaLogo} alt="java-icon" width={35} height={35} />,
  MySQL: <SiMysql className="m-1 text-3xl text-[#00758f]" />,
};

const ProjectTechStack = ({ tech }: Props) => {
  return (
    <div className="flex flex-row items-center pt-2">
      {tech.map((t) => (
        <div
          key={t}
          className="m-1 flex flex-row items-center justify-center rounded-3xl bg-[#3d3d3d] p-1"
        >
          {techIcons[t]}
          <div className={"hidden p-1 text-xs lg:block"}>{t}</div>
        </div>
      ))}
    </div>
  );
};

export default ProjectTechStack;
