// Celcius em Fahrenheit

// Crie uma função que receba uma string em calcius ou farenheit e faça a transformação de uma unidade
// para outra

// C = (F - 32) * 5/8
// F = C * 9/5 + 32

let grau = '435C'

function medidaInicial() {
    let medida = ''
    let grauMedida = ''
    let grauSplit = ''
    if(grau.includes('C')){
        medida = 'Celcius'
        grauMedida = grau.split('C')
        grauSplit = grauMedida[0]
    } else if (grau.includes('F')) {
        medida = 'Farenheit'
        grauMedida = grau.split('F')
        grauSplit = grauMedida[0]
    } else {
        medida = 'Invalido'
    }
    
    return [grauSplit, medida]
}

function converção(){
    // C = (F - 32) * 5/8
    // F = C * 9/5 + 32
    
    let grauSplit = medidaInicial(grau)[0]

    let medida = medidaInicial(grau)[1]
    let convertToNumber = Number(grauSplit)

    
    let F = convertToNumber * 9/5 + 32
    let C = (convertToNumber - 32) * 5/9        
    let mensagem = ''
    if (medida == 'Celcius'){
        mensagem = `${grauSplit}°C = ${F.toFixed(2)}°F`
    } else if (medida == 'Farenheit'){
        mensagem = `${grauSplit}°F = ${C.toFixed(2)}°C`
    } else {
        mensagem = `Valor invalido!`
    }
    return mensagem
}

console.log(converção())