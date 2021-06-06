// Desafio 18 - Desenvolva um programa utilizando o SWITCH que traga o mês do ano:

let mes = +prompt('Digite o numero do mês de 0 - 12: ') ;
while (mes < 0 || mes > 12){
    mes = +prompt('Opção invalida!\nDigite o numero do mês de 0 - 12: ') ;
}

switch (mes) {
case 1:
    document.write('Janeiro');
    break;
case 2:
    document.write('Fevereiro');
    break;
case 3:
    document.write('Março');
    break;
case 4:
    document.write('Abril');
    break;
case 5:
    document.write('Maio');
    break;
case 6:
    document.write('Junho');
    break;
case 7:
    document.write('Julho');
    break;
case 8:
    document.write('Agosto');
    break;
case 9:
    document.write('Setembro');
    break;
case 10:
    document.write('Outubro');
    break;
case 11:
    document.write('Novembro');
    break;
case 12:
    document.write('Dezembro');
    break;
default:
    document.write('Mês invalido!');
}