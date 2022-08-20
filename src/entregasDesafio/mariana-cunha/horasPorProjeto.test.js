const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("calcularHorasDeProjeto", () => {
  test("calcular um projeto de 40h", () => {
    const listaDeFuncionalidades = [
      "formulario",
      "construcao_1_pagina",
      "integracao_api_propria",
    ];

    const horasCalculadas = calcularHorasDeProjeto(listaDeFuncionalidades);

    expect(horasCalculadas).toBe(40);

    // console.log('horas', horasCalculadas);
  });
});
