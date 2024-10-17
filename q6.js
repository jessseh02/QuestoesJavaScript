function Fila(){
    const array = []

    this.enqueue = function(element) {
        array.push(element)
    }

    this.dequeue = function() {
        array.shift()
    } 
    this.print = function() {
        console.log(array.toString())
    }
}

let fila = new Fila()

fila.enqueue(1)
fila.enqueue(2)
fila.enqueue(3)
fila.dequeue()

fila.print()