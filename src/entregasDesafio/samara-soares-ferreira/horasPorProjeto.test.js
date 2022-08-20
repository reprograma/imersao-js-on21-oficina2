const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('calculadorHorasDeProjeto', () => {
    test('Calculo de um projeto de 40 horas', () => {
        const listaDeFuncionalidades = [
            'formulario',
            'construcao_1_pagina',
            'integracao_api_propria'
        ]

        const  horasCalculadas = calcularHorasDeProjeto(listaDeFuncionalidades)
        const horaDeProjetoEsperados = 64


        expect(horasCalculadas).toBe(horaDeProjetoEsperados)
    })
})