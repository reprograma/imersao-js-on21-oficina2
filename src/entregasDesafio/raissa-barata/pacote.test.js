const { calcularPacote } = require('./pacote')
const horasPorProjeto = require('../../dominio/calculadora/Projeto/horasPorProjeto')

jest.mock('../../dominio/calculadora/Projeto/horasPorProjeto.js')

describe(' calcula pacote', () => {
    test('pacote com 64h de projeto', () => {
        horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(64)
        const horasDeProjeto = horasPorProjeto.calcularHorasDeProjeto()

        const pacote = calcularPacote(horasDeProjeto)

        expect(pacote).toBe('pacote_intermediario');
    })

    test('pacote com 50h de projeto', () => {
        const pacote = calcularPacote(50)

        expect(pacote).toBe('pacote_basico');
    })
} )