const { calcularValorTotalProjeto } = require("./valorProjeto");

describe("calcularValorTotalProjeto", () => {
	test("Calcular o valor total de um projeto de 64 horas", () => {
		const funcionalidades = [
			"formulario",
			"formulario",
			"construcao_1_pagina",
			"construcao_1_pagina",
			"integracao_api_propria",
		];

		const valorBase = 100;

		expect(calcularValorTotalProjeto(funcionalidades, valorBase)).toBe(7168);
	});

	test("Calcular o valor total de um projeto com pacote premium", () => {
		const funcionalidades = [
			"setup",
			"formulario",
			"responsividade",
			"otimizacao_seo",
			"construcao_1_pagina",
			"integracao_mailchimp",
			"ssr",
			"integracao_api_propria",
		];

		const valorBase = 200;

		expect(calcularValorTotalProjeto(funcionalidades, valorBase)).toBe(23920);
	});
});
