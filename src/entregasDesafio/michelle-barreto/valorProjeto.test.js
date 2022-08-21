const {calcularValorTotalProjeto} = require('../../dominio/calculadora/Projeto/valorProjeto')

describe('calcularValorTotalProjeto', ()=>{
    test('Teste pacote básico(50h), com taxa de 10%', ()=>{
        const listaDeFuncionalidades1 =["setup","formulario"]
        expect(calcularValorTotalProjeto(listaDeFuncionalidades1,10)).toBe(264)
    })
    test('Teste pacote intermediário(100h), com taxa de 12%', ()=>{
        const listaDeFuncionalidades2 = ["setup","formulario","responsividade","otimizacao_seo"] 
        expect(calcularValorTotalProjeto(listaDeFuncionalidades2, 23)).toBe(1546)
    })
    test('Teste pacote premium(200h), com taxa de 15%', ()=>{
        const listaDeFuncionalidades3 = ["setup","formulario","responsividade","otimizacao_seo","construcao_1_pagina","integracao_mailchimp","ssr","integracao_api_propria"] 
        expect(calcularValorTotalProjeto(listaDeFuncionalidades3, 6)).toBe(936)
    })
})