const numeros = [1, 2, 3, 4, 5, 6];
const numerosPares = numeros.filter(pares => (pares % 2) === 0 );
const numerosDobro = numerosPares.map(function (numeros){
    return numeros * 2;
});

console.log("Numeros pares: ", numerosPares);
console.log("O dobro dos números pares: ", numerosDobro);