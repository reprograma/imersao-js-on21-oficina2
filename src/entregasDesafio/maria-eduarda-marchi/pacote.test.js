const { calcularPacote } = require('./dominio/calculadora/Projeto/pacote')
const horasPorProjeto = require('./dominio/calculadora/Projeto/horasPorProjeto')

jest.mock('./dominio/calculadora/Projeto/horasPorProjeto')

describe('Testa a função calcularPacote', () => {

    test('Testa se um projeto com horas negativas retorna um erro', () => {
        const pacote = () => calcularPacote(-1)
        
        expect(pacote).toThrowError()
    })

    test('Testa se um projeto de 0 horas retorna um erro', () => {
        const pacote = () => calcularPacote(0)
        
        expect(pacote).toThrowError()
    })

    test('Testa se um projeto de 50 horas retorna um pacote_básico', () => {
        horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(50)
        const horasDeProjeto = horasPorProjeto.calcularHorasDeProjeto()
        const pacote = calcularPacote(horasDeProjeto)
        
        expect(pacote).toBe('pacote_basico')
    })

    test('Testa se um projeto de 51 horas retorna um pacote_intermediario', () => {
        horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(51)
        const horasDeProjeto = horasPorProjeto.calcularHorasDeProjeto()
        const pacote = calcularPacote(horasDeProjeto)        

        expect(pacote).toBe('pacote_intermediario')
    })

    test('Testa se um projeto de 64 horas retorna um pacote_intermediario', () => {
        horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(64)
        const horasDeProjeto = horasPorProjeto.calcularHorasDeProjeto()
        const pacote = calcularPacote(horasDeProjeto)
        
        expect(pacote).toBe('pacote_intermediario')
    })

    test('Testa se um projeto de 100 horas retorna um pacote_intermediario', () => {
        const pacote = calcularPacote(100)
        
        expect(pacote).toBe('pacote_intermediario')
    })

    test('Testa se um projeto de 150 horas retorna um pacote_premium', () => {
        const pacote = calcularPacote(150)
        
        expect(pacote).toBe('pacote_premium')
    })

    test('Testa se um projeto de 200 horas retorna um pacote_premium', () => {
        const pacote = calcularPacote(200)
        
        expect(pacote).toBe('pacote_premium')
    })

    test('Testa se um projeto de 201 horas retorna um erro', () => {
        const pacote = () => calcularPacote(201)
        
        expect(pacote).toThrowError()
    })

})