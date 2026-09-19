export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  status: string;
  year: string;
  description: string;
  highlights: string[];
  isEditable?: boolean;
}

export interface ProjectItem {
  id: string;
  category: "Web" | "Mobile" | "Systems" | "IT" | "Other";
  title: string;
  categoryLabel: string;
  description: string;
  technologies: string[];
  problem: string;
  solution: string;
  role: string;
  keyFeatures: string[];
  challenges: string[];
  results: string;
  githubUrl?: string;
  demoUrl?: string;
  isPlaceholder?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  responsibilities: string[];
  isPlaceholder?: boolean;
}

export interface CertificationItem {
  id: string;
  name: string;
  institution: string;
  year: string;
  category: "Certification" | "Workshop" | "Course" | "Research" | "Conference";
  isPlaceholder?: boolean;
}

export const initialEducationData: EducationItem[] = [
  {
    id: "jkuat",
    institution: "Jomo Kenyatta University of Agriculture and Technology (JKUAT)",
    degree: "[Add Degree / Program]",
    status: "Completed",
    year: "[Add Year]",
    description:
      "Established foundational knowledge in computing concepts, software design, mathematical analysis, and structured problem-solving that anchor modern engineering practices.",
    highlights: [
      "Rigorous grounding in computing and software fundamentals",
      "Algorithmic thinking and analytical systems approach",
      "Foundation in engineering principles and structured analysis"
    ],
    isEditable: true,
  },
  {
    id: "strathmore",
    institution: "Strathmore University",
    degree: "Master's Degree in Information Technology",
    status: "Completed",
    year: "[Add Graduation Year]",
    description:
      "Advanced postgraduate study focused on enterprise information systems, technological strategy, digital architecture, data stewardship, and large-scale digital transformation.",
    highlights: [
      "Completed Master's qualification with advanced curriculum",
      "Information systems architecture and organizational technology integration",
      "Digital transformation paradigms and strategic technology governance"
    ],
    isEditable: true,
  },
];

export const initialProjectsData: ProjectItem[] = [
  {
    id: "proj-web",
    category: "Web",
    categoryLabel: "Web Application",
    title: "[Project Name: Modern Web Platform]",
    description:
      "[Add project description — e.g., A modern responsive web application built to streamline operations and enhance user experience.]",
    technologies: ["[Add Frontend Tech]", "[Add Backend Tech]", "[Add Database]", "[Add Cloud Hosting]"],
    problem:
      "[Add problem statement — e.g., Users required a fast, responsive interface to manage and visualize complex operational data without latency.]",
    solution:
      "[Add solution approach — e.g., Architected a modular web application with component-driven UI and streamlined REST/GraphQL API integration.]",
    role: "[Add your role — e.g., Lead Software Engineer / Full Stack Developer]",
    keyFeatures: [
      "[Add key feature — Responsive user dashboard]",
      "[Add key feature — Secure user authentication & session management]",
      "[Add key feature — Real-time state synchronization]",
      "[Add key feature — Clean RESTful API integrations]"
    ],
    challenges: [
      "[Add challenge — Ensuring cross-device compatibility and optimal sub-second page loads.]"
    ],
    results:
      "[Add results — e.g., Improved processing efficiency and provided a seamless user experience across mobile and desktop devices.]",
    githubUrl: "https://github.com/[username]/[repo]",
    demoUrl: "https://[demo-link].example.com",
    isPlaceholder: true,
  },
  {
    id: "proj-enterprise",
    category: "Systems",
    categoryLabel: "Enterprise System",
    title: "[Project Name: Enterprise Information System]",
    description:
      "[Add project description — e.g., Scalable enterprise platform designed to coordinate multi-departmental workflows and data governance.]",
    technologies: ["[Add Core Language]", "[Add Enterprise Framework]", "[Add SQL Database]", "[Add API Gateway]"],
    problem:
      "[Add problem statement — e.g., Siloed departmental records and redundant manual processes slowed decision-making.]",
    solution:
      "[Add solution approach — e.g., Implemented a centralized architecture with role-based access control and unified reporting.]",
    role: "[Add your role — e.g., Systems Engineer / Solutions Architect]",
    keyFeatures: [
      "[Add key feature — Centralized data management and auditing]",
      "[Add key feature — Granular role-based permissions]",
      "[Add key feature — Automated workflow notifications and pipelines]",
      "[Add key feature — Robust transactional data integrity]"
    ],
    challenges: [
      "[Add challenge — Harmonizing disparate legacy formats while maintaining zero downtime.]"
    ],
    results:
      "[Add results — e.g., Reduced inter-departmental turnaround times and improved data auditability.]",
    githubUrl: "https://github.com/[username]/[enterprise-system]",
    demoUrl: "",
    isPlaceholder: true,
  },
  {
    id: "proj-mobile",
    category: "Mobile",
    categoryLabel: "Mobile Application",
    title: "[Project Name: Cross-Platform Mobile Solution]",
    description:
      "[Add project description — e.g., Intuitive cross-platform mobile application providing on-the-go utility for field users and consumers.]",
    technologies: ["[Add Mobile Framework]", "[Add State Management]", "[Add Cloud Backend]", "[Add Push Notification Service]"],
    problem:
      "[Add problem statement — e.g., End users lacked offline-first capability to submit service inquiries and view critical alerts.]",
    solution:
      "[Add solution approach — e.g., Built an intuitive mobile client featuring local caching, biometric authentication, and smooth micro-interactions.]",
    role: "[Add your role — e.g., Mobile Software Engineer]",
    keyFeatures: [
      "[Add key feature — Offline-first data caching and sync]",
      "[Add key feature — Native device capability integrations]",
      "[Add key feature — Push alerts and transactional tracking]",
      "[Add key feature — Accessible and touch-optimized navigation]"
    ],
    challenges: [
      "[Add challenge — Managing edge-network connectivity variations without degrading UI responsiveness.]"
    ],
    results:
      "[Add results — e.g., High adoption rate with 99.8% crash-free sessions across target handsets.]",
    githubUrl: "https://github.com/[username]/[mobile-app]",
    demoUrl: "",
    isPlaceholder: true,
  },
  {
    id: "proj-it",
    category: "IT",
    categoryLabel: "Information Management System",
    title: "[Project Name: Data & Information Repository]",
    description:
      "[Add project description — e.g., Secure knowledge and document lifecycle management platform built to enforce data retention policies.]",
    technologies: ["[Add Information Framework]", "[Add Search Indexer]", "[Add Storage Layer]", "[Add Identity Provider]"],
    problem:
      "[Add problem statement — e.g., Inefficient document discovery and inconsistent classification across distributed digital files.]",
    solution:
      "[Add solution approach — e.g., Structured relational metadata models paired with semantic indexing and audit trails.]",
    role: "[Add your role — e.g., IT Systems Analyst / Engineer]",
    keyFeatures: [
      "[Add key feature — Automated document categorization & indexing]",
      "[Add key feature — End-to-end data transmission security]",
      "[Add key feature — Compliance reporting & lifecycle archiving]",
      "[Add key feature — Fast filtered search queries]"
    ],
    challenges: [
      "[Add challenge — Balancing comprehensive compliance logging with high-throughput query performance.]"
    ],
    results:
      "[Add results — e.g., Elevated institutional search discovery and compliance readiness.]",
    githubUrl: "",
    demoUrl: "",
    isPlaceholder: true,
  },
  {
    id: "proj-digital",
    category: "Other",
    categoryLabel: "Digital Transformation Project",
    title: "[Project Name: Digital Process Modernization]",
    description:
      "[Add project description — e.g., Strategic digitalization initiative replacing manual paper workflows with automated services.]",
    technologies: ["[Add Process Engine]", "[Add Web Services]", "[Add Integration APIs]", "[Add Analytics Tool]"],
    problem:
      "[Add problem statement — e.g., Manual paper-based intake caused long wait times and potential operational inconsistencies.]",
    solution:
      "[Add solution approach — e.g., Re-engineered intake steps into self-service digital workflows backed by automated routing.]",
    role: "[Add your role — e.g., Digital Solutions Consultant / Engineer]",
    keyFeatures: [
      "[Add key feature — Digital intake forms with validation]",
      "[Add key feature — Automated workflow stage progression]",
      "[Add key feature — Real-time progress tracker for stakeholders]",
      "[Add key feature — Operational throughput telemetry]"
    ],
    challenges: [
      "[Add challenge — Aligning technical architecture with existing business procedures and user habits.]"
    ],
    results:
      "[Add results — e.g., Significant reduction in operational bottleneck and improved transparency.]",
    githubUrl: "",
    demoUrl: "",
    isPlaceholder: true,
  },
];

export const initialExperienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Software Engineering",
    organization: "[Add Organization / Company Name]",
    period: "[Year – Year]",
    description:
      "[Add responsibilities and achievements — e.g., Designing, coding, and maintaining robust software applications, participating in code reviews, and optimizing system performance.]",
    responsibilities: [
      "[Add responsibility — Application architecture & feature development]",
      "[Add responsibility — REST API integration and performance tuning]",
      "[Add responsibility — Cross-functional collaboration with stakeholders and QA]"
    ],
    isPlaceholder: true,
  },
  {
    id: "exp-2",
    role: "Information Technology",
    organization: "[Add Organization / Company Name]",
    period: "[Year – Year]",
    description:
      "[Add responsibilities — e.g., Supporting technology infrastructure, administering enterprise information systems, evaluating digital tools, and ensuring data security standards.]",
    responsibilities: [
      "[Add responsibility — Systems analysis and requirements gathering]",
      "[Add responsibility — IT infrastructure and service continuity oversight]",
      "[Add responsibility — Digital asset security and workflow optimization]"
    ],
    isPlaceholder: true,
  },
  {
    id: "exp-3",
    role: "Independent / Professional Projects",
    organization: "Technology Projects & Consultations",
    period: "Continuous",
    description:
      "Technology-focused projects involving software development, information systems and digital solutions designed to address specific technical and operational challenges.",
    responsibilities: [
      "Custom software prototyping and functional application builds",
      "Analysis of technical architectures and software engineering best practices",
      "Evaluation and deployment of emerging frameworks and digital tools"
    ],
    isPlaceholder: false,
  },
];

export const initialCertificationsData: CertificationItem[] = [
  {
    id: "cert-1",
    name: "[Add Certification Name — e.g. AWS Certified Solutions Architect / Professional Developer]",
    institution: "[Add Institution / Issuing Body]",
    year: "[Add Year]",
    category: "Certification",
    isPlaceholder: true,
  },
  {
    id: "cert-2",
    name: "[Add Technical Workshop — e.g. Advanced Distributed Systems & Microservices]",
    institution: "[Add Organizer / Institution]",
    year: "[Add Year]",
    category: "Workshop",
    isPlaceholder: true,
  },
  {
    id: "cert-3",
    name: "[Add Professional Course — e.g. Modern Software Architecture & API Design]",
    institution: "[Add Platform / University]",
    year: "[Add Year]",
    category: "Course",
    isPlaceholder: true,
  },
  {
    id: "cert-4",
    name: "[Add Technology Conference / Summit — e.g. Kenya Tech Summit / Global Dev Conference]",
    institution: "[Add Conference Name]",
    year: "[Add Year]",
    category: "Conference",
    isPlaceholder: true,
  },
];

export const initialTechBadges = {
  programming: ["[Add Language 1]", "[Add Language 2]", "[Add Language 3]"],
  frontend: ["[Add Frontend Framework]", "[Add CSS Tooling]", "[Add Web Standards]"],
  backend: ["[Add Backend Runtime]", "[Add API Framework]", "[Add Service Architecture]"],
  databases: ["[Add Relational DB]", "[Add NoSQL DB]", "[Add Cache/Memory Store]"],
  cloud: ["[Add Cloud Platform]", "[Add Deployment / CI/CD]", "[Add Containerization]"],
  tools: ["[Add Version Control: Git]", "[Add Testing Library]", "[Add IDE / Monitoring]"],
};

export const initialContactInfo = {
  email: "[Add Email — e.g. jackline@example.com]",
  phone: "[Add Phone — e.g. +254 700 000 000]",
  location: "Kenya",
  linkedin: "[Add LinkedIn Profile URL]",
  github: "[Add GitHub Profile URL]",
  website: "[Add Personal Domain or Portfolio URL]",
};
