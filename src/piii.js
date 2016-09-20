'use strict';

var diacritics = require('diacritics').remove,
    repeat = require('repeat-string'),
    words = require('./words.json');

for (var i in words) {
    words[i] = words[i].replace(/(\w)/g, '$1+');
}

var j = words.join(')|(')
    .replace(/a/g, '[a24\@]')
    .replace(/e/g, '[e3\&]')
    .replace(/g/g, '[g9')
    .replace(/i/g, '[i1]')
    .replace(/l/g, '[l1]')
    .replace(/o/g, '[o08\@]')
    .replace(/q/g, '[q9]')
    .replace(/t/g, '[t7]')
    .replace(/s/g, '[s5\$]');

var re = new RegExp('\\b((' + j + '))\\b', 'gi');

function replaceWords(original, censurado, censura) {
    var coords = [];
    var iniciado = false;

    for (var i = 0; i < original.length; i++) {
        if (censurado[i] === original[i] && !iniciado) {
            coords.push(i);

            iniciado = true;
        } else {
            if (censurado[i] !== original[i] && iniciado) {
                coords.push(i);

                iniciado = false;
            }
        }
    }

    if (coords.length % 2 !== 0) coords.push(original.length);

    var partes = [];

    if (censurado[0] !== original[0]) partes.push('');

    for (var i = 0; i < coords.length; i += 2) {
        partes.push(censurado.substring(coords[i], coords[i + 1]));
    }

    var ultimo = original.length - 1;

    if (censurado[ultimo] !== original[ultimo]) {
        partes.push('');
    }

    return partes.join(censura);
}

module.exports = function (string, censura, completo) {

    if (!string && !censura) {
      return undefined;
    }

    var cens;

    if (censura) {
        if (completo) {
            cens = '*';
        } else if (censura.length === 1) {
            cens = censura;
        } else {
            cens = '*';
        }
    } else {
        cens = '*';
    }

    var str = diacritics(string);

    str = str.replace(re, function (p) {
        return repeat(cens, p.length);
    });

    var s = '';

    for (var i = 0; i < string.length; i++) {
        if (string[i] !== str[i] && str[i] === cens) {
            s += str[i];
        } else {
            s += string[i];
        }
    }

    if (completo) {
        return replaceWords(string, s, censura);
    }

    return s;
};
