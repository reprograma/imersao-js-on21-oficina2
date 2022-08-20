const { calcularHorasDeProjeto } = require("./horasPorProjeto");

describe("calcularHorasDeProjeto", () => {
	test("Cálculo de um projeto de 40 horas", () => {
		const listaDeFuncionalidades = [
			"formulario",
			"construcao_1_pagina",
			"integracao_api_propria",
		];

		const horasCalculadas = calcularHorasDeProjeto(listaDeFuncionalidades);
		const horasDeProjetoEsperadas = 40;

		expect(horasCalculadas).toBe(horasDeProjetoEsperadas);
	});

	test("Cálculo de um projeto de 64 horas", () => {
		const listaDeFuncionalidades = [
			"formulario",
			"formulario",
			"construcao_1_pagina",
			"construcao_1_pagina",
			"integracao_api_propria",
		];

		const horasCalculadas = calcularHorasDeProjeto(listaDeFuncionalidades);
		const horasDeProjetoEsperadas = 64;

		expect(horasCalculadas).toBe(horasDeProjetoEsperadas);
	});

	test("Cálculo de um projeto de 104 horas", () => {
		const listaDeFuncionalidades = [
			"setup",
			"formulario",
			"responsividade",
			"otimizacao_seo",
			"construcao_1_pagina",
			"integracao_mailchimp",
			"ssr",
			"integracao_api_propria",
		];

		const horasCalculadas = calcularHorasDeProjeto(listaDeFuncionalidades);
		const horasDeProjetoEsperadas = 104;

		expect(horasCalculadas).toBe(horasDeProjetoEsperadas);
	});
});
