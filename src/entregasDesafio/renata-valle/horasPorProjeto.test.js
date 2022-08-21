const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('CalcularHorasDeProjeto', () => {
    test('', () => {
        const ListaDeFuncionalidades = [
            'formulario',
            'construcao_1_pagina',
            'integracao_api_propria'
        ]
        const horasCalculadas = calcularHorasDeProjeto(ListaDeFuncionalidades)
        const horasDeProjetoEsperadas = 40

        expect(horasCalculadas).toBe(horasDeProjetoEsperadas)
    })
})