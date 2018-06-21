//##########################Testemunhos#########################
let arrayTestemuhos = []

class Testemunhos {
    constructor(nomeTe, testemunho, fotoTe) {
        this._idTes = Testemunhos.getLastId() + 1
        this.nomeTe = nomeTe
        this.testemunho = testemunho
        this.fotoTe = fotoTe
    }
    // Propriedade id
    get idTes() {
        return this._idTes
    }

    // Propriedade nomeTe
    get nomeTe() {
        return this._nomeTe
    }
    set nomeTe(novoNomeTe) {
        this._nomeTe = novoNomeTe
    }

    // Propriedade testemunho
    get testemunho() {
        return this._testemunho
    }

    set testemunho(novoTestemunho) {
        this._testemunho = novoTestemunho
    }
    // Propriedade fotoTe
    get fotoTe() {
        return this._fotoTe
    }
    set fotoTe(novoFotoTe) {
        this._fotoTe = novoFotoTe
    }
    // obter o ultimo id
    static getLastId() {
        let lastId = 0
        if (arrayTestemuhos.length > 0) {
            lastId = arrayTestemuhos[arrayTestemuhos.length - 1].idTes
        }
        return lastId
    }


}


window.onload=function(){
    atualizaTabelaTestemunho()

    //#############################Eliminar testemunhos######################

    let frmEliminarT = document.getElementById("frmEliminarTestemunhos")


    frmEliminarT.addEventListener("submit", function (events) {
        let contT = 0

        let nomeTestemunhoEliminar = document.getElementById("nomeTeEliminar").value

        let testemunhoGuardados = ""


        // eliminar parcerias



        if (localStorage.getItem("Testemunho")) {
            testemunhoGuardados = JSON.parse(localStorage.getItem("Testemunho"))
        }


        for (let i = 0; i < testemunhoGuardados.length; i++) {

            if (nomeTestemunhoEliminar == testemunhoGuardados[i]._nomeTe) {
                testemunhoGuardados.splice(i, 1)

                localStorage.setItem("Testemunho", JSON.stringify(testemunhoGuardados))
            }
            else {
                contT++
            }

        }
        if (contT == testemunhoGuardados.length) {
            alert("Nome inválido")
        }
        atualizaTabelaTestemunho()
        events.preventDefault()
      

    })
}

// Função que atualiza a tabela
function atualizaTabelaTestemunho() {

    if (localStorage.getItem("Testemunho")) {
        let tempArrayTestemunho = []
        tempArrayTestemunho = JSON.parse(localStorage.getItem("Testemunho"))
        for (let i = 0; i < tempArrayTestemunho.length; i++) {
            let novotestemunho = new Testemunhos( tempArrayTestemunho[i]._nomeTe, tempArrayTestemunho[i]._testemunho, tempArrayTestemunho[i]._fotoTe)
            arrayTestemuhos.push(novotestemunho)

        }

    }

    let tblDocentes = document.getElementById("tblTestemunhos")
    let str = ""
    str = "<thead class='thead-dark'><tr><th>FOTO</th><th>NOME</th></tr></thead><tbody>"
    for (let i = 0; i < arrayTestemuhos.length; i++) {
        str += "<tr>"
        str += "<td> <img class='card-img-top' style='width:10%; height:40%' src='" + arrayTestemuhos[i]._fotoTe + "'></td>"

        str += "<td >" + arrayTestemuhos[i]._nomeTe + "</td>"
        str += "</tr>"
    }
    str += "<tbody>"
    tblDocentes.innerHTML = str

}