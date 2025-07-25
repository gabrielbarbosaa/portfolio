import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Smartphone, Globe, Users } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Desenvolvimento Web",
      description: "Especializado em React, Next.js e TypeScript",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Desenvolvimento Mobile",
      description: "Apps com React Native",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Performance & SEO",
      description: "Otimização para web e experiência do usuário",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Metodologias Ágeis",
      description: "Scrum, TDD e boas práticas de desenvolvimento",
    },
  ];

  const technologies = [
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Styled Components",
    "NestJs",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "Git",
    "Docker",
    "Jest",
    "Cypress",
    "Figma",
    "Adobe XD",
    "Adobe Photoshop",
    "Adobe Illustrator",
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Sobre Mim</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl mb-4">Minha Jornada</h3>
              <p className="text-muted-foreground mb-4">
                Desenvolvedor apaixonado por tecnologia com mais de 5 anos de
                experiência criando aplicações web e mobile que impactam
                positivamente a vida das pessoas.
              </p>
              <p className="text-muted-foreground mb-4">
                Especializado em React e React Native, com forte conhecimento em
                performance, acessibilidade e boas práticas de desenvolvimento.
                Sempre em busca de aprender novas tecnologias e metodologias.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {highlights.map((highlight, index) => (
                <Card key={index} className="p-4">
                  <CardContent className="flex items-start gap-3 p-0">
                    <div className="text-primary mt-1">{highlight.icon}</div>
                    <div>
                      <h4 className="font-semibold mb-1">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-6">Tecnologias & Ferramentas</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
