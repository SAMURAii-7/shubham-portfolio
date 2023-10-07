import Project from "./Project";
import { v4 as uuidv4 } from "uuid";
import { projects } from "@/assets/projects";
import Link from "next/link";

type Props = {};

const ProjectSection = (props: Props) => {
    return (
        <div className="mt-[25px]">
            <h1 className="text-lg font-semibold pl-[10px] max-md:text-center max-md:pl-0 max-md:text-base">
                check out some of my projects here and many more on my{" "}
                <Link
                    className="underline"
                    href="https://github.com/SAMURAii-7?tab=repositories"
                    target="_blank"
                >
                    github
                </Link>
            </h1>
            <div className="flex flex-col justify-center items-center mt-[20px]">
                {projects.map((project) => (
                    <Project
                        key={uuidv4()}
                        name={project.name}
                        description={project.description}
                        link={project.link}
                        github={project.github}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectSection;
