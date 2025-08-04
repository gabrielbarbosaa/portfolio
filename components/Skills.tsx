import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Code,
  Smartphone,
  Database,
  Palette,
  TestTube,
  Settings,
  Layers,
  Monitor,
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Monitor className="w-5 h-5" />,
      experience: "5+ anos",
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
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
      icon: <Smartphone className="w-5 h-5" />,
      experience: "3+ anos",
      color: "bg-green-500/10 text-green-600 dark:text-green-400",
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
      icon: <Palette className="w-5 h-5" />,
      experience: "5+ anos",
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
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
      icon: <Database className="w-5 h-5" />,
      experience: "3+ anos",
      color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
      skills: [
        { name: "Node.js", isPrimary: true },
        { name: "Nest.js", isPrimary: false },
        { name: "PostgreSQL", isPrimary: false },
        { name: "MongoDB", isPrimary: false },
      ],
    },
    {
      title: "Testes",
      icon: <TestTube className="w-5 h-5" />,
      experience: "3+ anos",
      color: "bg-red-500/10 text-red-600 dark:text-red-400",
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
      icon: <Settings className="w-5 h-5" />,
      experience: "4+ anos",
      color: "bg-gray-500/10 text-gray-600 dark:text-gray-400",
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

  const frameworks = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Fullstack" },
    { name: "React Native", category: "Mobile" },
    { name: "Node.js", category: "Backend" },
    { name: "Nest.js", category: "Backend" },
    { name: "TypeScript", category: "Language" },
  ];

  const tools = [
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

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            Habilidades
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`p-2 rounded-lg ${category.color}`}>
                        {category.icon}
                      </div>
                      <span>{category.title}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {category.experience}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant={skill.isPrimary ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-12">
            <h3 className="text-xl mb-6 text-center">
              Principais Frameworks & Tecnologias
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {frameworks.map((framework, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Code className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-medium mb-1">{framework.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {framework.category}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="w-5 h-5" />
                Ferramentas & Plataformas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{tool}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <h3 className="text-xl mb-6">Metodologias & Práticas</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
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
              ].map((practice, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {practice}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
