# Piii.js

> Extrair, substituir ou verificar se há, palavrões em uma *string*.

## Instalação

 - Com [NPM](https://npmjs.com/): `npm install --save piii`
 - Com [Bower](http://bower.io/): `bower install --save piii.js`

Para Node.js adicione:

```js
var Piii = require('piii');
```

Ou para o navegador adicione no HTML:

```html
<script src="piii.js" type="text/javascript"></script>
```

## Uso

```js
Piii
// { extrair: [Function],
//   substituir: [Function],
//   verificar: [Function] }
```

 - `Piii.extrair` - extrair todos os palavrões de uma *string*
 - `Piii.substituir` - substituir todos os palavrões por outra palavra
 - `Piii.verificar` - verificar se há palavrões em uma *string*

Veja alguns exemplos abaixo:

```js
Piii.extrair('Foda-se essa porra!'); // ['Foda-se', 'porra']
Piii.substituir('Que porra!', '(piii)'); // 'Que (piii)!'
Piii.verificar('Filho de uma Puta!'); // true
```

Palavrões com letras repetidas tambem são filtradas, veja:

```js
Piii.verificar('Caralhooooo!'); // true
Piii.verificar('Que porrrrra é esssa?'); // true
```

## Licença

[MIT](http://theuves.mit-license.org/) &copy; [Matheus Alves](https://twitter.com/theuves)