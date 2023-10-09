import { openSourceProjects } from "@/assets/openSourceProjects";
import { v4 as uuidv4 } from "uuid";
import OpenSourceProject from "./OpenSourceProject";

type Props = {};

const OpenSourceSection = (props: Props) => {
    return (
        <div className="mt-[25px]">
            <h1 className="text-lg font-semibold pl-[10px] max-md:text-center max-md:pl-0">
                My Open-Source Contributions
            </h1>
            <div className="grid grid-cols-2 justify-center items-center mt-[20px] max-md:flex max-md:flex-col">
                {openSourceProjects.map((p: any) => (
                    <OpenSourceProject
                        key={uuidv4()}
                        name={p.name}
                        description={p.description}
                        link={p.link}
                        icon={p.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default OpenSourceSection;
