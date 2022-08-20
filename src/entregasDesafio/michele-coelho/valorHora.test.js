
const {calcularValorPorHora}=require('../../dominio/calculadora/hora/valorHora.js')

test('1+2 é 3',()=>{

  expect(1+2),toBe()
})

//outro teste
describe('calcular vaor por hora',()){
 test('Calcular o valor por hora ',()=>{
  const salario=100
  const resultatdoCalculado=calcularValorPorHora(salario)
  const resultadoEsperado=6

  expect(resultatdoCalculado).toBe(resultadoEsperado)
  expect(resultatdoCalculado).not.toBe(resultadoEsperado)
 })
 
 test('2000 reais de renda mensal retorna 12 reais por hora', ()=>{
  expect(2000).toBe(12)
 })}