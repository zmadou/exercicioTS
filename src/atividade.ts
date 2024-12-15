function multiplicacao (a: number, b: number): number {
    return a * b;
}

function saudacao(nome: string): string {
    return `Olá ${nome}`
}


const resultadoMultiplicacao = multiplicacao(53, 37)
const resultadoSaudacao = saudacao("Lucas")


console.log(resultadoMultiplicacao)
console.log(resultadoSaudacao)