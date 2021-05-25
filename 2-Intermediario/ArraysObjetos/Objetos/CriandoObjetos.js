let amigo = {
    nome:'josé',
    sexo:'Masculino',
    idade:18,
    peso:76.5,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }}


amigo.engordar(2)
console.log(amigo.nome, amigo.peso)

amigo.nome = 'Lucas'

console.log(amigo.nome, amigo.peso)

const frutas  = [
    'maça',
    'banana',
    'laranja',
    'melancia'
]

console.log(frutas.map((item) => {
    let x = 0
    x += 1
    return `A fruta ${item} esta na ${x}° posição.`
}))

// let x = 1

// {
//     x = 2
//     console.log('escopo de dentro',x)
// }

// console.log('escopo de fora',x)