const { somar, mensagemBoasVindas, maiorValor, parImpar, positivoNegativo, salario} = require('./script');

test('soma dois números', () => {
    expect(somar(2, 3)).toBe(5);
});

test('mensagem de boas vindas', () => {
    expect(mensagemBoasVindas('Diogo')).toBe('Olá, Diogo!');
});

test('maior numero', () => {
    expect(maiorValor(5, 3)).toBe(5);
});

test('par ou ímpar', () => {
    expect(parImpar(4)).toBe('par');
});

test('voto', () => {
    expéct(idade(18).toBe('pode votar'))
});

test('positivo ou negativo', () => {
    expect(positivoNegativo(2).toBe('positivo'));
});

test('salario e bonus', () => {
    expect(salario(6000).toBe(dinheiro*0.1));
});

test('habilitacao', () => {
    expect(idade(18).toBe('pode dirigir'))
})