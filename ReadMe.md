# Piii.js

> Um filtro de palavrões da língua portuguesa.

## Instalação

 - Com [NPM](https://npmjs.com/): `npm install --save piii`
 - Com [Bower](http://bower.io/): `bower install --save piii.js`

## Exemplos

```js
piii('Vá tomar no cú!', '(piii)'); // retorna 'Vá tomar no (piii)!'
piii('Vá se ⓕⓞⓓⓔⓡ!', '(piii)'); // retorna 'Vá se (piii)!'
piii('Que porrrrra é essa?', '(piii)'); // retorna 'Que (piii) é essa?'
piii('Que m3rd4!', '(piii)'); // retorna 'Que (piii)!'
piii('PQP', '(piii)'); // retorna '(piii)'
piii('Filho da ᵽṻțặ!', '(piii)'); // retorna 'Filho da (piii)!'
```

Também é possível modificar o palavrão filtrado antes de substitui-lo, veja:

```js
piii('Vá se foder!', function (palavrao) {
    return palavrao.charAt(0) + '*'.repeat(palavrao.length - 1);
}); // retorna 'Vá se f****!'
```

## Licença

MIT &copy; [Matheus Alves](https://github.com/theuves)
