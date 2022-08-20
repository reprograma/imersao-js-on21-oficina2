const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora')

test('1 + 2 é 3', () => {
    expect(1 + 2).toBe(3)
})

test('Calcular o valor por hora para R$ 1.000,00 mensais.', () => {
    const salario = 1000
    const resultadoCalculado = calcularValorPorHora(salario)
    const resultadoEsperado = 6 // 6 reais por hora

    expect(resultadoCalculado).toBe(resultadoEsperado)
})

