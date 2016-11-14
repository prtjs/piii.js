# Piii.js

[![Build Status](https://travis-ci.org/theuves/piii.js.svg?branch=master)](https://travis-ci.org/theuves/piii.js)
[![npm version](https://badge.fury.io/js/piii.svg)](https://badge.fury.io/js/piii)

> Um avançado filtro de palavrões.

## Características

* ignora o uso de qualquer tipo acentuação
* ignora se as palavras estão em caixa alta ou baixa
* ignora números que possam substituir letras
* ignora letras repetidas

São filtradas apenas palavras impróprias, ofensivas, agressivas ou obsenas sob o ponto de vista geral da sociedade. Palavras que não são consideradas impróprias por todos (como “merda” que pode não ser vista por alguns como de baixo calão) ou que possuam um duplo sentido junto a uma palavra comum (como “cacete” ou “pau”) não serão filtradas. Porém, será possível adicionar mais palavras ao filtro (você verá como logo abaixo).

## Instalação

Instale-o com [`npm`](https://www.npmjs.com/), `npm i piii` ou com [`bower`](https://bower.io/), `bower i piii.js`.

## Exemplos

Veja alguns exemplos abaixo com diferentes tentativas de burlá-lo.

```js
piii('Vá tomar no cú!'); // retorna 'Vá tomar no **!'
piii('Vá se ⓕⓞⓓⓔⓡ!'); // retorna 'Vá se *****!'
piii('Seu fdp!'); // retorna 'Seu ***!'
piii('Cúzãozãozão'); // retorna '***********'
piii('Filho da ᵽṻțặ!'); // retorna 'Filho da ****!'
piii('Que porrrrra é essa?'); // retorna 'Que ******** é essa?'
```

Você também pode escolher o caractere que substituirá cada letra do palavrão:

```js
piii('Vá se foder!', {censura: 'π'}); // retorna 'Vá se πππππ!'
```

Por padrão as letras são substituídas pelo caractere `*`. Observe que a *string* informada para substituir as letras deve conter apenas um caractere, caso contrário elas serão substituidas pelo caractere padrão, `*`. Caso queira substituir todo o palavrão por uma sequencia de caracteres, você pode fazer como no exemplo abaixo:

```js
piii('Vá se foder!', {censura: '(piii)', completo: true}); // 'Vá se (piii)!'
```

Você também poderá adicionar mais palavrões ao filtro, veja o exemplo:

```js
piii('Que cacete! Seu m3rdinha!', {
    censura: '(piii)',
    completo: true,
    extras: [
        '(c|k)acet(e|i|inho|ao)',
        'merd(a|inha|ona|ao|a(d|c)a)'
    ]
}); // isto retornará 'Que (piii)! Seu (piii)!'
```

Onde `extras` deverá ser um *array* contendo os palavrões dentro de uma cadeia de caracteres, podendo usar expressões regulares e **não** havendo a necessidade de passar caracteres acentuados, por exemplo, ao invés de usar `merdão` (com acento), você pode simplesmente usar `merdao`, pois todos os acentos, caracteres repetidos ou números que possam substituir letras serão ignorados.

## Autor

Feito por **@theuves**

[![GitHub followers](https://img.shields.io/github/followers/theuves.svg?style=social&label=Follow)](https://github.com/theuves)
[![Twitter Follow](https://img.shields.io/twitter/follow/theuves.svg?style=social&label=Follow)](https://twitter.com/theuves)

## Licença

MIT ([veja o arquivo](https://raw.githubusercontent.com/theuves/piii.js/master/License))
