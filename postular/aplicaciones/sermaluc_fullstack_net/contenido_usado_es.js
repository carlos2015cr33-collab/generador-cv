// ============================================================================
//  contenido_es.js  —  CONTENIDO del CV en español.
//  ESTE es el archivo que la IA/agente edita para adaptar el CV a un puesto.
//  Reglas rápidas para el agente:
//   - Cambia "titular" según el rol (ej. "Senior Frontend Developer | React ...").
//   - Reordena/filtra los bullets de cada experiencia según el puesto (ver
//     data/experiencia_detallada.md, que tiene MÁS bullets etiquetados por área).
//   - Reordena las categorías de "habilidades" poniendo primero las del rol.
//   - No inventes experiencia que no exista. Rellena los [placeholders].
// ============================================================================
module.exports = {
  nombre: "Luis Alberto Huaney Lino",
  // >>> AGENTE: ajusta el titular al puesto objetivo <<<
  titular: "Desarrollador Full Stack | .NET Core 6+ · C# | React · Angular · TypeScript | Azure · SQL Server | Microservicios · API REST | +3 años exp.",
  contacto: {
    ubicacion: "Perú",
    portafolioUrl: "https://www.luis-alberto-huaney-lino.online/",
    portafolioTexto: "Portafolio online",
    telefono: "+51 946 587 273",
    email: "martinlinohuaney@gmail.com",
  },
  perfil: "Desarrollador Full Stack con más de 3 años de experiencia en el sector financiero regulado (cajas), especializado en .NET / .NET Core y React/Angular. Diseño y desarrollo soluciones de extremo a extremo: APIs REST y microservicios en C#, interfaces en TypeScript y modelado de datos en SQL Server, aplicando Clean Architecture, principios SOLID, DDD y TDD. Trabajo con Azure (Functions, DevOps), CI/CD y Docker, y con metodología Scrum, para entregar software escalable, seguro y mantenible en entornos regulados.",

  experiencia: [
    {
      empresa: "Caja Arequipa", ubicacion: "Lima, Perú",
      cargo: "Desarrollador Full Stack .NET / Angular", fechas: "Noviembre 2025 – Agosto 2026",
      bullets: [
        "Lideré el diseño y desarrollo de extremo a extremo del Sistema de Ingresos, Recursos Humanos y Selección de Personal sobre la plataforma corporativa Caja 360, definiendo la arquitectura de la solución (.NET en el backend y Angular en el frontend) y los estándares técnicos del equipo.",
        "Modelé y optimicé la capa de persistencia sobre SQL Server y Oracle, garantizando la integridad transaccional y el rendimiento de procesos críticos de RR. HH. y nómina en una entidad financiera regulada.",
        "Configuré la infraestructura de servidores y entornos, y automaticé el despliegue de la aplicación, reduciendo los tiempos de publicación y minimizando los errores de configuración manual.",
      ],
      contacto: "Ing. Alex Sifuentes · +51 946 614 367",
    },
    {
      empresa: "OGTISE – UNASAM", ubicacion: "Huaraz, Perú",
      cargo: "Desarrollador Full Stack (Spring Boot / Angular)", fechas: "Abril 2025 – Julio 2025",
      subtitulo: "Oficina General de Tecnologías de Información, Sistemas y Estadística",
      bullets: [
        "Diseñé y desarrollé el Sistema de Gestión de Resoluciones de la UNASAM con Spring Boot y Angular, optimizando el registro, control y consulta de documentos y reduciendo los tiempos de búsqueda en más del 40%.",
        "Implementé el Sistema de Control de Visitas con registro, validación y reportes de accesos, reforzando la seguridad institucional y la trazabilidad de ingresos.",
      ],
      contacto: "Ing. Francisco Carranza Vega · fcarranzav@unasam.edu.pe",
    },
    {
      empresa: "Educa Perú", ubicacion: "Huaraz, Perú",
      cargo: "Desarrollador Full Stack", fechas: "Abril 2024 – Noviembre 2024",
      bullets: [
        "Lideré el desarrollo de una plataforma de e-commerce educativo con Laravel y React/TypeScript, integrando matrículas, pagos en línea y emisión automática de certificados en un único flujo de extremo a extremo.",
        "Optimicé la gestión académica y la experiencia de usuario, incrementando los ingresos entre un 20% y 23% durante los primeros 3 meses y fortaleciendo la visibilidad institucional.",
      ],
      contacto: "Ing. Juan Laveriano · +51 908 750 706",
    },
    {
      empresa: "Eddecap", ubicacion: "Huaraz, Perú",
      cargo: "Desarrollador Web", fechas: "Julio 2022 – Noviembre 2023",
      bullets: [
        "Diseñé, desarrollé y mantuve el sitio web corporativo aplicando buenas prácticas de desarrollo, estrategias de SEO y optimización de rendimiento, incrementando la visibilidad orgánica y fortaleciendo la presencia digital de la marca.",
      ],
      contacto: "Ing. Gerardo Rodriguez · +51 943 104 662",
    },
  ],

  educacion: [
    { institucion: "Universidad Nacional Santiago Antúnez de Mayolo", ubicacion: "Huaraz, Perú", detalle: "Ingeniería de Sistemas e Informática — Titulado", fechas: "junio 2020 – abril 2026" },
    { institucion: "Universidad Nacional Santiago Antúnez de Mayolo", ubicacion: "Huaraz, Perú", detalle: "Ingeniería de Sistemas e Informática — Bachiller", fechas: "junio 2020 – octubre 2025" },
    { institucion: "Universidad Nacional Santiago Antúnez de Mayolo", ubicacion: "Huaraz, Perú", detalle: "Ingeniería de Sistemas e Informática — Egresado", fechas: "junio 2020 – junio 2025" },
    { institucion: "Centro de Idiomas – UNASAM", ubicacion: "Huaraz, Perú", detalle: "Curso de Inglés Básico (A1)", fechas: "junio 2023 – junio 2024" },
  ],

  skillsAdicionales: [
    "Más de 3 años como desarrollador Full Stack en el sector financiero regulado (Caja Arequipa), con soluciones .NET / Angular de extremo a extremo.",
    "Diseño e integración de microservicios y APIs REST; autenticación, autorización y gestión de accesos (JWT/OAuth2).",
    "Buenas prácticas y arquitectura: Clean Architecture, principios SOLID, DDD, TDD, code review y Pull Requests (Git).",
    "Experiencia con Azure (Functions, DevOps), CI/CD y Docker; APIs verificadas con Postman.",
    "Español nativo y manejo intermedio de inglés.",
    "Residente en Perú (Lima); disponibilidad para modalidad híbrida (San Isidro) e incorporación inmediata.",
  ],

  desarrollo: [
    { anio: "2026", items: [
      "Título Profesional de Ingeniero de Sistemas e Informática — UNASAM | Abr. 2026",
      "AI Fluency: Framework & Foundations (10/10) — Anthropic | Ago. 2026",
      "AI Fluency for Builders — Anthropic | Ago. 2026",
      "Building with the Claude API — Anthropic | Ago. 2026",
      "Claude with Amazon Bedrock — Anthropic | Ago. 2026",
      "Claude on Google Cloud — Anthropic | Ago. 2026",
      "Claude Code 101 — Anthropic | Ago. 2026",
      "Claude Code in Action — Anthropic | Ago. 2026",
      "Claude 101 — Anthropic | Ago. 2026",
      "Claude Platform 101 — Anthropic | Ago. 2026",
      "Introduction to Model Context Protocol (MCP) — Anthropic | Ago. 2026",
      "Model Context Protocol: Advanced Topics — Anthropic | Ago. 2026",
      "Introduction to subagents — Anthropic | Ago. 2026",
      "Introduction to agent skills — Anthropic | Ago. 2026",
      "Introduction to Claude Cowork — Anthropic | Ago. 2026",
      "AI Capabilities and Limitations — Anthropic | Ago. 2026",
      "AI Fluency for students — Anthropic | Ago. 2026",
      "AI Fluency for educators — Anthropic | Ago. 2026",
      "AI Fluency for nonprofits — Anthropic | Ago. 2026",
      "AI Fluency for Small Businesses — Anthropic | Ago. 2026",
      "Teaching AI Fluency — Anthropic | Ago. 2026",
    ]},
    { anio: "2025", items: [
      "Grado de Bachiller en Ingeniería de Sistemas e Informática — UNASAM | Oct. 2025",
      "Certificado de Egresado — UNASAM | Ago. 2025",
      "Certificado de Superación, Inglés Básico — UNASAM | Ago. 2025",
      "Constancia de Prácticas Preprofesionales — OGTISE | Ago. 2025",
    ]},
    { anio: "2024", items: [
      "English for IT — Cisco Networking Academy | Ago. 2024",
      "Programación Java — Fundación Telefónica del Perú (Conecta Empleo) | Ago. 2024",
      "Programación Java Spring Boot — Platzi | Ago. 2024",
      "Angular Avanzado — Platzi | Ago. 2024",
      "HTML Essentials — Cisco Networking Academy | Ago. 2024",
      "CSS Essentials — Cisco Networking Academy | Ago. 2024",
      "JavaScript Essentials — Cisco Networking Academy | Ago. 2024",
      "JavaScript Advanced — Cisco Networking Academy | Ago. 2024",
      "Python Essentials — Cisco Networking Academy | Ago. 2024",
      "Python Advanced — Cisco Networking Academy | Ago. 2024",
      "Diseño Web (HTML y CSS) — Fundación Telefónica del Perú (Conecta Empleo) | Ago. 2024",
      "Aprende WordPress de forma sencilla — Fundación Telefónica del Perú (Conecta Empleo) | Ago. 2024",
      "Inspiring Study Conference — Google | Ago. 2024",
      "Lógica Difusa en Python — UNASAM (Congreso Internacional) | May. 2024",
      "Machine Learning — UNASAM (Congreso Internacional) | May. 2024",
      "Agricultura de Precisión — UNASAM (Congreso Internacional) | May. 2024",
      "AWS Cloud Fundamentos — Amazon Web Services (Training & Certification) | Abr. 2024",
    ]},
    { anio: "2022", items: [
      "Seminario de Investigación, Desarrollo, Innovación y Divulgación — UNASAM | Nov. 2022",
    ]},
  ],

  // >>> AGENTE: pon primero la categoría del rol objetivo (ej. Frontend arriba para React) <<<
  habilidades: [
    { cat: "Backend:", bullets: [
      "C# y .NET / .NET Core 6+ — diseño de APIs REST, microservicios, Jobs/Queues y autenticación/autorización con JWT/OAuth2. Java (Spring Boot) y Node.js como stack complementario.",
      "Procesamiento asíncrono y mensajería con colas (Azure Service Bus / RabbitMQ, Redis).",
      "Testing y calidad: pruebas unitarias e integración (JUnit, PHPUnit; Jasmine/Karma en frontend) y APIs verificadas con Postman.",
    ]},
    { cat: "Frontend:", bullets: [
      "React y TypeScript — componentes reutilizables, dashboards y optimización SSR/SEO (Next.js).",
      "Angular (v11–v22) y TypeScript — SPAs, formularios reactivos, RxJS.",
      "JavaScript, HTML5 y CSS3; UI con Tailwind, Bootstrap y Material; accesibilidad (WCAG) y performance (Lighthouse).",
    ]},
    { cat: "Bases de Datos:", bullets: [
      "SQL Server (2016+) y Oracle — diseño de esquemas, índices, optimización de queries e integridad transaccional. También PostgreSQL y MySQL/MariaDB.",
      "Caché y sesiones con Redis; búsqueda full-text con Elasticsearch.",
    ]},
    { cat: "Cloud & DevOps:", bullets: [
      "Azure: Azure Functions, App Service, AKS y Azure DevOps; pipelines de CI/CD (también GitHub Actions y GitLab CI).",
      "Contenedores con Docker y Docker Compose (Kubernetes); AWS (S3, EC2, RDS, IAM) como stack adicional; monitoreo con Prometheus y Grafana.",
    ]},
    { cat: "Arquitectura & Buenas Prácticas:", bullets: [
      "Microservicios, Clean Code, Clean Architecture, principios SOLID, DDD y diseño orientado a pruebas (TDD).",
      "Metodología Scrum, Git (GitHub/GitLab), Pull Requests y code review; revisión de performance y seguridad web.",
    ]},
  ],

  idiomas: [
    "Español — Nativo",
    "Inglés — Básico/Intermedio (A1 certificado)",
  ],

  labels: {
    experiencia: "EXPERIENCIA PROFESIONAL",
    educacion: "EDUCACIÓN",
    skillsAdicionales: "SKILLS ADICIONALES",
    desarrollo: "DESARROLLO PROFESIONAL",
    habilidades: "HABILIDADES",
    idiomas: "IDIOMAS",
    contacto: "Referido",
    anexos: "Anexos",
    certificados: "Certificados",
    constancias: "Constancias de Trabajo",
  },
};
