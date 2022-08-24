// Desafio 1
function compareTrue(val1, val2) {
  // seu código aqui
  if (val1 && val2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let array = sentence.split(' ');
  return array;
}

// Desafio 4
function concatName(nameArray) {
  // seu código aqui
  let result;
  result = nameArray[nameArray.length - 1];
  result = result.concat(', ', nameArray[0]);
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  wins = wins * 3;
  return wins + ties;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(numArray) {
  // seu código aqui
  let stgArray = [];
  for (let i = 0; i < numArray.length; i += 1) {
    if (numArray[i] % 3 === 0 && numArray[i] % 5 === 0) {
      stgArray.push('fizzBuzz');
    } else if (numArray[i] % 5 === 0) {
      stgArray.push('buzz');
    } else if (numArray[i] % 3 === 0) {
      stgArray.push('fizz');
    } else {
      stgArray.push('bug!');
    }
  }
  return stgArray;
}

// Desafio 9
function encode(frase) {
  // seu código aqui
  let letrasArray = [];
  letrasArray = frase.split('')

  for (let i = 0; i < letrasArray.length; i += 1) {
    switch (letrasArray[i]) {
      case 'a':
        letrasArray[i] = '1';
        break;
      case 'e':
        letrasArray[i] = '2';
        break;
      case 'i':
        letrasArray[i] = '3';
        break;
      case 'o':
        letrasArray[i] = '4';
        break;
      case 'u':
        letrasArray[i] = '5';
    }
  }

  return letrasArray.join().replace(/,/g,'');
}

function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
