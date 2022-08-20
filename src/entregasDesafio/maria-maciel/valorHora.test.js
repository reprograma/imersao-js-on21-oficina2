const {
  calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");

test("Calcular valor por hora para salario de 1000 reais", () => {
  const salario = 1000;
  const resultadoCalculado = calcularValorPorHora(salario);
  const resultadoEsperado = 6;

  expect(resultadoCalculado).toBe(resultadoEsperado);
  expect(resultadoCalculado).not.toBe(5);
});
