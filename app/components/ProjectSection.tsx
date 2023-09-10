import Project from "./Project";
import { v4 as uuidv4 } from "uuid";
import { projects } from "@/assets/projects";

type Props = {};

const ProjectSection = (props: Props) => {
    return (
        <div className="mt-[30px]">
            <h1 className="text-xl font-semibold pl-[10px] max-md:text-center pl-0">
                check out some of my projects here and many more on my github!
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
