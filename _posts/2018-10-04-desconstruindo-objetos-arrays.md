---
layout: post
title: "Desestruturação - Desconstruindo objetos e arrays (Destructuring)"
author: rafael
categories: [javascript, ES6+]
image: assets/images/2018/10/04/01.png
featured: true
hidden: true
---
O ES6 possui uma proposta muito nobre, que é a de diminuir a repetição de código JavaScript, facilitando a compreensão e eventual manutenção. Para isso, diversas funcionalidades foram implementadas e aos poucos vamos conhecendo, estudando e adotando-as no dia a dia.
Hoje vamos aprender aqui uma dessas novas funcionalidades.
A **desestruturação** (*destructuring*) trata-se de uma nova forma de obter valores que estejam armazenados em objetos e arrays.

Primeiramente, vamos ver esses códigos que utilizam técnicas de extração anteriores ao ES6:

No primeiro exemplo, veremos a extração de valores de um array:

```js
const notas = [8.5, 9, 8.8, 7];

const nota1 = notas[0];
const nota2 = notas[1];
const nota3 = notas[2];
const nota4 = notas[3];

console.log(nota1, nota2, nota3, nota4); // 8.5 9 8.8 7
```

> **Saída:** `8.5 9 8.8 7`

Agora, um exemplo de extração de valores de um objeto:

```js
const aluno = {
    nome: 'Harry',
    sobrenome: 'Potter',
    senha: 'dobby',
    email: 'harry.potter@hogwarts.com'
}

const nome = aluno.nome;
const sobrenome = aluno.sobrenome;
const email = aluno.email;

console.log(nome, sobrenome, email); // Harry Potter harry.potter@hogwarts.com
```

> **Saída**: `Harry Potter harry.potter@hogwarts.com`

Os exemplos acima são de fácil compreensão, porém, podem se tornar ainda mais simples se utilizarmos a *desestruturação*.

## Destructuring

### Extraindo valores de um array

A desestruturação nos permite especificar quais elementos desejamos extrair de um array ou de um objeto utilizando a sintaxe de objetos literais.
Para melhorar a compreensão, vamos exemplificar reescrevendo o código do primeiro exemplo e vamos extrair os valores de um array, mas dessa vez utilizando a desestruturação:

```js
const notas =  [8.5,  9,  8.8, 7];
const [nota1, nota2, nota3, nota4]  = notas;
console.log(nota1, nota2, nota3, nota4);  // 8.5 9 8.8 7
```

> **Saída:** `8.5 9 8.8 7`

Os colchetes representam o array sendo desestruturado e o seu conteúdo (`nota1`, `nota2`, `nota3` e `nota4`) representa as variáveis onde serão armazenadas as informações extraídas do array. Não há a necessidade de especificar os índices de onde os valores devem ser obtidos, pois esses estão implícitos.

> Além disso, ainda temos a possibilidade de selecionar quais valores extrair simplesmente pulando os que **não** desejamos obter. Por exemplo, `const [nota1, , nota3, nota4] = notas;` vai ignorar a `nota2`, a qual será descartada.

### Extraindo valores de um objeto

Assim como já mostramos no exemplo acima, onde extraímos os valores de um array, agora vamos fazer o mesmo com o objeto, obtendo seus valores com o uso de desestruturação:

```js
const aluno =  {
    nome:  'Harry',
    sobrenome:  'Potter',
    senha:  'dobby',
    email:  'harry.potter@hogwarts.com'
}

const  {nome, sobrenome, email}  = aluno;

console.log(nome, sobrenome, email); //Harry Potter harry.potter@hogwarts.com
```

>**Saída:** `Harry Potter harry.potter@hogwarts.com`

Note que do lado esquerdo colocamos os nomes dos campos que desejamos extrair entre chaves ( `{ }` ), e, do outro lado, informamos de onde queremos extrair estes valores, nesse caso, aluno.
Ao executar o código, os valores são atribuídos para variáveis com o mesmo nome do atributo.

## Rotulando propriedades

Pode ser que o nome da propriedade que desejamos extrair não seja bom ou claro o suficiente para definirmos como nome de nossa variável. Podemos resolver isso com o uso de rótulos (*labels*), o que torna possível associar o valor da propriedade à nossa variável com qualquer nome que escolhermos.
A sintaxe para realizar a atribuição do valor à variável é bem simples, bastando apenas seguir a sintaxe `propriedade:rotulo`. Vejamos na prática com o exemplo a seguir.

Considere o objeto `aluno`:

```js
const aluno = {
    nome: 'Hermione',
    sobrenome: 'Granger'
}
```

Vamos supor que desejamos atribuir o nome à variável `primeiroNome`. Para isso, escrevemos a sintaxe dessa forma:

```js
const { nome:primeiroNome };
```

Dessa forma, o conteúdo de `aluno.nome` foi atribuído à variável `primeiroNome` :

```js
console.log(primeiroNome); //Hermione
```

> **Saída:** Hermione