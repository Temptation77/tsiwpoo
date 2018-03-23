function show(texto) {
    let meu_texto=document.querySelector("#txtresult")
    meu_texto.innerHTML=texto
}
//Alínea A 
function funcA() {
    let string = prompt("Escreva uma string: ")
    let contador = 0 
    for (let index = 0; index < string.length; index++) {
       if (string[index] != " "){
           contador ++
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
        if (string[index] == "a" ||string[index] == "A" ||string[index] == "e" ||string[index] == "E" ||string[index] == "i" ||string[index] == "I" ||string[index] == "o" ||string[index] == "O" ||string[index] == "u" ||string[index] == "U"){
            vogais++
        }
    }
    show(vogais)
}