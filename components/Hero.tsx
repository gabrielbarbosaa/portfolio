import Link from "next/link";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjectsClick = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-background to-muted/20"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Desenvolvedor Front-End e Mobile
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Focado em performance, UX e código de qualidade. Especializado em
            React, React Native, Next.js e tecnologias modernas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={handleProjectsClick}
              size="lg"
              className="flex items-center gap-2 cursor-pointer"
            >
              Veja meus projetos
            </Button>
            <Button
              onClick={handleContactClick}
              variant="outline"
              size="lg"
              className="flex items-center gap-2 cursor-pointer"
            >
              Entre em contato
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Link
              href="https://github.com/gabrielbarbosaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/gabriel-barbosa-azevedo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:gbarbosa1602@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
