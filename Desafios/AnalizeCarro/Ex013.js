// Desafio 14 - Industria de carros:

// O custo de um carro novo ao consumidor é a soma do  custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica).

// Custo fabrica 100 porcentagem do distribuidor 28% impostos 45%.

// Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%.

// Escrever um algoritmo para ler o custo de fábrica de um carro, calcular e mostrar o custo final ao consumidor */ 

/* O departamento que controla o índice de poluição do meio ambiente mantém 3 grupos de indústrias que são altamente poluentes do meio ambiente.

///O índice de poluição aceitável varia de 0,05 até 0,25. Se o índice sobe para 0,3 as indústrias do 1o grupo são intimadas a suspenderem suas atividades, se o índice cresce para 0,4 as do 1o e 2o grupo são intimadas a suspenderem suas atividades e se o índice atingir 0,5 todos os 3 grupos devem ser notificados a paralisarem suas atividades.

Escrever um programa em Javascript que lê o índice de poluição medido e emite a notificação adequada aos diferentes grupos de empresas.*/

let indice = Number(prompt('Qual o indice de poluiçao da industria? '))

if (indice < 0.3){
	document.write(`Indice de poluição aceitavel!`)
} else if (indice >= 0.3 && indice < 0.39) {
	document.write(`O 1° grupo de industria foi intimado e deve suspender suas atividades!`)
} else if (indice >= 0.4 && indice < 0.49) {
	document.write(`A 1° e 2° grupos de industria devem ser intimados e devem suspender suas atividades!`)
} else {
	document.write(`Os grupos 1, 2 e 3 de industria devem ser intimados e devem suspender suas atividades!`)
}