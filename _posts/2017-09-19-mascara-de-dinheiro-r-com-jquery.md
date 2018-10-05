---
layout: post
title: "Máscara de dinheiro (R$) com jQuery"
author: rafael
categories: [jquery, javascript, tutorial]
image: assets/images/2017/09/19/01.jpg
featured: false
hidden: false
---

Há ocasiões em que o desenvolvedor web deverá tratar a forma como os números serão inseridos no input, aplicando uma máscara no campo conforme a informação a ser digitada. Por exemplo, um CNPJ apresentado como 12.906.174/0001-05 fica bem mais atraente do que 12906174000105, não é mesmo?

Para resolver esse tipo de questão utilizando jQuery existem milhares de plugins desenvolvidos pela comunidade. Um deles veio para tratar da máscara do campo quando o assunto é moeda, dinheiro, bufunfa.
<!--
Exemplo (digite qualquer valor): <input type="text" id="currency" />
-->
Veja a seguir como usar o plugin Jquery-maskMoney para representar a entrada em moeda brasileira (Real R$):

Inicialmente, precisamos incluir o jQuery ao nosso head com o seguinte código:

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"></script>
```

Em seguida, baixe a versão mais recente do plugin ([aqui](https://cdn.rawgit.com/plentz/jquery-maskmoney/master/dist/jquery.maskMoney.min.js)) e inclua o script à sua página:

```html
<script src="jquery.maskMoney.min.js" type="text/javascript"></script>
```

Agora, basta criar o campo de input que receberá os dados:

```js
<input type="text" id="currency" />
```

Por fim, a parte mágica, onde adicionamos os parâmetros que definirão o visual do campo, deixando claro que estamos esperando que o campo seja preenchido com o valor monetário brasileiro, o Real (R$).

```html
    <script>
        $(function(){
            $('#currency').maskMoney({
              prefix:'R$ ',
              allowNegative: true,
              thousands:'.', decimal:',',
              affixesStay: true});
        })
    </script>
```

- **prefix:'R$'** – estabelece o prefixo a ser apresentado à esquerda do valor a ser digitado no campo.

- **allowNegative: true** – para permitir valores abaixo de zero.

- **thousands:'.'** – define o separador da casa do milhar, nesse caso determinando com o símbolo de ponto (.).

- **decimal:','** – define o indicador da casa decimal, os centavos no caso, separando com vírgula o valor do restante.

- **affixesStay: true** – essa opção faz com que, ao deixar o foco fora do input, o símbolo da moeda (R$) continue sendo exibido.

Para mais opções, confira essa página: [http://plentz.github.io/jquery-maskmoney/](http://plentz.github.io/jquery-maskmoney/)

Código completo:

```html
<html>
    <head>
        <meta charset="UTF-8">
        <title>Máscara de Input - Dinheiro</title>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"></script>
        <script src="jquery.maskMoney.min.js" type="text/javascript"></script>
    </head>
    <body>
        <input type="text" id="currency" />
    </body>
    <script>
        $(function(){
            $('#currency').maskMoney({prefix:'R$ ', allowNegative: true, thousands:'.', decimal:',', affixesStay: true});
        })
    </script>
</html>
```

Github do plugin: [https://github.com/plentz/jquery-maskmoney](https://github.com/plentz/jquery-maskmoney)