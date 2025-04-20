import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import React, { createElement, forwardRef, useRef } from "react";
import { Tooltip, Button, Flex, Typography, Col, Collapse, Row, Space, Tag, Timeline, Card, ConfigProvider } from "antd";
import { DownloadOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined, GithubOutlined, GlobalOutlined, LinkedinOutlined, BookOutlined, UserOutlined, ArrowUpOutlined, ArrowDownOutlined, TagsOutlined, CalendarOutlined, ToolOutlined, BranchesOutlined, TrophyOutlined } from "@ant-design/icons";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas-pro";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const links = () => [
  // Preload critical CSS - highest priority
  {
    rel: "preload",
    href: "/app/app.css",
    as: "style",
    fetchpriority: "high"
  },
  {
    rel: "stylesheet",
    href: "/app/app.css"
  },
  // Font loading - lower priority
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
    media: "print",
    onLoad: "this.media='all'"
  }
];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const PDFButton = ({ cvContainerRef }) => {
  const [loading, setLoading] = React.useState(false);
  const generatePDF = () => {
    if (!(cvContainerRef == null ? void 0 : cvContainerRef.current)) {
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
        format: "a4"
      });
      const imgHeight = canvas.height * pageWidth / canvas.width;
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
    }).finally(() => {
      setLoading(false);
    });
  };
  return /* @__PURE__ */ jsx(Tooltip, { title: "Download as PDF", children: /* @__PURE__ */ jsx(
    Button,
    {
      type: "primary",
      size: "large",
      icon: /* @__PURE__ */ jsx(DownloadOutlined, {}),
      onClick: generatePDF,
      loading,
      className: "fixed top-5 right-5 z-50 shadow-lg bg-blue-600 hover:bg-blue-500 border-0 transition-all duration-300 hover:shadow-xl",
      children: loading ? "Generating..." : "Download PDF"
    }
  ) });
};
const CVHelper = ({ cvContainerRef }) => {
  return /* @__PURE__ */ jsx(Flex, { className: "fixed top-6 right-6 rounded z-50", justify: "center", align: "center", gap: 4, children: /* @__PURE__ */ jsx(PDFButton, { cvContainerRef }) });
};
const { Title: Title$4, Text: Text$4 } = Typography;
const CVContainerHeader = ({ personalInfo: personalInfo2 }) => {
  return /* @__PURE__ */ jsxs(Flex, { className: "cv-header !p-6 rounded", vertical: false, wrap: false, justify: "center", align: "center", children: [
    /* @__PURE__ */ jsx(Col, { className: "w-3/12", children: /* @__PURE__ */ jsx(
      "img",
      {
        className: "!w-full",
        src: "/profile.jpg",
        alt: "profile"
      }
    ) }),
    /* @__PURE__ */ jsx(Col, { className: "w-9/12 flex justify-center", children: /* @__PURE__ */ jsxs(Flex, { vertical: true, className: "!w-10/12 !p-0 demo", align: "center", justify: "center", children: [
      /* @__PURE__ */ jsx(Title$4, { className: "!text-white", level: 2, children: personalInfo2.name }),
      /* @__PURE__ */ jsx(Title$4, { className: "!text-white", level: 4, children: personalInfo2.title }),
      /* @__PURE__ */ jsx(Text$4, { className: "!text-white", children: personalInfo2.description })
    ] }) })
  ] });
};
const { Title: Title$3, Text: Text$3, Link } = Typography;
const PersonalInfo = ({ personalInfo: personalInfo2 }) => {
  return /* @__PURE__ */ jsx(
    Collapse,
    {
      defaultActiveKey: "personalInformation",
      className: "bg-white w-full border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow",
      expandIconPosition: "end",
      expandIcon: ({ isActive }) => isActive ? /* @__PURE__ */ jsx(ArrowUpOutlined, {}) : /* @__PURE__ */ jsx(ArrowDownOutlined, {}),
      items: [{
        key: "personalInformation",
        label: /* @__PURE__ */ jsxs(Title$3, { level: 3, className: "mb-6 !text-gray-800", children: [
          /* @__PURE__ */ jsx(UserOutlined, { className: "mr-2 !text-blue-600" }),
          "Personal Information"
        ] }),
        children: /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Row, { justify: "start", wrap: true, children: /* @__PURE__ */ jsxs(Space, { className: "hover:bg-indigo-800/30 dark:hover:bg-indigo-800/30 px-2 py-1 rounded transition-colors", children: [
            /* @__PURE__ */ jsx(MailOutlined, { className: "text-indigo-200 dark:text-indigo-200 text-lg" }),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: `mailto:${personalInfo2.profile.email}`,
                className: "text-white dark:text-gray-100 hover:text-indigo-200 dark:hover:text-indigo-200 transition-colors",
                children: personalInfo2.profile.email
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx(Row, { justify: "start", wrap: true, children: /* @__PURE__ */ jsxs(Space, { className: "hover:bg-indigo-800/30 dark:hover:bg-indigo-900/40 px-2 py-1 rounded transition-colors", children: [
            /* @__PURE__ */ jsx(PhoneOutlined, { className: "text-indigo-200 dark:text-indigo-300 text-lg" }),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: `tel:${personalInfo2.profile.phone}`,
                className: "text-white dark:text-gray-200 hover:text-indigo-200 dark:hover:text-indigo-300 transition-colors",
                children: personalInfo2.profile.phone
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx(Row, { justify: "start", wrap: true, children: /* @__PURE__ */ jsxs(Space, { className: "hover:bg-indigo-800/30 dark:hover:bg-indigo-900/40 px-2 py-1 rounded transition-colors", children: [
            /* @__PURE__ */ jsx(EnvironmentOutlined, { className: "text-indigo-200 dark:text-indigo-300 text-lg" }),
            /* @__PURE__ */ jsx(Text$3, { className: "text-white dark:text-gray-200", children: personalInfo2.profile.address })
          ] }) }),
          /* @__PURE__ */ jsx(Row, { justify: "start", wrap: true, children: /* @__PURE__ */ jsxs(Flex, { gap: "middle", align: "center", wrap: true, children: [
            /* @__PURE__ */ jsxs(Space, { className: "hover:bg-indigo-800/30 dark:hover:bg-indigo-900/40 px-2 py-1 rounded transition-colors", children: [
              /* @__PURE__ */ jsx(GithubOutlined, { className: "text-indigo-200 dark:text-indigo-300 text-lg" }),
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: personalInfo2.profile.github,
                  target: "_blank",
                  className: "text-white dark:text-gray-200 hover:text-indigo-200 dark:hover:text-indigo-300 transition-colors",
                  children: "GitHub"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(Space, { className: "hover:bg-indigo-800/30 dark:hover:bg-indigo-900/40 px-2 py-1 rounded transition-colors", children: [
              /* @__PURE__ */ jsx(GlobalOutlined, { className: "text-indigo-200 dark:text-indigo-300 text-lg" }),
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: personalInfo2.profile.gitlab,
                  target: "_blank",
                  className: "text-white dark:text-gray-200 hover:text-indigo-200 dark:hover:text-indigo-300 transition-colors",
                  children: "GitLab"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(Space, { className: "hover:bg-indigo-800/30 dark:hover:bg-indigo-900/40 px-2 py-1 rounded transition-colors", children: [
              /* @__PURE__ */ jsx(LinkedinOutlined, { className: "text-indigo-200 dark:text-indigo-300 text-lg" }),
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: personalInfo2.profile.linkedin,
                  target: "_blank",
                  className: "text-white dark:text-gray-200 hover:text-indigo-200 dark:hover:text-indigo-300 transition-colors",
                  children: "LinkedIn"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(Space, { className: "hover:bg-indigo-800/30 dark:hover:bg-indigo-900/40 px-2 py-1 rounded transition-colors", children: [
              /* @__PURE__ */ jsx(BookOutlined, { className: "text-indigo-200 dark:text-indigo-300 text-lg" }),
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: personalInfo2.profile.cv,
                  target: "_blank",
                  className: "text-white dark:text-gray-200 hover:text-indigo-200 dark:hover:text-indigo-300 transition-colors",
                  children: "CV"
                }
              )
            ] })
          ] }) })
        ] })
      }]
    }
  );
};
const { Title: Title$2, Text: Text$2 } = Typography;
const Skills = ({ skills: skills2 }) => {
  return /* @__PURE__ */ jsx(
    Collapse,
    {
      defaultActiveKey: "skills",
      className: "bg-white w-full",
      expandIconPosition: "end",
      expandIcon: ({ isActive }) => isActive ? /* @__PURE__ */ jsx(ArrowUpOutlined, {}) : /* @__PURE__ */ jsx(ArrowDownOutlined, {}),
      items: [{
        key: "skills",
        label: /* @__PURE__ */ jsxs(Title$2, { level: 3, className: "mb-6 !text-gray-800", children: [
          /* @__PURE__ */ jsx(TagsOutlined, { className: "mr-2 !text-blue-600" }),
          " Skills"
        ] }),
        children: /* @__PURE__ */ jsx(
          Collapse,
          {
            defaultActiveKey: skills2.map((_, index) => index.toString()),
            className: "bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow",
            expandIconPosition: "end",
            expandIcon: ({ isActive }) => isActive ? /* @__PURE__ */ jsx(ArrowUpOutlined, {}) : /* @__PURE__ */ jsx(ArrowDownOutlined, {}),
            items: skills2.map((skill, index) => ({
              key: index.toString(),
              label: /* @__PURE__ */ jsx(Text$2, { strong: true, children: skill.name }),
              children: /* @__PURE__ */ jsx(Space, { size: [8, 8], wrap: true, className: "py-2", children: skill.items.map((skill2, skillIndex) => /* @__PURE__ */ jsx(
                Tag,
                {
                  style: { textWrap: "wrap" },
                  color: "blue",
                  className: "px-3 py-1 rounded-full hover:scale-105 transition-transform cursor-default",
                  children: skill2
                },
                skillIndex
              )) })
            }))
          }
        )
      }]
    }
  );
};
const { Title: Title$1, Text: Text$1 } = Typography;
const Experience = ({ experience: experience2 }) => {
  return /* @__PURE__ */ jsx(
    Collapse,
    {
      defaultActiveKey: "experience",
      className: "bg-white w-full",
      expandIconPosition: "end",
      expandIcon: ({ isActive }) => isActive ? /* @__PURE__ */ jsx(ArrowUpOutlined, {}) : /* @__PURE__ */ jsx(ArrowDownOutlined, {}),
      items: [{
        key: "experience",
        label: /* @__PURE__ */ jsxs(Title$1, { level: 3, className: "mb-6 !text-gray-800", children: [
          /* @__PURE__ */ jsx(BranchesOutlined, { className: "mr-2 !text-blue-600" }),
          "Work Experience"
        ] }),
        children: /* @__PURE__ */ jsx(
          Timeline,
          {
            items: experience2.map((job, jobIndex) => ({
              key: jobIndex,
              className: "!pb-8 last:!pb-0",
              children: /* @__PURE__ */ jsx(
                Collapse,
                {
                  defaultActiveKey: `experience-${jobIndex}`,
                  className: "bg-white w-full",
                  expandIconPosition: "end",
                  expandIcon: ({ isActive }) => isActive ? /* @__PURE__ */ jsx(ArrowUpOutlined, {}) : /* @__PURE__ */ jsx(ArrowDownOutlined, {}),
                  items: [
                    {
                      key: `experience-${jobIndex}`,
                      label: /* @__PURE__ */ jsx(Title$1, { level: 3, className: "mb-0 !text-blue-700", children: job.name }),
                      children: /* @__PURE__ */ jsxs(Fragment, { children: [
                        /* @__PURE__ */ jsxs(Flex, { gap: 4, className: "!text-gray-600 mt-2", align: "center", wrap: true, children: [
                          /* @__PURE__ */ jsxs(Space, { className: "hover:bg-blue-50 px-2 py-1 rounded transition-colors", children: [
                            /* @__PURE__ */ jsx(EnvironmentOutlined, { className: "!text-blue-500" }),
                            /* @__PURE__ */ jsx(Text$1, { strong: true, children: job.company })
                          ] }),
                          /* @__PURE__ */ jsxs(Space, { className: "hover:bg-blue-50 px-2 py-1 rounded transition-colors", children: [
                            /* @__PURE__ */ jsx(CalendarOutlined, { className: "!text-blue-500" }),
                            /* @__PURE__ */ jsx(Text$1, { children: job.period })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsx(
                          Collapse,
                          {
                            defaultActiveKey: job.details.map((_detail, index) => `experience-${jobIndex}-${index}`),
                            className: "bg-white",
                            expandIconPosition: "end",
                            expandIcon: ({ isActive }) => isActive ? /* @__PURE__ */ jsx(ArrowUpOutlined, {}) : /* @__PURE__ */ jsx(ArrowDownOutlined, {}),
                            items: job.details.map((detail, detailIndex) => ({
                              key: `experience-${jobIndex}-${detailIndex}`,
                              label: /* @__PURE__ */ jsx(Text$1, { strong: true, className: "!text-blue-800 !text-base", children: detail.name }),
                              className: "mb-3 border border-gray-200 rounded-lg hover:border-blue-200 transition-colors",
                              children: /* @__PURE__ */ jsxs(Fragment, { children: [
                                /* @__PURE__ */ jsx("ul", { className: "list-disc pl-5 mb-4 space-y-2 !text-gray-700", children: detail.tasks.map((item, itemIndex) => /* @__PURE__ */ jsx("li", { children: item }, itemIndex)) }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-blue-50/50 p-4 rounded-lg border-l-4 border-blue-400", children: [
                                  /* @__PURE__ */ jsxs(Text$1, { strong: true, className: "!text-blue-800", children: [
                                    /* @__PURE__ */ jsx(ToolOutlined, { className: "mr-2" }),
                                    " Technologies Used"
                                  ] }),
                                  /* @__PURE__ */ jsx(Space, { className: "mt-3", size: [8, 8], wrap: true, children: detail.tools.length === 1 ? detail.tools[0].split(/,\s*/).map((tool, i) => /* @__PURE__ */ jsx(
                                    Tag,
                                    {
                                      color: "blue",
                                      className: "px-3 py-1 rounded-full hover:scale-105 transition-transform",
                                      children: tool.trim()
                                    },
                                    i
                                  )) : detail.tools.map((tool, toolIndex) => /* @__PURE__ */ jsx(
                                    Tag,
                                    {
                                      color: "blue",
                                      className: "px-3 py-1 rounded-full hover:scale-105 transition-transform",
                                      children: tool
                                    },
                                    toolIndex
                                  )) })
                                ] })
                              ] })
                            }))
                          }
                        )
                      ] })
                    }
                  ]
                }
              )
            }))
          }
        )
      }]
    }
  );
};
const { Title, Text } = Typography;
const Education = ({ education: education2 }) => {
  return /* @__PURE__ */ jsx(
    Collapse,
    {
      defaultActiveKey: "education",
      className: "bg-white w-full",
      expandIconPosition: "end",
      expandIcon: ({ isActive }) => isActive ? /* @__PURE__ */ jsx(ArrowUpOutlined, {}) : /* @__PURE__ */ jsx(ArrowDownOutlined, {}),
      items: [{
        key: "education",
        label: /* @__PURE__ */ jsxs(Title, { level: 3, className: "mb-6 !text-gray-800", children: [
          /* @__PURE__ */ jsx(BookOutlined, { className: "mr-2 !text-blue-600" }),
          "Education"
        ] }),
        children: /* @__PURE__ */ jsx(Fragment, { children: education2.map((education22, index) => /* @__PURE__ */ jsxs(
          Card,
          {
            className: "shadow-sm hover:shadow-md transition-all duration-300 border-0",
            children: [
              /* @__PURE__ */ jsx(Title, { level: 4, className: "!m-0 !text-blue-700", children: education22.degree }),
              /* @__PURE__ */ jsxs(Flex, { wrap: true, gap: 4, align: "center", className: "!text-gray-600 !mt-3", children: [
                /* @__PURE__ */ jsxs(Space, { className: "hover:bg-blue-50 px-2 py-1 rounded transition-colors", children: [
                  /* @__PURE__ */ jsx(BookOutlined, { className: "!text-blue-500" }),
                  /* @__PURE__ */ jsx(Text, { strong: true, children: education22.school })
                ] }),
                /* @__PURE__ */ jsxs(Space, { className: "hover:bg-blue-50 px-2 py-1 rounded transition-colors", children: [
                  /* @__PURE__ */ jsx(CalendarOutlined, { className: "!text-blue-500" }),
                  /* @__PURE__ */ jsx(Text, { children: education22.period })
                ] }),
                /* @__PURE__ */ jsxs(Space, { className: "hover:bg-blue-50 px-2 py-1 rounded transition-colors", children: [
                  /* @__PURE__ */ jsx(TrophyOutlined, { className: "!text-blue-500" }),
                  /* @__PURE__ */ jsxs(Text, { children: [
                    "GPA: ",
                    education22.gpa
                  ] })
                ] })
              ] })
            ]
          },
          index
        )) })
      }]
    }
  );
};
const CVContainerBody = ({ data: { personalInfo: personalInfo2, skills: skills2, experience: experience2, education: education2 } }) => {
  return /* @__PURE__ */ jsxs(Flex, { className: "bg-white", vertical: false, wrap: false, children: [
    /* @__PURE__ */ jsxs(Col, { className: "w-4/12", children: [
      /* @__PURE__ */ jsx(PersonalInfo, { personalInfo: personalInfo2 }),
      /* @__PURE__ */ jsx(Skills, { skills: skills2 })
    ] }),
    /* @__PURE__ */ jsxs(Col, { className: "w-8/12", children: [
      /* @__PURE__ */ jsx(Experience, { experience: experience2 }),
      /* @__PURE__ */ jsx(Education, { education: education2 })
    ] })
  ] });
};
const CVContainer = forwardRef(({ data }, ref) => {
  return /* @__PURE__ */ jsxs("div", { ref, className: "cv-container max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden", children: [
    /* @__PURE__ */ jsx(CVContainerHeader, { personalInfo: data.personalInfo }),
    /* @__PURE__ */ jsx(CVContainerBody, { data })
  ] });
});
const CV = ({ data }) => {
  const cvContainerRef = useRef(null);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(CVHelper, { cvContainerRef }),
    /* @__PURE__ */ jsx(CVContainer, { data, ref: cvContainerRef })
  ] });
};
const personalInfo = {
  name: "Phan Hoang Phuoc",
  title: "Fullstack and Devops Mid-Level Engineer",
  description: "Constantly learning to cultivate knowledge about programming to develop professional skills. Research and build optimal system solutions.",
  profile: {
    birthDate: "08/01/1999",
    email: "phuocpro8199@gmail.com",
    phone: "0981415287",
    address: "77/1 Hoang Dieu 2, Linh Trung, Thu Duc",
    github: "https://github.com/phuocpro8199",
    gitlab: "https://gitlab.com/phuoc.backend.01",
    linkedin: "https://www.linkedin.com/in/phuoc-phan-ab3b981ba/",
    cv: "https://phuocpro8199.github.io"
  }
};
const skills = [
  {
    name: "Language",
    items: [
      "Javascript",
      "Typescript",
      "Python"
    ]
  },
  {
    name: "Frontend",
    items: [
      "ReactJS",
      "TanStack Query",
      "Redux-toolkit",
      "Google Maps",
      "React Beautiful dnd",
      "React Hook form",
      "Ant Design",
      "Material UI",
      "Nextjs",
      "Firebase",
      "Stripe",
      "Axios"
    ]
  },
  {
    name: "Backend",
    items: [
      "Nodejs",
      "NestJs (ExpressJs)",
      "Python (Bluesprint, flask)"
    ]
  },
  {
    name: "DB",
    items: [
      "Mysql",
      "PostgresDB",
      "Postgres(AWS RDS)",
      "MongoDB",
      "Redis",
      "DynamoDB"
    ]
  },
  {
    name: "Queues",
    items: [
      "SQS",
      "Bull",
      "BullMQ",
      "AgendaJob",
      "RQ(Python)"
    ]
  },
  {
    name: "Operating System",
    items: [
      "Linux",
      "Windows",
      "Macos"
    ]
  },
  {
    name: "Containers/Serverless",
    items: [
      "docker",
      "podman",
      "kubernetes",
      "Lambda",
      "AWS EKS",
      "AWS Amplify",
      "AWS ECS"
    ]
  },
  {
    name: "AWS",
    items: [
      "SQS",
      "Bridge",
      "RDS",
      "Certificate Manager",
      "EC2",
      "ECR",
      "Cognito",
      "S3",
      "Glue",
      "Athena",
      "RedShift",
      "Appsync",
      "pinpoint",
      "CodeCommit",
      "CodeBuild",
      "CodePipeline",
      "SES",
      "SNS",
      "CloudWatch",
      "Amplify"
    ]
  },
  {
    name: "Payment",
    items: [
      "Stripe",
      "Momo",
      "Onepay"
    ]
  },
  {
    name: "Application Errors",
    items: [
      "Sentry",
      "sonarQube",
      "NewRelic"
    ]
  },
  {
    name: "Notification/Mail/SMS",
    items: [
      "Slack",
      "twillo",
      "AWS SNS",
      "Sendgrid",
      "OneSignal",
      "AWS Pinpoint",
      "Brevo"
    ]
  },
  {
    name: "Logs/Monitoring",
    items: [
      "AWS Cloud Watch",
      "Prometheus",
      "Grafana",
      "Graylog",
      "AWS Athena"
    ]
  },
  {
    name: "Wallet",
    items: [
      "Google",
      "apple"
    ]
  },
  {
    name: "File Tools",
    items: [
      "S3",
      "Multer",
      "Puperteer",
      "ExcelJs",
      "Docx",
      "PapaParse"
    ]
  },
  {
    name: "Maps",
    items: [
      "Amap",
      "google maps"
    ]
  },
  {
    name: "CI",
    items: [
      "Github actions",
      "Gitlab CI",
      "Travis Ci",
      "AWS CodeBuild",
      "AWS CodePipeline",
      "Jenkins"
    ]
  },
  {
    name: "CD",
    items: [
      "NestJs (typescript) + typeorm + swagger + microservice + Postgres-replica",
      "Redis-sentinel",
      "Bull",
      "One-Signal",
      "Cronjob + ETL",
      "AWS Service: S3, IVS",
      "Momo, Onepay, Goship"
    ]
  },
  {
    name: "CDN",
    items: [
      "CloudFlare",
      "DNS make esay",
      "AWS Route53",
      "NameSilo"
    ]
  },
  {
    name: "Platform",
    items: [
      "AWS",
      "GCP"
    ]
  },
  {
    name: "Task Management",
    items: [
      "Jira",
      "Trello",
      "Clickup",
      "Bitbucket",
      "MatterMost",
      "Slack",
      "Gitlab",
      "Tekup"
    ]
  },
  {
    name: "Agile",
    items: [
      "Scrum"
    ]
  },
  {
    name: "Code Tools",
    items: [
      "vscode",
      "eslint",
      "prettier",
      "husky",
      "gitlen",
      "redis",
      "mongo",
      "dbaever",
      "Docker",
      "podman",
      "terraform",
      "Jupiter",
      "ssh",
      "python",
      "node",
      "CodeLint"
    ]
  },
  {
    name: "English",
    items: [
      "Basic Level"
    ]
  }
];
const experience = [
  {
    name: "Backend and Devops Engineer",
    company: "Tego Global",
    period: "2022 - 2025",
    details: [
      {
        name: "2/2025-now: TopTopMax - Outsource - Backend",
        tasks: [
          "Build crawl template, product",
          "Build Brand, Category product",
          "Load and Sync data with Tiktok",
          "Update upload file system"
        ],
        tools: [
          "Nestjs, Mongo, AWS S3",
          "Axios, Redis"
        ]
      },
      {
        name: "12/2024-4/2025: PFS Consulting - Ousource - Backend",
        tasks: [
          "Upload and Process Bulk file excel, CSV, JSON data",
          "ETL data and crawling price data for system Cumulus: Travel, Pet, Motor, Home building, Home Content for multi customer"
        ],
        tools: [
          "Microservice",
          "Redis",
          "Node: Nestjs, BullMq, BullDashboard",
          "Python: Flask, BluePrint, RQ, RqDashboard, scrapy, selenium, cloudflare",
          "AWS: Route53, S3, RDS, EC2, Certificate Manager, CloudFront",
          "Docker",
          "cloudflare"
        ]
      },
      {
        name: "2/2024-8/2024: Perkify - Outsource - Devops",
        tasks: [
          "Build Infrastructure EC2, Gitlab CI/CD, ECR, Mongo, EC2 through Terraform",
          "Deploy tag version builder, docker",
          "Gitlab selfhost, DNS, Gitlab Runner",
          "Cloudwatch, grafana",
          "Sentry, NewRelic",
          "CloudFlare"
        ],
        tools: [
          "EKS, docker, Harbor, Cloudwatch, grafana, SES, SNS, twillio, Cognito, SMS and email bussiness, Brevo, Redis, Mongo, Terraform, bash, gitlab, Goole wallet, Apple wallet, Firebase, grafana Sentry, NewRelic, CloudFlare"
        ]
      },
      {
        name: "2/2024-6/2024: Timkhach - Product - Devops",
        tasks: [
          "Build Infrastructure EKS, gitlab CI/CD, Harbor, Mongo, EC2 through Terraform",
          "Deploy tag version builder",
          "Build Harbor, Gitlab selfhost, DNS, Gitlab Runner",
          "Build Logger",
          "CloudFlare"
        ],
        tools: [
          "EKS, docker, Harbor, Cloudwatch, grafana, SES, SNS, twillio, Cognito, Mongo, Terraform, bash, gitlabCI, Goole wallet, Apple wallet, Firebase"
        ]
      },
      {
        name: "8/2023-10/2024: Vivaleisure - Outsource - Backend",
        tasks: [
          "Build payment gateway For VivaPay",
          "Build finance reports: Joining report, Payment Report(MonthLy)",
          "Revenue Report (Week, Month, Quarter, Half Year, Year, 3 Years)",
          "Salary and Bonus Report(Month, Year)",
          "Export gateway tools: Excel, Word, Pdf",
          "Chart Report"
        ],
        tools: [
          "Nodejs, AWS service: Lambda, Amplify, dynamoDB, AppSync, Pinpoint, SNS, SQS, Cognito, CloudWatch, Puperteer, PapaParse, ExcelJs, Docx"
        ]
      },
      {
        name: "8/2023-4/2024: Valuer - Outsource - Backend",
        tasks: [
          "Build Authentication",
          "Connect AWS: Cognito and RDS",
          "Connect Saleforces and Contact Saleforces using for custom sale"
        ],
        tools: [
          "Ubuntu, bash script, Saleforce API, Maven, AWS Service: Cognito, RDS"
        ]
      },
      {
        name: "3/2022-5/2024: Inbea Backend Architech Leader and Devops (BE team size 10 members)",
        tasks: [
          "Build Infrastructure, CI/CD and Deploy",
          "Build Microservice",
          "Build Source Express Nestjs + Redis + Postgresql + Queue + Notification + ETL",
          "Build send mail: sendGrid",
          "Build CRM database",
          "Build Restful API for user, product, livestream,...",
          "Build Socket for cart, livestream, ....",
          "Build contact Shipping: Goship",
          "Build payment: Momo, Onepay, Stripe",
          "Contact gateway with AWS: S3, IVS,...",
          "Build ElasticSearch",
          "Build migration ETL data"
        ],
        tools: [
          "Ubuntu, bash script, Docker, nginx, github action"
        ]
      },
      {
        name: "12/2022-8/2024: Moochies - Outsource - Devops",
        tasks: [
          "Build and maintain Infrastructure EKS, CI/CD",
          "Build Monitor: Grafana, Prometheus, AWS CloudWatch",
          "Build Log Managerment: GrayLog",
          "Build Error tracking: Sentry",
          "Connect AWS Service: Cognito, Pinpoint,..."
        ],
        tools: [
          "Ubuntu, bash script, Docker, nginx, github action, AWS Service: EKS, Route53, LoadBalancer, ECR, Pinpoint, Dns make easy, Sectigo SSL, Broker, Amap, Firebase, Sentry, Grafana, Prometheus, Graylog"
        ]
      },
      {
        name: "5/2023-3/2024: FindACarer - Outsource - Backend",
        tasks: [
          "Build import and export csv",
          "Build advance search carer in distance",
          "Build Cronjob using AWS eventbridge",
          "Build Payment: Stripe",
          "Build Notification and Mail"
        ],
        tools: [
          "Ubuntu, bash script, Docker, nginx, github action, husky, NestJs express(typescript) + Prisma, AWS Service: RDS, EventBridge, Sendgrid, Stripe, Google map, firebase"
        ]
      },
      {
        name: "3/2022-6/2022: Event Media - Outsource - Backend",
        tasks: [
          "Maintain and build bulk upload and export",
          "Connect redis and database",
          "Send Email"
        ],
        tools: [
          "Nodejs express + typeorm, Symfony, Redis, MySQL, Sendgrid, Bitbucket, Docker"
        ]
      },
      {
        name: "3/2022-5/2023: Sathapana Bank - Oursource - Devops",
        tasks: [
          "Build resource system management: gitlab, runner, nexus, habor, ...",
          "Maintain Kubernetes management system: ArgoCD, K8S, Habor, Loki, Prometheus"
        ],
        tools: [
          "Gitlab, gitlab runner, nexus, habor, ArgoCD, Kubernetes, Loki, Prometheus, Grafana, Bash Script, Docker, Ubuntu, Windows Server"
        ]
      },
      {
        name: "5/2022-7/2022: Abhi finance - Outsource - Backend",
        tasks: [
          "Build bulk upload file, export report",
          "BuildCI/CDjenskin"
        ],
        tools: [
          "Jenkins, AWS CodeDeploy, Gitlab, ArgoCD"
        ]
      }
    ]
  },
  {
    name: "Fullstack Blockchain Engineer and Devops",
    company: "Space Fintech",
    period: "2019 - 2022",
    details: [
      {
        name: "2019-2022: Fullstack Blockchain and Devops",
        tasks: [
          "Solution delivery",
          "Config, manage AWS Instance and GCP VM",
          "Build CI/CD LoadBalancer, CDN, certificate DNS",
          "Maintain Swap Token Follow UNISwap",
          "Solution delivery Build Proxy, Exchange NFTs, Atomic contract",
          "Build Express Restful API, and cors",
          "Build Automatic deploy contract and crawl data from Blockchain",
          "Build Login and authorization system",
          "Build NFTs Market place",
          "Integrate maps",
          "Folder NFTs",
          "Multiple languages",
          "Comment and chat"
        ],
        tools: [
          "Kubernetes, HA proxy, nginx, Jenkins, github actions, docker, ZeroSSL, NameSilo, Bash Script, Zsh Script, Ubuntu and Macos, Nodejs ExpressJs + MongoClient, Redis, mongoDB, Swagger, socket IO, ReactJS, Redux Toolkit, Floara Editor, CASL, Material UI, i18n, google maps, React query, web3, Infura, IPFS"
        ]
      }
    ]
  },
  {
    name: "Frontend Engineer",
    company: "Blueprint",
    period: "2022 - 2023",
    details: [
      {
        name: "5/2022-6/2024: Rivir Portal- Freelancer - Frontend",
        tasks: [
          "Maintain permission management",
          "Maintain category asset management",
          "Build Task management",
          "Build Feed system",
          "Multiple language",
          "Build Folder management"
        ],
        tools: [
          "React, redux-toolkit, material UI. tanstack query, Aggrid, google maps, casl, i18n, dropbox, react beautiful dnd, firebase"
        ]
      }
    ]
  }
];
const education = [
  {
    degree: "Computer Science",
    school: "University of Information Technology",
    period: "2017 - 2022",
    gpa: "2.94/4"
  }
];
const json = {
  personalInfo,
  skills,
  experience,
  education
};
function meta() {
  return [{
    title: "Professional CV - Phan Hoang Phuoc"
  }, {
    name: "description",
    content: "Professional CV of Phan Hoang Phuoc - Fullstack and Devops Engineer"
  }];
}
const home = withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(ConfigProvider, {
    theme: {
      hashed: false
    },
    children: /* @__PURE__ */ jsx(CV, {
      data: json
    })
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-BTd5Xoee.js", "imports": ["/assets/chunk-LSOULM7L-BgFOEEEr.js", "/assets/index-45kZ4ZGW.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-BRTomMk8.js", "imports": ["/assets/chunk-LSOULM7L-BgFOEEEr.js", "/assets/index-45kZ4ZGW.js", "/assets/with-props-C9sO8p4W.js"], "css": ["/assets/root-Df_biOyM.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-Brxp3knh.js", "imports": ["/assets/home-DsRscsCQ.js", "/assets/with-props-C9sO8p4W.js", "/assets/chunk-LSOULM7L-BgFOEEEr.js", "/assets/index-45kZ4ZGW.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-b137b9fc.js", "version": "b137b9fc", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routes,
  ssr
};
