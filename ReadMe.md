# Piii.js

> Extrair, substituir ou verificar se há, palavrões em uma *string*.

## Instalação

 - Com [NPM](https://npmjs.com/): `npm install --save piii`
 - Com [Bower](http://bower.io/): `bower install --save piii.js`

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

Palavrões com letras repetidas ou com números, também são filtrados, veja:

```js
Piii.verificar('Caralhooooo!'); // true
Piii.verificar('Que p0rr4 é essa?'); // true
```

É possivel modificar o palavrão filtrado antes de substitui-lo, exemplo:

```
Piii.substituir('Vá se foder!', function (palavra) {
    return palavra.charAt(0) + '*'.repeat(palavra.length);
});
```

O exemplo retornará: `Vá se f****!`.

## Licença

[MIT](http://theuves.mit-license.org/) &copy; [Matheus Alves](https://twitter.com/theuves)
