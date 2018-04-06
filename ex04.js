window.onload = function () {
    let candidatos = []
    let salarios = []
    let form = document.getElementById("form")

    form.addEventListener("submit", function (event) {
        let existirErro = false
        let mensagemErro = "ERRO: "

        let salarioMax = document.getElementById("salarioMax").value
        let salarioMin = document.getElementById("salarioMin").value

        let cSharp = document.getElementById("c#")
        let java = document.getElementById("java")
        let js = document.getElementById("javascript")
        let python = document.getElementById("python")

        if (salarioMin > salarioMax) {
            existirErro = true
            mensagemErro += "O salário mínimo não pode ser superior ao salário máximo.\n"
        }

        if (!(cSharp.checked || java.checked || js.checked || python.checked)) {
            existirErro = true
            mensagemErro += "Deve selecionar pelo menos uma das linguagens.\n"
        }

        let nomeCandidato = document.getElementById("txtNome").value

        if (existirErro) {
            event.preventDefault()
            alert(mensagemErro)
        } else {
            candidatos.push(nomeCandidato)
            salarios.push(salarioMin)
            existirErro = false
            mensagemErro = "ERRO: "
        }

    })

    let btnEscolher = document.getElementById("escolherCandidato")

    btnEscolher.addEventListener("click", function () {
        let menor = salarios[0]
        let nome = candidatos[0]

        for (let i = 0; i < candidatos.length; i++) {
            if (salarios[i] < menor) {
                menor = salarios[i]
                nome = candidatos[i]
            }
        }

        alert("O candidato escolhido foi " + nome + ".")
    })

}