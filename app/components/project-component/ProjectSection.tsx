import Project from "./Project";
import { v4 as uuidv4 } from "uuid";
import { projects } from "@/assets/projects";
import Link from "next/link";

type Props = {};

const ProjectSection = (props: Props) => {
  return (
    <div className="mt-[25px]">
      <div className="mt-[20px] flex flex-col items-center justify-center">
        {projects.map((project) => (
          <Project
            key={uuidv4()}
            name={project.name}
            description={project.description}
            link={project.link}
            github={project.github}
            tech={project.tech}
          />
        ))}
      </div>
      <h1 className="my-[12px] pl-[10px] text-center text-lg font-semibold max-md:pl-0 max-md:text-base">
        ...and many more on my{" "}
        <Link
          className="underline"
          href="https://github.com/SAMURAii-7?tab=repositories"
          target="_blank"
        >
          github
        </Link>
      </h1>
    </div>
  );
};

export default ProjectSection;
