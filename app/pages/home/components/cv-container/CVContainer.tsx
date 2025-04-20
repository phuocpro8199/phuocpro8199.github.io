import { forwardRef } from "react";
import type { Data } from "@/types/data";
import CVContainerHeader from "@pages/home/components/cv-container-header/CVContainerHeader";
import CVContainerBody from "@pages/home/components/cv-container-body/CVContainerBody";

interface CVContainerProps {
  data: Data;
}

const CVContainer = forwardRef<HTMLDivElement, CVContainerProps>(({ data }, ref) => {
  return (
    <div ref={ref} className = "cv-container max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <CVContainerHeader personalInfo={data.personalInfo} />
      <CVContainerBody data={data} />
    </div>
  );
});

export default CVContainer;
