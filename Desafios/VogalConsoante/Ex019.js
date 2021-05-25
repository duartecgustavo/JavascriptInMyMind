// Desafio 19 - Programa que indique se a Letra digitada é uma consoante ou uma vogal:

let letra = prompt('Uma letra: ')

if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' ||  letra == 'u'){
    document.write(`A letra '${letra}' é uma vogal!`)
} else {
    document.write(`A letra '${letra}' é uma consoante!`)
}