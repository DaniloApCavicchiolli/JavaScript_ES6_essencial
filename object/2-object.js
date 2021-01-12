const user = {
    name: 'Danilo',
    lastName: 'Danilo Cavicchiolli'
}

// Recupera as chaves do objeto
console.log('Proppriedade do objeto user: ', Object.keys(user));

// Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user: ', Object.values(user));

// Retorna um array de arrays contendo [ nome_prop, valor_prop ]
console.log('\nLista de propriedades e valores: ', Object.entries(user));

// Mergear propriedades de objetos - Mergeando = concatenando
Object.assign(user, {fullName: 'Danilo Aparecido Cavicchiolli'});//user = target

console.log('\nAdiciona a prorpiedade fullName no objeto user: ', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 26}));// Não muda o objeto original
// Object.assign({}); Criando um novo array
// Object.assign({}, user, {age: 26}) setando o objeto "user" e adicionando uma propriedade "age" com o valor "26"

// Previne todas as alterações em um objeto
const newObj = { foo: 'bar' };
Object.freeze(newObj);// Não vai conseguir alterar o objeto - "congela tudo"

newObj.foo = 'changes';// alterar uma propriedade
delete newObj.foo;// deletar uma propriedade
newObj.bar = 'foo'; // criando uma nova propriedade

console.log('\nVariável newObj após as alterações: ', newObj);

// Permite apenas a alteração de propriedades existentes em um objeto
const person = {name: 'Danilo'};
Object.seal(person);
// seal() = não vai permitir que você crie ou delete um objeto
// seal() = Permite trocar o valor de uma propriedade

person.name = 'Danilo Aparecido';// alterar uma propriedade
delete person.name;// deletando uma propriedade
person.age = 26;// criando uma propriedade

console.log('\nVariável person após as alterações: ', person);
