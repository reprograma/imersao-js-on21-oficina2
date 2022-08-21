const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')
const horasPorProjeto = require('../../dominio/calculadora/Projeto/horasPorProjeto')

jest.mock('../../dominio/calculdora/Projeto/horasPorProjeto')

// describe('Calcular pacotes', () => {
//     test('Pacotes para projeto de horas 64', () => {
//         const horasDeProjeto = 64

//         const pacote = calcularPacote(horasDeProjeto)

//         expect(pacote).toBe("pacote_intermediario")

//     })
// })

describe('Calcular pacotes', () => {
    test('Pacotes para projeto de horas 64', () => {
        const horasDeProjeto = horasPorProjeto.calcularHorasDeProjeto

        const pacote = calcularPacote(horasDeProjeto)

        expect(pacote).toBe("pacote_intermediario")

    })
})