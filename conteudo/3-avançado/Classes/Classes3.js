// Exemplo conta bancária

class ContaBancaria {
	constructor(agencia, numeroConta, saldo){
        //atributos
  	this.agencia = agencia
    this.numeroConta = numeroConta
    this.saldo = saldo 
  }

	consultarSaldo() {
  	document.write("O saldo atual é: " + this.saldo)
  }
}

let contaGustavo = new ContaBancaria(6065, 40012, -350) // declaro uma variavel para minha conta e uso minha classe pré montada 'contaBancaria'

contaGuilherme.consultarSaldo() // chamo o método saldo

  