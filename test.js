import test from 'ava';
import piii from './';

test('piii', t => {
    t.is(piii('Vá tomar no cú!'), 'Vá tomar no **!');
    t.is(piii('Vá se ⓕⓞⓓⓔⓡ!'), 'Vá se *****!');
    t.is(piii('Seu fdp!'), 'Seu ***!');
    t.is(piii('Cúzãozãozão'), '***********');
    t.is(piii('Filho da ᵽṻțặ!'), 'Filho da ****!');
    t.is(piii('Que porrrrra é essa?'), 'Que ******** é essa?');
    t.is(piii('Vá se foder!', {
        censura: 'π'
    }), 'Vá se πππππ!');
    t.is(piii('Vá se foder!', {
        censura: '(piii)',
        completo: true
    }), 'Vá se (piii)!');
    t.is(piii('Que cacete! Seu merdinha!', {
        censura: '(piii)',
        completo: true,
        extras: [
            '(c|k)acet(e|i|inho|ão)',
            'mi?erd(a|inha|ona|ão|a(d|c)a)'
        ]
    }), 'Que (piii)! Seu (piii)!');
});
