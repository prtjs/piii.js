'use strict';

var Piii = (function () {
    var plvrs = [
        'po(rr|h)(a|inha(zinha)?|ona|ão)', 
        'caralh(o(zinho|zão)?|inho(zinho)?|ão|ada)',
        'carai(o(zinho|zão)?|nho(zinho)?|ão|ada)',
        'put(a|o|inha(zinha)?|ona|ão)',
        'b(u|o)cet(a(zona|zinha)?|inha(zinha)?|ona|ão)',
        '(c|k)(ú|u|uh|uzinho|uzão|uzona)',
        'pint(o(zinho|zão)?|ão)',
        'f(o|u)d(er|emos)',
        'fod(a|inha|ão|er|o|es|e|emos|eis|em)'
    ];

    for (var i in plvrs) {
        plvrs[i] = plvrs[i].replace(/([\wâàáãêéíõôóûúüç])/g, '$1+');
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

module.exports = Piii;