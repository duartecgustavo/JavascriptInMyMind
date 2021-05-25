/* Toda classe tem:
     - entidade
     - atributos
     - metodos
     */ 

    class receitaBolo{ // criei a entidade

        // com o constructor eu passo os parametros a serem recebidos e defino os atributos
        constructor(sabor, ingredientes){
            this.sabor = sabor
            this.ingredientes = ingredientes // com o this eu indico que a variiavel pertence a minha classe criada
        }
    
        fazer(){ // este é  meu metodo, ou seja, a ação
    
            console.log("Fez o bolo de " + this.sabor)
    
        }
    }
    
    let boloMornago = new receitaBolo('Morango', 5) // com o new eu crio um novo objeto
    let boloChocolate = new receitaBolo('Chocolate', 3)
    
    console.log(boloMornago.sabor)
    console.log(boloMornago.fazer())
    console.log(boloChocolate.sabor)
    console.log(boloChocolate.fazer())