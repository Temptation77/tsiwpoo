function show(texto) {
    let meu_texto = document.querySelector("#txtresult")
    meu_texto.innerHTML = texto
}
//Alínea A 
function funcA() {
    let string = prompt("Escreva uma string: ")
    let contador = 0
    for (let index = 0; index < string.length; index++) {
        if (string[index] != " ") {
            contador++
        }

    }
    show(contador)
}
//Alínea B 
function funcB() {
    let nome = prompt("Insira o seu 1ºnome: ")
    let apelido = prompt("Insira o seu apelido: ")
    show(apelido + "," + nome)
}
//Alínea C 
function funcC() {
    let string = prompt("Escreva aqui: ")
    let vogais = 0
    for (let index = 0; index < string.length; index++) {
        if (string[index] == "a" || string[index] == "A" || string[index] == "e" || string[index] == "E" || string[index] == "i" || string[index] == "I" || string[index] == "o" || string[index] == "O" || string[index] == "u" || string[index] == "U") {
            vogais++
        }
    }
    show(vogais)
}
//Alínea D 
function funcD() {
    let string = prompt("Escreva aqui: ")
    let espaços = 0
    for (let index = 0; index < string.length; index++) {
        if (string[index] == " ") {
            espaços++
        }
    }
    show(espaços + 1)
}
//Alínea E
function funcE() {
    let string = prompt("Escreva aqui: ")
    let palavra = ""
    for (let index = string.length-1; index >= 0; index--) {
        palavra = palavra + string[index]
    }
    show(palavra)
}
//Alínea F
function funcF (){
    let string = prompt("Escreva aqui: ")
    let caracter = prompt("Escreva um carácter: ")
    let nova_string = ""
    for (let index = 0; index < string.length; index++) {
        if (string[index] != caracter){
            nova_string += string[index]
        }        
    }
    show(nova_string)
}

