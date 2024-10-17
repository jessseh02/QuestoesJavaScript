function ehPalindromo (str){
    const strLower = str.toLowerCase()
    if(strLower === strLower.split("").reverse().join("")){
        console.log("É palíndromo")
    }else{
        console.log("Não é palíndromo")
    }

}
ehPalindromo("arara")
ehPalindromo("casa")