const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')
const horasPorProjeto = require('../../dominio/calculadora/Projeto/horasPorProjeto')

jest.mock('../../dominio/calculadora/Projeto/pacote')

describe('calcular Pacote' , () => {
    test('Pacote para projeto de 64 horas', () => {
     //  const horasDeProjeto = calcularHorasDeProjeto(['setup', 'formulario']) //64

       const horasDeProjeto = horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(64)


        const pacote = calcularPacote(horasDeProjeto)

        //console.log('$RosaDuarte', pacote);

        expect(pacote).toBe("pacote_intermediario")
    })
})