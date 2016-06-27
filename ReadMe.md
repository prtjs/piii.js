# piii.js [![Build Status](https://travis-ci.org/theuves/piii.js.svg?branch=master)](https://travis-ci.org/theuves/piii.js)

> Um filtro de palavrões da língua portuguesa.

## Instalação

 - Com [NPM](https://npmjs.com/): `npm install --save piii`
 - Com [Bower](http://bower.io/): `bower install --save piii.js`

## Exemplos

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

```
piii('Vá se foder!', 'π'); // retorna 'Vá se πππππ!'
```

## Licença

MIT &copy; [Matheus Alves](https://github.com/theuves)
