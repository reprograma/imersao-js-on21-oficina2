const { MAX_HORAS_POR_PACOTE } = require("../constantes/constantes");

const calcularPacote = (totaldeHorasPorProjeto) =>
  Object.entries(MAX_HORAS_POR_PACOTE).find(
    ([key, value]) => value > totaldeHorasPorProjeto
  )[0];

exports.calcularPacote = calcularPacote;
