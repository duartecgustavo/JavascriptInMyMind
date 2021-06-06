function parimp(params){
    if (params%2 == 0){
         return `O numero ${params} é par!`
    }else{

        return `O numero ${params} é impar!`
    }
}

function soma(n1=0, n2=0){
    return (
        n1+n2
    )
}

soma2 = (n1=0, n2=0) => {
    return (
        n1+n2
    )
}

console.log(parimp(5))
console.log(soma(5, 5))
console.log(soma2(5))

// const sum = (n1 = 0 , n2 = 0) => {
//     tot =  n1+n2
//     return tot
// }

// let num1 = 10
// let num2 = 5

// console.log(`A soma é ${sum(num1)}`)