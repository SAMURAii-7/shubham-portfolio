import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  link: string;
  linkName: string;
  handleLinkClick: () => void;
};

const LeftNavLinks = ({ link, linkName, handleLinkClick }: Props) => {
  const pathName = usePathname();

  const isLinkActive = (path: string) => {
    return pathName === path;
  };

  return (
    <div className="m-[10px]">
      <Link
        href={link}
        target={linkName === "resume" ? "_blank" : "_self"}
        className={`${
          isLinkActive(link)
            ? "text-white max-md:text-[#a1a1a1]"
            : "text-[#a1a1a1]"
        } cursor-pointer text-[1rem] hover:text-white`}
        onClick={handleLinkClick}
      >
        {linkName}
      </Link>
      <div
        className={`${
          !isLinkActive(link) && "hidden"
        } h-[1.25px] bg-gradient-to-r from-[#313131] to-transparent transition-all duration-300`}
      ></div>
    </div>
  );
};

export default LeftNavLinks;
