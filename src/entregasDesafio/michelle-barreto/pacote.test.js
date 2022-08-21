const { calcularPacote } = require ('./pacote');
const horasPorProjeto = require ('../../dominio/calculadora/Projeto/horasPorProjeto')

jest.mock( '../../dominio/calculadora/Projeto/horasPorProjeto');


describe ('calcularPacote', ()=>{

test('Pacote para projeto de 64h', () => {
horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(64)
const horasDeProjeto = horasPorProjeto().calcularHorasDeProjeto()
//const horasPorProjeto = jest.fn(()=> 64);

  const pacote = calcularPacote(horasDeProjeto);

 
  expect(pacote).toBe("pacote_intermediario")
})

test('Pacote básico 50h de projeto', () => {
  const pacote = calcularPacote(50)

  expect (pacote).toBe('pacote_basico');
})


})