// Retorna o tamanho de uma string - Quantidade se caracteres
const textSize = 'Texto'.length;
console.log('Qantidade de letras:' + textSize);

// Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo demilitador:', splittedText);

// Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Texto', 'txeT');//1º valor a ser procurado, 2º valor a ser substituido
console.log('\nSubstituição de valor:', replacedText);

// Retorna a "fatia" de um valor
const lastChar = 'Text'.slice(-1);
console.log('\nÚltima letra de uma string:', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a última:', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a última:', secondToEnd);

// Retorna N caracters apartir de uma posição
const twoCharsBeforeFirstPost = 'Texto'.substr(0, 2);
console.log('\nAs duas primeiras letras são:', twoCharsBeforeFirstPost);