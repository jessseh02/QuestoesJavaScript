let estudantes = [
    {nome: "jesseh", nota: 9},
    {nome: "joao henrique", nota: 5},
    {nome: "felipe", nota: 10}

]

estudantes.forEach(estudantes => {
    if(estudantes.nota >= 7){
        console.log(estudantes.nome, "Aprovado")
    }else{
        console.log(estudantes.nome, "Reprovado")
    }
})