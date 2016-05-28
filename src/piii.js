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

module.exports = function (string, censura) {

    if (censura) {
        if (censura.length !== 1) {
            censura = '*';            
        }
    } else {
        censura = '*';
    }

    var str = diacritics(string);

    str = str.replace(re, function (p) {
        return repeat(censura, p.length);
    });

    var s = '';

    for (var i = 0; i < string.length; i++) {
        if (string[i] !== str[i] && str[i] === censura) {
            s += str[i];
        } else {
            s += string[i]
        }
    }

    return s;
};