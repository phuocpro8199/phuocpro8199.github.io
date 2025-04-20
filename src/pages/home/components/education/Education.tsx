import React from "react";
import { Typography, Collapse, Card, Space, Flex } from "antd";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  BookOutlined,
  CalendarOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import type { Education as EducationType } from "@/types/data";

const { Title, Text } = Typography;

interface EducationProps {
  education: EducationType[]
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <Collapse
      defaultActiveKey="education"
      className="bg-white w-full"
      expandIconPosition="end"
      expandIcon={({ isActive }) => (
        isActive ? <ArrowUpOutlined />: <ArrowDownOutlined /> 
      )}
      items={[{
        key: "education",
        label: (
          <Title level={3} className="mb-6 !text-gray-800">
            <BookOutlined className="mr-2 !text-blue-600" />Education
          </Title>
        ),
        children: (
          <>
            {education.map((education, index) => (
            <Card
              key={index}
              className="shadow-sm hover:shadow-md transition-all duration-300 border-0"
            >
              <Title level={4} className="!m-0 !text-blue-700">
                {education.degree}
              </Title>

              <Flex wrap={true} gap={4} align="center" className="!text-gray-600 !mt-3">
                <Space className="hover:bg-blue-50 px-2 py-1 rounded transition-colors">
                  <BookOutlined className="!text-blue-500" />
                  <Text strong>{education.school}</Text>
                </Space>
                <Space className="hover:bg-blue-50 px-2 py-1 rounded transition-colors">
                  <CalendarOutlined className="!text-blue-500" />
                  <Text>{education.period}</Text>
                </Space>
                <Space className="hover:bg-blue-50 px-2 py-1 rounded transition-colors">
                  <TrophyOutlined className="!text-blue-500" />
                  <Text>GPA: {education.gpa}</Text>
                </Space>
              </Flex>
            </Card>))}
          </>
        )
      }]}
    />
  );
};

export default Education;
