const {} require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe ('calcularHorasDeProjeto', () => {
    test ('Cálculo de um projeto de 40 horas', () => {
        const listadeFuncionalidades = [
            'formulario',
            'formulario',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'integracao_api_propria'
        ]
const horasCalculadas = calcularHorasDeProjeto(listadeFuncionalidades)
const horasDeProjetoEsperadas = 40

        expect(horasCalculadas).toBe(horasDeProjetoEsperadas)
    })
})