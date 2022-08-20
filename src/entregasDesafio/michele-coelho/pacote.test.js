const {calcularPacote} = require('./pacote')
const horasPorProjeto=require('../../dominio/calculadora/Projeto/horasPorProjeto')


jest.mock('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('calcularPacote',()=>{
    test('Pacote para projeto de 64 horas', ()=>{
       horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(64)
       const horasDeProjeto=horasPorProjeto.calcularHorasDeProjeto()
       const pacote=calcularPacote(horasDeProjeto)
    expect(pacote).toBe('pacote intermediario')
})
})
test('Pacote basico para 50 horas', ()=>{
    const pacote=calcularPacote(50)
    expect(pacote).toBe('pacote_basico')
})

