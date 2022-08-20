const { calcularPacote } = require('../calculadora/Projeto/pacote');
const horasPorProjeto = require('../calculadora/Projeto/horasPorProjeto');

jest.mock('../calculadora/Projeto/horasPorProjeto')
describe('Calcular pacote', () => {
    test('Pacote para projeto de 50 horas', () => {
        horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(50)
        const horasDeProjeto = horasPorProjeto.calcularHorasDeProjeto();
        const pacote = calcularPacote(horasDeProjeto);

        expect(pacote).toBe('pacote_basico');
        expect(pacote).not.toBe('pacote_intermediario');
        expect(pacote).not.toBe('pacote_premium');
    })

    test('Pacote para projeto de 100 horas', () => {
        horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(100)
        const horasDeProjeto = horasPorProjeto.calcularHorasDeProjeto();
        const pacote = calcularPacote(horasDeProjeto);

        expect(pacote).not.toBe('pacote_basico');
        expect(pacote).toBe('pacote_intermediario');
        expect(pacote).not.toBe('pacote_premium');
    })

    test('Pacote para projeto de 200 horas', () => {
        horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(200)
        const horasDeProjeto = horasPorProjeto.calcularHorasDeProjeto();
        const pacote = calcularPacote(horasDeProjeto);

        expect(pacote).not.toBe('pacote_basico');
        expect(pacote).not.toBe('pacote_intermediario');
        expect(pacote).toBe('pacote_premium');
    })

    test('Projeto com horas superiores ao limite definido nos pacotes', () => {
        horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(250)
        const horasDeProjeto = horasPorProjeto.calcularHorasDeProjeto();

        expect( () => { calcularPacote(horasDeProjeto) } ).toThrow('Total de horas inválido');
    })

})
