// Desafio 12 - Orientada Objeto.


class usuario{
    constructor(email, nome, end){
    this.email = email
    this.nome = nome
    this.endereço = end
}   
    entrasala(){
        document.write(`${this.nome} entro na sala!`)
    }
    sairsala(){
        document.write(`${this.nome} saiu da sala!`)
    }
    avaliação(){
        document.write(`${this.nome} foi avaliado!`)
    }
}

class aluno extends usuario{
    constructor(registro, nota, frequencia){
        this.resgistro = registro
        this.nota = nota
        this.frequencia = frequencia
    }
    
    assistiraula(){
        document.write(`${this.nome} assistiu a aula e sua frquencia é ${this.frequencia}!`)
    }
    
}


let alunoinfos = new usuario('duarctgustavo@outlook.com', 'Gustavo', 'Escorpião,450')

let alunosituacao = new aluno('20703929', '10', '70%')

alunosituacao.assistiraula()

