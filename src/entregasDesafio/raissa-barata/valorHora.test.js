const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora')

test('calcular vse 1+2 é igual a  3', () => {
    expect(1+2).toBe(3)
})

test('calcular valor por hora para um salário de 1000', () => {
    const salario = 1000;
    const resultado = calcularValorPorHora(salario)
    const resultadoEsperado = 6

    expect(resultado).toBe(resultadoEsperado)
})