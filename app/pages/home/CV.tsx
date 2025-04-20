import React, { useRef } from "react";
import CVHelper from "@pages/home/components/cv-helper/CVHelper";
import CVContainer from "@pages/home/components/cv-container/CVContainer";
import type { Data } from '@/types/data';
interface CVProps {
  data: Data;
}

const CV: React.FC<CVProps> = ({ data }) => {
  const cvContainerRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <CVHelper cvContainerRef={cvContainerRef} />
      <CVContainer data={data} ref={cvContainerRef} />
    </>
  );
};

export default CV;
