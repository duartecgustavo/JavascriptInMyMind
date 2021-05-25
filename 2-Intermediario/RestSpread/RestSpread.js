// rest
function rest(empresa, ...clientes){
    console.log(empresa)
    console.log(clientes) //os demais argumentos serão adicionados a uma array chamada 'clientes'
}

rest('BTG', 'Gustavo', 'Camilla', 'Dani')
// BTG
// [ 'Gustavo', 'Camilla', 'Dani' ]

// spread
let numeros = [1, 2, 3];

console.log(...numeros) // desestrutura arrays

// ex:

// Math.max(numeros) //não va entender pois numeros é uma array
console.log(Math.max(...numeros)) // desestrutura arrays

// CONECTANDO COM HTML RestSpread

const items = document.querySelectorAll("li");

// console.log(items)

[...items].map(item => {
  console.log(item);
  console.log(item.innerText);
});
console.log(items)


// CLONANDO OBJETOS

const carro = {fabricação: '2002', modelo: 'corsa', marca: 'volks'}

console.log(carro)

const carroClonado = {...carro, cor: 'vermelho'}

console.log(carroClonado)
