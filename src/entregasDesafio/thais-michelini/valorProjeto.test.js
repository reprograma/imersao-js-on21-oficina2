const {
  calcularValorTotalProjeto,
  calcularValorBaseProjeto,
} = require('../thais-michelini/valorProjeto');
const {
  calcularHorasDeProjeto,
} = require('../../dominio/calculadora/Projeto/horasPorProjeto');
const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('Valor total do Projeto', () => {
  test('Valor por Hora', () => {
    const listaFuncionalidade = [
      'formulario',
      'construcao_1_pagina',
      'integracao_api_propria',
    ];
    const horasProjeto = calcularHorasDeProjeto(listaFuncionalidade);
    expect(horasProjeto).toBe(40);
  });

  test('Valor por Pacote', () => {
    const horas = 90;
    const pacote = calcularPacote(horas);
    expect(pacote).toBe('pacote_intermediario');
  });

  test('Valor Base', () => {
    const valorHora = 6;
    const totalDeHorasProjeto = 90;
    const ValorBaseProjeto = calcularValorBaseProjeto(
      totalDeHorasProjeto,
      valorHora
    );
    expect(ValorBaseProjeto).toBe(540);
  });

  test('Valor do Projeto', () => {
    const listaFuncionalidades = [
      'formulario',
      'construcao_1_pagina',
      'integracao_api_propria',
    ];
    const valorHora = 6;
    const TotalValorProjeto = calcularValorTotalProjeto(
      listaFuncionalidades,
      valorHora
    );
    expect(TotalValorProjeto).toBe(264);
  });
});
