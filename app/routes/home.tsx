import CV from "@pages/home/CV";
import json from "@public/data.json";
import { ConfigProvider } from "antd";

export function meta() {
  return [
    { title: "Professional CV - Phan Hoang Phuoc" },
    {
      name: "description",
      content:
        "Professional CV of Phan Hoang Phuoc - Fullstack and Devops Engineer",
    },
  ];
}

export default function Home() {
  return (
  <ConfigProvider theme={{ hashed: false }}>
    <CV data={json} />
  </ConfigProvider>
  );
}
