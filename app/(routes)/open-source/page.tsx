import OpenSourceSection from "@/app/components/opensource-component/OpenSourceSection";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Open Source | Shubham Prasad",
};

const OpenSourcePage = (props: Props) => {
  return (
    <div>
      <OpenSourceSection />
    </div>
  );
};

export default OpenSourcePage;
