//#############################parcerias##################################

let arrayParcerias = []

class Parcerias {
    constructor(Empresa, localizaçao, linkLogotipo, link) {
        this._IdParcerias = Parcerias.getLastId() + 1
        this.Empresa = Empresa
        this.localizaçao = localizaçao
        this.linkLogotipo = linkLogotipo
        this.link = link
    }

    // Propriedade id
    get IdParcerias() {
        return this._IdParcerias
    }

    // Propriedade empresa
    get Empresa() {
        return this._Empresa
    }
    set Empresa(novoEmpresa) {
        this._Empresa = novoEmpresa
    }

    // Propriedade localizaçao
    get localizaçao() {
        return this._localizaçao
    }

    set localizaçao(novoLocalizaçao) {
        this._localizaçao = novoLocalizaçao

    }
    // Propriedade LinkLogotipo
    get linkLogotipo() {
        return this._linkLogotipo
    }
    set linkLogotipo(novoLinkLogotipo) {
        this._linkLogotipo = novoLinkLogotipo
    }

    // Propriedade Link
    get link() {
        return this._link
    }
    set link(novoLink) {
        this._link = novoLink
    }

    // obter o ultimo id
    static getLastId() {
        let lastId = 0
        if (arrayParcerias.length > 0) {
            lastId = arrayParcerias[arrayParcerias.length - 1].IdParcerias
        }
        return lastId
    }


}

window.onload=function(){

     //########################parcerias#########################

     let nomeEmpresa = document.getElementById("configNomeEmpresa")
     let locaEmpresa = document.getElementById("configLocalizaçaoEmpresa")
     let linkEmpresa = document.getElementById("configLinkEmpresa")
     let linkLogotipo = document.getElementById("configImagemEmpresa")
     let frmParcerias = document.getElementById("frmCriarParceriasConfig")
 
     frmParcerias.addEventListener("submit", function (events) {
 
         let novaParceria = new Parcerias(nomeEmpresa.value, locaEmpresa.value, linkLogotipo.value, linkEmpresa.value)
         arrayParcerias.push(novaParceria)
         localStorage.setItem("Parcerias", JSON.stringify(arrayParcerias))
         alert("Adicionado com sucesso")
         console.log(arrayEventos)
         events.preventDefault()
         frmParcerias.reset()
 
     })



      //#############################Eliminar parcerias######################

    let frmEliminar = document.getElementById("frmEliminarParcerias")


    frmEliminar.addEventListener("submit", function (events) {
        let cont = 0

        let nomeParceriaEliminar = document.getElementById("nomeParceriaAEliminar").value

        let parceriasGuardados = ""
        // 1. Iterar sobre o array de Trips

        // eliminar parcerias
        let strHtmlCard = ""



        if (localStorage.getItem("Parcerias")) {
            parceriasGuardados = JSON.parse(localStorage.getItem("Parcerias"))
        }


        for (let i = 0; i < parceriasGuardados.length; i++) {

            if (nomeParceriaEliminar == parceriasGuardados[i]._Empresa) {
                parceriasGuardados.splice(i, 1)

                localStorage.setItem("Parcerias", JSON.stringify(parceriasGuardados))
            }
            else {
                cont++
            }

        }
        if (cont == parceriasGuardados.length) {
            alert("Nome inválido")
        }
        events.preventDefault()
      

    })



}