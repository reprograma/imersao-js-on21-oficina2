const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')
const horasPorProjeto = require('../../dominio/calculadora/Projeto/horasPorProjeto')

jest.mock('../../dominio/calculadora/Projeto/horasPorProjeto')

// describe('Calcular pacotes', () => {
//     test('Pacotes para projeto de horas 64', () => {
//         const horasDeProjeto = 64

//         const pacote = calcularPacote(horasDeProjeto)

//         expect(pacote).toBe("pacote_intermediario")

//     })
// })


describe('CALCULAR PACOTES COM MOCK', () => {
    test.skip('Pacotes para projeto de horas 64', () => {
        // const horasDeProjeto = calcularHorasDeProjeto(['setup', 'formulario']) //se for usar a calculadora direto tem que importar a calculadora, arquivo "horasPorProjeto"
        
        horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(64)
        const horasDeProjeto = horasPorProjeto.calcularHorasDeProjeto()

        // Usando o FN
        // const horasPorProjeto = jest.fn(() => 64)
        // const horasPorProjeto = jest.fn()
        // console.log('horasPorProjeto', horasPorProjeto.mockReturnValueOnce(64))
        // const horasDeProjeto = horasPorProjeto

        const pacote = calcularPacote(horasDeProjeto)

        expect(pacote).toBe("pacote_intermediario")
    })
})



// até 1 - 49 é basico
// até 50 - 99 é intermediário
// até 100 ++ é premium
describe('CALCULAR PACOTES SEM MOCK', () => {
    test('Pacote básico é para até 49 horas de projeto', () => {
        const pacote = calcularPacote(49)

        expect(pacote).toBe('pacote_basico')
    })

    test('Pacote intermediário é para até 99 horas de projeto', () => {
        const pacote = calcularPacote(50)

        expect(pacote).toBe('pacote_intermediario')
    })

    test('Pacote premium é para acima de 100 horas de projeto', () => {
        const pacote = calcularPacote(100)

        expect(pacote).toBe('pacote_premium')
    })
})
