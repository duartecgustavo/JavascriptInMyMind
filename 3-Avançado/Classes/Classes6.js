class Animal{

    constructor(){
        this.cor = 'Marrom'
        this.tamanho = 2
    }
    dormir(){
        console.log('Dormiu')
    }
}


class Cachorro extends Animal{ // herda os atributos da classe animal

    constructor(){
        super() // o super é necessario para terminar a ligção  entre as classes
        this.peso = 20
    }
    rosnou(){
        console.log('rosnou')
    }
}

let cachorro1 =  new Cachorro()

console.log(cachorro1.cor)