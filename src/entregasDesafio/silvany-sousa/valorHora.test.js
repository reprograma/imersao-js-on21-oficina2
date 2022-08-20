const { calcularValorPorHora } = require('../../entregasDesafio/silvany-sousa/valorHora.test.js')

test('Calcular valor por hora para salario de 1000 reais', () => {
    expect(1 + 2).toBe(3)
})

test('calcular valor/hora para 1000 por mes', () => {
    const salario = 1000
    const resultadoCalculado = calcularValorPorHora(salario)
    const resultadoEsperado = 6
    expect(resultadoCalculado).toBe(resultadoEsperado)
    expect(resultadoCalculado).not.toBe(5)
})