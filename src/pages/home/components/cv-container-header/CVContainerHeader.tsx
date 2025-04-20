import React from "react";
import { Typography, Col, Flex } from "antd";
import type { PersonalInfo } from "@/types/data";
const { Title, Text } = Typography;

interface CVContainerHeaderProps {
  personalInfo: PersonalInfo
}

const CVContainerHeader: React.FC<CVContainerHeaderProps> = ({ personalInfo }) => {
  return (
  <Flex className="cv-header !p-6 rounded" vertical={false} wrap={false} justify="center" align="center">
    <Col className="w-3/12">
      <img
        className="!w-full"
        src="/profile.jpg"
        alt="profile"
      />
    </Col>
    <Col className="w-9/12 flex justify-center">
      <Flex vertical={true} className="!w-10/12 !p-0 demo" align="center" justify="center">
        <Title className="!text-white" level={2}>{personalInfo.name}</Title>
        <Title className="!text-white" level={4}>{personalInfo.title}</Title>
        <Text className="!text-white">{personalInfo.description}</Text>
      </Flex>
    </Col>
  </Flex>
  );
};

export default CVContainerHeader;
