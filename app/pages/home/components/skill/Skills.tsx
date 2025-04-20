import React from "react";
import { Typography, Collapse, Tag, Space } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined, TagsOutlined } from "@ant-design/icons";
import type { Skill } from "@/types/data";

const { Title, Text } = Typography;

interface SkillsProps {
  skills: Skill[]
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
      <Collapse
        defaultActiveKey="skills"
        className="bg-white w-full"
        expandIconPosition="end"
        expandIcon={({ isActive }) => (
          isActive ? <ArrowUpOutlined />: <ArrowDownOutlined /> 
        )}
        items={[{
          key: "skills",
          label: (
            <Title level={3} className="mb-6 !text-gray-800">
              <TagsOutlined className="mr-2 !text-blue-600" /> Skills
            </Title>
          ),
          children: (
            <Collapse
              defaultActiveKey={skills.map((_, index) => index.toString())}
              className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              expandIconPosition="end"
              expandIcon={({ isActive }) => (
                isActive ? <ArrowUpOutlined />: <ArrowDownOutlined /> 
              )}
              items={
                skills.map((skill, index) => ({
                  key: index.toString(),
                  label: (
                    <Text strong>{skill.name}</Text>
                  ),
                  children: (
                    <Space size={[8, 8]} wrap={true} className="py-2">
                      {skill.items.map((skill, skillIndex) => (
                        <Tag
                          key={skillIndex}
                          style={{textWrap: "wrap"}}
                          color="blue"
                          className="px-3 py-1 rounded-full hover:scale-105 transition-transform cursor-default"
                        >
                          {skill}
                        </Tag>
                      ))}
                  </Space>
                  ),
                }))
              }
            />
          )
        }]}
      />
  );
};

export default Skills;
