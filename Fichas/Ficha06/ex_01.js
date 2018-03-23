//Executar o código após o carregamento da página
window.onload = function() {
    let myP = document.getElementById("myP")
    myP.innerHTML = "Bem-vindo à minha página!"
    let myBtn = document.getElementById("myBtn")
    //Listener para o botão
    myBtn.addEventListener("click",function()
    {
        let txt = document.getElementById("nome")

        if (txt.value == ""){
            myP.innerHTML = "Bem-vindo à minha página !"
        }

        else {
            myP.innerHTML = "Bem-vindo, " + txt.value
        }
    }
    )
}
