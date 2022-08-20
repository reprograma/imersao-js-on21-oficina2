const {calcularValorPorHora} = require('../../dominio/calculadora/Hora/valorHora');

test('1 + 2 é 3', ()=>{

    expect(1 + 2).toBe(3)
})

test ('Calcular o valor por hora para 1000 reais', ()=>{
    const salario = 1000
    const resultadoCalculado = calcularValorPorHora(salario)
    const resultadoEsperado = 6

    expect(resultadoCalculado).toBe(resultadoEsperado)
    expect(resultadoEsperado).not.toBe(5)

    return Math.ceil(calcularValorPorHora)
})