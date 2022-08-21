const { calcularPacote } = require('./pacote')
const horasPorProjeto = require('../../dominio/calculadora/Projeto/horasPorProjeto')

jest.mock('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('calcular Pacote' , () => {
    test('Pacote para projeto de 64 horas', () => {
     //  const horasDeProjeto = calcularHorasDeProjeto(['setup', 'formulario']) //64

        horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(64)

        const horasDeProjeto = horasPorProjeto.calcularHorasDeProjeto()

        const pacote = calcularPacote(horasDeProjeto)

        //console.log('$RosaDuarte', pacote);

        expect(pacote).toBe("pacote_intermediario")
    })

    test('Pacote básico para 50 horas de projeto', () => {
        const pacote = calcularPacote(50)

        expect(pacote).toBe('pacote_basico')
    } )

    test('Pacote para projeto de 100 horas', () => {
           horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(100)
           const horasDeProjeto = horasPorProjeto.calcularHorasDeProjeto()
           const pacote = calcularPacote(horasDeProjeto)
   
           expect(pacote).toBe("pacote_intermediario")
       })

       test('Pacote para projeto de 200 horas', () => {
        horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(200)
        const horasDeProjeto = horasPorProjeto.calcularHorasDeProjeto()
        const pacote = calcularPacote(horasDeProjeto)

        expect(pacote).toBe("pacote_premium")
    })
})