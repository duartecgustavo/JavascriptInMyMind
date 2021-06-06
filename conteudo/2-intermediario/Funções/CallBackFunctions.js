const funcao = (name) => {
    console.log('antes do callback')

    name('gustavo')
    
    console.log('depois do callback')
}

funcao(
    (meuNome) => {
        console.log(`${meuNome} virou um callback`)
    }
)
