    const user = ['Guilherme', 'Pedro', 'Jenifer'];

    const gender = {
        MAN : Symbol(' M '),
        WOMAN : Symbol(' W ')
    }

    const person = [
        {
            name: 'Guilherme',
            age: 26,
            gender: gender.MAN
        },
        {{
            name: 'Pedro',
            age: 43,
            gender: gender.MAN
        },
        {
            name: 'Jenifer',
            age: 18,
            gender: gender.WOMAN
        }
    ];

// Retorna aquantidade de itens de um array
console.log('Itens:', person.length);

// Verifica se é array
console.log('A variável person é um array:', Array.isArray(person));

// Iterar os itens do array
person.forEach(person => {
    console.log(`Nome: ${person.name}`);
});

// Filtrar array
const mans = person.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens:', mens);

// Retorna um novo
const personsWithCourse = persos.map( person => {
    person.course = 'Introdução ao Javascript';
    return person;
});

console.log('\nPessoas coma adição do course:', personsWithCourse);

// Transforma um arry em outro tipo 
const totalAge = person.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('\n Soma de idade das pessoas', totalAge);

// Juntando operações
 const totalEvenAges = person
                        .filter(persons => persons.age % 2 ===0)
                        .reduce((age, person) => {
                            age += person.age;
                            return age;
                        }, 0);

console.log('\nSoma de idade das pessoas que possuem idade par', totalEvenAges);
