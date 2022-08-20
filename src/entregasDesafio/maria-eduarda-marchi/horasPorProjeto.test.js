const { calcularHorasDeProjeto } = require('./dominio/calculadora/Projeto/horasPorProjeto'
)
describe('Calcular horas de projeto', () => {

    test('Testa se o cálculo de um projeto vazio retorna 0', () => {
        const listaDeFuncionalidades = []

        const horasPorProjeto = calcularHorasDeProjeto(listaDeFuncionalidades)

        expect(horasPorProjeto).toBe(0)
    })

    test('Testa o cálculo de um projeto de 8 horas', () => {
        const listaDeFuncionalidades = ['setup']

        const horasPorProjeto = calcularHorasDeProjeto(listaDeFuncionalidades)

        expect(horasPorProjeto).toBe(8)
    })


    test('Testa o cálculo de um projeto de 64 horas', () => {
        const listaDeFuncionalidades = [
            'formulario',
            'formulario',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'integracao_api_propria'
        ]

        const horasPorProjeto = calcularHorasDeProjeto(listaDeFuncionalidades)

        expect(horasPorProjeto).toBe(64)
    })
})