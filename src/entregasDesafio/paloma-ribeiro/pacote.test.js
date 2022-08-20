const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')
const { } = require ('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('calcularPacote', () =>{
    test ('Pacote para projeto de 64 horas', () => {
        const horasDeProjeto = 64

        const pacote = calcularPacote(horasDeProjeto)

        expect(pacote).toBe('pacote_intermediario')
    })
})