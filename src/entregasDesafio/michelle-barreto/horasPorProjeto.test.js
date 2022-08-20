const {calcularHorasDeProjeto} = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('calcularHorasDeProjeto', ()=>{

test('Cálculo de um projeto de 40h ', () => {
  const listaDeFuncionalidades =[
    'formulario',
    'construcao_1_pagina',
    'integracao_api_propria',
  ]
const horasCalculadas = calcularHorasDeProjeto(listaDeFuncionalidades)
const horasDeProjetoEsperadas = 40
  
  expect(horas).toBe(horasDeProjetoEsperadas)
})


})