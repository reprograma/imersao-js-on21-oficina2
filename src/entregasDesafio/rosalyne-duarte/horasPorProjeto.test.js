const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('Calcular Horas de Projeto' , () => {
    test('Calculo de um projeto de 40 horas', () => {
        const listaFuncionalidades = [
            'formulario',
            'formulario',
            'construcao_1_pagina',
            'integracao_api_propria'
        ]
        const horasCalculadas = calcularHorasDeProjeto(listaFuncionalidades)
        const horasDeProjetoEsperadas = 56 // ERRADO, COLOCA 64
        //console.log("$RosaDuarte", horasCalculadas);

        expect(horasCalculadas).toBe(horasDeProjetoEsperadas)
    })

    test('Calculo de Horas para 1 Página', () => {
        const listaDeFuncionalidades = 
        [
            'construcao_1_pagina'
        ]
        const horasParaConstrucaoUnicaPagina = calcularHorasDeProjeto(listaDeFuncionalidades)
        expect(horasParaConstrucaoUnicaPagina).toBe(8) //FAILED = Qualquer numero diferente de 8
    })

    // test.only('Teste Cintia', () => {
    //     expect(calcularHorasDeProjeto(['Cintia'])).toThrow('banana')
    // })

    test('Calculo de Horas de todas as Funcionalidades', () => {
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
        const horasTotalDeFuncionalidades = calcularHorasDeProjeto(listaDeFuncionalidades)
        expect(horasTotalDeFuncionalidades).toBe(104) // TESTE FAILED = 120
    })

})