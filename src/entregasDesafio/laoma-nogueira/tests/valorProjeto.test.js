const { calcularValorTotalProjeto } = require('../calculadora/Projeto/valorProjeto');
const calculoValorHora = require('../calculadora/Hora/valorHora');

jest.mock('../calculadora/Hora/valorHora')

beforeEach(() => {
    calculoValorHora.calcularValorPorHora.mockReturnValueOnce(15);
});

describe('Calcular valor total do projeto', () => {
    test('Valor total esperado pro projeto: R$1152,00', () => {
        const listaDeFuncionalidades = ['formulario', 'formulario', 'construcao_1_pagina', 'construcao_1_pagina', 'integracao_api_propria'];
        const valorHora = calculoValorHora.calcularValorPorHora();
        const response = calcularValorTotalProjeto(listaDeFuncionalidades, valorHora);
    
        expect(response).toBe(1152);
    })

    test('Valor total esperado pro projeto: R$660,00', () => {
        const listaDeFuncionalidades = ['formulario', 'construcao_1_pagina', 'integracao_api_propria'];
        const valorHora = calculoValorHora.calcularValorPorHora();
        const response = calcularValorTotalProjeto(listaDeFuncionalidades, valorHora);
    
        expect(response).toBe(660);
    })

    test('Erro esperado ao calcular valor do projeto com funcionalidade inexistente', () => {
        const listaDeFuncionalidades = ['funcionalidade_inexistente', 'construcao_1_pagina', 'integracao_api_propria'];
        const valorHora = calculoValorHora.calcularValorPorHora();
    
        expect( () => { calcularValorTotalProjeto(listaDeFuncionalidades, valorHora) } ).toThrow("Funcionalidade 'funcionalidade_inexistente' não existe");;
    })
})

