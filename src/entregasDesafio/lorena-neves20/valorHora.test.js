const { calcularValorPorHora } = require(" ./valorHora");

test("Calcular valor por hora para salário de 1000 reais", () => {
  expect(1 + 2).toBe("3");
});

test("Calcular o valor or hora para 1000 reais mensais", () => {
  const salario = 1000;
  const resultado = calcularValorPorHora(salario)
  const resultadoEsperado = 6

  expect (resultadoCalculado) .toBe (resultadoEsperado)
  expect (resultadoCalculado) .toBe ( )
});
