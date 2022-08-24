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
  wins *= 3;
  return wins + ties;
}
console.log(footballPoints(3, 1))

// Desafio 6 - TODO
function highestCount() {
  // seu código aqui
}

// Desafio 7 - TODO
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
  letrasArray = frase.split('');

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

  return letrasArray.join().replace(/,/g, '');
}
function decode(fraseCodificada) {
  // seu código aqui
  let letrasArray = [];
  letrasArray = fraseCodificada.split('');

  for (let i = 0; i < letrasArray.length; i += 1) {
    switch (letrasArray[i]) {
    case '1':
      letrasArray[i] = 'a';
      break;
    case '2':
      letrasArray[i] = 'e';
      break;
    case '3':
      letrasArray[i] = 'i';
      break;
    case '4':
      letrasArray[i] = 'o';
      break;
    case '5':
      letrasArray[i] = 'u';
    }
  }

  return letrasArray.join().replace(/,/g, '');
}

// Desafio 10
function techList(techNames, personName) {
  // seu código aqui
  if (techNames.length === 0) {
    return 'Vazio!';
  }

  let result = [];
  techNames = techNames.sort();

  for (let i = 0; i < techNames.length; i += 1) {
    let resultItem = {tech: techNames[i], name: personName};
    result.push(resultItem);
  }

  return result;
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
