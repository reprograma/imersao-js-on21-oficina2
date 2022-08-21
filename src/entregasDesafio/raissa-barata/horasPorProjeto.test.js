const {calcularHorasDeProjeto} = require('../../dominio/calculadora/Projeto/horasPorProjeto')


describe('calcula horas do projeto', () => {
    test('calcula projeto com 64h', () => {
        const listaDeFuncionalidades = [
            'formulario',
            'construcao_1_pagina',
            'integracao_api_propria'
        ]

        const horas = calcularHorasDeProjeto(listaDeFuncionalidades)
        const horasDeProjetosEsperadas = 40
        
        expect(horas).toBe(horasDeProjetosEsperadas)
    })

    test('funcionalidade que n existe', () => {
        const listaDeFuncionalidades = ['calculadora']
        const horas = calcularHorasDeProjeto(listaDeFuncionalidades)

        expect(horas).toBeNaN()

    })
})