const { calcularPacote } = require("./pacote.js");
const horasPorProjeto = require("../../dominio/calculadora/Projeto/horasPorProjeto.js");
jest.mock("../../dominio/calculadora/Projeto/horasPorProjeto.js");

describe("calcularPacote", () => {
  test("Pacote para projeto de 64 horas", () => {
    horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(64);
    const horasDeProjeto = horasPorProjeto.calcularHorasDeProjeto();
    const pacote = calcularPacote(horasDeProjeto);
    expect(pacote).toBe("pacote_intermediario");
  });

  test("Pacote basico para 50 horas", () => {
    const pacote = calcularPacote(50);
    expect(pacote).toBe("pacote_basico");
  });

  test("Pacote basico para 100 horas", () => {
    const pacote = calcularPacote(100);
    expect(pacote).toBe("pacote_intermediario");
  });

  test("Pacote basico para 200 horas", () => {
    const pacote = calcularPacote(200);
    expect(pacote).toBe("pacote_premium");
  });
});
