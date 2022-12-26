# Alfabeto em Português

## Projeto do jogo

Este será um pequeno jogo que tem como objetivo ajudar criaças a memorizar o nomes das letras treinando no teclado.

Ele funciona da seguinte forma: Todas as letras são mostradas na tela do jogo e a criança deverá pressionar no teclado uma das telas correspondentes a uma letra ou poderá também clicar na letra com o mouse. Quando ela pressiona uma letra no teclado seu som será emitido.

Para isso usarei imagens de cada letra do alfabeto com seus sons correspondentes.

## Áudio

Baixei o som das letras.

## Imagens

Baixei as letras em um único arquivo e separei cada uma. Como os arquivos são bem grandes eu redimensionei cada um, usando o Kolourpaint, com largura de 80 pixel e deixando a altura livre mantendo a proporcionalidade. Alguns ajustes farei no painel de propriedades 

## Pasta

Criei a pasta AlfabetoBr e copiei para dentro dela todos os arquivos de áudio e todas as imagens das letras.

## O jogo

### Criar um novo projeto

- Abrir o GDevelop
- Mudar o idioma para Português brasileiro, para facilitar
File
Language
Português brasileiro
Fechar

Arquivo - Criar - Novo projeto em branco ou Teclar Ctrl+Alt+N

### Configurar o projeto/jogo

- Clicar no Gerenciador de projetos
- Configurações do Jogo
- Propriedades
    Nome do jogo - Alfabeto em português
    Descrição do jogo - Jogo em que o usuário pressiona uma tecla ou clica em uma letra e o seu som é emitido.
    Autores - ribafs
    Empacotamento - br.net.ribamar.alfabetobr (domínio invertido mais o nome do jogo. Pode ser fictício)
    Nome do editor - Ribamar (usado quando o jogo for enviado para as lojas)
    Resolução e renderização - 800 x 650
    Modo de redimensionamento - Sem mudanças no tamanho do jogo
    Aplicar
    Arquivos do projeto - Vários arquivos, salvos na pasta ao lado do arquivo principal

### Renomear a cena default

- Clicar no Gerenciador de projetos
- Clicar nos 3 pontos à direita de Untitled scene
    Renomear
    Inicial
    Teclar enter
    Clicar em Inicial

### Mostrar o grid na c ena

- Acima e à direita clique no ícone azul quadriculado para exibir o grid
- Isso ajuda a manter os objetos alinhados na cena

### Adicionar os objetos/letras

- Clicar no painel da direita em Adicionar um novo objeto
- Sprite
- Nome do objeto - LetraA
- Adicionar uma animação
- Add a sprite
- Indique a imagem a.png da pasta AlfabetoBr2
- Clique em Aplicar
- Veja que agora a imagem aparece no painel Objetos da direita com o nome LetraA

### Arrastar a letra para a cena

- Clique mo objeto LetraA e arraste para o canto superior esquerdo e solte.

### Adicionar Eventos

Os eventos no GDevelop funcionam com dois elementos, uma condição e uma ação. Quando ocorrer uma condição a ação será d isaprada.
É similar a estrutura if then da programação: if uma condição then uma ação.

- Clique acima em Inicial (Eventos)
- Adicionar um evento

### Condição
- Clique à esquerda em Adicionar condição
- Clique no objeto LetraA
- Role a tela até
  O cursos/toque está sobre um objeto e OK
Quando o ponteiro passar sobre o objeto a ação será disparada. Mas para não ficar repetindo adicione outra condição
- Adicionar condição
- Outras condições
- Eventos e fluxo de controle
- Ativa uma única vez enquanto verdadeira e OK

### Ação
Quando estas duas condições acontecerem, a ação será disparada
Clique em Adicionar ação à direita
- Outras condições
- Sounds and Music
- Reproduzir um som
  Escolha um arquivo - a.mp3
  Volume - 50
  Tom (velocidade) - 1
OK

### Salvar o jogo

Ctrl+S

### Testando

Visualizar ou F4

### Evento de Teclas

Para que o jogo fique bem amigável e ofereça as alternativas de clique ou de pressionamento de tecla, vamos adicionar um evento para as teclas.

Adicionar um novo evento

Adicionar condição
- Outras condições
- Teclado
- Tecla pressionada
a
OK

Adicionar ação à direita
- Outras condições
- Sounds and Music
- Reproduzir um som
  Escolha um arquivo - a.mp3
  Volume - 50
  Tom (velocidade) - 1
OK

Salvar - Ctrl+S

Testar - F4

### Fazer o mesmo para todas as demais letras.

Para facilitar a criação dos eventos devemos antes adicionar todas as letras ao painel Objetos.
Também rpecisamos criar um grupo de eventos e puxar os dois eventos que criamos para este grupo que chamaremos de Letra A

Selecionamos o grupo Letra A, teclamos Ctrl+C e abaixo Ctrl+V, então configuramos para a Letra B e assim com todos.


