import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";

export function Skills() {
  const skillCategories = [
    {
      title: "Linguagens",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Python", level: 30 },
      ],
    },
    {
      title: "Frameworks & Bibliotecas",
      skills: [
        { name: "React", level: 95 },
        { name: "React Native", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Nest.js", level: 50 },
      ],
    },
    {
      title: "Estilização",
      skills: [
        { name: "Tailwind CSS", level: 90 },
        { name: "Material UI", level: 85 },
        { name: "Chakra UI", level: 85 },
        { name: "Mantine", level: 80 },
      ],
    },
    {
      title: "Ferramentas & Outros",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "Jest", level: 75 },
        { name: "Cypress", level: 70 },
      ],
    },
  ];

  const tools = [
    "Figma",
    "Adobe XD",
    "VS Code",
    "Postman",
    "Notion",
    "Slack",
    "Jira",
    "Trello",
    "Firebase",
    "Vercel",
    "Netlify",
    "AWS",
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            Habilidades
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Ferramentas & Plataformas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge key={index} variant="secondary">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
