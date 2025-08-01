"use client";
export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Desenvolvido por Gabriel Barbosa.
              Todos os direitos reservados.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">Feito com ❤️ e muito ☕</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
