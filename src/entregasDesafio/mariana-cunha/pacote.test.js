// const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');
const { calcularPacote } = require("./pacote");
const horasPorProjeto = require("../../dominio/calculadora/Projeto/horasPorProjeto");

jest.mock("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("calcular pacote", () => {
  test("pacote para projeto de 64h", () => {
    horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(64);
    const horasDeProjeto = horasPorProjeto.calcularHorasDeProjeto();

    const pacote = calcularPacote(horasDeProjeto);

    expect(pacote).toBe("pacote_intermediario");
  });

  test("pacote para projeto de 50h", () => {
    const pacote = calcularPacote(50);
    // console.log(pacote)

    expect(pacote).toBe("pacote_basico");
  });
});
