//Criação de objetos a partir de outros objetos
// criação do objeto que representa uma organização:

const objOrg = { empresa: 'JMB Solutions' };

// criação do objeto funcionário a partir do objeto organização:

const funcionario = Object.create(objOrg, { nome: { value: 'FuncionarioUm' }, apelido: { value: 'Joelzinho'} });

console.log(funcionario); 
console.log(funcionario.nome); // "FuncionarioUm"
console.log(funcionario.empresa); // "JMB Solutions"
console.log(funcionario.apelido);

//Criação de objetos a partir de mais de um objeto - Object.assign()

const objCarro = { nomeCarro: 'Ford' };

const funcionario2 = Object.assign({}, objOrg, objCarro);
console.log(funcionario2);