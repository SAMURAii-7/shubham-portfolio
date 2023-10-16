import Image from "next/image";
import SkillSection from "@/app/components/skill-component/SkillSection";
import Link from "next/link";
import MyPic from "@/assets/shubh.jpeg";

export default function Home() {
  return (
    <main className="mt-[50px]">
      <div className="flex flex-row items-center justify-start max-md:hidden">
        <div>
          <h1 className="pl-[8px] text-2xl font-semibold">
            hey, I&apos;m shubham <Link href="/spotify-playlist">👋</Link>
          </h1>
          <p className="mr-[50px] mt-[40px] pl-[8px] text-[1.05rem] text-[#d4d4d4]">
            I&apos;m a software engineer who thrives on crafting robust
            full-stack applications and I continuously seek to expand my skill
            set by eagerly embracing emerging technologies.
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

      <div className="hidden flex-col items-center justify-center max-md:flex">
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
        <h1 className="mt-[50px] text-2xl font-semibold">
          hey, I&apos;m shubham <Link href="/spotify-playlist">👋</Link>
        </h1>
        <p className="mt-[40px] text-center text-[1.05rem] text-[#d4d4d4]">
          I&apos;m a software engineer who thrives on crafting robust full-stack
          applications and I continuously seek to expand my skill set by eagerly
          embracing emerging technologies.
        </p>
      </div>
      <SkillSection />
    </main>
  );
}
