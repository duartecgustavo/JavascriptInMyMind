class mediaaluno{
	constructor(nota1, nota2, nota3){
  this.media = ((nota1*2), (nota2*3), (nota3*5))/10
 }
 	notasponderadas(){
  
  
  }
	situacao(){
    if (this.media >= 7) {
      document.write(`Aprovado!`)
    } else if (this.media < 7 && this.media >= 5) {
      document.write(`Recuperação!`)
    } else {
      document.write(`Reprovado!`)
	} 
}
}

let nota1 = Number(prompt('Nota 1: '))
let nota2 = Number(prompt('Nota 2: '))
let nota3 = Number(prompt('Nota 3: '))
let media = new mediaaluno(nota1,nota2,nota3)

media.situacao()