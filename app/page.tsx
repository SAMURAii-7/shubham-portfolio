import Image from "next/image";
import SkillSection from "@/app/components/SkillSection";
import Link from "next/link";
import MyPic from "@/assets/shubh.jpeg";

export default function Home() {
    return (
        <main className="mt-[50px]">
            <div className="flex flex-row justify-start items-center">
                <div>
                    <h1 className="text-2xl font-semibold">
                        hey, I'm shubham{" "}
                        <Link href="/spotify-playlist">👋</Link>
                    </h1>
                    <p className="text-[#d4d4d4] text-[1.05rem] mt-[40px] mr-[50px]">
                        I'm a{" "}
                        <Link href="/key-to-success">software engineer</Link>{" "}
                        who thrives on crafting robust full-stack applications
                        and I continuously seek to expand my skill set by
                        eagerly embracing emerging technologies.
                    </p>
                </div>
                <div>
                    <Image
                        src={MyPic}
                        width={600}
                        height={600}
                        alt="Shubham's Picture"
                        quality={100}
                        blurDataURL="LUJj;#uO?tRPu6PAs:V?}oNbRkjb"
                        placeholder="blur"
                        className="rounded-full"
                    />
                </div>
            </div>
            <SkillSection />
        </main>
    );
}
