import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Copy,
  Clock,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

export function Contact() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copiado para a área de transferência!");
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "gbarbosa1602@gmail.com",
      description: "Melhor forma para propostas e projetos",
      action: "mailto:gbarbosa1602@gmail.com",
      actionLabel: "Enviar Email",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "WhatsApp",
      value: "+55 (51) 99171-6040",
      description: "Para conversas rápidas e dúvidas",
      action: "https://wa.me/5551991716040",
      actionLabel: "Abrir WhatsApp",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      title: "GitHub",
      username: "@gabrielbarbosaa",
      description: "Veja meus projetos e contribuições",
      href: "https://github.com/gabrielbarbosaa/",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: "LinkedIn",
      username: "Gabriel Barbosa",
      description: "Conecte-se profissionalmente",
      href: "https://linkedin.com",
    },
  ];

  const availability = {
    status: "Disponível para novos projetos",
    workingHours: "Segunda a Sexta, 9h às 18h",
    timezone: "UTC-3 (Brasília)",
    responseTime: "Resposta em até 24h",
  };

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Entre em Contato</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interessado em trabalhar juntos? Vamos conversar sobre seu próximo
              projeto.
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-lg font-medium">
                    {availability.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {availability.workingHours}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {availability.timezone}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {availability.responseTime}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <h3 className="text-xl font-medium">Formas de Contato</h3>
              {contactMethods.map((method, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="text-primary">{method.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{method.title}</h4>
                        <p className="text-muted-foreground text-sm mb-2">
                          {method.description}
                        </p>
                        <p className="font-mono text-sm mb-3">{method.value}</p>
                        <div className="flex gap-2">
                          <Button size="sm" asChild>
                            <a
                              href={method.action}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              {method.actionLabel}
                            </a>
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyToClipboard(method.value)}
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Redes Sociais */}
            <div className="space-y-6">
              <h3 className="text-xl font-medium">Redes Sociais</h3>
              {socialLinks.map((social, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="text-primary">{social.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{social.title}</h4>
                        <p className="text-muted-foreground text-sm mb-2">
                          {social.description}
                        </p>
                        <p className="text-sm mb-2">{social.username}</p>
                        <div className="flex items-center justify-between">
                          <Button size="sm" variant="outline" asChild>
                            <Link
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Visitar
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Localização & Trabalho
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Localização</h4>
                  <p className="text-muted-foreground">
                    Porto Alegre, RS - Brasil
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Fuso horário: UTC-3
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Modalidade</h4>
                  <p className="text-muted-foreground">Trabalho remoto</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Idiomas</h4>
                  <p className="text-muted-foreground">Português (Nativo)</p>
                  <p className="text-muted-foreground text-sm">
                    Inglês (Técnico)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-xl mb-4">Pronto para começar seu projeto?</h3>
            <p className="text-muted-foreground mb-6">
              Entre em contato e vamos transformar suas ideias em realidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="mailto:gbarbosa1602@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Enviar Email
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://wa.me/5551991716040"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
