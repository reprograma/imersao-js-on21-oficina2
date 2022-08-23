
const { calcularValorPorHora } = require('../../dominio/calculadora/hora/valorHora.js')

test('1+2 é 3', () => {

  expect(1 + 2), toBe(3)
})

//outro teste
describe('Calcular valor por hora', () => {

  test('Calcular o valor por hora ', () => {
    const salario = 1000
    const resultatdoCalculado = calcularValorPorHora(salario)
    const resultadoEsperado = 6

    expect(resultatdoCalculado).toBe(resultadoEsperado)
    expect(resultatdoCalculado).not.toBe(resultadoEsperado)
  })

  test('2000 reais de renda mensal retorna 12 reais por hora', () => {
    const salario=2000
    const resultato=calcularValorPorHora(salario)
    const resultadoEsperado=12
    expect(calcularValorPorHora(salario)).toBe(resultadoEsperado)
  })
})