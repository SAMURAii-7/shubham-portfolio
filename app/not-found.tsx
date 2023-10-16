import Image from "next/image";
import Link from "next/link";
import pic from "@/assets/sad-cat.jpg";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <>
      <div className="mt-[80px] flex w-full flex-row items-center justify-between max-md:flex-col-reverse">
        <div className="flex flex-col items-center justify-center max-md:mt-[30px]">
          <h1 className="text-8xl text-white">404</h1>
          <p className="mt-[10px]">Page Not Found</p>
          <Link href="/" className="mt-[50px] max-md:mt-[30px]">
            <button className="w-[150px] rounded-[10px] bg-[#3f2ed5] p-[10px] duration-75 hover:scale-105">
              Go Back Home
            </button>
          </Link>
        </div>
        <Image
          src={pic}
          alt="404"
          width={400}
          height={200}
          quality={100}
          className="rounded-[50px]"
        />
      </div>
    </>
  );
};

export default NotFound;
