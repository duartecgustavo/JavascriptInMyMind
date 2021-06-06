// Desafio 4 - Programa diga se o aluno passou ou não de ano.
// Também mostre se está de recuperação e no fim mostre uma consequencia para cada opção;

let passou = true
let rec = false

let aluno = prompt('Seu nome: ')
passou = prompt(` ${aluno}, passou de ano?`)[0]

document.write(passou)

if (passou == 's' || passou == 'S'){
	passou = true
}
else {
	passou = false
}

document.write(passou)

if (passou == true && rec == false){
    document.write('Parabéns!')
} else if (passou  == true || rec == true){
    document.write('Dá para melhorar')
}
else {
    document.write('Se deu mal!')
}