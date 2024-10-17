const numeros = [2, 3, 6, 9, 12, 14]
const numerosMultiplosTres = numeros.filter(multiplos => (multiplos % 3) === 0)
console.log("Numeros multilos de três: ", numerosMultiplosTres)
console.log("Total de números: ", numerosMultiplosTres.length)