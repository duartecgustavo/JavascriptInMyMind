let obj = {
    nome: 'Gustavo', 
    idade: '22',
    bolsista: true
};

// antigo

// let nome = obj.nome;
// let idade = obj.idade;
// let bolsista = obj.bolsista;

// console.log(nome, idade, bolsista);

// novo

const {nome, idade, bolsista} = obj;

console.log(nome, idade, bolsista)

let frutas = ['banana', 'maça', 'laranja', 'abacaxi'];

let [fruta1, fruta2, fruta3, fruta4] = frutas;

console.log(fruta1, fruta2, fruta3, fruta4);