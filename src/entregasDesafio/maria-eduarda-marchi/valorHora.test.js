const { calcularValorPorHora } = require('./dominio/calculadora/Hora/valorHora')

describe('Teste de soma simples', () => {
    test('Calcular valor por hora para salário de 1.000 reais', () => {
        expect(1 + 2).toBe(3)
    })

})


describe('calcularValorPorHora', () => {
    test('Calcular o valor por hora para 1.000 reais mensais', () => {
        const resultado = calcularValorPorHora(1000)
    
        expect(resultado).toBe(6)
        expect(resultado).not.toBe("banana")
    })

    test('Calcular o valor por hora para 2.000 reais mensais', () => {
        const resultado = calcularValorPorHora(2000)
    
        expect(resultado).toBe(12)
        expect(resultado).not.toBe("banana")
    })

})
