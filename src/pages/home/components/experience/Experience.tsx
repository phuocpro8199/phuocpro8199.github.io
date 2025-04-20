import React from "react";
import { Typography, Timeline, Collapse, Tag, Space, Flex } from "antd";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  BranchesOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import type { Experience as ExperienceType } from "@/types/data";

const { Title, Text } = Typography;

interface ExperienceProps {
  experience: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <Collapse
      defaultActiveKey="experience"
      className="bg-white w-full"
      expandIconPosition="end"
      expandIcon={({ isActive }) => (
        isActive ? <ArrowUpOutlined />: <ArrowDownOutlined /> 
      )}
      items={[{
        key: "experience",
        label: (
          <Title level={3} className="mb-6 !text-gray-800">
            <BranchesOutlined className="mr-2 !text-blue-600" />Work Experience
          </Title>
        ),
        children: (
          <Timeline items={experience.map((job, jobIndex) => (
            {
              key: jobIndex,
              className: "!pb-8 last:!pb-0",
              children: (
                <Collapse
                  defaultActiveKey={`experience-${jobIndex}`}
                  className="bg-white w-full"
                  expandIconPosition="end"
                  expandIcon={({ isActive }) => (
                    isActive ? <ArrowUpOutlined />: <ArrowDownOutlined /> 
                  )}
                  items={[
                    {
                      key: `experience-${jobIndex}`,
                      label: (
                        <Title level={3} className="mb-0 !text-blue-700">
                          {job.name}
                        </Title>
                      ),
                      children: (
                        <>
                          <Flex gap={4} className="!text-gray-600 mt-2" align={"center"} wrap={true}>
                            <Space className="hover:bg-blue-50 px-2 py-1 rounded transition-colors">
                              <EnvironmentOutlined className="!text-blue-500" />
                              <Text strong>{job.company}</Text>
                            </Space>
                            <Space className="hover:bg-blue-50 px-2 py-1 rounded transition-colors">
                              <CalendarOutlined className="!text-blue-500" />
                              <Text>{job.period}</Text>
                            </Space>
                          </Flex>
                          <Collapse
                            defaultActiveKey={job.details.map((_detail, index) => `experience-${jobIndex}-${index}`)}
                            className="bg-white"
                            expandIconPosition="end"
                            expandIcon={({ isActive }) => (
                              isActive ? <ArrowUpOutlined />: <ArrowDownOutlined /> 
                            )}
                            items={job.details.map((detail, detailIndex) => ({
                              key: `experience-${jobIndex}-${detailIndex}`,
                              label: (
                                <Text strong className="!text-blue-800 !text-base">
                                  {detail.name}
                                </Text>
                              ),
                              className: "mb-3 border border-gray-200 rounded-lg hover:border-blue-200 transition-colors",
                              children: (
                              <>
                                <ul className="list-disc pl-5 mb-4 space-y-2 !text-gray-700">
                                  {detail.tasks.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                  ))}
                                </ul>

                                <div className="bg-blue-50/50 p-4 rounded-lg border-l-4 border-blue-400">
                                  <Text strong className="!text-blue-800">
                                    <ToolOutlined className="mr-2" /> Technologies Used
                                  </Text>
                                  <Space className="mt-3" size={[8, 8]} wrap>
                                    {detail.tools.length === 1
                                      ? detail.tools[0].split(/,\s*/).map((tool, i) => (
                                          <Tag
                                            key={i}
                                            color="blue"
                                            className="px-3 py-1 rounded-full hover:scale-105 transition-transform"
                                          >
                                            {tool.trim()}
                                          </Tag>
                                        ))
                                      : detail.tools.map((tool, toolIndex) => (
                                          <Tag
                                            key={toolIndex}
                                            color="blue"
                                            className="px-3 py-1 rounded-full hover:scale-105 transition-transform"
                                          >
                                            {tool}
                                          </Tag>
                                        ))}
                                  </Space>
                                </div>
                              </>
                            )}
                            ))}
                          /> 
                        </>
                      )
                    }
                  ]}
                />
              )
            }))
          }
          />  
        )
      }]}
    />
  );
};

export default Experience;
