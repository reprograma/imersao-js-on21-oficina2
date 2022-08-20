const { calcularValorPorHora } = require("./valorHora");

describe("calcularValorPorHora", () => {
	test("Calcular o valor por hora para 1000 reais mensais", () => {
		const salario = 1000;
		const resultadoCalculado = calcularValorPorHora(salario);
		const resultadoEsperado = 6;

		expect(resultadoCalculado).toBe(resultadoEsperado);
		expect(resultadoCalculado).not.toBe(5);
	});

	test("Calcular o valor por hora para 2000 reais mensais", () => {
		expect(calcularValorPorHora(2000)).toBe(12);
	});
});
