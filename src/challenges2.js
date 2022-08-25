// Desafio 11
function generatePhoneNumber(telNum) {
  // seu código aqui
  if (telNum.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  let resultado = '';
  let contador = 0;

  for (let i = 0; i < telNum.length; i += 1) {
    if (telNum[i] > 9 || telNum[i] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }

    // faz um loop nos elementos 1 casa depois do atual, para checagem de duplicados
    for (let j = i + 1; j < telNum.length; j += 1) {
      if (telNum[i] === telNum[j]) {
        contador += 1;
      }
    }

    // contador >= 2 pois o números que está sendo avaliado não entra na soma
    if (contador >= 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }

    // reseta o contador de duplicados para o próximo número
    contador = 0;

    resultado = resultado.concat(telNum[i]);
  }

  resultado = `(${resultado.slice(0, 2)
  }) ${resultado.slice(2, 7)
  }-${resultado.slice(7, 11)}`;

  return resultado;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineB + lineA)) {
    return false;
  }

  if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineB - lineA)) {
    return false;
  }

  return true;
}

// Desafio 13
function hydrate(drinks) {
  // seu código aqui
  /*
    . variavel regex -- regular expression
    . a expressão /\d+/g significa 'um ou mais digitos'
    . utilizar string.match(regex) retorna um objeto com os números
    . esse objeto contendo os números virão em formato string
  */
  let regex = /\d+/g;
  let drinksQuanti = drinks.match(regex);
  let cupsOfWater = 0;

  for (let i = 0; i < drinksQuanti.length; i += 1) {
    cupsOfWater += Number(drinksQuanti[i]);
  }
  if (cupsOfWater > 1) {
    return `${cupsOfWater} copos de água`;
  }
  return `${cupsOfWater} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
