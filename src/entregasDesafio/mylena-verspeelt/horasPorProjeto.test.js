const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto.js");

describe("calcularHorasDeProjeto", () => {
  test("cálculo de um projeto de 40 horas", () => {
    const listaDeFuncionalidades = [
      "formulario",
      "formulario",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "integracao_api_propria",
    ];

const horasCalculadas = calcularHorasDeProjeto(listaDeFuncionalidades)
const horasDeProjetoEsperadas = 64
console.log(listaDeFuncionalidades)

expect(horasCalculadas).toBe(horasDeProjetoEsperadas)
  });
});
