const { calcularValorTotalProjeto } = require('./valorProjeto')


describe('valor total do projeto + percentual de acrescimo',() => {

    test('teste para pacote básico + 10%', () => {
        const valorHora = 6
        const listaDeFuncionalidades = [
            'formulario',
            'construcao_1_pagina',
            'integracao_api_propria'
        ]

        const resposta = calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)

        expect(resposta).toBe(264)
    })

    test('teste para pacote intermediário + 12%', () => {
        const valorHora = 6
        const listaDeFuncionalidades = [
            'formulario',
            'construcao_1_pagina',
            'integracao_api_propria',
            'integracao_mailchimp'
        ]
        const resposta = calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)
        expect(resposta).toBe(376)
    })

    test('teste para pacote avançado + 15%', () => {
        const valorHora = 6
        const listaDeFuncionalidades = [
            'setup',
            'formulario',
            'responsividade',
            'otimizacao_seo',
            'construcao_1_pagina',
            'integracao_mailchimp',
            'ssr',
            'integracao_api_propria'
        ]
        const resposta = calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)
        expect(resposta).toBe(718)
    })
})