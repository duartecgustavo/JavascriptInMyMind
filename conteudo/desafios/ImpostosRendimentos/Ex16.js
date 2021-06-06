// Desafio 16 - Programa que pergunte quanto você ganha por hora e o numero total de horas trabalhadas no mês.
// Calcule e mostre o total do salário no mês e calcule também os descontos de:
// 11% de Imposto de Renda
// 8% INSS
// 5% SINDICATO

// Ao fim o programa deve retornar todos esses valores em formato de tabela:


//let nome = prompt('Seu nome: ')
let salhora = prompt('Salário por hora: ')
let horas = +prompt('Horas trabalhadas no mês? ')

// Calculo salário
let salario = salhora*horas

// Calculo Imposto de Renda
let ir = (salario*11)/100

// Calculo INSS
let inss = (salario*8)/100

// Calculo SINDICATO
let sindicato = (salario*5)/100

document.write('-------- RECIBO SALARIO --------<br>')
document.write(`+ Salario Bruto: R$${salario}<br>`)
document.write(`- Imposto de Renda 11%: R$${ir}<br>`)
document.write(`- INSS 8%: R$${inss}<br>`)
document.write(`- Sindicato 5%: R$${sindicato}<br>`)
document.write(`= Salario Liquido: R$${salario-ir-inss-sindicato}<br>`)