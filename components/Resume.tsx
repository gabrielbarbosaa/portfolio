import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Download, Calendar, MapPin } from "lucide-react";

export function Resume() {
  const experiences = [
    {
      title: "Desenvolvedor Front-end Pleno",
      company: "CRIA Design Digital",
      location: "Viamão, RS",
      period: "2021 – 2024",
      description:
        "Atuação no desenvolvimento de aplicações web e mobile com React, React Native, Next.js e TypeScript. Experiência na criação de interfaces responsivas com Styled Components, Tailwind, Chakra e Mantine. Participação em todas as etapas do projeto, desde o levantamento de requisitos até o deploy, com foco em performance, manutenção e evolução de código. Trabalho colaborativo com times de design, produto e back-end para garantir entregas de qualidade.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Mantine",
        "Chakra UI",
        "Styled Components",
        "React Native",
      ],
    },
    {
      title: "Desenvolvedor Front-end Pleno",
      company: "Zaply",
      location: "Porto Alegre, RS",
      period: "2024 – 2025",
      description:
        "Desenvolvimento de aplicações web e mobile com React, React Native, Next.js e TypeScript. Criação de interfaces responsivas com Styled Components, Tailwind, Chakra e Mantine. Atuação em sistemas escaláveis e de alta performance, com foco em qualidade por meio de testes automatizados (unitários e e2e). Participação ativa em todas as etapas do projeto — do levantamento de requisitos ao deploy — incluindo integrações com APIs externas, adaptação de layout para múltiplos dispositivos, planejamento técnico e code reviews. Colaboração constante com designers, PMs e back-end para entregas alinhadas ao produto.",
      technologies: ["React", "Chakra UI", "Zustand", "Vite", "TypeScript"],
    },
    {
      title: "Desenvolvedor Front-end Pleno",
      company: "CRIA Design Digital",
      location: "Viamão, RS",
      period: "2025 – Atual",
      description:
        "Atuação no desenvolvimento de aplicações web e mobile com React, React Native, Next.js e TypeScript. Experiência na criação de interfaces responsivas com Styled Components, Tailwind, Chakra e Mantine. Participação em todas as etapas do projeto, desde o levantamento de requisitos até o deploy, com foco em performance, manutenção e evolução de código. Trabalho colaborativo com times de design, produto e back-end para garantir entregas de qualidade.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Mantine",
        "Chakra UI",
        "Styled Components",
        "React Native",
      ],
    },
  ];

  const education = [
    {
      title: "Bacharelado em Engenharia de Software (em andamento)",
      institution: "Universidade Cruzeiro do Sul",
      period: "2024 - 2028",
      description:
        "O curso abrange diversas áreas da tecnologia da informação, como programação, desenvolvimento web e mobile, banco de dados e gestão de projetos de software.",
    },
    {
      title: "Curso de HTML/CSS e JavaScript",
      institution: "TargetTrust",
      period: "2018",
      description:
        "Especialização em desenvolvimento web com foco em HTML, CSS e JavaScript.",
    },
    {
      title: "Curso de Orientação a Objetos com Java",
      institution: "TargetTrust",
      period: "2018",
      description:
        "Aprofundamento em conceitos de programação orientada a objetos utilizando Java, incluindo herança, polimorfismo e encapsulamento.",
    },
    {
      title: "Curso de Angular",
      institution: "TargetTrust",
      period: "2019",
      description:
        "Capacitação em desenvolvimento de aplicações web utilizando Angular.",
    },
    {
      title: "Curso de JavaScript Avançado",
      institution: "TargetTrust",
      period: "2019",
      description:
        "Aperfeiçoamento em JavaScript com foco em técnicas avançadas, incluindo ES6+ e padrões de design.",
    },
  ];

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl">Currículo</h2>
            <Button className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
          </div>

          {/* Experience */}
          <div className="mb-12">
            <h3 className="text-2xl mb-8">Experiência Profissional</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <span>{exp.title}</span>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </CardTitle>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h3 className="text-2xl mb-8">Formação Acadêmica</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <span>{edu.title}</span>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                    </CardTitle>
                    <p className="text-primary font-medium">
                      {edu.institution}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
