/* 
SYMBOL:
- A grande proposta dele era permitir atributos privados dentro de objetos ou classe, mas como o JavaScript não tem modificador 
de acesso, o "symbol" acabou ficando mas como uma propriedade única (um atributo único).
- Ele consegue fazer com que as propriedades não sejam sobrescritas, ou seja, não pode alterar a sua propriedade.
*/
const symbol1 = Symbol();
const symbol2 = Symbol();

// Symbols são únicos 
console.log('symbol1 é igual a symbol2:', symbol1 === symbol2);

// Prevenir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'Danilo',
    [nameSymbol2]: 'Outro nome',
    lastName: 'Aparecido Cavicchiolli'
}

console.log(user);

// Symbol criam pripriedades que não são anumberables
for (const key in user){ // For(in) mostra todas as propriedades que são enumerables
    if(user.hasOwnProperty(key)){
        console.log(`\nValor da chave ${key}: ${user[key]}`);
    }
}

console.log('Propriedades de objeto user:', Object.keys(user)); // keys = ele não vai aparecer
console.log('\nValores das propriedades do objeto user:', Object.values(user));// values = ele não vai aprecer

// Exibir symbols de um objeto
console.log('\nSymbols registrados no objeto user:', Object.getOwnPropertySymbols(user));
// Aqui ele lista todos os objetos symbols que ele tem.

// Acessando todas as prorpiedades do objeto
console.log('Todas propriedades do objeto user:', Reflect.ownKeys(user));

// Cria um enum
const directions = {
    UP   : Symbol(' UP '),
    DOWN : Symbol(' DOWN '),
    LEFT : Symbol(' LEFT '),
    RIGTH: Symbol(' RIGTH ')
};
