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

    test('', () => {
        
    })

})