import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "GPTW - Great Place to Work",
      description:
        "Plataforma institucional com foco em SEO e performance. Implementação de SSR com Next.js para melhor indexação e experiência do usuário.",
      technologies: ["Next.js", "TypeScript", "Chakra UI"],
      highlights: ["SSR/SSG", "SEO Otimizado", "Performance", "Acessibilidade"],
      demo: "https://gptw.com.br/",
    },
    {
      title: "Convergefy",
      description:
        "Convergefy você conecta todos os seus atendentes em um único WhatsApp. Acompanha todo o seu time em tempo real e organiza seus clientes em uma única tela.",
      technologies: [
        "React",
        "TypeScript",
        "Tanstack Query",
        "Stripe",
        "Material UI",
      ],
      highlights: ["Pagamentos", "Omnichannel"],
      demo: "https://convergefy.com.br/",
    },
    {
      title: "Automotive Business",
      description:
        "É uma plataforma de conteúdo voltada a profissionais responsáveis por construir novas respostas no setor automotivo e da mobilidade.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Tanstack Query"],
      highlights: ["SEO", "Blog", "Responsive", "Performance"],
      demo: "https://www.automotivebusiness.com.br/",
    },
    {
      title: "FleetDesk ",
      description:
        "FleetDesk é uma empresa de tecnologia logística (LogTech) que oferece soluções de gestão de frota, com foco em otimização de rotas e gerenciamento em tempo real.",
      technologies: ["React", "TypeScript", "Bootstrap", "Redux", "Jest"],
      highlights: [
        "Google Maps",
        "Testes",
        "Otimização de Rotas",
        "Gestão em Tempo Real",
      ],
      demo: "https://app.fleetdesk.io/login",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Projetos</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{project.title}</span>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Destaques:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.highlights.map((highlight, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
