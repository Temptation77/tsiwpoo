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
//Alínea H 
function funcH() {
    let palavra = prompt("Escreva a palavra que quer testar: ")
    let cores = ["Vermelho", "Verde", "Branco", "Preto"]
    let contador = 0
    for (let index = 0; index < cores.length; index++) {
        if (palavra == cores[index]){
            contador ++
        }
        
    }
    show(contador)
}
//Alínea I 
function funcI() {
    let array = ["passe", "confirmação"]
    let pass = prompt("Escreva a password que pretende: ")
    let confirmaçao = prompt("Confirme a password: ")
    for (let index = 0; index < array.length; index++) {
        if (pass == array[0] && confirmaçao == array[1] ) {
            show("1")     
        }
        else {
            show("0")   
        }
    }
}    
//Alínea J
function funcJ() {
    let array = ["a", "b", "c"]
    let posiçao = parseInt(prompt("Insira a posição que pretende: "))
    for (let index = 0; index < array.length; index++) {
        show(array[posiçao])
    }
}
//Alínea K 
function funcK(){
    let numeros =  [7, 3, 6, 12, 5] 
    let novo_array = []
    let valor = parseInt(prompt("Insira o valor que pretende: "))
    for (let index = 0; index < numeros.length; index++) {
      if (numeros[index] < valor) {
          novo_array.push(numeros[index])
      }        
    }
    show(novo_array)
}
//Alínea L
function funcL(){
    let numeros = [7,3,6,12,5]
    let pares = []
    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] % 2 == 0){
            pares.push(numeros[index])
        }
    }
    show(pares)
} 
//Alínea M
function funcM(){
    let numeros = [7,3,6,12,5]
    let novo_array = []
    for (let index = 0; index < numeros.length; index++) {
        novo_array.push(numeros[index] + 1)            
        }  
    show(novo_array)  
} 
//Alínea N
function funcN() {
    let array1 = [1,0,2,3,4,0] 
    let array2 = [3,5,6,7,8,13]
    let novo_array = []
    for (let index = 0; index < array1.length; index++) {
        novo_array.push(array2[index]+array1[index])
    }
    show(novo_array)
}