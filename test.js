import test from 'ava';
import piii from './';

test('piii', t => {
    t.is(piii('Vá tomar no cú!'), 'Vá tomar no **!');
    t.is(piii('Vá se ⓕⓞⓓⓔⓡ!'), 'Vá se *****!');
    t.is(piii('Que m3rd4!'), 'Que ****!');
    t.is(piii('Seu fdp!'), 'Seu ***!');
    t.is(piii('Cúzãozãozão'), '***********');
    t.is(piii('Filho da ᵽṻțặ!'), 'Filho da ****!');
    t.is(piii('Que porrrrra é essa?'), 'Que ******** é essa?');
    t.is(piii('Vá se foder!', 'π'), 'Vá se πππππ!');
});
