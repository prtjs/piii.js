# Piii.js

> Um avançado filtro de palavrões.

[![Build Status](https://travis-ci.org/theuves/piii.js.svg?branch=master)](https://travis-ci.org/theuves/piii.js)

## Instalação

Você pode instalá-lo pelo terminal com:

- [*bower*](http://bower.io/): `bower install --save piii.js`
- [*npm*](https://npmjs.com/):  `npm install --save piii`.

Ou pode baixá-lo manualmente [AQUI](#) caso queira usá-lo em um *browser*.

Após isso, importe-o da forma que quiser.

## Uso

Exemplo simples:

```js
var piii = new Piii("💩");

piii.censurar("Haha, que porra é essa?");
```

O exemplo acima etornaria `Haha, que 💩 é essa?`.

### Sintaxe

```
new Piii([censura[, opções]])
```

Isso retorna um objeto com duas funções:

|Função:|Descrição:|
|:-:|:-:|
|`censurar(string)`|Censurar os palavrões na string.|
|`verificar(string)`|Verificar se há palavrões na string.|

#### *`censura`*

- Tipo: *String* ou *Função*

> Dado que substituirá os palavrões quando forem censurados.

Veja alguns exemplos:

```js
/**
 * Em string.
 */
var exemplo1 = new Piii("(piii)");

exemplo1.censurar("Que se foda!");
//=> "Que se (piii)!"

/**
 * Em função.
 */
var exemplo2 = new Piii(function (palavra) {
	return palavra.charAt(0) + "*";
});

exemplo2.censurar("Que se foda!");
//=> "Que se f*!"
```

Se nenhum valor em `censura` for passado, então ele valerá `*`.

#### `opções`

- Tipo: *Objeto*

> Configurações do filtro.

Opções válidas:

| Opção: | Tipo: | Descrição: |
|:-:|:-:|:-:|
| `adicionar` | *Array* | Adicionar novos palavrões ao filtro. |
| `complementar` | *Objeto* | Complementar letras para sere filtradas. |
| `desacentuador` | *Função* | Um desacentuador de letras personalizado. |
| `ignorar`| *Array* | Lista de palavrões que não devem ser filtrados. | 

Veja informações de cada opção [aqui](#).

## Licença

MIT ([veja o arquivo](#))