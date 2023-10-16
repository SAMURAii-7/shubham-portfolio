import { openSourceProjects } from "@/assets/openSourceProjects";
import { v4 as uuidv4 } from "uuid";
import OpenSourceProject from "./OpenSourceProject";

type Props = {};

const OpenSourceSection = (props: Props) => {
  return (
    <div className="mt-[25px]">
      <h1 className="pl-[10px] text-lg font-semibold max-md:pl-0 max-md:text-center">
        My Open-Source Contributions
      </h1>
      <div className="mt-[20px] grid grid-cols-2 items-center justify-center max-md:flex max-md:flex-col">
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
