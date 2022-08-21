const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto")


test('Calcular horas do projeto', () => {
    const listaDeFuncionalidades = [

        'formulario',
        'construcao_1_pagina',
        'integracao_api_propria'

    ]
    const horasDeProjeto = calcularHorasDeProjeto(listaDeFuncionalidades)
    const horasDeProjetoEsperadas = 40
    expect(horasDeProjeto).toBe(horasDeProjetoEsperadas)
})
