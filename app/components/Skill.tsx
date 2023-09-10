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
        <div className="flex flex-row justify-between items-center bg-[#262626] m-[8px] p-[10px] rounded-md hover:scale-105 transition-all">
            {isDark ? (
                <div className="bg-white rounded-full p-[5px]">
                    <Image
                        src={source}
                        alt="react"
                        width="40"
                        height="40"
                        quality={100}
                    />
                </div>
            ) : (
                <Image
                    src={source}
                    alt="react"
                    width="40"
                    height="40"
                    quality={100}
                />
            )}
            <Link
                href={link}
                target="_blank"
                className="hover:opacity-80 transition-all"
            >
                <h1 className="text-lg font-semibold">{name}</h1>
            </Link>
        </div>
    );
};

export default Skill;
