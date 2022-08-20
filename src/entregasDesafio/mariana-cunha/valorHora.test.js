const {
  calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");

describe('teste de soma simples', () => {
  test("1 + 2 é igual a 3", () => {
    expect(1 + 2).toBe(3);
  });
})


describe("calcular o salário por hora/mês", () => {
  it("1000 reais", () => {
    const salario = 1000;
    const calculo = calcularValorPorHora(salario);

    expect(calculo).toBe(6);
    expect(calculo).not.toBe(5);
  });

  it("2000 reais", () => {
    const salario = 2000;
    const calculo = calcularValorPorHora(salario);

    expect(calculo).toBe(12)
  });
});
