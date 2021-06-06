var inputValue = document.getElementById('inputValue');
var resposta = document.getElementById('respostas');

function convert() {
  console.log(inputValue.value);
  if(inputValue.value > 10){
    let notaparse = 'A+'
    return resposta.innerText= `${notaparse}`
} else if (inputValue.value >5 <= 9){
    let notaparse = 'B+'
    return resposta.innerText= `${notaparse}`
  }
}
