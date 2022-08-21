const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('calcularHorasDeProjeto', () => {
    test('Cálculo de um projeto de 64 horas', () => {
        const listaDeFuncionalidades = [
            'formulario',
            'formulario',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'integracao_api_propria'
        ]

        const horasCalculadas = calcularHorasDeProjeto(listaDeFuncionalidades)
        const horasDeProjetoEsperadas = 64

        expect(horasCalculadas).toBe(horasDeProjetoEsperadas)
    })
})