const { calcularHorasDeProjeto } = require('../calculadora/Projeto/horasPorProjeto');

describe('Calcular quantidade de horas de projeto', () => {
    test('Cálculo de um projeto de 40h', () => {
        const listaDeFuncionalidades = ['formulario', 'construcao_1_pagina', 'integracao_api_propria'];
        const response = calcularHorasDeProjeto(listaDeFuncionalidades);
    
        expect(response).toBe(40);
    })

    test('Cálculo de um projeto de 104h', () => {
        const listaDeFuncionalidades = [
            'setup', 
            'formulario',
            'responsividade',
            'otimizacao_seo',
            'construcao_1_pagina', 
            'integracao_mailchimp',
            'ssr',
            'integracao_api_propria'];
        const response = calcularHorasDeProjeto(listaDeFuncionalidades);
    
        expect(response).toBe(104);
    })
    
    test('Cálculo de um projeto com funcionalidade inexistente', () => {
        const listaDeFuncionalidades = [
            'formulario',
            'integracao_api_propria',
            'funcionalidade_inexistente'];
    
        expect( () => { calcularHorasDeProjeto(listaDeFuncionalidades) } ).toThrow("Funcionalidade 'funcionalidade_inexistente' não existe");
    })

})