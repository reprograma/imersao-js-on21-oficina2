const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('Calcular horas projeto', () => {
    test('Calculos de um projeto', () => {
        const listaDeFuncionalidades = [
            'formulario', 
            'construcao_1_pagina',
            'construcao_1_pagina',
            'integracao_api_propria'
        ]
        
        // const horas = calcularHorasDeProjeto(listaDeFuncionalidades)
        // //passado
        // console.log('>>>', horas)

        // //teste errado
        // expect(horas).toBe(13)

        // //teste esperado
        // expect(horas).toBe(40)

        const horasCalculadas = calcularHorasDeProjeto(listaDeFuncionalidades)
        const horasDeProjetoEsperadas = 64

        expect(horasCalculadas).toBe(horasDeProjetoEsperadas)
    })
})