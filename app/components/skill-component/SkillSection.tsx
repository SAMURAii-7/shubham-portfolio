import Skill from "@/app/components/skill-component/Skill";
import { v4 as uuidv4 } from "uuid";
import { skills } from "@/assets/skills";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="mt-[50px] max-md:mt-[20px]">
      <h1 className="pl-[10px] text-[#d4d4d4] max-md:pl-0 max-md:text-center">
        here are some of the technologies I&apos;ve worked with:
      </h1>
      <div className="grid grid-cols-3">
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
