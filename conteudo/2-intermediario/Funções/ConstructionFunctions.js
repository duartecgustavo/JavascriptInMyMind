function Person(name, age) {
    this.name = name
    this.age = age
    this.walk = function(acao){
        return `${this.name} está ${acao}`
    }
}

const gustavo = new Person('Gustavo', 22)
const joao = new Person('João', 35)

console.log(gustavo)
console.log(gustavo.walk('lutando'))