const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");
// const horasPorProjeto = require("../../dominio/calculadora/Projeto/horasPorProjeto");

// jest.mock("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("calcularPacote", () => {
  test("Pacote para projeto de 64 horas", () => {
    // const horasDeProjeto = calcularHorasDeProjeto(["setup", "formulario"]);
    // const horasDeProjeto = horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(64)
    const horasPorProjeto = jest.fn(() => 64);
    const horasDeProjeto = horasPorProjeto();
    const pacote = calcularPacote(horasDeProjeto);

    expect(pacote).toBe("pacote_intermediario");
  });
});

// function oi() {
//     return "Oi"
// }

// function falaOi(nome){
//     return oifunc() + ` ${nome}`
// }

// const oi = require('./oi')
// jest.mock('./oi')

// test('falaoi', () => {
//     oi.oifunc.mockReturnValueOnce('tchau')
//     oi.oifunc(falaOi('lorena')).toBe('tchau lorena')
// })
// falaOi{'lorena'}
