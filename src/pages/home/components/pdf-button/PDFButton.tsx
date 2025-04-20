import React from "react";
import { Button, Tooltip } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas-pro";

type PDFButtonProps = {
  cvContainerRef: React.RefObject<HTMLDivElement | null>
};

const PDFButton: React.FC<PDFButtonProps> = ({cvContainerRef}) => {
  const [loading, setLoading] = React.useState(false);
  

  const generatePDF = () => {
    if (!cvContainerRef?.current) {
      console.error("CV container element not found");
      return;
    }

    setLoading(true);

    const fileName = `Phan-Hoang-Phuoc-CV.pdf`;
    const pageWidth = 210;
    const pageHeight = 297;

    html2canvas(cvContainerRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgHeight = (canvas.height * pageWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
      do {
        pdf.addImage(imgData, "JPEG", 0, position, pageWidth, imgHeight);
        heightLeft -= pageHeight;
        position = heightLeft - imgHeight;
        if (heightLeft > 0) pdf.addPage();
      } while (heightLeft > 0);

      pdf.save(fileName);
    }).catch((error) => {
      console.error("Error generating PDF:", error);
    })
    .finally(() => {
      setLoading(false)
    })
  };

  return (
    <Tooltip title="Download as PDF">
      <Button
        type="primary"
        size="large"
        icon={<DownloadOutlined />}
        onClick={generatePDF}
        loading={loading}
        className="fixed top-5 right-5 z-50 shadow-lg bg-blue-600 hover:bg-blue-500 border-0 transition-all duration-300 hover:shadow-xl"
      >
        {loading ? "Generating..." : "Download PDF"}
      </Button>
    </Tooltip>
  );
};

export default PDFButton;
