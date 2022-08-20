const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora')

/*
test('1 + 2 é 3', () => {
    expect(1 + 2).toBe(3)
})
*/
describe('calcularValoresMensais', () => {
    test('Calcular o valor por hora para R$ 1.000,00 mensais.', () => {
        const salario = 1000
        const resultadoCalculado = calcularValorPorHora(salario)
        const resultadoEsperado = 6 // 6 reais por hora
    
        expect(resultadoCalculado).toBe(resultadoEsperado)
    })
    
    test('Calcular para o valor de R$ 2.000,00 mensais retornar R$ 12 por hora', () => {
        expect(calcularValorPorHora(2000)).toBe(12)
    })
})
