const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora')

test('Calcular valor por hora para salário de 1.000 reais', () => {
    expect(1 + 2).toBe(3)
})

test('Calcular o valor por hora para 1.000 reais mensais', () => {
    const resultado = calcularValorPorHora(1000)

    expect(resultado).toBe(6)
    expect(resultado).not.toBe("banana")
})