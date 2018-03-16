function show(texto) {
    let meu_texto=document.querySelector("#txtresult")
    meu_texto.innerHTML=texto
}
//Alínea A 
function funcA() {
    let array_numerico = [7, 3, 6, 12, 5]
    let media = medias(array_numerico)
    show(media)

}
function medias(array_numerico){
    let elementos = 0
    let media1 = 0 
    for (let index = 0; index < array_numerico.length; index++) {
        elementos = elementos + array_numerico[index]
        
    }
    media1 = elementos/array_numerico.length
    return(media1)
}
//Alínea B
function funcB() {
    let array_numerico = [7, 3, 6, 12, 5]
    let menor = array_numerico[0]
    for (let index = 0; index < array_numerico.length; index++) {
        
        if(menor >= array_numerico[index]) {
            menor = array_numerico[index]
        }
       
        
        
    }    
show(menor)    
}
//Alínea C 
function funcC() {
    let array_numerico = [7, 3, 6, 12, 5]
    let novo_array = [] 
    let valor = parseInt(prompt("Insira o valor que pretende: "))
    for (let index = 0; index < array_numerico.length; index++) {
        if(valor != array_numerico[index])
        novo_array.push(array_numerico[index])
    }
    show(novo_array)   
}
//Alínea D 
function funcD() {
    let palavras = ["Vermelho", "Verde", "Branco", "Preto"]
    let elements = ""
    for (let index = 0; index < palavras.length; index++) {
        elements = elements + palavras[index]+" " 
    }
    show(elements)
}
//Alínea E
function funcE() {
    let cores = ["Vermelho", "Verde", "Branco", "Preto"]
    cores.sort()
    show(cores)
}
//Alínea F
function funcF() {
    let cores = ["Vermelho", "Verde", "Branco", "Preto"]
    cores.reverse()
    show(cores)
}
//Alínea G 
function funcG() {
    let cores = ["Vermelho", "Verde", "Branco", "Preto"]   
    let maior = cores[0]
    for (let index = 0; index < cores.length; index++) {
        if(maior<cores[index]){
            maior = cores[index]
        }
    }
    show(maior)
}