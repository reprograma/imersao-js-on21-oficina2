const {} = require('../../dominio/calculadora/Projeto/valorProjeto')

describe('calcularValorTotalProjeto',() => {
    test('Calculo do valor total do projeto', () => {
        const totalDeHorasPorProjeto = calcularHorasDeProjeto(funcionalidades);
        const pacote = calcularPacote(totalDeHorasPorProjeto);
        const valorBase = calcularValorBaseProjeto(totalDeHorasPorProjeto, valorHora);

        expect(valorBase).toBe(1000)
    })

})