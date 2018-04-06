let dados1 = []
let dados2 = []

window.onload = function () {
    let btnAdicionar = document.getElementById("btnAdicionar")
    let btnRemover = document.getElementById("btnRemover")

    if (dados1.length === 0) {
        btnRemover.style.visibility = "hidden"
    } else {
        btnRemover.style.visibility = "visible"
    }

    btnAdicionar.addEventListener("click", function () {
        let txtDados = document.getElementById("txtDados").value
        if (txtDados !== "") {
            let str = "<tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr>"

            if (txtDados.indexOf(";") === -1) {
                dados1.push(txtDados)
                dados2.push("")
                atualizarTabela()
            }
            else {
                let stringDividida = txtDados.split(";")

                if (stringDividida.length > 2) {
                    for (let i = 2; i < stringDividida.length; i++) {
                        stringDividida[1] += stringDividida[i]
                    }
                }
                dados1.push(stringDividida[0])
                dados2.push(stringDividida[1])
                atualizarTabela()
            }
        } else {
            alert("Insira pelo menos um caractere.")
        }
    })

    btnRemover.addEventListener("click", function () {
        dados1.pop()
        dados2.pop()
        atualizarTabela()
    })
}

function atualizarTabela() {
    if (dados1.length === 0) {
        btnRemover.style.visibility = "hidden"
    } else {
        btnRemover.style.visibility = "visible"
    }

    let tabela = document.getElementById("myTable")
    let str = ` <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>`
    for (let i = 0; i < dados1.length; i++) {
        str += `<tr>
                    <td>${dados1[i]}</td>
                    <td>${dados2[i]}</td>
                </tr>
        `
    }
    tabela.innerHTML = str
}