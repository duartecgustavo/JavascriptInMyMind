// Elaborar um algoritimo que ao receber a média anual e o percentual de frequencia, informe se o aluno está  aprovado ou não.
// O critério de aprovação é composto de média maior ou igual de 7.0 ee percentual de frequência  maior ou igual a 75%

//isNaN() - elimina qualquer letra que esteja em minha variiavel
//isInteger() - elimina qualquer nummero que esteja dentro de uma variavel

// entrada
let nome = prompt('Nome: ')
let media = Number(prompt('Média: '))
let frec = Number(prompt('Frequência: '))

// validando frequência

while ((frec > 100) || isNaN(frec)) {
	if (frec > 100){
  alert('A frequência não pode ser superior a 100%.')
	frec = Number(prompt('Digite a Frequência: '))
  }
  else {
  alert('Apenas valores numericos são aceitos.')
	frec = Number(prompt('Digite a Frequência: '))
  }
}

// validando media

while ((media > 10) || isNaN(media)) {
	if (media > 10){
  alert('A média não pode ser superior a 10.')
	media = Number(prompt('Digite a média: '))
  }
  else {	
  alert('Apenas valores numericos são aceitos.')
	media = Number(prompt('Digite a média: '))
  }
}

// saída

if (media >= 7 && frec >= 75){
	document.write(`Parabéns ${nome}! Você passou.`+ '<br>')
  document.write(`Sua média foi ${media} pontos e sua frequência foi de ${frec}%.`) 
}
else {
	document.write(`Estude mais ${nome}! Infelismente você repetiu de ano!` +'<br>')
  document.write(`Sua média foi ${media} pontos.` + `<br> Sua frequência foi de ${frec}%.`)   
}