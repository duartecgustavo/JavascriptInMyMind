// Desafio 17 - Calcule o famoso IMC:

let peso = +prompt('Seu peso:')
let altura = +prompt('Sua altura')

let imc = peso/(altura*altura)
let situa = "normal"

if ( imc < 18.5){
    situa = 'Desnutrição!'
} else if ( 18.5 <= imc < 25){
    situa = 'Ideal!'
} else if ( 25 <= imc < 29){
    situa = 'Sobrepeso!'
} else if ( 29 <= imc < 34){
    situa = 'Obesidade!'
} else if ( 34 <= imc < 39){
    situa = 'Obesidade II!'
} else if (imc >= 39){
    situa = 'Obesidade III!'
}

document.write{`Seu IMC deu ${imc} que é igual ${situa}.`}