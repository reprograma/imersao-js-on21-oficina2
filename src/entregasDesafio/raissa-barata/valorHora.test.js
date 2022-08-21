const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora')

describe('cria testes para funções com cenários de salários diferentes', () => {

    test('calcular valor por hora para um salário de 1000', () => {
        const salario = 1000;
        const resultado = calcularValorPorHora(salario)
        const resultadoEsperado = 6
    
        expect(resultado).toBe(resultadoEsperado)
    })
    
    test('2000 reais mensais que retorna 12rs hora', () => {
        const salario = 2000;
        const resultado = calcularValorPorHora(salario)
        const resultadoEsperado = 12
    
        expect(calcularValorPorHora(salario)).toBe(resultadoEsperado)
    })
})

test('calcular vse 1+2 é igual a  3', () => {
    expect(1+2).toBe(3)
})
