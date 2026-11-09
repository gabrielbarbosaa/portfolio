<!--
  RASCUNHO, gerado como ponto de partida. Revise, reescreva com sua voz e
  troque os trechos genéricos por exemplos reais. Comentários como este não aparecem
  no site. Para publicar: published: true em content/blog/posts.ts
-->

Passei a maior parte da carreira no front-end: React, Next.js, React Native, TypeScript. Nos últimos tempos comecei a construir serviços no back-end, em Java e Python, e isso mudou a forma como eu penso sobre software, inclusive sobre o front.

Este texto é sobre essa transição: o que eu já sabia sem saber, o que precisei aprender do zero e por que acho que todo dev front-end deveria passar um tempo do outro lado da API.

## O que eu já sabia (sem saber)

A primeira surpresa foi perceber quanta coisa do front-end se aplica direto ao back-end.

- **Pensar em contratos.** Quem já integrou dezenas de APIs sabe o que é um contrato ruim: campos que mudam de tipo, erros sem padrão, paginação inconsistente. Do lado de cá, eu sabia exatamente o tipo de API que eu *gostaria* de consumir.
- **Estados e casos de borda.** Loading, erro, vazio, sucesso parcial. Front-end treina você a pensar em todos os estados de uma tela. No back-end, os estados mudam de nome (timeout, retry, falha de um serviço externo), mas o raciocínio é o mesmo.
- **Componentização e responsabilidade única.** Separar um serviço em partes pequenas e testáveis não é tão diferente de quebrar uma tela em componentes.

<!-- Exemplo seu: alguma integração de API que te marcou no front e influenciou como você desenhou um contrato no back. -->

## O que precisei aprender do zero

Por outro lado, algumas coisas exigiram uma mudança real de mentalidade.

### Falhar é o caminho normal

No front-end, quando algo falha, quase sempre existe um usuário olhando para a tela, e dá pra mostrar uma mensagem e pedir para ele tentar de novo. No back-end, a falha muitas vezes acontece sem ninguém olhando: um provedor de e-mail fora do ar, uma fila acumulando, uma requisição duplicada.

Passei a pensar muito mais em **idempotência**, **novas tentativas** e **observabilidade**: se algo der errado às três da manhã, como eu vou saber o que aconteceu?

### Segurança não é um detalhe de implementação

Trabalhando com fluxos sensíveis, como autenticação e códigos de uso único (OTP), aprendi que segurança precisa estar no desenho do serviço, não ser adicionada no fim. Validade curta, uso único, limite de tentativas e cuidado com o que vai para os logs são decisões de arquitetura, não ajustes finos.

### O custo de uma decisão dura mais

Um componente mal feito no front costuma ser refatorado sem muito drama. Um modelo de dados ruim ou um contrato de API mal pensado pode acompanhar o sistema por anos, porque outras partes passam a depender dele. Isso me deixou mais cuidadoso no início de cada projeto e mais disposto a escrever decisões técnicas antes de escrever código.

<!-- Exemplo seu: uma decisão de modelagem ou de contrato que você tomou e por quê. Sem detalhes internos/confidenciais. -->

## O que mudou no meu front-end

O efeito mais interessante foi o caminho de volta. Depois de construir serviços, comecei a escrever front-end de outro jeito:

1. **Questiono mais as APIs que consumo**, e de forma mais construtiva, porque entendo os trade-offs de quem está do outro lado.
2. **Trato erros como parte do produto**, não como exceção. Toda falha do back-end tem uma experiência correspondente na interface.
3. **Penso no sistema inteiro.** Uma feature não é "a tela" nem "o endpoint": é o fluxo completo, do clique até o banco de dados e de volta.

## Vale a pena?

Para mim, sim. Não precisa virar especialista em back-end, mas entender o que acontece depois do `fetch` deixa você melhor em qualquer camada. E, principalmente, deixa as conversas com o time mais ricas: você para de falar "do front" ou "do back" e passa a falar do produto.

Se você é front-end e está pensando em dar esse passo, minha sugestão é começar pequeno: um serviço simples, com um contrato bem definido, testes e logs decentes. O resto vem com o tempo.

<!-- Fechamento: talvez um convite para conversar (LinkedIn) ou um link para o case "Serviço de Comunicação & OTP" em /projects/communication-service. -->
