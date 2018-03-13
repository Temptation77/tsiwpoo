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
     let a = parseInt(prompt("Escreva o 1º número: "))
     let b = parseInt(prompt("Escreva o 2º número: "))
     for (let index = a + 1; index < b; index++) {
        console.log(index)   
   }
     
 }
 //Alínea H
 function funcH() {
     let numero = parseInt(prompt("Escreva um número: "))
     for (let index = 1; index < 11; index++) {
         console.log(numero + "*"  + index + "=" + numero * index)
       
     }
     
 }
 //Alínea I 
 function funcI() {
    let a = parseInt(prompt("Escreva o 1ºnúmero: "))
    let b = parseInt(prompt("Escreva o 2ºnúmero: "))
    let soma = 0 
    for (let index = a+1; index < b; index++)
    {
        console.log(soma = soma +( 3*index))   
       
    }
 }
 //Alínea J 
 function funcJ() {
     let num = parseInt(prompt("Insira o número que quer testar: "))
     let primo = true
     for (let index = 2; index < num; index++) {
         {
             if (num % index == 0) {
                 primo = false 
             }
         }
    if (primo) {
        console.log("Sim")
    }  
    else {
        console.log("Não")
    }
     }
 }
 //Alínea K 
 function funcK() {
     let num = parseInt(prompt("Insira o número que quer calcular: "))
     let fatorial = 1
     for (let index = num; index > 0; index--) {
       console.log(fatorial = fatorial * index)
         
     }
     
 }
 //Alínea L 
 function funcL() {
     let num = parseInt(prompt("Insira o número que pretende: "))
     let soma = 0
     for (let index = 1; index < num; index++) {
         if (num%index == 0) {
             soma = soma + index 
             console.log(index)
         }
         
     }
     if (soma == num){
         console.log("É um número perfeito")
     }
     else{
         console.log("Não é um número perfeito")
     }
 }
 //Alínea M 
 function funcM() {
    let ano = parseInt(prompt("Insira o ano: "))
    if ( ( ano % 4 == 0 && ano % 100 != 0 ) || (ano % 400 == 0) ) { 
        console.log(ano + ' é bissexto'); 
    } else {
        console.log(ano + ' não é bissexto');
    }
 }
 //Alínea N 
 function funcN() {
     let num = prompt("Insira um número entre 100 e 999: ")
     if(num.charAt(0) == num.charAt(2)){
         console.log("O número é uma capicua")
     }
     else{
         console.log("O número não é uma capicua")
     }
 }
 //Alínea O 
 function funcO() {
     let aleatorio = parseInt(Math.random()* 99) + 1
     let tentativas = 0 
     while ( tentativas <= 10){
         let numero = parseInt(prompt("Insira um número entre 1 e 100"))

         if (numero > aleatorio){
             console.log("Para baixo")
         }

         else if (numero < aleatorio){
             console.log("Para cima")
         }

         else if (tentativas == 10){
             console.log("Game Over , tente outra vez")
             break
         } 

         else {
             console.log("Parabéns ! Acertou em " + tentativas + "tentativas")
             break
         }
         tentativas++
         console.log("tentativas" + tentativas)
         console.log("aleatório" + aleatorio)
     }

             
 }