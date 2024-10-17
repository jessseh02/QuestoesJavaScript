function array(numeros){
    const numeroQuadrado = numeros.map(function(numero){
        return numero ** 2
    })
    const filtro = numeroQuadrado.filter(maioresQueDez => (maioresQueDez > 10))
    console.log("Arreio: ",numeros,"\nArreio ao quadrado: ", numeroQuadrado, "\nMaiores que dez: ",filtro) 
}

array([1,2,3,4,5])