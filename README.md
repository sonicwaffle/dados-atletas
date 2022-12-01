Olá! Esse README.md tem como objetivo explicar como funciona o código dados-atletas.js.
Esse código foi feito pelo aluno Pedro Guilherme Rosa Lutz para conclusão do curso de JavaScript da plataforma DEVstart.

O código inicia com a definição da classe Atleta.

No método constructor da classe, são recebidos os dados de nome, idade, peso, altura e notas do atleta, que são transformadas em variáveis de instância.
Além desses dados, são definidas as variáveis de instância que serão usadas para armazenar a categoria, o IMC e a média validada do atleta.

O primeiro método de classe é o método calculaCategoria, sem parâmetro.
Nesse método, a variável de instância *this.idade* é comparada com os requisitos de idade de cada categoria.
Dependendo da idade do atleta, o sistema armazena sua categoria na variável de instância *this.categoria.*

O segundo método de classe é o método calculaIMC, sem parâmetro.
Esse método simplesmente atribui à variável de instância this.imc o valor da expressão peso/(altura * altura)

O terceiro método é o método calculaMediaValida, sem parâmetro.
Esse método, primeiramente, encontra a soma dos itens da matriz de notas do atleta, após ela passar pelos métodos .sort() e .slice() para que apenas as notas válidas sejam consideradas.
Em seguida, ela atribui à variável de instância *this.media* o valor da expressão soma/quantidade de itens na matriz notas.

Os métodos obtemNomeAtleta, obtemIdadeAtleta, obtemPesoAtleta, obtemAlturaAtleta simplesmente retornam os valores das suas respectivas variáveis de instância.

O método obtemNotasAtleta retorna uma string contendo os itens da matriz de notas do usuário.

Os métodos obtemCategoria, obtemIMC e obtemMediaValida convocam os métodos que calculam a caregoria, o IMC e a média válida, e em seguida retornam seus respectivos valores.

Além da classe, existe também a função retornaDados, com parâmetro atleta.
O parâmetro atleta é a instância da classe Atleta.
Essa função retorna os dados do atleta como requisitado no exercício.
