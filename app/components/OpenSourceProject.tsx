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
            <div className="flex flex-col justify-center items-start bg-[#262626] m-[8px] p-[10px] rounded-md w-[300px] max-md:w-[250px]">
                <Image
                    src={icon}
                    width={150}
                    height={150}
                    alt="Project Icon"
                    quality={100}
                    className="rounded-[10px] self-center"
                />
                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="text-lg font-semibold">{name}</h1>
                    <div className="flex flex-row justify-center items-center"></div>
                </div>
                <p className="text-[#d4d4d4] text-sm">{description}</p>
            </div>
        </Link>
    );
};

export default Project;
