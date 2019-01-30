---
layout: post
title: "Template literals - Usando variáveis em string no ES6+"
author: rafael
categories: [javascript, ES6+]
image: assets/images/2018/10/03/01.png
featured: true
hidden: true
---
Antes do ES6, utilizávamos o operador de concatenação (`+`) para concantenar string:

```js
const usuario = {
    nome: 'João',
    sobrenome: 'Santos',
    idade: 22,
    cidade: 'Sorocaba'
};

let mensagem = "Meu nome é " + usuario.nome + " " + usuario.sobrenome + " e eu tenho " + usuario.idade + " anos.";
console.log(mensagem);
```

> **Saída:**
> Meu nome é João Santos e eu tenho 22 anos.

Essa maneira está correta, porém, se torna mais complicada de usar quando é necessário construir strings de múltiplas linhas.

```js
let resumo = "Nome: " + usuario.nome + " " + usuario.sobrenome +
"\nIdade: " + usuario.idade +
"\nCidade: " + usuario.cidade;
console.log(resumo);
```

> **Saída:**
>
> Nome: João Santos
>
> Idade: 22
>
>Cidade: Sorocaba

Isso mudou a partir do ES6, com a instrodução do *template literals* (conhecido anteriormente como "template string").

## Template literals

Tratam-se de *string literals* com expressões embutidas e são delimitidas, no lugar do apóstrofo (`'`) ou das aspas duplas (`"`), por *backticks* ou *cráse* (\`) e contém marcadores representados pela sintáxe `${expressão}`, tornando mais simples a construção da string.

Reescrevendo o primeiro exemplo:

```js
let mensagem = `Meu nome é ${usuario.nome} ${usuario.sobrenome} e eu tenho ${usuario.idade} anos`;
```

Essa maneira não vai economizar uma grande quantidade caracteres, mas facilita no entendimento e elimina a necessidade de concatenação de espaço em branco quando houver separação entre duas expressões. Isso torna o código mais organizado e visualmente mais interessante. Usando template literals iremos abandonar as aspas e o operador de concatenação de strings.

### Mas e o exemplo com quebra de linha?

Aqui é onde vemos uma outra grande diferença para o método tradicional. Com a utilização do *template literals* eliminamos a necessidade de utilizar os caracteres para inserção de quebra de linha, basta pular a linha no próprio código. Veja o exemplo:

```js
let resumo = `Nome: ${usuario.nome} ${usuario.sobrenome}
Idade: ${usuario.idade}
Cidade: ${usuario.cidade}`
```

> Podemos fazer mais do que apenas referenciar variáveis. Com *template literals* é possível executar operações, chamar funções e até mesmo usar loops dentro das expressões embutidas!

