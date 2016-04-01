'use strict';

var Piii = (function () {
    var palavroes = [
        'po+rr+(i+nha+|a+)',
        '(c|k)a+ra+lh(a+da+|(ã|a)o|i+nho+|o+)',
        'pu+t(a+ri+a+|i+nh(o|a)+|a+da+|(ã|a)o|a+|o+)',
        'b(u|o)+(c|s)e+t(u+d(a|o)+|a+da+|(ã|a)+o+|i+nha+|a+)',
        '(c|k)(ú|u)((z|s)(ã|a)+o+|(z|s)i+nho+|(z|s)u+do+)?',
        'pi+nt(u+do+|ã+o+|o+)',
        'fo+d(i+do+|e+r|e+mo+s|e+r(ã+o+|a+m)|e+re+(i+|mo+s)|e+ndo+|a(-se+)?|(e|o|i)+?)',
        'fu+d(i+do+|e+r|e+mo+s|e+r(ã+o+|a+m)|e+re+(i+|mo+s)|e+ndo+|i+)'
    ];

    for (var i in palavroes) {
        palavroes[i] = '(\\b' + palavroes[i] + '\\b)';
    }

    var regexp = new RegExp(palavroes.join('|'), 'gi');

    return {
        extrair: function (str) {
            if (typeof str === 'string') return str.match(regexp) || [];
        },
        substituir: function (str, subst) {
            if (typeof str === 'string' && subst) return str.replace(regexp, subst);
        },
        verificar: function (str) {
            if (typeof str === 'string') {
                if (str.match(regexp)) return true;
                return false;
            }
        }
    };
})();

module.exports = Piii;