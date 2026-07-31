// const retornarValor = <T>(valor: T): T => {
//     return valor
// }

// const filme = {
//     titulo: "Her",
//     nota: 9.5
// }

// console.log(retornarValor('Joao'))
// console.log(retornarValor(4))
// console.log(retornarValor(true))
// console.log(retornarValor(filme))


// const criarArray = <T>(criar: T): T[] => {
//     return [criar]
// }

// const tec = {
//     react: "React",
//     typeScript: "TypeScript"
// }

// console.log(criarArray('JavaScript'))
// console.log(criarArray(95))
// console.log(criarArray(true))
// console.log(criarArray(tec)
// )



const primeiroItem = <T>(valor: T[]): T => {
    return valor[0]
}

const numeros = [1, 3, 5, 6]
const apelidos = ['jp', 'pescaa', 'paulo', 'jaozin']

const rotina = [
    {
        estudo: 'Estudar TypeScript',
        projetos: 7
    },
    {
        estudo: 'Estudar React',
        projetos: 3
    },
    {
        estudo: 'Estudar Next.js',
        projetos: 8
    }
]


console.log(primeiroItem(numeros))
console.log(primeiroItem(apelidos))
console.log(primeiroItem(rotina))
