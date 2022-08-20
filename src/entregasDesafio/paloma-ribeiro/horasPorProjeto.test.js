const {calcularHorasDeProjeto} = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('calcularHorasDeProjeto', () => {
    test('',() => {
        const listaDeFuncionalidades = [
            'formulario',
            'construcao_1_pagina',
            'integracao_api_propria'

        ]
        
        const horasCalculadas = calcularHorasDeProjeto (listaDeFuncionalidades)
        const horasDeProjetoEsperadas = 40

        expect (horasCalculadas).toBe (horasDeProjetoEsperadas)
    })
})