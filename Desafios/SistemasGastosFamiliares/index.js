// Sistema de gastos familiares

// Crie um objeto que possuira 2 propriedades, ambas do tipo array:
// # receitas []
// # despesas []

// Agora crie uma função que irá  calcular o total de receitas e despesas
// e irá mostrar uma mensagem se a familia está com saldo positivo ou negativo
// , seguido do valor do saldo.

let familia = {
    receita: [
        2000,
        500,
        200
    ],
    despesa: [
        1500,
        150,
        600,
        223
    ]
}

const calculo = (familia) => {

    let receitas = familia.receita
    let receitasNumber = familia.receita.length
    let despesas = familia.despesa
    let despesasNumber = familia.despesa.length

    let somaReceitas = 0
    let somaDespesas = 0
    for (let c = 0; c < receitasNumber; c++) {
        somaReceitas += receitas[c]
    }
    for (let c = 0; c < despesasNumber; c++) {
        somaDespesas += despesas[c]
    }

    let resultadoFinal = somaReceitas - somaDespesas
    
    let situaçãoSaldo = ''
    if(resultadoFinal < 0){
        situaçãoSaldo = 'negativa'
    } else {
        situaçãoSaldo = 'positiva'
    }

    return console.log(`A soma das receitas deu R$${somaReceitas}. \nA soma das despesas deu R$${somaDespesas}.
    \nCom esses valores sua situação é ${situaçãoSaldo}. \nSeu saldo atual é de R$${resultadoFinal}. `
    )

}

calculo(familia)