const { HORAS_POR_FUNCIONALIDADE } = require('../constantes/constantes');

const calcularHorasDeProjeto = (listaDeFuncionalidades) => (
  listaDeFuncionalidades
    .map(funcionalidade => {

      if(!HORAS_POR_FUNCIONALIDADE[funcionalidade]) {
        throw new Error(`Funcionalidade '${funcionalidade}' não existe`);
      }

      return HORAS_POR_FUNCIONALIDADE[funcionalidade];
      
    }).reduce((sum, currentValue) => sum + currentValue, 0)
);

exports.calcularHorasDeProjeto = calcularHorasDeProjeto;
