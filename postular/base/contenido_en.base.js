// ============================================================================
//  contenido_en.js  —  CV CONTENT in English. Agent edits this to tailor.
//  Same rules as contenido_es.js (adjust "titular", filter bullets per role,
//  reorder skills, fill [placeholders], never invent experience).
//  State: Full Stack BASE (not tailored to a specific job ad). Up to date 2026-10-25.
// ============================================================================
module.exports = {
  nombre: "Luis Alberto Huaney Lino",
  // >>> AGENT: adjust headline to the target role <<<
  titular: "Mid-Senior Full Stack Developer | .NET · Java (Spring Boot) · React · Angular | AI · DevOps | 3+ years exp.",
  contacto: {
    ubicacion: "Peru",
    portafolioUrl: "https://www.luis-alberto-huaney-lino.online/",
    portafolioTexto: "Online Portfolio",
    telefono: "+51 946 587 273",
    email: "martinlinohuaney@gmail.com",
  },
  perfil: "Full Stack and DevOps Developer with over 3 years of experience building end-to-end enterprise solutions with .NET, Java (Spring Boot), React, and Angular. I currently develop and migrate Promart Homecenter's internal systems toward a maintainable architecture, incorporating artificial intelligence components to automate manual tasks. Previously I led the design and development of Caja Arequipa's Income, HR, and Personnel Selection System on the corporate Caja 360 platform, modeling persistence on SQL Server and Oracle. I combine a solid full stack foundation with DevOps practices (Docker, CI/CD) and agile methodologies.",

  experiencia: [
    {
      empresa: "Promart Homecenter", ubicacion: "Lima, Peru",
      cargo: "Full Stack Developer .NET / Spring Boot / React with AI", fechas: "September 2026 – Present",
      subtitulo: "Joyit (outsourced service)",
      bullets: [
        "Develop and migrate Promart's internal systems toward a maintainable architecture, with .NET and Spring Boot on the backend and React on the frontend, adapting legacy applications without disrupting operations.",
        "Integrate those systems with the operation's business processes and incorporate artificial intelligence components to automate tasks currently handled manually.",
      ],
      contacto: "Miguel Rantes · +51 910 748 185",
    },
    {
      empresa: "Caja Arequipa", ubicacion: "Lima, Peru",
      cargo: "Full Stack Developer .NET / Angular", fechas: "November 2025 – August 2026",
      subtitulo: "Englobe Company S.A.C. (outsourced service)",
      bullets: [
        "Led the end-to-end design and development of the Income, Human Resources, and Personnel Selection System on the corporate Caja 360 platform, defining the solution architecture (.NET on the backend and Angular on the frontend) and the team's technical standards.",
        "Modeled and optimized the persistence layer on SQL Server and Oracle, ensuring transactional integrity and the performance of critical HR and payroll processes within a regulated financial institution.",
        "Set up server infrastructure and environments and automated application deployment, reducing release times and minimizing manual configuration errors.",
      ],
      contacto: "Alex Sifuentes, Eng. · +51 946 614 367",
    },
    {
      empresa: "OGTISE – UNASAM", ubicacion: "Huaraz, Peru",
      cargo: "Full Stack Developer (Spring Boot / Angular)", fechas: "April 2025 – July 2025",
      subtitulo: "Office of Information Technology, Systems, and Statistics",
      bullets: [
        "Designed and developed UNASAM's Resolution Management System with Spring Boot and Angular, optimizing document registration, control, and lookup and reducing search times by over 40%.",
        "Implemented the Visitor Control System with access registration, validation, and reporting, strengthening institutional security and entry traceability.",
      ],
      contacto: "Francisco Carranza Vega, Eng. · fcarranzav@unasam.edu.pe",
    },
    {
      empresa: "Educa Perú", ubicacion: "Huaraz, Peru",
      cargo: "Full Stack Developer", fechas: "April 2024 – November 2024",
      bullets: [
        "Led the development of an educational e-commerce platform with Laravel and React/TypeScript, integrating enrollments, online payments, and automatic certificate issuance into a single end-to-end flow.",
        "Optimized academic management and user experience, increasing revenue by 20% to 23% during the first 3 months and strengthening institutional visibility.",
      ],
      contacto: "Juan Laveriano, Eng. · +51 908 750 706",
    },
    {
      empresa: "Eddecap", ubicacion: "Huaraz, Peru",
      cargo: "Web Developer", fechas: "July 2022 – November 2023",
      bullets: [
        "Designed, developed, and maintained the corporate website applying development best practices, SEO strategies, and performance optimization, increasing organic visibility and strengthening the brand's digital presence.",
      ],
      contacto: "Gerardo Rodriguez, Eng. · +51 943 104 662",
    },
  ],

  educacion: [
    { institucion: "Universidad Nacional Santiago Antúnez de Mayolo", ubicacion: "Huaraz, Peru", detalle: "Systems and Computer Engineering — Professional Degree (Titulado)", fechas: "June 2020 – April 2026" },
    { institucion: "Universidad Nacional Santiago Antúnez de Mayolo", ubicacion: "Huaraz, Peru", detalle: "Systems and Computer Engineering — Bachelor's Degree (Bachiller)", fechas: "June 2020 – October 2025" },
    { institucion: "Universidad Nacional Santiago Antúnez de Mayolo", ubicacion: "Huaraz, Peru", detalle: "Systems and Computer Engineering — Graduate (Egresado)", fechas: "June 2020 – June 2025" },
    { institucion: "Language Center – UNASAM", ubicacion: "Huaraz, Peru", detalle: "Basic English Course (A1)", fechas: "June 2023 – June 2024" },
  ],

  skillsAdicionales: [
    "End-to-end full stack development with .NET, Java (Spring Boot), React, and Angular: from solution architecture to deployment.",
    "Migration and modernization of legacy applications toward maintainable architectures, without disrupting business operations.",
    "Integration of artificial intelligence components to automate manual tasks (model APIs, agents, and automations).",
    "Experience with automation tools and DevOps methodologies (Docker, CI/CD).",
    "Leading technology projects from early stages: defining technical standards, code review, and working in Scrum.",
    "Professional Degree in Systems and Computer Engineering (UNASAM). Native Spanish and intermediate English.",
  ],

  desarrollo: [
    { anio: "2026", items: [
      "Professional Degree in Systems and Computer Engineering — UNASAM | Apr. 2026",
      "AI Fluency: Framework & Foundations (10/10) — Anthropic | Aug. 2026",
      "AI Fluency for Builders — Anthropic | Aug. 2026",
      "Building with the Claude API — Anthropic | Aug. 2026",
      "Claude with Amazon Bedrock — Anthropic | Aug. 2026",
      "Claude on Google Cloud — Anthropic | Aug. 2026",
      "Claude Code 101 — Anthropic | Aug. 2026",
      "Claude Code in Action — Anthropic | Aug. 2026",
      "Claude 101 — Anthropic | Aug. 2026",
      "Claude Platform 101 — Anthropic | Aug. 2026",
      "Introduction to Model Context Protocol (MCP) — Anthropic | Aug. 2026",
      "Model Context Protocol: Advanced Topics — Anthropic | Aug. 2026",
      "Introduction to subagents — Anthropic | Aug. 2026",
      "Introduction to agent skills — Anthropic | Aug. 2026",
      "Introduction to Claude Cowork — Anthropic | Aug. 2026",
      "AI Capabilities and Limitations — Anthropic | Aug. 2026",
      "AI Fluency for students — Anthropic | Aug. 2026",
      "AI Fluency for educators — Anthropic | Aug. 2026",
      "AI Fluency for nonprofits — Anthropic | Aug. 2026",
      "AI Fluency for Small Businesses — Anthropic | Aug. 2026",
      "AI Fluency for Creative Work — Anthropic | Aug. 2026",
      "Teaching AI Fluency — Anthropic | Aug. 2026",
    ]},
    { anio: "2025", items: [
      "Bachelor's Degree in Systems and Computer Engineering — UNASAM | Oct. 2025",
      "Graduate Certificate — UNASAM | Aug. 2025",
      "Certificate of Achievement, Basic English — UNASAM | Aug. 2025",
      "Pre-Professional Internship Certificate — OGTISE | Aug. 2025",
    ]},
    { anio: "2024", items: [
      "English for IT — Cisco Networking Academy | Aug. 2024",
      "Java Programming — Fundación Telefónica del Perú (Conecta Empleo) | Aug. 2024",
      "Java Spring Boot Programming — Platzi | Aug. 2024",
      "Advanced Angular — Platzi | Aug. 2024",
      "HTML Essentials — Cisco Networking Academy | Aug. 2024",
      "CSS Essentials — Cisco Networking Academy | Aug. 2024",
      "JavaScript Essentials — Cisco Networking Academy | Aug. 2024",
      "JavaScript Advanced — Cisco Networking Academy | Aug. 2024",
      "Python Essentials — Cisco Networking Academy | Aug. 2024",
      "Python Advanced — Cisco Networking Academy | Aug. 2024",
      "Web Design (HTML & CSS) — Fundación Telefónica del Perú (Conecta Empleo) | Aug. 2024",
      "Learn WordPress the Easy Way — Fundación Telefónica del Perú (Conecta Empleo) | Aug. 2024",
      "Inspiring Study Conference — Google | Aug. 2024",
      "Fuzzy Logic in Python — UNASAM (International Congress) | May 2024",
      "Machine Learning — UNASAM (International Congress) | May 2024",
      "Precision Agriculture — UNASAM (International Congress) | May 2024",
      "AWS Cloud Fundamentals — Amazon Web Services (Training & Certification) | Apr. 2024",
    ]},
    { anio: "2022", items: [
      "Research, Development, Innovation, and Outreach Seminar — UNASAM | Nov. 2022",
    ]},
  ],

  // >>> AGENT: put the target role's category first (e.g. Frontend on top for React) <<<
  habilidades: [
    { cat: "Backend:", bullets: [
      "C# (.NET — Jobs/Queues, Redis, Horizon), Java (Spring Boot — Spring Data, Spring Security, AMQP), Node.js (Express), Python (Flask/Django for microservices and automation scripts).",
      "REST/GraphQL API design, microservices, JWT/OAuth2 authentication, queue handling and asynchronous processing (RabbitMQ, Celery/Redis).",
      "Testing and quality: JUnit (Java), PHPUnit (PHP), integration and end-to-end testing.",
    ]},
    { cat: "Frontend:", bullets: [
      "React + TypeScript (components, dashboards, and migration of legacy modules), SSR/SEO optimization (Next.js, SSG/SSR).",
      "Angular (v11–v22) and TypeScript — SPA development, advanced forms, RxJS, unit testing with Jasmine/Karma.",
      "UI: Tailwind, Bootstrap, Material; accessibility (WCAG) and performance optimization (Lighthouse).",
    ]},
    { cat: "Artificial Intelligence & Data:", bullets: [
      "Integration of models and agents into software products (model APIs, Model Context Protocol, automation of manual tasks).",
      "Python data stack: Pandas, NumPy for data cleaning and ETL pipelines.",
      "Basic ML / prototyping: scikit-learn; integration of exported models (ONNX).",
    ]},
    { cat: "Databases & Search:", bullets: [
      "Relational: SQL Server, Oracle, PostgreSQL, MySQL/MariaDB; schema design, indexing, and query optimization.",
      "Search: Elasticsearch for full-text search and advanced filters.",
      "Cache & sessions: Redis.",
    ]},
    { cat: "Cloud & DevOps:", bullets: [
      "Azure: App Service, Functions, AKS; pipelines and corporate authentication.",
      "AWS: S3, EC2, RDS, IAM (deployments and storage).",
      "Storage and backups; monitoring (Prometheus, Grafana).",
    ]},
    { cat: "Containers & Orchestration:", bullets: [
      "Docker (optimized images), Kubernetes (deployment and basic configuration), Docker Compose for local environments.",
    ]},
    { cat: "Messaging & Real Time:", bullets: [
      "RabbitMQ, Redis (pub/sub), WebSockets / Socket.IO / Pusher for notifications and real-time dashboards.",
    ]},
    { cat: "CI/CD & Automation:", bullets: [
      "GitHub Actions, GitLab CI, Git Flow; test and automated deployment pipelines.",
      "Automation of bulk processes (account creation, certificate generation) with jobs and queues.",
    ]},
    { cat: "Integrations & Payments:", bullets: [
      "Payment gateways (Stripe / PayU), external APIs (WhatsApp/Twilio, SMTP), S3-compatible storage, and PDF generation (iText, Apache PDFBox).",
    ]},
    { cat: "Version Control & Collaboration:", bullets: [
      "Git (GitHub/GitLab), Pull Requests, code review, branch management, and collaborative workflows.",
    ]},
    { cat: "Architecture & Best Practices:", bullets: [
      "Clean Architecture, DDD (applied concepts), SOLID principles, test-driven design (TDD/unit testing), performance and security review (CSP, HSTS).",
    ]},
  ],

  idiomas: [
    "Spanish — Native",
    "English — Basic/Intermediate (A1 certified)",
  ],

  labels: {
    experiencia: "PROFESSIONAL EXPERIENCE",
    educacion: "EDUCATION",
    skillsAdicionales: "ADDITIONAL SKILLS",
    desarrollo: "PROFESSIONAL DEVELOPMENT",
    habilidades: "SKILLS",
    idiomas: "LANGUAGES",
    contacto: "Reference",
    anexos: "Annexes",
    certificados: "Certificates",
    constancias: "Work Certificates",
  },
};
