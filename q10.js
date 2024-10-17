function numeroPrimo(numero){
    var comeco = 2
    while(comeco <= Math.sqrt(numero)) if(numero % comeco++ < 1) return "Não é primo";
    return "É primo";
}

console.log(numeroPrimo(10))