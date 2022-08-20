const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');

const calcularPacote = (totalDeHorasPorProjeto) =>{
  const listaDeHorasPorProjeto = Object.entries(MAX_HORAS_POR_PACOTE)
    .find(([key, value]) => value >= totalDeHorasPorProjeto);

  if(!listaDeHorasPorProjeto) {
    throw new Error('Total de horas inválido');
  }

  return listaDeHorasPorProjeto[0];
};

exports.calcularPacote = calcularPacote;
