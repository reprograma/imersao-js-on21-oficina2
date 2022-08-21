const {calcularValorTotalProjeto} = require('../../dominio/calculadora/Projeto/valorProjeto')

// jest.mock('../../dominio/calculadora/Projeto/horasPorProjeto.js')
// jest.mock('../../dominio/calculadora/Projeto/pacote.js')


describe('valor total do projeto + 10%',() => {
    test('teste para pacote básico', () => {
        const valorHora = 6
        const listaDeFuncionalidades = [
            'formulario',
            'construcao_1_pagina',
            'integracao_api_propria'
        ]
        const resposta = calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)
        expect(resposta).toBe(264)
    })

    test('teste para pacote intermediário +  ', () => {
        const valorHora = 6
        const listaDeFuncionalidades = [
            'formulario',
            'construcao_1_pagina',
            'integracao_api_propria'
        ]
        const resposta = calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)
        expect(resposta).toBe(264)
    })

    test('teste para pacote básico', () => {
        const valorHora = 6
        const listaDeFuncionalidades = [
            'formulario',
            'construcao_1_pagina',
            'integracao_api_propria'
        ]
        const resposta = calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)
        expect(resposta).toBe(264)
    })
})