var Piii = (function () {
    'use strict';

    // piii.js - https://github.com/theuves/piii.js
    // Copyright (c) 2016 Matheus Alves

    var plvrs = [
        '69|fdp|pqp|wtf|fuck|ppk',
        'po(rr|h)(a|inha(zinha)?|ona|ao)',
        'cara(lh|i)(o(zinho|zao)?|inho(zinho)?|ao|ada)',
        'carai(o(zinho|zao)?|nho(zinho)?|ao|ada)',
        'put(a|o|inha(zinha)?|ona|ao)',
        'b(u|o)cet(a(zona|zinha)?|inha(zinha)?|ona|ao)',
        '(c|k)(u|uh|uzinho|uzao|uzona)',
        'pint(o(zinho|zao)?|inho|ao)',
        'v(i|e)ad(o(zinho)?|inho|ao)',
        'rol(a|o)((zinha)?|ao|inha|na)',
        'pic(a(zinha)?|ona|ao)',
        'f(o|u)d(er|emos|eu|ido|endo)',
        'merd(a(zinha)?|inha|ona|ao)',
        'piro((c|k)(a(zinha)?|o|ona|ao)|(qu|k)inha)',
        '(pepe|pp)((k|c)(a(zinha)?|ao|ona)|(qu|k)inha)',
        'fod(a|inha|ão|er|o|es|e|emos|eis|em)'
    ];

    for (var i in plvrs) {
        plvrs[i] = plvrs[i]
            .replace(/([\w])/g, '$1+')
            .replace(/(a|ã)/g, '[$124áâãàäåæāăą]')
            .replace(/(c)/g, '[$1çćč]')
            .replace(/(d)/g, '[$1ďđ]')
            .replace(/(e)/g, '[$13éêèëēėęěĕə]')
            .replace(/(g)/g, '[$1ģğ]')
            .replace(/(i)/g, '[$1îìíıįīï]')
            .replace(/(k)/g, '[$1ķ]')
            .replace(/(l)/g, '[$1ĺļľł]')
            .replace(/(n)/g, '[$1ñńņň]')
            .replace(/(r)/g, '[$1ŕř]')
            .replace(/(o)/g, '[$10óôõòöøőœ]')
            .replace(/(s)/g, '[$15\$ß§śšş]')
            .replace(/(t)/g, '[$17þťț]')
            .replace(/(u)/g, '[$1úüùûūůűų]')
            .replace(/(y)/g, '[$1ý]')
            .replace(/(z)/g, '[$1źżž]');

        plvrs[i] = '(\\b' + plvrs[i] + '\\b)';
    }

    var regex = new RegExp(plvrs.join('|'), 'gi');

    return {
        extrair: function (str) {
            return str.match(regex) || [];
        },
        substituir: function (str, sbsttt) {
            return str.replace(regex, sbsttt);
        },
        verificar: function (str) {
            return str.match(regex) ? true : false;
        }
    };
})();
