const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora')

describe('testes matemáticos simples', () => {
    test('1 + 2 é 3', () => {
        expect(1 + 2).toBe(3)
    })
})

describe('Testes de valor/hora de salários', () => {
    test('Calcular o valor/hora para um salário de R$ 1.000 mensais = 6', () => {
        const salario = 1000
        const resultadoCalculado = calcularValorPorHora(salario)
        const resultadoEsperado = 6
    
        expect(resultadoCalculado).toBe(resultadoEsperado)
        expect(resultadoCalculado).not.toBe(5)
    })
    
    test('Calculo do valor/hora para um salário de R$ 2.000 mensais = 12', () => {
        expect(calcularValorPorHora(2000)).toBe(12)
        expect(calcularValorPorHora(2000)).not.toBe(11)
    })
})

// test.skip -> vai pular"skip" esse teste e rodar os outros 
// test.skip('1 + 2 é 3', () => {

// test.only -> somente esse teste que vai rodar do arquivo
// test.only('Calcular o valor hora para 1000 reais mensais', () => {

