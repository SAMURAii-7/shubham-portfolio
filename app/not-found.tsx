import Image from "next/image";
import Link from "next/link";
import pic from "@/assets/sad-cat.jpg";

type Props = {};

const NotFound = (props: Props) => {
    return (
        <div className="mt-[80px] flex flex-row justify-between items-center w-full">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-8xl text-white">404</h1>
                <p className="mt-[10px]">Page Not Found</p>
                <Link href="/" className="mt-[50px]">
                    <button className="bg-[#3f2ed5] p-[10px] rounded-[10px] w-[150px] hover:scale-105 duration-75">
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
    );
};

export default NotFound;
