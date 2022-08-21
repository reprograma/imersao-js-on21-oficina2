const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('calcularHorasDeProjeto', () => {
    test('Cálculo de um projeto de 40 horas', () => {
        const listaDeFuncionalidades = [
            'formulario',
            'formulario',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'integracao_api_propria'
        ]

        const horasCalculadas = calcularHorasDeProjeto(listaDeFuncionalidades)
        const horasProjetoEsperadas = 64
        expect(horasCalculadas).toBe(horasProjetoEsperadas)
    })
})Adicionado teste para calcular valor por hora