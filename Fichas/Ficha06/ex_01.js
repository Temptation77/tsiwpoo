//Executar o código após o carregamento da página
window.onload = function() {
    init()
}
function init() {
    //Obter as referencias para os elementos HTML
    let myP = document.getElementById("myP")
    let myTxt = document.getElementById("myTxt")
    let myBtn = document.getElementById("myBtn")

    //Alterar o texto do pragrafo 
    myP.innerHTML = "Bem-vindo à minha página!"

    //Clicar no botão
    myBtn.addEventListener("click", function() {
        //Se a caixa de texto não estiver vazia: adiciona no parágrafo o texto que está na caixa de texto
        if(myTxt.value != "" ){
            myP.innerHTML = "Bem-vindo " + myTxt.value + "!"
        }
         //Se a caixa de texto estiver vazia: mantem o paragrafo original
         else {
            myP.innerHTML = "Bem-vindo à minha página!"
        }
    })
}

