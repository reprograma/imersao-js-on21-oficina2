const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto')

describe('calcularValorTotalProjeto', () => {
    test('Calcular um projeto com pacote básico - até 50 horas e taxa 10%', () => {
        const listaDeFuncionalidades = [
            'responsividade',
            'otimizacao_seo',
            'construcao_1_pagina'
        ]

        const valorHora = 10
        const valorCalculado = calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)
        const valorTotalProjetoComTaxa = 440

        expect(valorCalculado).toBe(valorTotalProjetoComTaxa)
    })

    test('Calcular um projeto com pacote intermediário - até 100 horas e taxa 12%', () => {
        const listaDeFuncionalidades = [
            'formulario',
            'formulario',
            'formulario',
            'responsividade',
            'otimizacao_seo',
            'integracao_api_propria'
        ]

        const valorHora = 10
        const valorCalculado = calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)
        const valorTotalProjetoComTaxa = 1152

        expect(valorCalculado).toBe(valorTotalProjetoComTaxa)
    })

    test('Calcular um projeto com pacote premium - até 200 horas e taxa 15%', () => {
        const listaDeFuncionalidades = [
            'formulario',
            'formulario',
            'formulario',
            'responsividade',
            'otimizacao_seo',
            'integracao_api_propria',
            'construcao_1_pagina'
        ]

        const valorHora = 10
        const valorCalculado = calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)
        const valorTotalProjetoComTaxa = 1560

        expect(valorCalculado).toBe(valorTotalProjetoComTaxa)
    })
})