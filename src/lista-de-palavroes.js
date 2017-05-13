"use strict";

// Expressões regulares semi-prontas para cada palavrão.

module.exports = {

  // Deve ser organizado por ordem alfabética (exceto "foder").
  "bilau": "bilau((s|z)(ao|inho))?",
  "boceta": "b(o|u)cet(a(o|(s|z)(inha|ona))?|inha|ona|ud(a|o))",
  "caralho": "(c|k)aralh(a(o|da|zinha)?|inh(a|o)|o(z(ao|inh(a|o)|ona)|na)?|u(d(a|o)))",
  "cu": "(c|k)u(h|(s|z)(ao|inho|ona))?",
  "pepeca": "pepe((c|k)(a((s|z)inha)?|inha|ona|ud(a|o))|quinha)",
  "pinto": "pint(ao|inho|o((s|z)inho)?|udo)",
  "piroca": "piro((c|k)(a(ada|o|(s|z)(inha|ona))?|inha|ona|ud(a|o))|quinha)",
  "porra": "po(h|rr)(a(o|(s|z)(inha|ona))?|inha|ona)",
  "punheta": "p(o|u)nhet(a((s|z)(inha|ona)|o)?|inha|ona)",
  "puta": "put(a(ria|da|(s|z)(inha|ona)|o)?|inha|ona)",

  // Conjugações do verbo foder.
  // Feito com base nas informações obtidas em <https://www.conjugacao.com.br/verbo-foder/>.
  // Corresponde também ao verbo "fuder" (escrita errada), com exceção do presente do indicativo e subjuntivo.
  "foder": "(f(o|u)d(ido|endo|(e(mos|r(a(m(os)?|(o|s)?)?|des|ei(s)?|em(os)?|es|ia(m(os)?|s)?|ieis|mos)?|s(se(is|s|m(os)?)?|te(s)?)|u)|i((a(m(os)?|s)?)?|eis)?))|fod(a(is|m(os)?|s)?|e(is|m(os)?|s)?|o))"
};
