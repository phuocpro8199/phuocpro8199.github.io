import React from "react";
import PDFButton from "@pages/home/components/pdf-button/PDFButton";
import { Flex } from "antd";

type CVHelperProps = {
  cvContainerRef: React.RefObject<HTMLDivElement | null>
};

const CVHelper: React.FC<CVHelperProps> = ({cvContainerRef}) => {
  return (
    <Flex className="fixed top-6 right-6 rounded z-50" justify="center" align="center" gap={4}>
      <PDFButton cvContainerRef={cvContainerRef}/>
    </Flex>
  );
};

export default CVHelper;
