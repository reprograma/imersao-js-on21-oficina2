const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

test('Calcular valor por hora para salário de R$1800,00', () => {
    const salario = 1800;
    const response = calcularValorPorHora(salario);
    
    expect(response).toBe(11);
    expect(response).not.toBe(10);
})