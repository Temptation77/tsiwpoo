//Alínea A 
function funcA() {
    console.log("Olá Mundo")
}
//Alínea B 
function funcB() {
    let name = prompt("Escreva o seu nome:")
    console.log("Olá " + name)
}
//Alínea C 
function funcC() {
 let a = prompt("Escreva o comprimento do 1ºlado:")
 let b = prompt("Escreva o comprimento do 2ºlado:")
 let area = areaRetangulo(a,b)
 console.log("A área do retângulo é: "+ area + "ua")   
}
function areaRetangulo(a,b) {
    return a * b;
}
//Alínea D 
function funcD() {
    let num1 = parseInt(prompt("Escreva o 1ºnúmero:"))
    let num2 = parseInt(prompt("Escreva o 2ºnúmero:"))
    let oper = prompt("Escreva o operador:")
    let result
    switch (oper) {
        case "+":result = num1 + num2;break
        case "-":result = num1 - num2;break 
        case "*":result = num1 * num2;break
        case "/":result = num1 / num2;break 
    
        default:
        console.log("Operador inválido!")
            break;
    }
    if ( result != undefined)
      {
        console.log("O resultado é: " + result)
      }
    }
//Alínea E 
function funcE() {
    
    let peso = parseInt(prompt("Insira o seu peso:"))
    let altura = (prompt("Insira a sua altura:"))
    let IMC = imcCalculo(peso, altura);
    console.log(IMC);

        if(IMC < 18.5)
        {
        console.log("Abaixo do peso " + IMC)
        }
        else if (IMC >= 18.5 && IMC < 24.9)
        {
        console.log("Peso normal " + IMC)
        }
        else if (IMC >= 24.9 && IMC <= 29.9)
        {
        console.log("Sobrepeso " + IMC)
        }
        else if (IMC >= 30 && IMC <= 34.9)
        {
        console.log("Obesidade Grau I " + IMC)
        }
        else if (IMC >= 35 && IMC <= 39.9)
        {
        console.log("Obesidade Grau II " + IMC)
        }
        else
        {
        console.log("Obesidade Grau III ou Mórbida" + IMC)
        }

}
function imcCalculo(peso,altura) {
    return peso/(altura * altura)
}
//Alínea F 
function funcF() {
    let letra = prompt("Escreva uma letra: ")
    let n = parseInt(prompt("Escreva um núnemro: "))
    for (let index = 0; index < n; index++) {
        console.log(letra)   
    }
          
 }
 //Alínea G 
 function funcG() {
     let a = parseInt(prompr("Escreva o 1º número: "))
     let b = parseInt(prompr("Escreva o 2º número: "))
     for (let index = a + 1; index < b; index++) {
        console.log(index)   
   }
     
 }
 //Alínea H
 function funcH() {
     let numero = parseInt(prompt("Escreva um número: "))
     for (let index = 1; index < 11; index++) {
         console.log(numero + "*" * + index + "=" + numero * index)
       
     }
     
 }
 //Alínea I 
 function funcI() {
     
     
 }