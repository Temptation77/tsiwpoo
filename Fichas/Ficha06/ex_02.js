window.onload = function() {
    init()
}

function init(){
    //Obtenção das referencias para os elementos HTML
    let btnTodas = document.getElementById("btnTodas")
    let btnCampus1 = document.getElementById("btnCampus1")
    let btnCampus2 = document.getElementById("btnCampus2")
    let btnCampus3 = document.getElementById("btnCampus3")

    //Clicar no botao TODAS
    btnTodas.addEventListener("click", function(){
        //Obtem referencia para a coleção de todos os elementos input
        let refInputs = document.getElementsByTagName("input")
        //Itera sobre todos os elementos imput e coloca o seu fundo verde
        for (let index = 0; index < refInputs.length; index++) {
            refInputs[i].style.backgroundColor = " #00ff00"
        }
    })
    //Clicar no botao CAMPUS I 
    btnCampus1.addEventListener("click", function(){
        //Obtem referencia para a coleção de todos os elementos com classe campus1
        let refInputs = document.getElementsByClassName("campus1")
        //Itera sobre todos os elementos imput e coloca o seu fundo verde
        for (let index = 0; index < refInputs.length; index++) {
            refInputs[i].style.backgroundColor = " #00ff00"
        }
    })
    //Clicar no botao CAMPUS II 
    btnCampus2.addEventListener("click", function(){
        //Obtem referencia para a coleção de todos os elementos com classe campus2
        let refInputs = document.getElementsByClassName("campus2")
        //Itera sobre todos os elementos imput e coloca o seu fundo verde
        for (let index = 0; index < refInputs.length; index++) {
            refInputs[i].style.backgroundColor = " #00ff00"
        }
    })
    //Clicar no botao CAMPUS III
    btnCampus3.addEventListener("click", function(){
        //Obtem referencia para a coleção de todos os elementos com classe campus3
        let refInputs = document.getElementsByClassName("campus3")
        //Itera sobre todos os elementos imput e coloca o seu fundo verde
        for (let index = 0; index < refInputs.length; index++) {
            refInputs[i].style.backgroundColor = "#00ff00"
        }
    })
}