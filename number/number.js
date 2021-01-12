const myNumber = 12.4032

// Transforma número para string
const numberAsString = myNumber.toString();
console.log('Número transformado em string: ', typeof numberAsString);//typeof = retorna o tipo da nossa variável 

//Retorna número com um número de casas decimais
fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais: ', fixedTwoDecimals);

//Trasnforma uma string em float
console.log('\nString parseada para float: ', parseFloat('13.22'));

// Trasnforma uma string em int
console.log('\nString parseada para int: ', parseInt('13.20'));