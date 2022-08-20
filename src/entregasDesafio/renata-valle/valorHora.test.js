const {
  calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");

test("Calcular valor por hora para salário de 1000 reais", () => {
  expect(1 + 2).toBe(3);
});
describe("CalcularValorPorHora", () => {
  test("Calcular o valor por hora para 1000 mensais", () => {
    const salario = 1000;
    const resultadoCalculado = calcularValorPorHora(salario);
    const resultadoEsperado = 6;

    expect(resultadoCalculado).toBe(resultadoEsperado);
    expect(resultadoCalculado).not.toBe(5);
  });

  test("2000 reais de renda mensal retorna 12 reais por hora", () => {
    expect(calcularValorPorHora(2000)).toBe(12);
  });
});
