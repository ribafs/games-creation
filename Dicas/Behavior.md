# Behavior/Comportamento

Um behavior é um pacote contendo diversas conditions, actions e expressões, ou seja, alguns eventos.

Idealmente um behavior contém diversas extensões sobre um mesmo tema e não variadas.

Criar um behavior para aprender.


Após adicionar um behavior para um objeto, podemos mudar seu tipo. Cada behavior terá seus tipos. Exemplo: platform. Platform, Jumpthru platform e Ladder.

Para Physics Engine 2.0 temos os tipos: Dynamic, Static e Kinematic


Um behavior encapsula eventos, condições, ações e expressões para os objetos e minimizam as folhas de eventos.

Para um criador experiente de jogos recomenda-se a criação de behaviors customizados.

Podemos criar novas extensões que conterão behaviors.

AS behavior functions ou métodos são chamadas automaticamente pelo game engine sempre que um frame é renderizado na tela. Nelas é um bom lugar para colocar eventos que atualizam os objetos. As funções agora são visíveis na lista de behavior functions
