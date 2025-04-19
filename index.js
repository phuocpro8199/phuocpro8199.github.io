// CV Data Object
const cvData = {
  personalInfo: {
    name: "Phan Hoang Phuoc",
    title: "Fullstack and Devops Mid-Level Engineer",
    description:
      "Constantly learning to cultivate knowledge about programming to develop professional skills. Research and build optimal system solutions.",
    profile: {
      birthDate: "08/01/1999",
      email: "phuocpro8199@gmail.com",
      phone: "0981415287",
      address: "77/1 Hoang Dieu 2, Linh Trung, Thu Duc",
      github: "https://github.com/phuocpro1969",
      gitlab: "https://gitlab.com/phuoc.backend.01",
      linkedin: "https://www.linkedin.com/in/phuoc-phan-ab3b981ba/",
    },
  },
  skills: {
    categories: [
      {
        name: "Language",
        items: ["Javascript", "Typescript", "Python"],
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
          "Axios",
        ],
      },
      {
        name: "Backend",
        items: ["Nodejs", "NestJs (ExpressJs)", "Python (Bluesprint, flask)"],
      },
      {
        name: "DB",
        items: [
          "Mysql",
          "PostgresDB",
          "Postgres(AWS RDS)",
          "MongoDB",
          "Redis",
          "DynamoDB",
        ],
      },
      {
        name: "Queues",
        items: ["SQS", "Bull", "BullMQ", "AgendaJob", "RQ(Python)"],
      },
      {
        name: "Operating System",
        items: ["Linux", "Windows", "Macos"],
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
          "AWS ECS",
        ],
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
          "Amplify",
        ],
      },
      {
        name: "Payment",
        items: ["Stripe", "Momo", "Onepay"],
      },
      {
        name: "Application Errors",
        items: ["Sentry", "sonarQube", "NewRelic"],
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
          "Brevo",
        ],
      },
      {
        name: "Logs/Monitoring",
        items: [
          "AWS Cloud Watch",
          "Prometheus",
          "Grafana",
          "Graylog",
          "AWS Athena",
        ],
      },
      {
        name: "Wallet",
        items: ["Google", "apple"],
      },
      {
        name: "File Tools",
        items: ["S3", "Multer", "Puperteer", "ExcelJs", "Docx", "PapaParse"],
      },
      {
        name: "Maps",
        items: ["Amap", "google maps"],
      },
      {
        name: "CI",
        items: [
          "Github actions",
          "Gitlab CI",
          "Travis Ci",
          "AWS CodeBuild",
          "AWS CodePipeline",
          "Jenkins",
        ],
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
          "Momo, Onepay, Goship",
        ],
      },
      {
        name: "CDN",
        items: ["CloudFlare", "DNS make esay", "AWS Route53", "NameSilo"],
      },
      {
        name: "Platform",
        items: ["AWS", "GCP"],
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
          "Tekup",
        ],
      },
      {
        name: "Agile",
        items: ["Scrum"],
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
          "CodeLint",
        ],
      },
      {
        name: "English",
        items: ["Basic Level"],
      },
    ],
  },
  experience: [
    {
      title: "Backend and Devops Engineer",
      company: "Tego Global",
      period: "2022 - 2025",
      details: [
        {
          subTitle: "2/2025-now: TopTopMax - Outsource - Backend",
          items: [
            "Build crawl template, product",
            "Build Brand, Category product",
            "Load and Sync data with Tiktok",
            "Update upload file system",
          ],
          tools: ["Nestjs, Mongo, AWS S3", "Axios, Redis"],
        },
        {
          subTitle: "12/2024-4/2025: PFS Consulting - Ousource - Backend",
          items: [
            "Upload and Process Bulk file excel, CSV, JSON data",
            "ETL data and crawling price data for system Cumulus: Travel, Pet, Motor, Home building, Home Content for multi customer",
          ],
          tools: [
            "Microservice",
            "Redis",
            "Node: Nestjs, BullMq, BullDashboard",
            "Python: Flask, BluePrint, RQ, RqDashboard, scrapy, selenium, cloudflare",
            "AWS: Route53, S3, RDS, EC2, Certificate Manager, CloudFront",
            "Docker",
            "cloudflare",
          ],
        },
        {
          subTitle: "2/2024-8/2024: Perkify - Outsource - Devops",
          items: [
            "Build Infrastructure EC2, Gitlab CI/CD, ECR, Mongo, EC2 through Terraform",
            "Deploy tag version builder, docker",
            "Gitlab selfhost, DNS, Gitlab Runner",
            "Cloudwatch, grafana",
            "Sentry, NewRelic",
            "CloudFlare",
          ],
          tools: [
            "EKS, docker, Harbor, Cloudwatch, grafana, SES, SNS, twillio, Cognito, SMS and email bussiness, Brevo, Redis, Mongo, Terraform, bash, gitlab, Goole wallet, Apple wallet, Firebase, grafana Sentry, NewRelic, CloudFlare",
          ],
        },
        {
          subTitle: "2/2024-6/2024: Timkhach - Product - Devops",
          items: [
            "Build Infrastructure EKS, gitlab CI/CD, Harbor, Mongo, EC2 through Terraform",
            "Deploy tag version builder",
            "Build Harbor, Gitlab selfhost, DNS, Gitlab Runner",
            "Build Logger",
            "CloudFlare",
          ],
          tools: [
            "EKS, docker, Harbor, Cloudwatch, grafana, SES, SNS, twillio, Cognito, Mongo, Terraform, bash, gitlabCI, Goole wallet, Apple wallet, Firebase",
          ],
        },
        {
          subTitle: "8/2023-10/2024: Vivaleisure - Outsource - Backend",
          items: [
            "Build payment gateway For VivaPay",
            "Build finance reports: Joining report, Payment Report(MonthLy)",
            "Revenue Report (Week, Month, Quarter, Half Year, Year, 3 Years)",
            "Salary and Bonus Report(Month, Year)",
            "Export gateway tools: Excel, Word, Pdf",
            "Chart Report",
          ],
          tools: [
            "Nodejs, AWS service: Lambda, Amplify, dynamoDB, AppSync, Pinpoint, SNS, SQS, Cognito, CloudWatch, Puperteer, PapaParse, ExcelJs, Docx",
          ],
        },
        {
          subTitle: "8/2023-4/2024: Valuer - Outsource - Backend",
          items: [
            "Build Authentication",
            "Connect AWS: Cognito and RDS",
            "Connect Saleforces and Contact Saleforces using for custom sale",
          ],
          tools: [
            "Ubuntu, bash script, Saleforce API, Maven, AWS Service: Cognito, RDS",
          ],
        },
        {
          subTitle:
            "3/2022-5/2024: Inbea Backend Architech Leader and Devops (BE team size 10 members)",
          items: [
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
            "Build migration ETL data",
          ],
          tools: ["Ubuntu, bash script, Docker, nginx, github action"],
        },
        {
          subTitle: "12/2022-8/2024: Moochies - Outsource - Devops",
          items: [
            "Build and maintain Infrastructure EKS, CI/CD",
            "Build Monitor: Grafana, Prometheus, AWS CloudWatch",
            "Build Log Managerment: GrayLog",
            "Build Error tracking: Sentry",
            "Connect AWS Service: Cognito, Pinpoint,...",
          ],
          tools: [
            "Ubuntu, bash script, Docker, nginx, github action, AWS Service: EKS, Route53, LoadBalancer, ECR, Pinpoint, Dns make easy, Sectigo SSL, Broker, Amap, Firebase, Sentry, Grafana, Prometheus, Graylog",
          ],
        },
        {
          subTitle: "5/2023-3/2024: FindACarer - Outsource - Backend",
          items: [
            "Build import and export csv",
            "Build advance search carer in distance",
            "Build Cronjob using AWS eventbridge",
            "Build Payment: Stripe",
            "Build Notification and Mail",
          ],
          tools: [
            "Ubuntu, bash script, Docker, nginx, github action, husky, NestJs express(typescript) + Prisma, AWS Service: RDS, EventBridge, Sendgrid, Stripe, Google map, firebase",
          ],
        },
        {
          subTitle: "3/2022-6/2022: Event Media - Outsource - Backend",
          items: [
            "Maintain and build bulk upload and export",
            "Connect redis and database",
            "Send Email",
          ],
          tools: [
            "Nodejs express + typeorm, Symfony, Redis, MySQL, Sendgrid, Bitbucket, Docker",
          ],
        },
        {
          subTitle: "3/2022-5/2023: Sathapana Bank - Oursource - Devops",
          items: [
            "Build resource system management: gitlab, runner, nexus, habor, ...",
            "Maintain Kubernetes management system: ArgoCD, K8S, Habor, Loki, Prometheus",
          ],
          tools: [
            "Gitlab, gitlab runner, nexus, habor, ArgoCD, Kubernetes, Loki, Prometheus, Grafana, Bash Script, Docker, Ubuntu, Windows Server",
          ],
        },
        {
          subTitle: "5/2022-7/2022: Abhi finance - Outsource - Backend",
          items: ["Build bulk upload file, export report", "BuildCI/CDjenskin"],
          tools: ["Jenkins, AWS CodeDeploy, Gitlab, ArgoCD"],
        },
      ],
    },
    {
      title: "Fullstack Blockchain Engineer and Devops",
      company: "Space Fintech",
      period: "2019 - 2022",
      details: [
        {
          subTitle: "2019-2022: Fullstack Blockchain and Devops",
          items: [
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
            "Comment and chat",
          ],
          tools: [
            "Kubernetes, HA proxy, nginx, Jenkins, github actions, docker, ZeroSSL, NameSilo, Bash Script, Zsh Script, Ubuntu and Macos, Nodejs ExpressJs + MongoClient, Redis, mongoDB, Swagger, socket IO, ReactJS, Redux Toolkit, Floara Editor, CASL, Material UI, i18n, google maps, React query, web3, Infura, IPFS",
          ],
        },
      ],
    },
    {
      title: "Frontend Engineer",
      company: "Blueprint",
      period: "2022 - 2023",
      details: [
        {
          subTitle: "5/2022-6/2024: Rivir Portal- Freelancer - Frontend",
          items: [
            "Maintain permission management",
            "Maintain category asset management",
            "Build Task management",
            "Build Feed system",
            "Multiple language",
            "Build Folder management",
          ],
          tools: [
            "React, redux-toolkit, material UI. tanstack query, Aggrid, google maps, casl, i18n, dropbox, react beautiful dnd, firebase",
          ],
        },
      ],
    },
  ],
  education: {
    degree: "Computer Science",
    institution: "University of Information Technology",
    period: "2017 - 2022",
    gpa: "2.94/4",
  },
};

// Render Functions
function renderPersonalInfo() {
  const header = document.querySelector(".cv-header");
  const { name, title, description, profile } = cvData.personalInfo;

  header.innerHTML = `
    <div class="header-left">
      <div class="profile-image-container">
        <img src="profile.jpg" alt="Profile Photo" class="profile-image" />
      </div>
    </div>
    <div class="header-right">
      <h1>${name}</h1>
      <h2>${title}</h2>
      <p class="profile-text">${description}</p>
    </div>
  `;

  const profileSection = document.querySelector(
    ".profile-section .section-content"
  );
  profileSection.innerHTML = `
    <ul class="profile-list">
      <li>📅 ${profile.birthDate}</li>
      <li>✉ ${profile.email}</li>
      <li>📞 ${profile.phone}</li>
      <li>🏠 ${profile.address}</li>
      <li>🔗 <a href="${profile.github}">GitHub</a></li>
      <li>🔗 <a href="${profile.gitlab}">GitLab</a></li>
      <li>🔗 <a href="${profile.linkedin}">LinkedIn</a></li>
    </ul>
  `;
}

function renderSkills() {
  const skillsSection = document.querySelector(
    ".skills-section .section-content"
  );
  let skillsHTML = "";

  cvData.skills.categories.forEach((category) => {
    skillsHTML += `
      <div class="skill-category collapsible">
        <h4 class="section-header">
          ${category.name}
          <button class="toggle-btn">+</button>
        </h4>
        <div class="section-content">
          <ul>
            ${category.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </div>
    `;
  });

  skillsSection.innerHTML = skillsHTML;
}

function renderExperience() {
  const experienceSection = document.querySelector(
    ".experience-section .section-content"
  );
  let experienceHTML = "";

  cvData.experience.forEach((exp) => {
    experienceHTML += `
      <div class="experience-item collapsible expanded">
        <h4 class="section-header">
          ${exp.title}
          <span>${exp.company} (${exp.period})</span>
          <button class="toggle-btn">-</button>
        </h4>
        <div class="section-content">
          ${exp.details
            .map(
              (detail) => `
            <div class="experience-detail">
              <h5>${detail.subTitle}</h5>
              <ul>
                ${detail.items.map((item) => `<li>${item}</li>`).join("")}
              </ul>
              ${
                detail.tools
                  ? `
                    <div class="tools">
                      <h6>Tools:</h6>
                      <ul>
                        ${detail.tools
                          .map((tool) => `<li>${tool}</li>`)
                          .join("")}
                      </ul>
                    </div>`
                  : ""
              }
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  });

  experienceSection.innerHTML = experienceHTML;
}

function renderEducation() {
  const educationSection = document.querySelector(
    ".education-section .section-content"
  );
  const { degree, institution, period, gpa } = cvData.education;

  educationSection.innerHTML = `
    <div class="education-item">
      <h4>
        ${degree}
        <span>${institution} (${period})</span>
      </h4>
      <p>GPA: ${gpa}</p>
    </div>
  `;
}

function generatePdf() {
  const element = document.querySelector(".cv-container");

  if (!element) {
    throw new Error("CV container element not found");
  }

  const { jsPDF } = window.jspdf;

  const fileName = `Phan-Hoang-Phuoc-CV.pdf`;
  const pageWidth = 210;
  const pageHeight = 297;
  const doc = new jsPDF({
    orientation: "p",
    unit: "mm",
    format: [pageWidth, pageHeight],
  });
  let position = 0;

  html2canvas(element).then(function (canvas) {
    const imgData = canvas.toDataURL("image/jpeg");
    const imgHeight = (canvas.height * pageWidth) / canvas.width;
    let heightLeft = imgHeight;
    do {
      doc.addImage(imgData, "JPEG", 0, position, pageWidth, imgHeight);
      heightLeft -= pageHeight;
      position = heightLeft - imgHeight;
      if (heightLeft > 0) doc.addPage();
    } while (heightLeft > 0);

    doc.save(fileName);
  });
}

/**
 * @param {Element} helper
 */
function renderGeneratePDFButton(helper) {
  // create node the button
  const pdfButton = document.createElement("button");
  pdfButton.id = "generatePdf";
  pdfButton.className = "pdf-button";
  pdfButton.textContent = "Generate PDF";
  pdfButton.addEventListener("click", generatePdf);

  // insert node to helper
  helper.appendChild(pdfButton);
}

function renderHelper() {
  const helper = document.querySelector(".cv-helper");
  renderGeneratePDFButton(helper);
}

// Initialize CV
document.addEventListener("DOMContentLoaded", function () {
  renderHelper();
  renderPersonalInfo();
  renderSkills();
  renderExperience();
  renderEducation();
  initCollapsibleSections();
});

function initCollapsibleSections() {
  // Initialize all sections as expanded
  document.querySelectorAll(".collapsible").forEach((section) => {
    const content = section.querySelector(".section-content");
    if (!section.classList.contains("collapsed")) {
      content.style.maxHeight = "none";
    }
  });

  // Set up click handlers
  document
    .querySelectorAll(".collapsible .section-header")
    .forEach((header) => {
      header.addEventListener("click", () => {
        const section = header.parentElement;
        const content = section.querySelector(".section-content");
        const button = header.querySelector(".toggle-btn");

        section.classList.toggle("collapsed");

        if (section.classList.contains("collapsed")) {
          button.textContent = "+";
          content.style.maxHeight = "0";
        } else {
          button.textContent = "-";
          // Set temporary large max-height for transition
          content.style.maxHeight = "200000px";
          // After transition completes, set to none for full expansion
          setTimeout(() => {
            content.style.maxHeight = "none";
          }, 300);
        }
      });
    });
}
