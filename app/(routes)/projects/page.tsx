import ProjectSection from "@/app/components/project-component/ProjectSection";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Projects | Shubham Prasad",
};

const ProjectsPage = (props: Props) => {
  return (
    <div>
      <ProjectSection />
    </div>
  );
};

export default ProjectsPage;
