const { calcularValorPorHora } = require('../Hora/valorHora')

test('1 + 2 é 3', () => {
    expect(1 + 2).toBe(3)
})

test('Calcular o valor hora para 1000 reais mensais', () => {
    const salario = 1000
    const resultadoCalculado = calcularValorPorHora(salario)
    const resultadoEsperado = 6
    expect(resultadoCalculado).toBe(resultadoEsperado)
    // expect(resultadoCalculado).not.toBe(5)

})