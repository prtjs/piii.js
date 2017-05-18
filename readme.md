# Piii.js

> Um avançado filtro de palavrões.

[![Build Status](https://travis-ci.org/theuves/piii.js.svg?branch=master)](https://travis-ci.org/theuves/piii.js)

## Características

- ignora o uso de qualquer tipo de acentuação
- ignora se as palavras(ões) estão em caixa alta ou baixa
- ignora números que possam substituir letras
- ignora letras repetidas

## Instalação

Instale-o via linha de comando com:

- [*bower*](http://bower.io/) ― `bower install --save piii.js`
- [*npm*](https://npmjs.com/) ― `npm install --save piii`

## Sintaxe

```
piii(string[, censura[, exceções]])
```

### Parâmetros

- `string` ― A *string* que será filtrada.
- `censura` (*opcional*) ― Uma *string* para substituir cada palavrão, ou uma função para processar o palavrão antes de substituí-lo na *string*. Por padrão `censura` é um `*` (asterisco).
- `exceções` (*opcional*) ― Uma array com uma lista dos palavrões que não devem ser filtrados.

#### O Parâmetro `censura` [Como Uma Função]

Este parâmetro pode ser uma outra função que recebe como único parâmetro uma *string* com o palavrão que está sendo filtrado no momento, e deve retornar uma *string* que substituirá este mesmo palavrão.

Veja um exemplo (que adiciona a *tag HTML* `<strike>` entre os palavrões):

```js
piii("Que porra é essa?", function (string) {
  return string.strike();
});

// Retorna "Que <strike>porra</strike> é essa?".
```

#### O Parâmetro `exceções`

Nem todos os palavrões são vistos como impróprios, ofensivos ou obsenos por todas as pessoas, portanto é possível definir palavrões que não devem ser filtrados na *string*.

Veja abaixo a lista de palavrões podem ser usados:

- `bilau`
- `boceta`
- `caralho`
- `cu`
- `merda`
- `pepeca`
- `pinto`
- `piroca`
- `porra`
- `punheta`
- `puta`
- `foder`

Veja um exemplo (que desconsidera *merda* como um palavrão):

```js
piii("Que porra é essa? Que merda. Vá se foder!", undefined, [
  "merda"
]);

// Retorna "Que * é essa? Que merda. Vá se *!".
```

**Obs.**: com isto, é desconsiderado todas as formas de se escrever o palavrão (como no exemplo acima, seria desconsiderado, tanto *merda* quanto *merdinha*, *merrrda*, *m3rd4*, etc.).

##### Filtragem das Palavras

O palavrões mostrados acima estão escrito de uma forma correta (e assim devem ser passados na *array*), mas durante a filtragem eles podem ser considerados mesmo que estejam ortográficamente errados (normalmente de uma forma proposital).

Formas de escritas ortográficamente erradas que são filtradas:

- *buceta* ― com *u*
- *cuh* ― como *h* representando o acento agudo no *u*
- *fuder* ― com *u* (neste caso é filtrado toda a sua conjugação, exceto no presente do indicativo e subjuntivo)
- *karalho*, *ku* e *piroka* ― com *k* substituindo o *c*
- *poha* ― com o *h* substituindo o *rr*
- *ponheta* ― com *o*

## Exemplos

Veja alguns exemplos abaixo com diferentes tentativas de burlá-lo.

```js
piii("Vá tomar no cú!"); // Retorna "Vá tomar no *!".
piii("Vá se ⓕⓞⓓⓔⓡ!"); // Retorna "Vá se *!".
piii("Que m3rd4."); // Retorna "Que *.".
piii("Filho da ᵽṻțặ!"); // Retorna "Filho da *!".
piii("Que porrrrra é essa?"); // Retorna "Que * é essa?".
```

## Licença

MIT ([veja o arquivo](https://github.com/theuves/piii.js/blob/master/license))
