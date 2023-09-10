import Image from "next/image";
import Link from "next/link";

type Props = {
    name: string;
    source: string;
    link: string;
    isDark: boolean;
};

const Skill = ({ name, source, link, isDark }: Props) => {
    return (
        <div className="flex flex-row justify-between items-center bg-[#262626] m-[8px] p-[10px] rounded-md hover:scale-105 transition-all max-md:w-[90px] max-md:flex-col">
            {isDark ? (
                <div className="bg-white rounded-full p-[5px]">
                    <Image
                        src={source}
                        alt="react"
                        width="40"
                        height="40"
                        quality={100}
                        className="max-md:w-[30px] h-[30px]"
                    />
                </div>
            ) : (
                <Image
                    src={source}
                    alt="react"
                    width="40"
                    height="40"
                    quality={100}
                    className="max-md:w-[30px] h-[30px]"
                />
            )}
            <Link
                href={link}
                target="_blank"
                className="hover:opacity-80 transition-all"
            >
                <h1 className="text-lg max-md:text-sm text-center">{name}</h1>
            </Link>
        </div>
    );
};

export default Skill;
