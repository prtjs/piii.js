# Piii.js

[![Build Status](https://travis-ci.org/theuves/piii.js.svg?branch=master)](https://travis-ci.org/theuves/piii.js)
[![npm version](https://badge.fury.io/js/piii.svg)](https://badge.fury.io/js/piii)

> Um avançado filtro de palavrões.

## Caracteristicas

- ignora o uso de qualquer tipo acentuação
- ignora se o texto está em caixa alta ou baixa
- ignora números que possam substituir letras
- ignora letras repetidas

## Instalação

Instale-o com [`npm`](https://www.npmjs.com/), `npm i piii` ou com [`bower`](https://bower.io/), `bower i piii.js`.

## Exemplos

Veja alguns exemplos abaixo com diferentes tentativas de burlá-lo.

```js
piii('Vá tomar no cú!'); // retorna 'Vá tomar no **!'
piii('Vá se ⓕⓞⓓⓔⓡ!'); // retorna 'Vá se *****!'
piii('Que m3rd4!'); // retorna 'Que *****!'
piii('Seu fdp!'); // retorna 'Seu ***!'
piii('Cúzãozãozão'); // retorna '***********'
piii('Filho da ᵽṻțặ!'); // retorna 'Filho da ****!'
piii('Que porrrrra é essa?'); // retorna 'Que ******** é essa?'
```

Você também pode escolher o caractere que substituirá cada letra do palavrão:

```js
piii('Vá se foder!', 'π'); // retorna 'Vá se πππππ!'
```

Por padrão as letras são subtituidas pelo caractere `*`. Observe que a *string* informada para substituir as letras deve conter apenas
um caractere, caso contrário elas serão substituidas pelo caractere padrão, `*`. Caso queira substituir todo o palavrão por
uma sequencia de caracteres, você pode fazer como no exemplo abaixo:

```js
piii('Vá se foder!', '(piii)', true); // retorna 'Vá se (piii)!'
```

## Autor

Feito por **@theuves**

[![GitHub followers](https://img.shields.io/github/followers/theuves.svg?style=social&label=Follow)](https://github.com/theuves)
[![Twitter Follow](https://img.shields.io/twitter/follow/theuves.svg?style=social&label=Follow)](https://twitter.com/theuves)

## Licença

MIT ([veja o arquivo](https://raw.githubusercontent.com/theuves/piii.js/master/License))
