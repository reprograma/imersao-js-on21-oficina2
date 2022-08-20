const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');
const horasPorProjeto = require('../../dominio/calculadora/Projeto/horasPorProjeto')

jest.mock('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('calcular pacote', () => {
    test('pacote para projeto de 64h', () => {
        horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(64);
        const horasDeProjeto = horasPorProjeto.calcularHorasDeProjeto('')

        const pacote = calcularPacote(horasDeProjeto);
        // console.log(pacote)

        expect(pacote).toBe('pacote_intermediario')
        expect(pacote).not.toBe('pacote_premium')
        expect(pacote).not.toBe('pacote_basico')
    })
})