const {calcularValorPorHora} = require('../../dominio/calculadora/Hora/valorHora.js')

describe('Teste de soma simples', () => {
    test('1 + 2 é igual a 3', () =>{
        expect(1 + 2).toBe(3)
    })
})


describe('calcularValorPorHora', () =>{
    test('Calcular o valor da hora para 1000 reais mensais', () =>{
        const resultadoCalculado = calcularValorPorHora(1000)
        const resultadoEsperado = 6
    
        expect(resultadoCalculado).toBe(resultadoEsperado)
  
    }) 
})

describe('calcularValorPorHora', () => {
    test('2000 reais de renda mensal retorna 12 reais por', () => {
        expect(calcularValorPorHora(2000)).toBe(12)
    })
    
})


