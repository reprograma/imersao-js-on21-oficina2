const { calcularValorPorHora } = require('../calculadora/Hora/valorHora');

describe('Calcular valor por hora', () => {
    test('Salário de R$1800,00, resultado esperado: R$11,00 por hora', () => {
        const salario = 1800;
        const response = calcularValorPorHora(salario);
    
        expect(response).toBe(11);
        expect(response).not.toBe(10);
        expect(response).not.toBe(12);
    })

    test('Salário de R$5000,00, resultado esperado: R$29,00 por hora', () => {
        const salario = 5000;
        const response = calcularValorPorHora(salario);
    
        expect(response).toEqual(29);
        expect(response).not.toBe(28);
        expect(response).not.toBe(30);
    })

})