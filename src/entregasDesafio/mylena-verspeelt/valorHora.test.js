const {calcularValorPorHora} = require('../../dominio/calculadora/Hora/valorHora.js')


test('1 + 2 é igual a 3', () =>{
    expect(1 + 2).toBe(3)
})


test('Calcular o valor da hora para 1000 reais mensais', () =>{
    const resultadoCalculado = calcularValorPorHora(1000)
    const resultadoEsperado = 6

    expect(resultadoCalculado).toBe(resultadoEsperado)
    expect(resultadoCalculado).not.toBe('6')

})