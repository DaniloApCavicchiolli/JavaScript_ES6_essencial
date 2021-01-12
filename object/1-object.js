let user = {
    name: 'Danilo'
};

// Alterando a propriedade de um onjeto
consele.log(user);

user.name = 'outro nome 1';
consele.log(user);

user['name'] = 'outro nome 2';
consele.log(user);

const prop = 'name'; // criando uma propriedade
user[prop] = 'outro nome 3'; // alterando a propriedade
consele.log(user);

// criando uma propriedade
user.lastName = 'Danilo Aparecido';

// deletando uma propriedade
delete user.name;