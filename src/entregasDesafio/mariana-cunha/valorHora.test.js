const {
  calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");

test("1 + 2 é igual a 3", () => {
  expect(1 + 2).toBe(3);
});

test("calcular o salário por hora para 1000 reais por mês", () => {
  const salario = 1000;
  const resultado = calcularValorPorHora(salario);

  expect(resultado).toBe(6);
  expect(resultado).not.toBe(5);
});
