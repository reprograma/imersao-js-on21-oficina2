const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto')
const horasPorProjeto = require('../../dominio/calculadora/Projeto/horasPorProjeto')
const valorHora  = require('../../dominio/calculadora/Hora/valorHora')

jest.mock('../../dominio/calculadora/Hora/valorHora')
jest.mock('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('calcularValorTotalProjeto', () => {

    test('Projeto de 40h com valor R$10,00 p/ hora, pacote_basico e taxa de 10% = R$440,00', () => {
        valorHora.calcularValorPorHora.mockReturnValueOnce(10)
        const valorPorHoraProjeto = valorHora.calcularValorPorHora()
        horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(40)
        const valorTotalProjeto = calcularValorTotalProjeto(['teste'], valorPorHoraProjeto)
        expect(valorTotalProjeto).toBe(440)
    })

    test('Projeto de 80h com valor R$10,00 p/ hora, pacote_intermediario e taxa de 12% = R$960,00', () => {
        valorHora.calcularValorPorHora.mockReturnValueOnce(10)
        const valorPorHoraProjeto = valorHora.calcularValorPorHora()
        horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(80)
        const valorTotalProjeto = calcularValorTotalProjeto(['teste'], valorPorHoraProjeto)
        expect(valorTotalProjeto).toBe(960)
    })

    test('Projeto de 104 com valor R$10,00 p/ hora, pacote_premium e taxa de 15% = R$1560,00', () => {
        valorHora.calcularValorPorHora.mockReturnValueOnce(10)
        const valorPorHoraProjeto = valorHora.calcularValorPorHora()
        horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(104)
        const valorTotalProjeto = calcularValorTotalProjeto(['teste'], valorPorHoraProjeto)
        expect(valorTotalProjeto).toBe(1560)
    })
})