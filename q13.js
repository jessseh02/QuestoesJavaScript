function arrayDeFrutas(){
    const frutas = ["goiaba", "uva", "melão"]

    this.novaFruta = function(novaFruta){
        frutas.splice(1, 1, novaFruta)
    }

    this.print = function(){
        console.log(frutas.toString())
    }
}

const cesta = new arrayDeFrutas()

cesta.novaFruta("morango")
cesta.print()