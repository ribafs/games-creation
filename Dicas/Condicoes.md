# Lembrando que estou usando o GDevelop-5-5.1.151

## Condições em pt-br

Busca

## Objetos - Outras condições

As condições dos objetos depende das ações que ele suporta

### Exemplo para objeto Platform
```
Categorias
    Tamanho
        Altura
        Largura
    Visibilidade
        Opacidade
        Visibilidade
    Deslocamento de Imagem
        Deslocamento X da imagem
        Deslocamento Y da imagem
    Ângulo
        Ângulo
        Um objeto está virado em relação ao outro
    Movimento usando forças
        Ângulo do movimento (usando forças)
        Objeto está parado (nenhuma força aplicada sobre ele)
        Velocidade (das forças)
        Um objeto está se movendo em direção a outro (usando forças)
    Comportamentos
        Comportamento ativado
    Posição
        Caixa delimitadora
            Posição inferior da caixa delimitadora
            Posição X do centro da caixa delimitadora
            Posição Y do centro da caixa delimitadora
            Posição esquerda da caixa delimitadora
            Posição direita da caixa delimitadora            
            Posição superior da caixa delimitadora
        Centro
            Posição X do centro
            Posição Y do centro
        Posição X
        Posição Y
        Distância entre dois objetos
    Colisão
        Ponto dentro do objeto
        Colisão
    Temporizadores
        Valor de um objeto temporizador
        Objeto temporizador pausado
    Efeitos
        Efeito está ativo
    Camada
        Camada atual
    Variáveis
        Valor boleano de uma variável de objeto    
        Coleções
            Estruturas
        Valor de uma variável de objeto        
        Texto de uma variável de objeto
    Ordem em Z
        Ordem em Z
    Objetos
        Selecionar um objeto aleatório
        Selecionar todos os objetos
        Número da instância do objeto na cena
        Número da instância do objeto escolhido
        Seleciona o objeto mais próximo
    Mouse e toque
        O cursor/toque está sobre um objeto
```

### Outras condições

    Abas/Categorias/Subcategorias
```
    - Geral
        Objetos
            Raycast/Disparar raios
            Raycast para posição
        Variáveis
            Variáveis globais
                Valor boleano de uma variável global
                Coleções
                    Estruturas
                        Existênciad e filho
                Valor de uma variável global
                Texto de uma variável global
            Variáveis de cena
                Valor boleano de uma variável de cena
                Valor de uma variável de cena
                Texto de uma variável de cena
            Coleções
                Estruturas
                    Existênciad e filho
        Cena
            No começo da cena
            A cena acabou de ser retomada
        Temporizadores e tempo
            Valor de um temporizador de cena
            Escala de tempo
            Temporizador de cena pausado
    - Avançado
        Eventos e fluxo de controle
            Sempre
                & E
                Comparar dois números
                Comparar duas strings
                Não
                Ativa uma única vez enquanto verdadeiro
                || OU
        Armazenamento
            Existência de um grupo
        Funções do Evento
            Comparar os valores do parâmetro da função
            Comparar o texto do parâmetro da função
            Verifica se um parâmetro de fun ção está definido como verdadeiro (ou sim)
        Objetos vinculados
            Levar em conta objetos vinculados
        Informações do sistema
            O dispositivo tem um touchscreen
            É um dispositivo móvel
            O jogo está sendo executado como uma pré-visualização
            É suportado pelo WebGL
        Sistema de arquivos
            Windows, Linux, MacOS
    - Entrada
        Mouse e toque
            Multitoque
                Um novo toque foi iniciado
                Um toque terminou
                Posição X do toque    
                Posição Y do toque
            Cursor do mouse está dentro da janela
            A roda do mouse está rodando para baixo
            A roda do mouse está rodando para cima
            Botão do mouse pressionado ou segurou o toque (expressão de texto)
            Botão do mouse solto ou toque solto (expressão de texto)
            Botão do mouse pressionado ou toque mantido
            Botão do mouse liberado
            Posição X do cursor
            Posição Y do cursor
        Teclado
            Qualquer tecla pressionada
            Qualquer tecla liberada
            Tecla pressionada (expressão de texto)
            Tecla liberada (expressão de texto)
            Tecla pressionada
            Tecla liberada
        Sensores do dispositivo
    - Câmera
        Camadas e câmeras
            Ângulo de uma câmera de uma camada
            Posição da borda inferior da câmera
            Posição da borda esquerda da câmera
            Posição da borda direita da câmera
            Posição da borda superior da câmera
            Posição X do centro da câmera
            Posição Y do centro da câmera
            Altura de uma câmera
            Largura de uma câmera
            Ordem em Z padrão da câmera
    - Áudio
        Sons e música
            Volume global
        Música nos canais
            Volume da música em um canal
            Tom da música em um canal
            Deslocamento de reprodução da música em um canal
            Um arquivo de música está em pausa
            Um arquivo de música está sendo reproduzido
            Um arquivo de música foi interrompido
    - Interface de usuário
        Janela de jogo e resolução
            Tela cheia ativada?
        Gerenciamento avançadp de janelas
            Windows, Linux, MacOS
    - Movimento
        Comportamento da plataforma
            O objeto está em determinado piso
    - Mecânica de jogo
        Inventários
            Contagem de itens
            Tem um item
            Item equipado
            Item completado
        Árvore de diálogo (experimental)
            Compare variável boleana do estado de diálogo
            Compare variável numérica do estado de diálogo
            Compare variável string do estado de diálogo
            A seção de diálogo atual contém uma tag
            Título atual da seção de diálogo
            Diálogo tem seção
            O texto recortado concluiu a rolagem
            Opção selecionada foi alterada
            O comando é chamado
            Tipo de linha de diálogo
            Diálogo em execução
            O título da seção foi visitado
    - Anúncios
        AdMob
            Banner apresentou um erro
            Carregamento do banner
            Aparição do banner
            Intersticial ocorreu um erro
            Intersticial está a carregar
            Intersticial está pronto
            A intersticial está a mostrar
            O vídeo apresentou um erro
            Carregando vídeo
            Vídeo pronto
            Recompensa de vídeo recebida
            Vídeo exibindo
    - Terceirizado
        Jogos instantâneos do Facebook
            Anúncios
                Verificar se os anúscios são suportados
                O anúscio intersticial está pronto
                O vídeo premiado está pronto
    - Rede
        Firebase
            Autenticação
                Gerenciamento de usuário
                    O e-mail está verificado
                    O usuário está conectado?
        P2P (experimental)
            P2P está pronto
            Par conectado
            Peer desconectado
            Ocorreu um erro
            Evento desencadeado pelo peer
    - Players
        Placares (experimental)
            Salvar pontuação
                Erro ao salvar a última pontuação
                A última pontuação salva foi bem sucedida
                A pontuação está salvando
            Mostrar o placar
                A exibição do placar apresentou erro
                A exibição do placar carregou
                A exibição do placar está carregando
            Autenticação do jogador (experimental)                
    - Efeito visual
        Interpolação
            Interpolação de cena
                A interpolação da cena existe
                A interpolação da cena acabou de ser processada
                A interpolação da cena está em processo
```
Procurar por novas condições em Extensões


### Outras condições
```
- Geral
    Objetos
        Raycast/Disparar raios
        Raycast para posição
    Variáveis
        Variáveis globais
            Valor boleano de uma variável global
            Coleções
                Estruturas
                    Existência de filha
                Valor de uma variável global
                Texto de uma variável global
        Variáveis de cena
            Valor boleano de uma variável de cena
            Valor de uma variável de cena
            Texto de uma variável de cena
    Cena
        No começo da cena
        Cena acabou de ser retomada
    Temporizadores e tempo
        Valor de um temporizador de cena
        Escala de tempo
        Temporizador de cena pausado
- Avançado
    Eventos e fluxo de controle
        Sempre
        E
        Comparar dois números
        Comparar duas strings
        Não
        Ativa uma única vez enquanto verdadeiro
        Ou
    Armazenamento
        Existência de um grupo
    Funções do evento
        Compare o valor do parâmetro da função
        Compare o texto do parâmetro da função
        Verifica se um parâmetro de função está definido como verdadeiro ou sim
    Objetos vinculados
        Levar em conta objetos vinculados
    Informações do sistema
        O dispositivo tem um touchscreen
        É um dispositivo móvel
        O jogo está sendo executado no modo pré-visualização
        É suportado pelo WebGL
    Sistema de arquivos
        Windows, Linux, MacOS
- Entrada
    Mouse e toque
        Mouse e toque
            Multitoque
                O cursos do mouse está dentro da janela
                A roda do mouse está rodando para baixo
                A roda do mouse está rodando para cima
                Botão do mouse pressionado ou toque preso (expressão textual)
                Botão do mouse solto (expressão textual)
                Botão do mouse pressionado ou toque mantido
                Botão do mouse liberado
                Posição X do cursos
                Posição Y do cursos
    Teclado
        Qualquer tecla pressionada
        Qualquer tecla liberada
        Tecla pressionada (expressão textual)
        Tecla pressionada
        Tecla liberada
    Sensores do dispositivo
        Movimento
            Comparar o valor da aceleração no eixo X
            Comparar o valor da aceleração no eixo Y
            Comparar o valor da aceleração no eixo Z
            Sensor ativo
            Comparar o valor da rotação alfa
            Comparar o valor da rotação beta
            Comparar o valor da rotação gama
        Orientação
            Comparar o valor da orientação alfa
            Comparar o valor da orientação beta
            Comparar o valor da orientação gama
            Sensor ativo
- Câmera
    Camadas e Câmeras
        Ângulo de uma cÂmera de uma camada
        Posição da borda inferior da câmera
        Posição da borda esquerda da câmera        
        Posição da borda direita da câmera
        Posição da borda superior da câmera
        Posição X do centro da câmera
        Posição Y do centro da câmera
        Altura de uma câmera
        Largura de uma câmera
        Ordem em Z padrão da câmera
    Efeitos
        Escala de tempo da camada
        Visibilidade de uma camada
- Áudio
    Sons e mísica
        Volume global
    Música  nos canais
        Volume da música em um canal
        Tom da música em um canal
        Deslocamento de reprodução da música em um canal
        Um arquivo de música está em pausa
        Um arquivo de música está sendo reproduzido
        Um arquivo de música foi interrompido
    Sons nos canais
        Volume de som em um canal
        Tom do som de um canal
        Deslocamento de reprodução do som em um canal
        Um som está em pausa
        Um som está sendo reproduzido
        Um som foi interrompido
- Interface de usuário
- Movimento
- Mecânica de jogo
- Anúncios
- Terceirizado
- Rede
- Players/jogadores
- Efeito visual
```

Procurar por novas condições em Extensões

