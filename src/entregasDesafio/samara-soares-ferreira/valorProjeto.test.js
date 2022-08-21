const {} = require('../../dominio/calculadora/Projeto/valorProjeto')
const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('calcularValorTotalProjeto',() => {
    test('Calculo do valor total do projeto', () => {
        const totalDeHorasPorProjeto = calcularHorasDeProjeto(funcionalidades);
        const valorBase = calcularValorBaseProjeto(totalDeHorasPorProjeto, valorHora);



        expect(totalDeHorasPorProjeto).toBe(valorBase)
    })

})