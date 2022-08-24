// Desafio 11
// let teste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
function generatePhoneNumber(telNum) {
  // seu código aqui
  if (telNum.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  let resultado = '';
  for (let i = 0; i < telNum.length; i += 1) {
    if (telNum[i] > 9 || telNum[i] < 0) {
      // TODO: colocar statemnet sobre aparacer 3 veze so msm numero
      return 'não é possível gerar um número de telefone com esses valores';
    }
    resultado = resultado.concat(telNum[i]);
  }

  resultado =
    '(' +
    resultado.slice(0, 2) +
    ') ' +
    resultado.slice(2, 7) +
    '-' +
    resultado.slice(7, 11);
  return resultado;
}
// console.log(generatePhoneNumber(teste))

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
