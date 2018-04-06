window.onload = function () {
    let btnJuntar = document.getElementById("btnJuntar")

    btnJuntar.addEventListener("click", function () {
        let inputStrings = document.getElementById("txtArrayStrings").value
        let inputNum = document.getElementById("txtArrayNumerico").value

        //transforma as variáveis acima em dois arrays
        inputStrings = inputStrings.split(",")
        inputNum = inputNum.split(",")

        let textoFinal = ""

        for (let i = 0; i < inputStrings.length; i++) {
            let num = inputNum[i]
            for (let j = 0; j < num; j++) {
                textoFinal += inputStrings[i]
            }
        }

        let resultadoFinal = document.getElementById("txtStringFinal")
        resultadoFinal.value = textoFinal
    })
}