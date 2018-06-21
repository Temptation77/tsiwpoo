let arrayDocentes = []

class Docentes {
    constructor(NomeDocente, foto, formaçao, CV) {
        this._IdDocente = Docentes.getLastId() + 1
        this.NomeDocente = NomeDocente
        this.foto = foto
        this.formaçao = formaçao
        this.CV = CV
    }

    // Propriedade id
    get IdDocente() {
        return this._IdDocente
    }

    // Propriedade NomeDocente
    get NomeDocente() {
        return this._NomeDocente
    }
    set NomeDocente(novoNomeDocente) {
        this._NomeDocente = novoNomeDocente
    }

    // Propriedade foto
    get foto() {
        return this._foto
    }

    set foto(novoFoto) {
        this._foto = novoFoto
    }

    // Propriedade formaçao
    get formaçao() {
        return this._formaçao
    }

    set formaçao(novoFormaçao) {
        this._formaçao = novoFormaçao
    }

    // Propriedade CV
    get CV() {
        return this._CV
    }
    set CV(novoCV) {
        this._CV = novoCV
    }

    // obter o ultimo id
    static getLastId() {
        let lastId = 0
        if (arrayDocentes.length > 0) {
            lastId = arrayDocentes[arrayDocentes.length - 1].IdDocente
        }
        return lastId
    }


}

window.onload = function () {
    atualizaTabela()

    //#############################docentes######################
    let nomeDocente = document.getElementById("modalNomeDocente")
    let formaçao = document.getElementById("modalFormaçaoDocente")
    let foto = document.getElementById("modalFotoDocente")
    let cv = document.getElementById("modalCVDocente")
    let frmDocentes = document.getElementById("frmDocentes")

    frmDocentes.addEventListener("submit", function (events) {

        let novaDocentes = new Docentes(nomeDocente.value, foto.value, formaçao.value, cv.value)
        arrayDocentes.push(novaDocentes)
        localStorage.setItem("Docentes", JSON.stringify(arrayDocentes))
        alert("Adicionado com sucesso")

        events.preventDefault()
        frmDocentes.reset()

    })

    //#############################Eliminar docentes######################

    let frmEliminarD = document.getElementById("frmEliminarDocentes")


    frmEliminarD.addEventListener("submit", function (events) {
        let contD = 0

        let nomeDocenteEliminar = document.getElementById("nomeDocenteAEliminar").value

        let docentesGuardados = ""


        // eliminar



        if (localStorage.getItem("Docentes")) {
            docentesGuardados = JSON.parse(localStorage.getItem("Docentes"))
        }


        for (let i = 0; i < docentesGuardados.length; i++) {

            if (nomeDocenteEliminar == docentesGuardados[i]._NomeDocente) {
                docentesGuardados.splice(i, 1)

                localStorage.setItem("Docentes", JSON.stringify(docentesGuardados))
                atualizaTabela()
            }
            else {
                contD++
            }

        }
        if (contD >= docentesGuardados.length) {
            alert("Nome inválido")
        }


        events.preventDefault()


    })


}

// Função que atualiza a tabela
function atualizaTabela() {

    if (localStorage.getItem("Docentes")) {
        let temparrayDocentes = []
        temparrayDocentes = JSON.parse(localStorage.getItem("Docentes"))
        for (let i = 0; i < temparrayDocentes.length; i++) {
            let novodocente = new Docentes(temparrayDocentes[i]._NomeDocente, temparrayDocentes[i]._foto, temparrayDocentes[i]._formaçao, temparrayDocentes[i]._CV)
            arrayDocentes.push(novodocente)

        }

    }

    let tblDocentes = document.getElementById("tblDocentes")
    let str = ""
    str = "<thead class='thead-dark'><tr><th>FOTO</th><th>NOME</th></tr></thead><tbody>"
    for (let i = 0; i < arrayDocentes.length; i++) {
        str += "<tr>"
        str += "<td> <img class='card-img-top' style='width:10%; height:40%' src='" + arrayDocentes[i]._foto + "'></td>"

        str += "<td>" + arrayDocentes[i]._NomeDocente + "</td>"
        str += "</tr>"
    }
    str += "<tbody>"
    tblDocentes.innerHTML = str

}