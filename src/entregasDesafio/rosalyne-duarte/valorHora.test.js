const {
  calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");

// test(' 1 + 2 é 3 ', () => {
//   expect(1 + 2).toBe(3);
// });

describe("Calcular Valor por Hora", () => {
  test("Calcular valor por hora para salário de R$ 1.000,00 ", () => {
    const salario = 1000;
    const resultadoCalculado = calcularValorPorHora(salario);
    const resultadoEsperado = 6;

    expect(resultadoCalculado).toBe(resultadoEsperado);
    expect(resultadoCalculado).not.toBe(5);
  });

  test("Calculo de R$ 2.000,00, retorna R$ 12,00 por Hora", () => {
    expect(calcularValorPorHora(2000)).toBe(12);
  });
});
