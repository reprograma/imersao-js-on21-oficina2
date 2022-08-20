const {
  calcularValorTotalProjeto,
} = require("../../dominio/calculadora/Projeto/valorProjeto");
const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

const {
  calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");

const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("calcular valor total do projeto", () => {
  test("calcular valor de projeto 56h, ", () => {
    const totalDeHoras = 56;
    const valorMensal = 4000;
    const listaDeFuncionalidades = [
      "formulario",
      "formulario",
      "construcao_1_pagina",
      "integracao_api_propria",
    ];

    let valorHora = calcularValorPorHora(valorMensal);
    expect(valorHora).toBe(23);

    let horasDeProjeto = calcularHorasDeProjeto(listaDeFuncionalidades);
    expect(horasDeProjeto).toBe(56);

    let calcularValorPacote = calcularPacote(totalDeHoras);
    expect(calcularValorPacote).toBe("pacote_intermediario");

    let valorTotalDoProjeto = calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)
    expect(valorTotalDoProjeto).toBe(1546)
  });
});
