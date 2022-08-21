const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto')

describe('Calcular Valor Total do Projeto', () => {
    const hora = 6
   
    test('Valor total do projeto', () => {
     
        const funcionalidades = [
            'formulario',
            'construcao_1_pagina',
            'integracao_api_propria'
        ]

        const response = calcularValorTotalProjeto(funcionalidades, hora)

        expect(response).toBe(264)
    })

})