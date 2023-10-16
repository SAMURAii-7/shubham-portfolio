import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type Props = {
  name: string;
  description: string;
  link: string;
  icon: StaticImageData;
};

const Project = ({ name, description, link, icon }: Props) => {
  return (
    <Link href={link} target="_blank" className="m-[8px]">
      <div className="m-[8px] flex w-[300px] flex-col items-start justify-center rounded-md bg-[#262626] p-[10px] max-md:w-[250px]">
        <Image
          src={icon}
          width={150}
          height={150}
          alt="Project Icon"
          quality={100}
          className="self-center rounded-[10px]"
        />
        <div className="flex w-full flex-row items-center justify-between">
          <h1 className="text-lg font-semibold">{name}</h1>
          <div className="flex flex-row items-center justify-center"></div>
        </div>
        <p className="text-sm text-[#d4d4d4]">{description}</p>
      </div>
    </Link>
  );
};

export default Project;
