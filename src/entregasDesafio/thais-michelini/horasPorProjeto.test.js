const {
  calcularHorasDeProjeto,
} = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('calcularHorasdeProjeto', () => {
  test('Calculo de um projeto de 40 horas', () => {
    const listaDeFuncionalidades = [
      'formulario',
      'construcao_1_pagina',
      'integracao_api_propria',
    ];

    const horasCalculadas = calcularHorasDeProjeto(listaDeFuncionalidades);
    const horasDeProjetoEsperadas = 40;

    expect(horasCalculadas).toBe(horasDeProjetoEsperadas);
  });
});
