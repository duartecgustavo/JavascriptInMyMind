/*Criar uma super classe (classe pai) veículo, e duas subclasses (classes filhas),
exemplo carro e caminhão, com pelo menos um atributo ou método de diferença, herdar os 
atributos iguais da classe pai. Exibir os atributos.*/

class veiculo{
    constructor(){
        this.combustivel = 'etanol'
        this.comporta = 2
    }
}

class carro extends veiculo{
    constructor(){
        super()
        this.comporta = 4
        this.combustivel = 'gazolina'
        this.uso = 'passeio'
    }

    viajar(){
        console.log('Você viajou de carro!')
    }
}
class caminhao extends veiculo{
    constructor(){
        super()
        this.combustivel = 'disel'
        this.uso = 'carga'
    }

    viajar(){
        console.log('Você viajou de caminhão!')
    }
    transportar(){
        console.log('Você transportou uma carga!')
    }
}

let carro1 = new carro()
let caminhao1 = new caminhao()

console.log(carro1.combustivel)
console.log(carro1.uso)
console.log(caminhao1.combustivel)
console.log(caminhao1.uso)