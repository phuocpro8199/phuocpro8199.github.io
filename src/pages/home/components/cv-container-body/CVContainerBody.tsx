import React from "react";
import { Col, Flex } from "antd";
import type { Data } from "@/types/data";
import PersonalInfo from "@pages/home/components/personal-info/PersonalInfo";
import Skills from "@pages/home/components/skill/Skills";
import Experience from "@pages/home/components/experience/Experience";
import Education from "@pages/home/components/education/Education";

interface CVContainerBodyProps {
  data: Data
}

const CVContainerBody: React.FC<CVContainerBodyProps> = ({ data: { personalInfo, skills, experience, education } }) => {
  return (
  <Flex className="bg-white" vertical={false} wrap={false}>
    <Col className="w-4/12">
      <PersonalInfo personalInfo={personalInfo} />
      <Skills skills={skills} />
    </Col>
    <Col className="w-8/12">
      <Experience experience={experience} />
      <Education education={education} />
    </Col>
  </Flex>
  );
};

export default CVContainerBody;
