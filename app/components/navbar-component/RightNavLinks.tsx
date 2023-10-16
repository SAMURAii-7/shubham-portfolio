import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  link: string;
  linkName: JSX.Element;
};

const RightNavLinks = ({ link, linkName }: Props) => {
  const pathName = usePathname();

  const isLinkActive = (path: string) => {
    return pathName === path;
  };

  return (
    <div className="m-[10px]">
      <Link
        href={link}
        target="_blank"
        className={`${
          isLinkActive(link)
            ? "text-white max-md:text-[#a1a1a1]"
            : "text-[#a1a1a1]"
        } cursor-pointer text-[1.2rem] hover:text-white`}
      >
        {linkName}
      </Link>
    </div>
  );
};

export default RightNavLinks;
