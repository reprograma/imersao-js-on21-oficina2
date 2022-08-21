const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto')
const horasPorProjeto = require('../../dominio/calculadora/Projeto/horasPorProjeto')
const valorHora  = require('../../dominio/calculadora/Hora/valorHora')

jest.mock('../../dominio/calculadora/Hora/valorHora')

describe('calcularValorTotalProjeto', () => {

    test('Projeto de 40h com valor R$10,00 p/ hora, pacote_basico e taxa de 10% = R$440,00', () => {
        const listaFuncionalidades = [
            'formulario',
            'otimizacao_seo',
            'setup'
        ]

        valorHora.calcularValorPorHora.mockReturnValueOnce(10)
        const valorPorHoraProjeto = valorHora.calcularValorPorHora()
        const valorTotalProjeto = calcularValorTotalProjeto(listaFuncionalidades, valorPorHoraProjeto)
        expect(valorTotalProjeto).toBe(440)
    })

    test('Projeto de 80h com valor R$10,00 p/ hora, pacote_intermediario e taxa de 12% = R$960,00', () => {
        const listaFuncionalidades = [
            'formulario',
            'responsividade',
            'otimizacao_seo',
            'integracao_mailchimp',
            'integracao_api_propria'
        ]

        valorHora.calcularValorPorHora.mockReturnValueOnce(10)
        const valorPorHoraProjeto = valorHora.calcularValorPorHora()
        const valorTotalProjeto = calcularValorTotalProjeto(listaFuncionalidades, valorPorHoraProjeto)
        expect(valorTotalProjeto).toBe(960)
    })

    test('Projeto de 104 com valor R$10,00 p/ hora, pacote_premium e taxa de 15% = R$1560,00', () => {
        const listaFuncionalidades = [
            'setup',
            'formulario',
            'responsividade',
            'otimizacao_seo',
            'construcao_1_pagina',
            'integracao_mailchimp',
            'ssr',
            'integracao_api_propria'
        ]

        valorHora.calcularValorPorHora.mockReturnValueOnce(10)
        const valorPorHoraProjeto = valorHora.calcularValorPorHora()
        const valorTotalProjeto = calcularValorTotalProjeto(listaFuncionalidades, valorPorHoraProjeto)
        expect(valorTotalProjeto).toBe(1560)
    })
})