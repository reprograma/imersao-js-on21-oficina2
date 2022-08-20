const { calcularPacote } = require("./pacote");
const horasPorProjeto = require("./horasPorProjeto");

jest.mock("./horasPorProjeto");

describe("calcularPacote", () => {
	test("Pacote para projeto de 64 horas", () => {
		horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(64);
		const horasDeProjeto = horasPorProjeto.calcularHorasDeProjeto();

		const pacote = calcularPacote(horasDeProjeto);

		expect(pacote).toBe("pacote_intermediario");
	});
});
