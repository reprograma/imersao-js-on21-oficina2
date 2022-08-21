const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora')

describe('teste de soma simples', () => {
    test('1 + 2 é 3', () => {
        expect(1 + 2).toBe(3)
    })
})

describe('calcularValorPorHora', () => {
    test('Calcular o valor por hora para 1000 reais mensais deve ser 6 reais por hora', () => {
        const salario = 1000
        const resultadoCalculado = calcularValorPorHora(salario)
        const resultadoEsperado = 6 // 6 reais por hora

        expect(resultadoCalculado).toBe(resultadoEsperado)
        expect(resultadoCalculado).not.toBe(5)
    })

    test('2000 reais de renda mensal retorna 12 reais por hora', () => {
        expect(calcularValorPorHora(2000)).toBe(12)
    })
})

