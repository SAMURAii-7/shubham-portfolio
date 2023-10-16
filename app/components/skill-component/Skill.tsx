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
    <div className="m-[8px] flex flex-row items-center justify-between rounded-md bg-[#262626] p-[10px] transition-all hover:scale-105 max-md:w-[90px] max-md:flex-col">
      {isDark ? (
        <div className="rounded-full bg-white p-[5px]">
          <Image
            src={source}
            alt="react"
            width="40"
            height="40"
            quality={100}
            className="max-md:h-[30px] max-md:w-[30px]"
          />
        </div>
      ) : (
        <Image
          src={source}
          alt="react"
          width="40"
          height="40"
          quality={100}
          className="max-md:h-[30px] max-md:w-[30px]"
        />
      )}
      <Link
        href={link}
        target="_blank"
        className="transition-all hover:opacity-80"
      >
        <h1 className="text-center text-lg max-md:text-sm">{name}</h1>
      </Link>
    </div>
  );
};

export default Skill;
