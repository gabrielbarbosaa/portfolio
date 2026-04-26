export interface Skill {
  name: string;
  isPrimary: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  experience: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "Monitor",
    experience: "5+ anos",
    skills: [
      { name: "React", isPrimary: true },
      { name: "Next.js", isPrimary: true },
      { name: "TypeScript", isPrimary: true },
      { name: "JavaScript", isPrimary: false },
      { name: "HTML5", isPrimary: false },
      { name: "CSS3", isPrimary: false },
    ],
  },
  {
    title: "Mobile",
    icon: "Smartphone",
    experience: "3+ anos",
    skills: [
      { name: "React Native", isPrimary: true },
      { name: "Expo", isPrimary: true },
      { name: "React Navigation", isPrimary: false },
      { name: "AsyncStorage", isPrimary: false },
      { name: "Push Notifications", isPrimary: false },
      { name: "App Store Deploy", isPrimary: false },
    ],
  },
  {
    title: "Estilização",
    icon: "Palette",
    experience: "5+ anos",
    skills: [
      { name: "Tailwind CSS", isPrimary: true },
      { name: "Styled Components", isPrimary: true },
      { name: "Chakra UI", isPrimary: false },
      { name: "Material-UI", isPrimary: false },
      { name: "Bootstrap", isPrimary: false },
      { name: "Mantine", isPrimary: false },
    ],
  },
  {
    title: "Backend",
    icon: "Database",
    experience: "3+ anos",
    skills: [
      { name: "Node.js", isPrimary: true },
      { name: "Nest.js", isPrimary: false },
      { name: "PostgreSQL", isPrimary: false },
      { name: "MongoDB", isPrimary: false },
    ],
  },
  {
    title: "Testes",
    icon: "TestTube",
    experience: "3+ anos",
    skills: [
      { name: "Jest", isPrimary: true },
      { name: "Testing Library", isPrimary: true },
      { name: "Cypress", isPrimary: false },
      { name: "Unit Tests", isPrimary: false },
      { name: "E2E Tests", isPrimary: false },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "Settings",
    experience: "4+ anos",
    skills: [
      { name: "Git", isPrimary: true },
      { name: "Docker", isPrimary: false },
      { name: "Vercel", isPrimary: false },
      { name: "AWS", isPrimary: false },
      { name: "CI/CD", isPrimary: false },
      { name: "Webpack", isPrimary: false },
    ],
  },
];

export interface Framework {
  name: string;
  category: string;
}

export const frameworks: Framework[] = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Fullstack" },
  { name: "React Native", category: "Mobile" },
  { name: "Node.js", category: "Backend" },
  { name: "Nest.js", category: "Backend" },
  { name: "TypeScript", category: "Language" },
];

export const tools: string[] = [
  "VS Code",
  "Figma",
  "Postman",
  "Notion",
  "Slack",
  "Jira",
  "Trello",
  "Firebase",
  "Vercel",
  "GitHub",
];

export const methodologies: string[] = [
  "Clean Code",
  "SOLID",
  "Agile/Scrum",
  "Code Review",
  "Pair Programming",
  "CI/CD",
  "Git Flow",
  "Responsive Design",
  "Performance Optimization",
  "SEO",
  "Accessibility",
];
