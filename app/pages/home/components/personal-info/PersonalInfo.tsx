import React from "react";
import { Row, Typography, Space, Flex, Collapse } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  GithubOutlined,
  LinkedinOutlined,
  BookOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import {ArrowUpOutlined, ArrowDownOutlined, UserOutlined } from "@ant-design/icons";
import type { PersonalInfo as PersonalInfoType } from "@/types/data";
const { Title, Text, Link } = Typography;

interface PersonalInfoProps {
  personalInfo: PersonalInfoType
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ personalInfo }) => {
  return (
    <Collapse
      defaultActiveKey="personalInformation"
      className="bg-white w-full border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
      expandIconPosition="end"
      expandIcon={({ isActive }) => (
          isActive ? <ArrowUpOutlined />: <ArrowDownOutlined /> 
        )}
      items={[{
        key: "personalInformation",
        label:(
          <Title level={3} className="mb-6 !text-gray-800">
            <UserOutlined className="mr-2 !text-blue-600" />Personal Information
          </Title>),
        children: (
        <>
          <Row justify={"start"} wrap={true}>
            <Space className="hover:bg-indigo-800/30 dark:hover:bg-indigo-800/30 px-2 py-1 rounded transition-colors">
              <MailOutlined className="text-indigo-200 dark:text-indigo-200 text-lg" />
              <Link
                href={`mailto:${personalInfo.profile.email}`}
                className="text-white dark:text-gray-100 hover:text-indigo-200 dark:hover:text-indigo-200 transition-colors"
              >
                {personalInfo.profile.email}
              </Link>
            </Space>
          </Row>
          <Row justify={"start"} wrap={true}>
            <Space className="hover:bg-indigo-800/30 dark:hover:bg-indigo-900/40 px-2 py-1 rounded transition-colors">
              <PhoneOutlined className="text-indigo-200 dark:text-indigo-300 text-lg" />
              <Link
                href={`tel:${personalInfo.profile.phone}`}
                className="text-white dark:text-gray-200 hover:text-indigo-200 dark:hover:text-indigo-300 transition-colors"
              >
                {personalInfo.profile.phone}
              </Link>
            </Space>
          </Row>
          <Row justify={"start"} wrap={true}>
            <Space className="hover:bg-indigo-800/30 dark:hover:bg-indigo-900/40 px-2 py-1 rounded transition-colors">
              <EnvironmentOutlined className="text-indigo-200 dark:text-indigo-300 text-lg" />
              <Text className="text-white dark:text-gray-200">
                {personalInfo.profile.address}
              </Text>
            </Space>
          </Row>
          <Row justify={"start"} wrap={true}>
            <Flex gap="middle" align="center" wrap={true}>
              <Space className="hover:bg-indigo-800/30 dark:hover:bg-indigo-900/40 px-2 py-1 rounded transition-colors">
                <GithubOutlined className="text-indigo-200 dark:text-indigo-300 text-lg" />
                <Link
                  href={personalInfo.profile.github}
                  target="_blank"
                  className="text-white dark:text-gray-200 hover:text-indigo-200 dark:hover:text-indigo-300 transition-colors"
                >
                  GitHub
                </Link>
              </Space>
              <Space className="hover:bg-indigo-800/30 dark:hover:bg-indigo-900/40 px-2 py-1 rounded transition-colors">
                <GlobalOutlined className="text-indigo-200 dark:text-indigo-300 text-lg" />
                <Link
                  href={personalInfo.profile.gitlab}
                  target="_blank"
                  className="text-white dark:text-gray-200 hover:text-indigo-200 dark:hover:text-indigo-300 transition-colors"
                >
                  GitLab
                </Link>
              </Space>
              <Space className="hover:bg-indigo-800/30 dark:hover:bg-indigo-900/40 px-2 py-1 rounded transition-colors">
                <LinkedinOutlined className="text-indigo-200 dark:text-indigo-300 text-lg" />
                <Link
                  href={personalInfo.profile.linkedin}
                  target="_blank"
                  className="text-white dark:text-gray-200 hover:text-indigo-200 dark:hover:text-indigo-300 transition-colors"
                >
                  LinkedIn
                </Link>
              </Space>
              <Space className="hover:bg-indigo-800/30 dark:hover:bg-indigo-900/40 px-2 py-1 rounded transition-colors">
                <BookOutlined className="text-indigo-200 dark:text-indigo-300 text-lg" />
                <Link
                  href={personalInfo.profile.cv}
                  target="_blank"
                  className="text-white dark:text-gray-200 hover:text-indigo-200 dark:hover:text-indigo-300 transition-colors"
                >
                  CV
                </Link>
              </Space>
            </Flex>
          </Row>
        </>    
        )
      }]}
    />
  );
};

export default PersonalInfo;
