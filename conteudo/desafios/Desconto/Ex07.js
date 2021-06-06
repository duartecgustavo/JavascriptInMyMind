// Desafio 7 - Fazer um programa para que o usuário digite um salário e o programa deverá calcular seu reajuste. 
// Exibir mensagem com o valor do desconto.
// Salario <= 600 e sexo = “M”, aplicar desconto de 20%
// Salario <= 1200 e sexo = “F”, aplicar desconto de 20%
// Salario <= 2000 e sexo “M”, aplicar desconto de 25%
// Senão, desconto de 30% - ambos os sexos

// Fórmula: desconto = salario * 0.2 ou 0.25 ou 0.30;

let salario = Number(prompt("Seu salário: "))
let sexo = String(prompt("Seu sexo: "))

while (true){
    if (sexo == "M" || sexo == "F"){
        break
    } else {
        sexo = String(prompt("Opção invalida! \nSeu sexo: "))
    }
}
let reajuste = 0

if (salario <= 600 && sexo == "M"){
    reajuste = salario-((salario*20)/100)
    document.write(reajuste)
} else if (salario <= 1200 && sexo == "F") {
    reajuste = salario-((salario*20)/100)
    document.write(reajuste)   
} else if ( 600 < salario <= 2000 && sexo == "M") {
    reajuste = salario-((salario*25)/100)
    document.write(reajuste)   
} else {
    reajuste = salario-((salario*30)/100)
    document.write(reajuste)  
}