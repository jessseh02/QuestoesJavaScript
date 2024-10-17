function fatorial(numero){
    let contador = 1;
    for(let i = 1; i <= numero; i++){
        contador *= i
    }
    return console.log(contador)
}
fatorial(5)
