# Olá Mundo na GDevelop

## Planejamento

Me parece que é muito importante, que antes de criar um jogo façamos um planejamento, um projeto do jogo. Então farei aqui um pequeno projeto de como quero o jogo.

Ele terá 3 objetos, um jogador, uma plataforma e uma casa.

### Jogador
- Sprite - Da loja, Green player
- Nome - Jogador
- Behavior - personagem de plataforma

### Plataforma
- Sprite - Green door top
- Nome - Plataforma
- Behavior - Plataforma

## Evento

- Condição - Colisão do Jogador com a casa
- Ações - Reproduzir o som olamundo.wav e destruir o Jogador
Com isso encerramos o jogo


## Criar um novo projeto

Ctrl+Alt+N

Olá Mundo GD
OlaMundoGD

Veja que após criar o projeto ele já nos mostra a cena default do nosso jogo aberta.

## Idioma

Como a GDevelop pode ser usada em Português do Brasil, sempre isarei neste nosso idioma para facilitar a quem estiver começando.

- Clicar em File
- Language

Mudar para Português brasileiro e Fechar

## Renomear a cena default

Renomear para 'CenaInicial'

- Clicar no Gerenciador de projetos (ícone azul com listas brancas acima e à esquerda)
- Clique nos 3 pontinhos à direita de Untitled scene - Renomear
- Apague o existente e digite CenaInicial
- Role o botão central do mouse para visualizar a área útil da cena ao centro como uma borda com linha preta

## Criar o objeto Jogador

Na CenaInicial clique em

- Adicionar um novo objeto
- Na aba Loja de ativos
- Na caixa de pesquisa digite 'player' e tecle enter
- Selecione o Green player e em Adicionar à cena e Fechar. Veja que ele aparece no painel da esquerda.
- Efetue um duplo clique nele e mude seu Nome do objeto para Jogador e Aplicar
- Agora efetue apenas um clique nele e arraste para o centro da cena e solte

## Criar o objeto Plataforma

- Clique em Adicionar um novo objeto ou no sinal +
- Remova 'player' da caixa de busca e digite platformer e enter
- Role a tela e escolha Green door top
- Adicionar à cena e Fechar
- Duplo clique nele e mude seu Nome do objeto para Plataforma

## Mostrar a grid na cena

Algo que ajuda

- Clique no botão azul e quadriculado acima e à direita/Ativar/editar grid
- Marque Mostrar grade
- Efetue um clique único na Plataforma e redimensione para encher a cena na aprte de baixo

## Adicionar behavior/comportamento aos dois objetos

### Jogador

- Efetue um duplo clique no Jogador
- Clique acima na aba Comportamento
- Clique em adicionar um comportamento
- Clique em personagem de plataforma e Aplicar

### Plataforma

- Efetue um duplo clique em Plataforma
- Clique acima na aba Comportamento
- Clique em adicionar um comportamento
- Clique em Plataforma e Aplicar

## Salvar o Jogo até agora

Ctrl+S

## Vendo o jogo em ação

Clique acima em Visualizar ou tecle em F4

Veja que a física do jogo já nos oferece muita coisa através dos comportamentos do GDevelop. O Jogador cai pela gravidade agindo nele. E esbarra na plataforma pela
física decorrente.

Agora use as setas para se movimentar e a barra de espaços para pular.

Nosso Olá Mundo está quase pronto.

## Adicionar mais um objeto

- Adicionar house houseSmall(1)
- Re nomear para "Casa"
- Arraste a casa e solte ao final da plataforma à esquerda

## Adicionar um Evento

Os eventos são praticamente a programação no GDevelop, onde controlamos nossos objetos.

### Adicionar um Evento

Iremos criarum evento para quando o Jogador tocar na Casa mostrar uma mensagem "Olá Mundo do GDevelop"

- Clique acima em CenaInicial (Eventos)
- Clique no botão Adicionar um evento
Veja que temos
- Adicionar condição
- Adicionar ação

### Condição

Geralmente adicionamos uma condição e quando ela acontece será disparada a ação

- Clique em Adicionar condição
- Em Objetos clique em Jogador. Veja que à direita ele mostra todos os eventos disponíveis para o Jogador
- Role a tela e clique em Colisão
- Na direita ele já mostra os objetos existentes então clique em Casa e OK

Já temos a condição, que é o Jogador colidir com a Casa e qual ação será disparada quando isso acontecer?

### Ação

Gravei o arquivo olamundo.wav com a frase Olá Mundo e salvei na pasta OlaMundoGD

- Clique em Adicionar ação
- Outras ações
- Sounds and music
- Reproduzir um som
- Escolher um arquivo (gravei um arquivo com olamundo.wav)
- Volume do som - 50
- Tom (velocidade) - 1
- OK

Adicione outra ação

- Clique em Adicionar ação
- Clique em Objetos em Jogador
- A direita role a tela e selecione Exclui o objeto

## Salvar o jogo

Ctrl+S


