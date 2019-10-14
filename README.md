# PUC-RS Front-end challenge

Esse projeto é a solução para um desafio de front-end proposto pela Pontifícia Universidade Católica do Rio Grande do Sul.

### Introdução

Desenvolvido utilizando apenas [Bootstrap](https://getbootstrap.com/), [WOW.js](https://wowjs.uk/) e [Animate.css](https://daneden.github.io/animate.css/) de frameworks, o projeto foi desenvolvido com **HTML5**, **CSS3** e **JavaScript**, manipulando o _DOM_ sempre que necessário por meio de **JavaScript** puro para adequar o site ao protótipo e as descrições concedidas no desafio.

### Como abrir

Para rodar o projeto, simplesmente abra o _index.html_ presente no diretório raiz desse repositório.

## Considerações

### Melhorias implementadas

Algumas melhorias foram implementadas no projeto após a conclusão do mesmo, melhorias que julguei necessário para tornar o projeto apresentável, em um nível de qualidade aceitável pelo meu senso crítico. Abaixo segue uma lista contendo algumas melhorias que foram realizadas:

- **Animações da navbar no dropdown e search:**

O projeto não possuía nenhum tipo de animação ao abrir o dropdown da barra de navegação fixa no topo nem ao clicar no botão de search. O documento que definia as regras do desafio pedia que a div search crescesse deslizando ao clicar nela, mostrando o input, portanto, isso não foi só uma melhoria como também um ajuste as conformidades do projeto, o que categoriza isso como uma melhoria foi a animação adicionada ao dropdown que também achei fundamental portanto implementei. Dessa forma, o menu parece mais fluído e amigável ao usuário, mais agradável aos olhos.

- **box-shadow:hover e marcador de selected nos filtros:**

Não foi solicitado para criar um hover indicando melhor ao usuário que o botão de filtro é clicável, muito menos um indicador de botão selecionado, mas, utilizando e testando o site, achei que era fundamental indicar ao utilizador qual botão está selecionado e que o botão pode ser clicado, indicando isso com um evento de hover. Partindo disso, implementei o hover e o selected nos botões para garantir uma melhor experiência a pessoa que estiver acessando o site.

- **Hide da navbar no gradiente:**

A primeira forma com que fiz o gradiente com 100% de altura da tela foi simplesmente usando um z-index maior para que ficasse a frente, utilizando position: relative foi possível fazer o gradiente ficar em cima da navbar que está fixada no topo do site. Porém, não gostei da interação que os dois tinham ao rolar a página e entrar no gradiente. Parecia que a navbar entrava pra trás do gradiente. Insatisfeito com isso, acrescentei um pouco de JavaScript e manipulações do DOM para fazer a barra subir para cima, pra fora da tela, ao aproximar o topo da view do navegador do início do gradiente, fazendo com que, ao entrar no gradiente, a barra suma e o gradiente preencha completamente a tela. A barra de navegação volta a aparecer assim que o usuário sai do gradiente. Existe um limiar de tolerância que faz a barra sumir um pouco antes de entrar no gradiente por completo e faz ela aparecer um pouco antes de sair do gradiente por completo. Na primeira vez que implementei essa funcionalidade, a navbar só subia quando você estava 100% dentro do gradiente com a sua atual view no browser, seu scroll devia estar completamente dentro do gradiente. Achei que seria uma boa ideia fazer a navbar sumir e voltar antes e implementei a funcionalidade com um limiar posteriormente, o que tornou a animação mais aceitável aos meus olhos.

- **Gerador de círculos coloridos:**

Quando vi os círculos no protótipo, percebi que tinha duas opções. Criar todos os círculos no HTML e tornar eles estáticos ou gerar os círculos dinamicamente utilizando o JavaScript e seu Math.random(). Pois bem, pra ficar mais claro que a funcionalidade de filtro que fiz funciona perfeitamente, achei que devia criar os círculos de forma dinâmica e variada, permitindo que o array de círculos sofra um refresh cada vez que o usuário der F5, portanto, assim foi feito e agora os resultados sempre serão diferentes para os filtros, basta que o utilizador atualize a página.


- **Hover nos circulos:**

Nas regras do desafio foi mencionado que os 3 círculos que deslizam da esquerda pra direita deveriam ser links. Porém, após implementar isso, percebi que eles não pareciam links e não indicavam ao usuário de forma alguma que eram links e que podiam ser clicáveis. Portanto, adicionei um hover com um transform: scale() neles, utilizando transition: scale e permitindo uma animação suave e interativa, tornando o site mais amigável e intuitivo para o usuário.

- **Marcador de selected no dropdown no fim da página e nos botões dentro do container de texto no fim da página:**

Como fiz a funcionalidade de selected nos filtros acima, não poderia deixar de fazer para os botões que ficam na seção main do site. Temos uma sidebar com 3 dropdowns e 6 opções ao total, tendo 6 botões dentro de cada opção. Eu precisava indicar quando cada opção, cada botão estava selecionado ou não. Partindo disso, criei a funcionalidade de selected para esses botões assim como fiz acima, sempre buscando criar um site mais intuitivo para o usuário.

### Duvidas e conclusões

Abaixo temos algumas conclusões assumidas por mim ao me questionar, por falta de oportunidade para sanar as dúvidas que tive.

- **Sem botão de send no newsletter**

No footer da página temos um input para que o usuário entre com seu email e assine nosso newsletter. Porém, no protótipo que me foi concedido, protótipo ao qual esse site segue fielmente, não possui um botão de enviar ou assinar para que o usuário clique. Me questionei um pouco sobre o que deveria fazer mas decidi por seguir fielmente o protótipo sem ajustes, pois afinal, não é uma versão final para release, é um protótipo navegável que precisa de reajustes para ser lançado. Pensando dessa forma, não inseri nenhum botão e segui fielmente o protótipo em imagem.

- **Direcionamento dos links**

O site é cheio de links, porém, não sabia bem pra onde deveria redirecionar o usuário em cada link por falta de especificação. Sendo assim, a maioria dos links redirecionam para o próprio site ou uma seção dele, exceto os botões de rede social.

- **Responsividade sem redimensionar imagens**

A maior dúvida que tive durante o processo de desenvolvimento foi o pedido de responsividade nas regras mas que também as imagens não fossem redimensionadas com a responsividade. Também faltou uma definição de dimensões para as imagens no site, portanto, presumi que deveria dar um tamanho fixo arbitrário para as imagens, que eu definiria por conta própria e que esse tamanho deveria ser fixo, independente das circunstâncias. Portanto, a responsividade do site é garantida até 1000px, que é o tamanho da imagem no banner container do site, abaixo disso o site irá receber um scroll horizontal para que o usuário possa rolar corretamete. Confesso que não fiquei satisfeito com a solução disso e não me parece uma boa responsividade, mas faltou tempo para remoção de dúvidas com a universidade, portanto, criei minhas próprias conjecturas para as minhas dúvidas, impedindo assim que o processo de desenvolvimento congelasse.

- **Textos sobre imagens, em fotos ou slideshows**

No protótipo estava presente alguns textos sobre imagens, mas ao analisar melhor, pareciam ser textos informativos e sem nenhum valor, como por exemplo "SLIDESHOW" ou "100% DE LARGURA", apenas indicando detalhes sobre a imagem atrás do texto, nada relevante que deveria ser posto no site, portanto, não coloquei os mesmos. Embora pudesse sem grandes problemas, achei que seria o melhor a se fazer.

- **Conteúdo dos textos default**

Os textos Lorem Ipsum e também textos como "TÍTULO DA SEÇÃO", "TÍTULO DO MENU" e outros me deixaram um pouco confuso se eu devia inventar um nome ou podia simplesmente colocar dessa forma, como estava escrito no protótipo. Partindo do princípio que esse site é apenas um protótipo navegável implementado, longe de uma release final, deixei os textos padrão como estavam, sem inventar textos adequeados para cada campo.

- **Section, main e header**

Devido a falta de conteúdo real do site, sem saber muito bem pra onde cada link levaria e qual seria o conteúdo de cada seção, ficou um pouco difícil definir uma tag <main> e uma tag <header> do HTML5 para o site, defini elas mesmo assim a partir de conclusões superficiais, podendo as mesmas estarem incorretas devido a falta de maiores especificações.

- **Ícones de redes sociais com função de compartilhamento? Como eu poderia compartilhar um site no YouTube ou Instagram?**

Foi solicitado nas regras do desafio uma função de compartilhamento do site nas redes sociais através dos ícones no footer. Porém, algumas dessas redes sociais não permitem esse tipo de compartilhamento, portanto, Instagram e YouTube apenas redirecionam o usuário a página da PUCRS no Instagram ou YouTube

- **Qual url utilizar pro share? localhost? pucrs.br?**

Fiquei um pouco confuso a respeito do contéudo, da URL que deveria ser inserida ao clicar para compartilhar o site, pois o site não é definitivo e não foi hosteado corretamente, portanto, as mensagens pré-prontas criadas ao clicar em compartilhar podem ser inadequadas pra uma versão final do site.

## Melhorias futuras

Seguem abaixo algumas melhorias que não foram implementadas por falta de tempo e/ou por ser um projeto pequeno.

- **SCSS**

Tenho o costume de utilizar SCSS na maioria de meus projetos. Na minha opinião, facilita muito o processo de desenvolvimento e manutenção de estilos em um site relativamente grande. Apenas CSS normal me parece até incompleto nos dias de hoje sem os recursos do SCSS.

- **TypeScript**

Da mesma forma que me sinto em relação ao SCSS, também me sinto utilizando TypeScript. Tenho o costume de sempre utilizar TypeScript quando escrevo JavaScript pois a tipagem torna o processo muito mais organizado e fácil, tanto para quem desenvolve quando para quem realiza a manutenção. TypeScript é um compilador fundamental para JavaScript na minha opinião, ajustando os tipos e implementando algumas melhorias na linguagem. Por mais que não seja mandatório, como esse projeto, que foi desenvolvido com JS puro, TS teria tornado as coisas mais fáceis.

- **Linter**

A utilização de um linter para CSS, JS e HTML seria muito boa, garantindo a formatação correta e um padrão presente em todos os arquivos presentes nesse projeto, garantindo uniformidade e organização até na ordem das propriedades CSS dentro de cada regra.
