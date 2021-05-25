// No objeto literal eu crio um objeto com seus atributos e a ação pode ser uma função que retorna algo.

let cachorro = {

    nome: 'valerio',
    idade: 16,

    dormir: function(){
        console.log(this.nome + " Dormiu")
    }
}

cachorro.dormir()

cachorro.nome = "Huck"
console.log(cachorro.nome)