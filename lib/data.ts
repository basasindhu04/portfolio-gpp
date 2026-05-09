export const personalInfo = {
  name: "SINDHU LATHA",
  title: "Software Developer",
  email: "basasindhu04@gmail.com",
  github: "https://github.com/basasindhu04",
  linkedin: "https://linkedin.com/in/sindhulatha-basa",
  codechef: "https://www.codechef.com/users/basasindhu_04"
}

export const typingTexts = [
  "Software Developer",
  "Backend Engineer",
  "Distributed Systems Builder",
  "Problem Solver",
]

export const about = `I'm a Computer Science undergraduate specializing in backend engineering, with strong foundations in data structures, system design, and distributed systems. I build high-performance APIs and scalable architectures that power modern applications.`

export const skills = {
  languages: ["Java", "Python", "C++", "TypeScript", "JavaScript"],
  backend: ["Node.js", "Express.js", "REST APIs", "GraphQL", "FastAPI"],
  coreCS: ["DSA", "OS", "DBMS", "Computer Networks", "OOP"],
  systems: ["Distributed Systems", "Caching", "Rate Limiting", "Fault Tolerance", "Load Balancing"],
  databases: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "DynamoDB"],
  tools: ["Docker", "Git", "Linux", "CI/CD", "AWS", "Kubernetes"],
}

export interface Project {
  id: string
  title: string
  description: string
  impact: string
  techStack: string[]
  tags: string[]
  github: string
  demo?: string
  category: "featured" | "systems" | "ai" | "fullstack" | "web3" | "other"
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: "zk-rollup-payments",
    title: "ZK-Rollup Based Payment System",
    description: "A secure and scalable payment system leveraging Zero-Knowledge Rollups for efficient transactions on the blockchain.",
    impact: "High throughput secure transactions",
    techStack: ["Dart", "Docker", "Ethers.js", "Express.js", "Flutter", "Hardhat", "Node.js", "PostgreSQL", "Solidity", "TypeScript"],
    tags: ["Web3", "ZK-Rollups", "Payments", "Blockchain"],
    github: "https://github.com/basasindhu04/zk-rollup-payments",
    category: "featured",
    featured: true,
  },
  {
    id: "multi-tenant-saas",
    title: "Multi-Tenant SaaS Platform",
    description: "Enterprise-grade SaaS platform built with completely isolated multi-tenant architecture and robust authentication.",
    impact: "Scalable platform for organizational management",
    techStack: ["bcrypt", "Docker", "Express.js", "Git", "JWT", "Node.js", "PostgreSQL", "Postman", "React", "Swagger"],
    tags: ["SaaS", "Multi-Tenancy", "Security"],
    github: "https://github.com/basasindhu04/multi-tenant-saas",
    category: "featured",
    featured: true,
  },
  {
    id: "api-gateway",
    title: "Resilient API Gateway with Redis",
    description: "High-performance, resilient API Gateway utilizing Redis caching to optimize routing and significantly reduce backend load.",
    impact: "Optimized routing and load management",
    techStack: ["Docker", "Express.js", "FastAPI", "Go", "Java", "Postman", "Python", "Redis", "Spring Boot", "TypeScript"],
    tags: ["API Gateway", "Resilience", "Microservices"],
    github: "https://github.com/basasindhu04/API-Gateway-Proxy-Service",
    category: "featured",
    featured: true,
  }
]

export const experience = [
  {
    title: "Backend Engineering Intern",
    company: "Tech Startup",
    period: "Jun 2025 - Present",
    description: "Building scalable microservices and optimizing database performance.",
    achievements: [
      "Reduced API latency by 40% through caching strategies",
      "Implemented event-driven architecture for real-time features",
      "Mentored junior developers on best practices",
    ],
  },
  {
    title: "Software Development Intern",
    company: "Company Name",
    period: "Jan 2025 - May 2025",
    description: "Worked on full-stack development and API integrations.",
    achievements: [
      "Developed RESTful APIs serving 10K+ daily requests",
      "Integrated third-party payment and notification services",
      "Collaborated with cross-functional teams on product features",
    ],
  },
  {
    title: "Open Source Contributor",
    company: "Various Projects",
    period: "2024 - Present",
    description: "Contributing to open-source backend frameworks and tools.",
    achievements: [
      "Contributed to popular Node.js libraries",
      "Fixed critical bugs in distributed systems tools",
      "Improved documentation for developer experience",
    ],
  },
]

export const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "ADITYA UNIVERSITY",
    period: "2024 - Present",
    grade: "CGPA: 8.9",
  },
  {
    degree: "Diploma in Computer Science",
    institution: "INTERNATIONAL SCHOOLS OF TECHNOLOGY AND SCIENCES",
    period: "2021 - 2024",
    grade: "90.92%",
  },
  {
    degree: "High School",
    institution: "AMG RESDENTIAL HIGH SCHOOL",
    period: "2021",
    grade: "100%",
  },
]

export const achievements = [
  { label: "DSA Problems Solved", value: 500, suffix: "+" },
  { label: "Projects Completed", value: 25, suffix: "+" },
  { label: "GitHub Contributions", value: 300, suffix: "+" },
  { label: "Internships", value: 2, suffix: "" },
]

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]
