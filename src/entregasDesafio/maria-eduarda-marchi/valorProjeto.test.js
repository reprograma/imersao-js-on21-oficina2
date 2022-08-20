const { calcularValorTotalProjeto } = require('./dominio/calculadora/Projeto/valorProjeto')

describe('Testa a função calcularValorTotalProjeto', () => {

    test('Testa se o valor total do projeto será de 0, para uma pessoa que não trabalhou em nenhum projeto', () => {
        const funcionalidades = []
        const valorPorHora = 15  
        
        const valorTotalProjeto = calcularValorTotalProjeto(funcionalidades, valorPorHora)

        const valorEsperado = 0;

        expect(valorTotalProjeto).toBe(valorEsperado)
    })

    test('Testa se o valor total do projeto será de 0, para uma pessoa que ganha 0 reais por hora', () => {
        const funcionalidades = ['formulario', 'formulario']
        const valorPorHora = 0  
        
        const valorTotalProjeto = calcularValorTotalProjeto(funcionalidades, valorPorHora)

        const valorEsperado = 0;

        expect(valorTotalProjeto).toBe(valorEsperado)
    })

    test('Testa se o valor total do projeto será de 396, para uma pessoa que trabalhou nos projetos listados abaixo ganhando 15 reais por hora', () => {
        const funcionalidades = ['setup', 'formulario']
        const valorPorHora = 15  
        
        const valorTotalProjeto = calcularValorTotalProjeto(funcionalidades, valorPorHora)

        const valorEsperado = 396;

        expect(valorTotalProjeto).toBe(valorEsperado)
    })

})