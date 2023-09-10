import Skill from "@/app/components/Skill";
import { v4 as uuidv4 } from "uuid";
import { skills } from "@/assets/skills";

type Props = {};

const Skills = (props: Props) => {
    return (
        <div className="mt-[50px]">
            <h1 className="text-[#d4d4d4] pl-[10px]">
                here are some of the technologies I&apos;ve worked with:
            </h1>
            <div className="grid grid-cols-3 max-md:flex flex-col justify-start items-center">
                {skills.map((skill) => (
                    <Skill
                        key={uuidv4()}
                        name={skill.name}
                        source={skill.source}
                        link={skill.link}
                        isDark={skill.isDark}
                    />
                ))}
            </div>
        </div>
    );
};

export default Skills;
