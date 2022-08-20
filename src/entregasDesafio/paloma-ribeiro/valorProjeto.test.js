const {calcularValorTotalProjeto} = require('../../dominio/calculadora/Projeto/valorProjeto')
const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe('calcularValorTotalProjeto', () =>{
    test ('', () => {
        const listaDeFuncionalidades = [
            'formulario',
            'responsividade',
            'otimizacao_seo'
        ]
        const totalDeHorasPorProjeto = 48;

        const pacote = calcularPacote(totalDeHorasPorProjeto);

        const valorHora = 20;
        const valorBase = totalDeHorasPorProjeto * valorHora;

        const valorTotalProjeto =  Math.round(valorBase * 1.1);

        expect(totalDeHorasPorProjeto).toBe(48)
        expect(pacote).toBe('pacote_basico')
        expect(valorBase).toBe(960)
        expect(valorTotalProjeto).toBe(1056)
    })

})