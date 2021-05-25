//Herança
//Polimorfismo

class Passaro { // classe abrangente
    constuctor(){
    this.bico = True
    }
    sabeVoar(){
        document.write('Voou')
    }
}

class Papagaio extends Passaro{} // agora eu tenho a classe papagaio que é filha de passaro
                                 // tudo que tinha na classe passaro, também está na papagaio

// Polimorfismo
class Avestruz extends Passaro{
    sabeVoar(){
        document.write('Não vooua') // sobre escrevi o método copiado pois avestruz é diferente
    }
}

let Papagaio = new Papagaio()
papagaio.sabeVoar()
document.write("<br />")
let avestruz = new Avestruz()
avestruz.s