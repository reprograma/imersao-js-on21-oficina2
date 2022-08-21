const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto')

describe('CALCULAR VALOR TOTAL DO PROJETO', () => {
    test('Teste do Pacote Básico: até 50h de trabalho, taxa de 10%', () => {
        const valorHora = 12
        // const pacote = 'pacote_basico'
        const listaDeFuncionalidades = [
            'responsividade', //16
            'construcao_1_pagina' //8 = 24
        ]
        const valor = calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)
        console.log('Valor', valor)

        expect(valor).toBe(317)
    })

    test('Teste do Pacote Intermediário: até 100h de trabalho, taxa de 12%', () => {
        const valorHora = 12
        // const pacote = 'pacote_intermediario'
        const listaDeFuncionalidades = [
            'responsividade', //16
            'construcao_1_pagina', //8
            'integracao_mailchimp', //16
            'integracao_api_propria', //16
            'formulario' //16 = 72
        ]
        const valor = calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)
        console.log('Valor', valor)

        expect(valor).toBe(968)
    })

    test('Teste do Pacote Premium: até 200h de trabalho, taxa de 15%', () => {
        const valorHora = 12
        // const pacote = 'pacote_premium'
        const listaDeFuncionalidades = [
            'responsividade', //16
            'construcao_1_pagina', //8
            'integracao_mailchimp', //16
            'integracao_api_propria', //16
            'formulario', //16
            'otimizacao_seo', //16
            'ssr', //8
            'setup' //8 = 104
        ]
        const valor = calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)
        console.log('Valor', valor)

        expect(valor).toBe(1435)
    })

})

