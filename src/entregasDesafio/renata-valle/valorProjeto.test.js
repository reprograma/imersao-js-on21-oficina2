const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto")

//hora
const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")

const valorPorHora = require("../../dominio/calculadora/Hora/valorHora");
jest.mock("../../dominio/calculadora/Hora/valorHora")

valorPorHora.calcularValorPorHora.mockReturnValue(10)

const valorHora = calcularValorPorHora()

describe("Calcular valor total projeto, esperado: 440 reais", () => {
  test("funcionalidade", () => {
    const ListaDeFuncionalidades = [
      "formulario",
      "construcao_1_pagina",
      "integracao_api_propria",
    ];

    const funValorProjeto = calcularValorTotalProjeto(ListaDeFuncionalidades, valorHora);

    // console.log(funValorProjeto);
    // console.log(ListaDeFuncionalidades);
    // console.log(valorHora);

    expect(funValorProjeto).toBe(440)
  });
});
