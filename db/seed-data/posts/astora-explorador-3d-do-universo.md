Astora é um explorador 3D do Universo que roda no navegador. Você arrasta para girar, rola para dar zoom e clica em qualquer astro para ver o que ele é, os dados principais e algumas curiosidades. Começou como um modelo do Sistema Solar e, em poucas iterações, virou cinco escalas: telescópios, Sistema Solar, vizinhança estelar, Via Láctea e Grupo Local.

Este texto conta como ele é feito, quais atalhos eu tomei de propósito e o que aprendi tentando fazer o espaço caber numa aba do navegador.

## A ideia: o zoom como navegação

A pergunta que guiou o projeto foi simples: dá para sair da Terra e chegar em outra galáxia usando só o scroll? O problema é que o espaço é absurdamente grande. Se tudo estivesse na mesma escala, os planetas seriam pontos invisíveis e as galáxias ficariam a milhões de unidades de distância.

A solução foi parar de tentar uma cena única. Cada escala é um **nível** independente, com seu próprio módulo, sua própria câmera e suas próprias regras de proporção:

| Nível | O que mostra |
|---|---|
| Telescópios | cerca de 30 observatórios, em órbita e em solo, como Hubble, James Webb, ALMA e VLT |
| Sistema Solar | Sol, planetas, luas, anéis, planetas anões e cinturões |
| Vizinhança Estelar | cerca de 17 estrelas próximas, com seus exoplanetas |
| Via Láctea | a galáxia em dezenas de milhares de partículas, nebulosas, pulsar e buracos negros |
| Grupo Local | Andrômeda, Nuvens de Magalhães, M87* e outras |

Os atalhos de teclado fazem parte da experiência: `1` a `4` trocam de escala, `/` abre uma busca para pular direto para um astro e as setas passam para o anterior ou o próximo.

## A stack

É propositalmente enxuta: **Three.js** para o 3D e **Vite** para o build, com JavaScript puro e sem framework de UI. O conteúdo de cada astro fica em arquivos de dados em português, separados do código de cena, então adicionar um observatório ou uma estrela é editar um objeto, não mexer no motor.

O projeto tem cerca de duas mil linhas, divididas em três partes:

- `src/levels/`: um módulo por escala, construído **sob demanda** (só quando você entra nela);
- `src/engine/`: o que é compartilhado, como as partículas de galáxia, os marcadores e o shader do buraco negro;
- `src/data/`: o conteúdo de cada astro.

## Um buraco negro que é só um shader

A parte de que mais gostei foi o buraco negro. Sagitário A* e Cygnus X-1 não são esferas pretas com um anel em volta. Cada um é um quadro (um *billboard*) que sempre encara a câmera, desenhado por um fragment shader.

Dentro dele, o shader calcula a sombra, o anel de fótons e o disco de acreção. O lado do disco que se aproxima de você fica mais brilhante, imitando o efeito Doppler. E há uma faixa de luz que dobra por cima e por baixo da sombra, que é o efeito da lente gravitacional: a luz do lado de trás do disco chegando até você.

A inclinação do disco não é fixa. Ela vem do ângulo entre a câmera e o eixo de rotação, então, ao girar a visão, o disco abre e fecha como se fosse um objeto de verdade. É um truque barato, e aqui isso é uma qualidade: custa muito menos do que simular a física de verdade.

## Uma Terra com noite de verdade

As texturas reais da Terra (cores, relevo, oceano, nuvens e luzes de cidade) entram com um detalhe que faz diferença: as luzes das cidades só acendem **no lado escuro**. Para isso, estendi o material padrão do Three.js e multipliquei a emissão pela posição do Sol em relação a cada ponto da superfície.

Outro ajuste: o mapa de reflexo do oceano vira um mapa de rugosidade, invertido em um canvas, para o oceano ficar liso e brilhante e a terra ficar fosca.

Para os demais planetas, usei uma abordagem de carregamento sob demanda. Cada astro começa com uma textura procedural leve e só troca para a textura real em 2K quando a câmera chega perto. Isso economiza rede e memória de vídeo: você só baixa o que de fato olhou de perto.

## Performance: o que fez a diferença

Para renderizar dezenas de milhares de estrelas em uma galáxia sem travar, algumas decisões pesaram mais do que qualquer micro-otimização:

- **Um único `Points`** com um shader próprio para todas as partículas da galáxia, em vez de um objeto por estrela;
- **Níveis construídos sob demanda**, para não pagar pelo que você ainda não abriu;
- **Pixel ratio limitado a 2**, porque telas muito densas custam caro e quase não melhoram a imagem;
- **Bloom desligado** e **menos partículas em dispositivos touch**.

## Fidelidade: o que é real e o que é estilizado

Um explorador do Universo pode induzir a erros se não for honesto sobre onde simplifica. Por isso o README do projeto tem uma seção dedicada a isso. Em resumo:

- No **Sistema Solar**, as distâncias e os diâmetros dos planetas são proporcionais entre si. Já o Sol é desenhado menor do que o real, e as órbitas das luas são estilizadas.
- Na **vizinhança estelar**, as posições das estrelas são reais (ascensão reta, declinação e distância), exceto algumas gigantes com a distância comprimida.
- Na **Via Láctea** e no **Grupo Local**, a forma das galáxias é estilizada por tipo (não são mapas reais), as distâncias usam raiz quadrada e buracos negros e jatos aparecem em escala exagerada.

Prefiro um projeto que diz claramente "isto é uma representação" a um que finge ser um mapa.

## O que vem a seguir

Na lista estão texturas em formatos mais leves (KTX2 e WebP), mais luas, constelações e o deploy em uma URL pública. As texturas planetárias vêm do Solar System Scope (licença CC BY 4.0), baseadas em dados da NASA, e os créditos ficam no repositório.

Se você curte 3D no navegador, minha sugestão é a mesma que me trouxe até aqui: escolha um assunto que você acha lindo, comece pelo menor pedaço que já funciona e vá aumentando a escala, literalmente, um nível de cada vez.
