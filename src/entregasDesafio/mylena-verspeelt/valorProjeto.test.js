const { calcularValorTotalProjeto } = require("./valorProjeto.js");

const { calcularValorBaseProjeto } = require("./valorProjeto.js");

describe("calcularValorTotalProjeto", () => {
  test("Calcular o valor base do projeto", () => {
    const totalDeHorasPorProjeto = 150;
    const valorHora = 12;
    expect(calcularValorBaseProjeto(totalDeHorasPorProjeto, valorHora)).toBe(
      1800
    );
  });

  test("Calcular o valor base do projeto (simulacao)", () => {
    const totalDeHorasPorProjeto = jest.fn(() => 150);
    const horasDoProjeto = totalDeHorasPorProjeto();
    const calcularPacote = jest.fn(() => 12);
    const valorHora = calcularPacote(horasDoProjeto);
    const resultado = calcularValorBaseProjeto(horasDoProjeto, valorHora);
    expect(resultado).toBe(1800);
  });

  test("Calcular o valor total do projeto", () => {
    const valorHora = 16;
    const funcionalidades = ["otimizacao_seo", "responsividade", "formulario"];
    expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(845);
  });


});
