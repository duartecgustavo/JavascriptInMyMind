// Desafio 20 - Crie uma calculadora simplês:

let operador = prompt('Digite um operador entre "+", "-", "*" e "/": ');

let n1 = +prompt('1° numero: ');
let n2 = +prompt('2° numero: ');

switch (operador){
    case "+":
        document.write(`A soma de ${n1} + ${n2} é igual à ${n1+n2}`);
        break;
    case "-":
        document.write(`A subtração de ${n1} - ${n2} é igual à ${n1-n2}`);
        break;
    case "*":
        document.write(`A multiplicação de ${n1} * ${n2} é igual à ${n1*n2}`);
        break;
    case "/":
        document.write(`A divisão de ${n1} / ${n2} é igual à ${n1/n2}`);
        break;
    default :
        document.write(`'${operador}' não é valido como operador nesta calculadora.`)
}