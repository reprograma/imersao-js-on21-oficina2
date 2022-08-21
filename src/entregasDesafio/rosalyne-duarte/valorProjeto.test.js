const { calcularValorTotalProjeto } = require('./valorProjeto')

test('Valor total por projeto', () => {
    const listaDeFuncionalidades = 
    [
        'formulario', 
        'setup', 
        'responsividade', 
        'integracao_api_propria'
    ];
    const valorHora = 10
    const valorTotalDoProjeto = calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)

    expect(valorTotalDoProjeto).toBe(672)
})