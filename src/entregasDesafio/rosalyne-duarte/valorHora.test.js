const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora");

test(' 1 + 2 é 3 ', () => {
//  expect(1 + 2).toBe(" banana "); ERRADO
  expect(1 + 2).toBe(3);
});

test("Calcular valor por hora para salário de R$ 1.000,00 ", () => {
    //  expect(1 + 2).toBe(" banana "); ERRADO
    const salario = 1000
    const resultadoCalculado = calcularValorPorHora(salario)
    const resultadoEsperado = 6

return Math.ceil()

    expect(resultadoCalculado).toBe(resultadoEsperado)
    expect(resultadoCalculado).not.toBe(5)
    });
