//classe eventos
let arrayEventos = []
let utiId = 0
class Eventos {
    constructor(data, hora, sala, categoria, responsavel, imagem, designacao) {

        this._idEv = Eventos.getLastIdE() + 1
        this.data = data
        this.hora = hora
        this.categoria = categoria
        this.responsavel = responsavel
        this.imagem = imagem
        this.sala = sala
        this.designacao = designacao

    }
    // Propriedade id
    get idEv() {
        return this._idEv
    }

    // Propriedade data
    get data() {
        return this._data
    }

    set data(novoData) {
        this._data = novoData
    }
    // Propriedade hora
    get hora() {
        return this._hora
    }

    set hora(novoHora) {
        this._hora = novoHora
    }
    // Propriedade sala
    get sala() {
        return this._sala
    }

    set sala(novaSala) {
        this._sala = novaSala
    }
    // Propriedade categoria
    get categoria() {
        return this._categoria
    }

    set categoria(novoCategoria) {
        this._categoria = novoCategoria
    }
    // Propriedade responsavel
    get responsavel() {
        return this._responsavel
    }

    set responsavel(novoResponsavel) {
        this._responsavel = novoResponsavel
    }
    // Propriedade imagem
    get imagem() {
        return this._imagem
    }

    set imagem(novoImagem) {
        this._imagem = novoImagem
    }
    // Propriedade designaç~ºao
    get designacao() {
        return this._designacao
    }

    set designacao(novoDesignacao) {
        this._designacao = novoDesignacao
    }


    // obter o ultimo id
    static getLastIdE() {
        let lastIdE = 0
        if (arrayEventos.length > 0) {
            lastIdE = arrayEventos[arrayEventos.length - 1].idEv
        }
        return lastIdE
    }

}

//################ Comentarios ################################################

let arrayComentarios = []

class Comentarios {
    constructor(NomeUilizador, comentario, idDoEventoComentado) {

        this.NomeUilizador = NomeUilizador
        this.comentario = comentario
        this.idDoEventoComentado = idDoEventoComentado

    }

    // Propriedade NomeUilizador
    get NomeUilizador() {
        return this._NomeUilizador
    }
    set NomeUilizador(novoNomeUilizador) {
        this._NomeUilizador = novoNomeUilizador
    }

    // Propriedade comentario
    get comentario() {
        return this._comentario
    }

    set comentario(novocomentario) {
        this._comentario = novocomentario
    }

    // Propriedade idDoEventoComentado
    get idDoEventoComentado() {
        return this._idDoEventoComentado
    }

    set idDoEventoComentado(novoidDoEventoComentado) {
        this._idDoEventoComentado = novoidDoEventoComentado
    }


}


//################+++++##############################################

//classe utilizador
let arrayUtilizadores = []


class Utilizador {
    constructor(nome, email, password, foto, tipoUtilizador) {
        this._idUt = Utilizador.getLastId() + 1
        this.nome = nome
        this.email = email
        this.password = password
        this.foto = foto
        this.tipoUtilizador = tipoUtilizador
    }
    // Propriedade id
    get idUt() {
        return this._idUt
    }

    // Propriedade nome
    get nome() {
        return this._nome
    }

    set nome(novoNome) {
        this._nome = novoNome
    }
    // Propriedade email
    get email() {
        return this._email
    }

    set email(novoEmail) {
        this._email = novoEmail
    }
    // Propriedade password
    get password() {
        return this._password
    }

    set password(novoPassword) {
        this._password = novoPassword
    }
    // Propriedade foto
    get foto() {
        return this._foto
    }

    set foto(novoFoto) {
        this._foto = novoFoto
    }
    // Propriedade tipo de utilizadores
    get tipoUtilizador() {
        return this._tipoUtilizador
    }

    set tipoUtilizador(novotipoUtilizador) {
        this._tipoUtilizador = novotipoUtilizador
    }

    // obter o ultimo id
    static getLastId() {
        let lastId = 0
        if (arrayUtilizadores.length > 0) {
            lastId = arrayUtilizadores[arrayUtilizadores.length - 1].idUt
        }
        return lastId
    }

}

//################+++++################################################

let arrayIrEventos = []

class IrEventos {
    constructor(idEvento, interessado, ir) {

        this.idEvento = idEvento
        this.interessado = interessado
        this.ir = ir


    }

    // Propriedade idEvento
    get idEvento() {
        return this._idEvento
    }
    set idEvento(novoidEvento) {
        this._idEvento = novoidEvento
    }


    // Propriedade interessado
    get interessado() {
        return this._interessado
    }

    set interessado(novointeressado) {
        this._interessado = novointeressado
    }
    // Propriedade ir
    get ir() {
        return this._ir
    }

    set ir(novoIr) {
        this._ir = novoIr
    }


}


window.onload = function () {

    renderCatalog()



    let CodigoDocenteGuardado = ""

    let btnLogout = document.getElementById("optLogout")
    let btnConfig = document.getElementById("linkConfig")

    btnConfig.style.display = 'none'


    let verCategoria = document.getElementById("optVerPorCategorias")
    let btnVer = document.getElementById("ver")
    let btnPontuar = document.getElementById("btnPOntuar")
    let btnRange = document.getElementById("inputRange")
    let btnCriarEventos = document.getElementById("btnCriarEventos")
    let frmCriarEventos = document.getElementById("frmCriarEventos")
    //btnCriarEventos.style.display = 'none'
    let btnRegisto = document.getElementById("optRegisto")

    let btnLogin = document.getElementById("optLogin")
    let ModalRegistar = document.getElementById("frmRegistar")
    btnLogout.style.display = 'none'






    if (localStorage.getItem("Eventos")) {
        let tempArrayEventos = []
        tempArrayEventos = JSON.parse(localStorage.getItem("Eventos"))
        for (let i = 0; i < tempArrayEventos.length; i++) {
            let novoEvents = new Eventos(tempArrayEventos[i]._data, tempArrayEventos[i]._hora, tempArrayEventos[i]._sala, tempArrayEventos[i]._categoria, tempArrayEventos[i]._responsavel, tempArrayEventos[i]._imagem, tempArrayEventos[i]._designacao)
            arrayEventos.push(novoEvents)

        }

    }


    if (localStorage.getItem("utilizadores")) {
        let tempArray = []
        tempArray = JSON.parse(localStorage.getItem("utilizadores"))
        for (let i = 0; i < tempArray.length; i++) {
            let novoutilizador = new Utilizador(tempArray[i]._nome, tempArray[i]._email, tempArray[i]._password, tempArray[i]._foto, tempArray[i]._tipoUtilizador)
            arrayUtilizadores.push(novoutilizador)

        }

    }

    if (localStorage.getItem("Interessados")) {
        let tempArrayInteressados = []
        tempArrayInteressados = JSON.parse(localStorage.getItem("Interessados"))
        for (let i = 0; i < tempArrayInteressados.length; i++) {
            let novoInteressado = new IrEventos(tempArrayInteressados[i]._idEvento, tempArrayInteressados[i]._interessado, tempArrayInteressados[i]._ir)
            arrayIrEventos.push(novoInteressado)

        }

    }


    let utilizadorOnline = ""

    if (localStorage.getItem("estadoUtitlizador")) {
        utilizadorOnline = localStorage.getItem("estadoUtitlizador")
    }
    let pos1 = utilizadorOnline.indexOf(",")
    let pos2 = utilizadorOnline.lastIndexOf(",")
    let substring2 = utilizadorOnline.substring(0, pos1)
    let substring4 = utilizadorOnline.substring(pos2 + 1, utilizadorOnline.length)
    let substring3 = utilizadorOnline.substring(pos1 + 1, pos2)


    if (substring4 == "Visitante" || substring4 == "estudante" && substring3 == "true") {
        console.log("entrei")
        btnCriarEventos.style.display = 'none'
        btnLogout.style.display = 'block'
        btnLogin.style.display = 'none'
        btnRegisto.style.display = 'none'
    }
    if (substring2=="admin"&&substring3=="true") {

        btnLogout.style.display='block'
        btnLogin.style.display='none'
        btnRegisto.style.display='none'
        btnConfig.style.display='block'
        
    }

    if (substring4 == "docente") {
        btnCriarEventos.style.display = 'block'
        btnLogout.style.display = 'block'
        btnLogin.style.display = 'none'
        btnRegisto.style.display = 'none'

    }



    let arrayEstadoUt = []
    let estado = ""

    let stadoUtilizador = false



    //fazendo login
    frmLogin.addEventListener("submit", function (event) {

        let optRegistar = document.getElementById("linkRegistar")
        let barra = document.getElementById("barra")
        let loginName = document.getElementById("ModalName")
        let loginPass = document.getElementById("ModalPassword")
        //buscar no local storage os utilizadores
        let utInLocalStorage = JSON.parse(localStorage.getItem("utilizadores"))
        let utGuardados = ""
        let cont = 0


        //percorrer o local storage e converter os dados em objets
        if (localStorage.getItem("utilizadores")) {
            utGuardados = JSON.parse(localStorage.getItem("utilizadores"))
        }

        //verificar se o utilizador existe ou não
        for (let i = 0; i < utGuardados.length; i++) {

            if (utGuardados[i]._nome == loginName.value && utGuardados[i]._password == loginPass.value) {
                swal({
                    icon: "success",
                    title: "Login com sucesso!",
                    text: "Bem vindo! " + utGuardados[i]._nome,
                });
                btnRegisto.style.display = 'none'
                btnLogin.style.display = 'none'
                btnLogout.style.display = 'block'
                stadoUtilizador = true
                arrayEstadoUt.push(loginName.value)
                arrayEstadoUt.push(stadoUtilizador)
                arrayEstadoUt.push(utGuardados[i]._tipoUtilizador)
                localStorage.setItem("estadoUtitlizador", arrayEstadoUt)
                arrayEstadoUt = []

                frmLogin.reset()
                event.preventDefault()

            }

            else {
                cont++
            }

        }
        //se o utilizador não exister emite uma mensagem
        if (cont == utGuardados.length) {
            alert("Utilizador não existente")
            event.preventDefault()
        }


        if (localStorage.getItem("estadoUtitlizador")) {
            utilizadorOnline = localStorage.getItem("estadoUtitlizador")
        }
        let pos1 = utilizadorOnline.indexOf(",")
        let pos2 = utilizadorOnline.lastIndexOf(",")
        let substring2 = utilizadorOnline.substring(0, pos1)
        let substring3 = utilizadorOnline.substring(pos2 + 1, utilizadorOnline.length)


        if (substring3 == "Visitante" || substring3 == "Estudante") {
            btnCriarEventos.style.display = 'none'

        }
        else {
            btnCriarEventos.style.display = 'block'
        }


        event.preventDefault()

    })


    //Fazendo logout
    btnLogout.addEventListener("click", function (event) {
        let estado = ""

        if (localStorage.getItem("estadoUtitlizador")) {
            estado = localStorage.getItem("estadoUtitlizador")
        }
        let pos1 = estado.indexOf(",")
        let substring1 = estado.substring(pos1 + 1, estado.length)
        let substring2 = estado.substring(0, pos1)
        stadoUtilizador = false
        console.log(substring2)

        arrayEstadoUt.push(substring2)
        arrayEstadoUt.push(stadoUtilizador)
        localStorage.setItem("estadoUtitlizador", arrayEstadoUt)
        arrayEstadoUt = []
        btnRegisto.style.display = 'block'
        btnLogin.style.display = 'block'
        btnCriarEventos.style.display = 'none'
        btnLogout.style.display = 'none'
        btnConfig.style.display = 'none'


        event.preventDefault()

    })

    //submeter os dados do utilizador 
    ModalRegistar.addEventListener("submit", function (event) {
        if (localStorage.getItem("Codigo")) {

            CodigoDocenteGuardado = localStorage.getItem("Codigo")

        }

        let estudante = document.getElementById("estudante")
        let docente = document.getElementById("docente")
        let nomeUt = document.getElementById("ModalNome").value
        let emailUt = document.getElementById("ModalEmail").value
        let fotoUt = document.getElementById("ModalFoto").value
        let tipoutilizador;
        let Password = document.getElementById("ModalPasswordR").value
        let confPassword = document.getElementById("ModalConfPassword").value
        let stadoUtilizador = false
        let varContNome = 0
        let varContEmail = 0
        let confirmarCodigoDocente = ""


        //validar as passwords
        if (confPassword != Password) {
            alert("password diferentes")
            event.preventDefault()
        } else {
            //verificar se as checked boxes estão preenchidas e criar o objeto
            if (estudante.checked == true) {
                tipoutilizador = "Estudante"
            } else if (docente.checked == true) {

                while (confirmarCodigoDocente != CodigoDocenteGuardado) {
                    confirmarCodigoDocente = prompt("Escreva o código de confimação")

                }
                tipoutilizador = "Docente"
            }
            else {
                tipoutilizador = "Visitante"
            }

            for (let i = 0; i < arrayUtilizadores.length; i++) {

                if (emailUt != arrayUtilizadores[i]._email) {
                    varContEmail++
                }

            }

            for (let i = 0; i < arrayUtilizadores.length; i++) {

                if (nomeUt != arrayUtilizadores[i]._nome) {
                    varContNome++
                }

            }

            if (varContNome == arrayUtilizadores.length) {


            }
            else {
                alert("Nome do utilizador já existente.")
            }

            if (varContEmail == arrayUtilizadores.length) {

            }
            else {
                alert("Email do utilizador já existente.")
            }



            if (varContEmail == arrayUtilizadores.length && varContNome == arrayUtilizadores.length) {
                let novoutilizador = new Utilizador(nomeUt, emailUt, Password, fotoUt, tipoutilizador)
                arrayUtilizadores.push(novoutilizador)
                swal({
                    icon: "success",
                    title: "Registo com secesso!",
                    text: "Bem vindo! ",
                });

                localStorage.setItem("utilizadores", JSON.stringify(arrayUtilizadores))
                btnRegisto.style.display = 'none'
                btnLogin.style.display = 'none'
                btnLogout.style.display = 'block'
                stadoUtilizador = true
                arrayEstadoUt.push(nomeUt)
                arrayEstadoUt.push(stadoUtilizador)
                arrayEstadoUt.push(tipoutilizador)
                localStorage.setItem("estadoUtitlizador", arrayEstadoUt)
                arrayEstadoUt = []

            }


            ModalRegistar.reset()
            console.log(arrayUtilizadores)
            event.preventDefault()

        }


    })




    //submeter eventos
    frmCriarEventos.addEventListener("submit", function (event) {



        let data = document.getElementById("ModalData").value
        let horario = document.getElementById("ModalHorário").value
        let sala = document.getElementById("ModalSala").value
        let imagem = document.getElementById("ModalImagem").value
        let responsavel = document.getElementById("ModalResponsavel").value
        let categoria = document.getElementById("optCategorias").value
        let designacao = document.getElementById("ModalDesigEvento").value


        //  Verificar se a data selecionada não é superior à data atual
        // Date.parse() recebe uma data e converte para milissegundos (desde 1 de janeiro de 1970 até a essa data)


        let dataEvento = Date.parse(data)
        let dataAtual = Date.parse(Date())


        if (dataEvento < dataAtual) {

            alert("A data do evento tem de ser maior à data atual!")
            event.preventDefault()

        }
        else {


            let novoEventos = new Eventos(data, horario, sala, categoria, responsavel, imagem, designacao)
            arrayEventos.push(novoEventos)

            localStorage.setItem("Eventos", JSON.stringify(arrayEventos))
            swal({
                icon: "success",
                title: "Evento submetido com sucesso!",
                text: "Bem vindo! ",
            });

            renderCatalog()

        }


        console.log("")

        let utGuardados = ""
        // 1. Validar o campo da data


        //inputYear.setAttribute()



        console.log(arrayEventos)
        event.preventDefault()

    })

    //ver eventos por categoria
    let myCard = document.getElementById("myCardEventos")
    let strHtmlCard2 = ""
    let contador = 0
    let total = 0
    let acumulador = 0

    btnVer.addEventListener("click", function () {
        let EventosGuardados2 = ""
        let EventosGuardadosPorCateg = ""
        let contCategoria = 0
        if (verCategoria.value == "Todos") {
            renderCatalog()
        }

        if (localStorage.getItem("Eventos")) {
            EventosGuardados2 = JSON.parse(localStorage.getItem("Eventos"))
        }

        for (let i = 0; i < EventosGuardados2.length; i++) {
            if (verCategoria.value == EventosGuardados2[i]._categoria) {

                console.log("entrei")


                // 1. Iterar sobre o array de Trips

                // 2. Para cada Trip vou definir uma Card e compô-la com os dados do objeto



                // Inicia a linha
                if (i % 2 == 0) {
                    strHtmlCard2 += `<div class="row">`
                }

                // Cria a card
                strHtmlCard2 += `<div class="col-sm-6">
               <br>
                <div class="card" style="width:80%; height:100%">
                <img class="card-img-top" style="height:235px;" src="${EventosGuardados2[i]._imagem}" alt="Card image cap">
                <h3 class="card-title" style="background-color:rgb(218, 215, 209);text-align:center">${EventosGuardados2[i]._categoria}</h3>
               
                    <div class="card-body">
                    <p class="card-text">${EventosGuardados2[i]._designacao}</p>
                    <br>
                       
                    <div class="row">

                    <div class="col-sm-6">
                    <li class="card-text">RESPONSAVEL: <small id="helpId" class="form-text text-muted">${EventosGuardados2[i]._responsavel}</small> </li>
                    <li>Data:</li>
                    <h6 class="card-text"> <small id="helpId" class="form-text text-muted">${EventosGuardados2[i]._data}</small> </h6>
                    </div>

                    <div class="col-sm-6">
                    <li>Hora:</li>
                    <h6 class="card-text"> <small id="helpId" class="form-text text-muted">${EventosGuardados2[i]._hora}</small> </h6>
                    <li>Sala:</li>
                    <h6 class="card-text"> <small id="helpId" class="form-text text-muted">${EventosGuardados2[i]._sala}</small> </h6>

                    </div>
                       
                    </div>
                    <br>
                    <br>
                
                        <div class="row">
                        <div class="col-sm-6">
                       
                        </div>
                        <div class="col-sm-3">
                        <button type="button" class="btn btn-warning">Ir</button>
                        </div>
                        <div class="col-sm-3">
                        <small id="helpId" class="form-text text-muted">Interessados</small>
                            `//fechar
                for (let x = contador; x < EventosGuardados2.length; x++) {

                    for (let i = 0; i < arrayIrEventos.length; i++) {
                        acumulador++
                        if (arrayIrEventos[i]._idEvento == EventosGuardados2[x]._idEv) {
                            total += arrayIrEventos[i]._ir

                            //acumulador = acumulador + arrayIrEventos[i]._ir
                            console.log("id do evento " + EventosGuardados2[x]._idEv + " interessados " + arrayIrEventos[i]._ir)


                        }

                    }
                    if (acumulador >= arrayIrEventos.length) {
                        contador = x + 1

                        console.log()
                        //abrir

                        strHtmlCard2 += `
                    <small id="helpId" class="form-text text-muted">${ total / 2}</small>
                    
                    `//fechar
                        total = 0
                        break
                    }
                    else {
                        contador = x

                    }


                }



                strHtmlCard2 += ` <hr style="background-color:rgb(238, 168, 29)">

                            </div>
                            </div>
                
                            
                
                            <div class="row">
                                      
            <div class="stars">
            <form action="">
              <input class="star star-5" id="star-5" type="radio" name="star"/>
              <label class="star star-5" for="star-5"></label>
              <input class="star star-4" id="star-4" type="radio" name="star"/>
              <label class="star star-4" for="star-4"></label>
              <input class="star star-3" id="star-3" type="radio" name="star"/>
              <label class="star star-3" for="star-3"></label>
              <input class="star star-2" id="star-2" type="radio" name="star"/>
              <label class="star star-2" for="star-2"></label>
              <input class="star star-1" id="star-1" type="radio" name="star"/>
              <label class="star star-1" for="star-1"></label>
            </form>
          </div>
                            <div class="col-sm-3">
                            
                            </div>
                
                            <div class="col-sm-9">
                            
                            
                        </form>
                            </div>
                            </div>
                            <br>
                            <div class="row">
                            <div class="form-group">
                
                <input type="text" class="form-control co" name="" id="comentario" aria-describedby="helpId" placeholder="Comentar">
                <br>
       
                <a href="">
                <i class="fas fa-location-arrow a"></i>
                </a>

                
                </div>
                            </div>
                          
                            `




                strHtmlCard2 += `</div>
                        </div>      
                    </div>`

                // Fecha a linha
                if (i % 2 == 1) {
                    strHtmlCard2 += `</div>`
                }

                myCard.innerHTML = strHtmlCard2
                strHtmlCard2 = ""

            } else if (verCategoria.value != EventosGuardados2[i]._categoria && verCategoria.value != "Todos") {
                contCategoria++
            }

            if (contCategoria == EventosGuardados2.length) {
                swal({
                    icon: "error",
                    title: "Evento não existente!",

                });
            }

        }

        //interessados em ir aos eventos
        let btnIrEventos = document.getElementsByClassName("btn btn-warning ir"), i;

        for (let x = contador; x < arrayIrEventos.length; x++) {

            for (let i = 0; i < btnIrEventos.length; i++) {
                acumulador++
                if (nomeUtilizadorLogado == arrayIrEventos[x]._interessado && EventosGuardados[i]._idEv == arrayIrEventos[x]._idEvento) {
                    btnIrEventos[i].style.display = 'none'
                    console.log(arrayIrEventos[x]._interessado)
                    console.log(EventosGuardados[i]._idEv)
                }


            }

            if (acumulador >= btnIrEventos.length) {
                contador = x + 1

            }
            else {
                contador = x

            }


        }


        if (localStorage.getItem("Interessados")) {
            arrayIrEventos = JSON.parse(localStorage.getItem("Interessados"))
        }
        if (localStorage.getItem("Comentarios")) {
            arrayComentarios = JSON.parse(localStorage.getItem("Comentarios"))
        }


        //################### comentar eventos#############################

        let btnComentarEventos = document.getElementsByClassName("fas fa-location-arrow a")
        let comentarioDoUtilizador = document.getElementsByClassName("form-control co")
        let varCometario = ""
        let arrayDosComentarios = []

        if (localStorage.getItem("Comentarios")) {
            arrayComentarios = JSON.parse(localStorage.getItem("Comentarios"))
        }

        for (let i = 0; i < btnComentarEventos.length; i++) {

            btnComentarEventos[i].addEventListener("click", function () {

                if (comentarioDoUtilizador[i].value != "" && substring3 == "true") {
                    varCometario = comentarioDoUtilizador[i].value

                    let novoComentarios = new Comentarios(nomeUtilizadorLogado, varCometario, EventosGuardados[i]._idEv)
                    arrayComentarios.push(novoComentarios)
                    //comentarioDoUtilizador[i].reset()


                    localStorage.setItem("Comentarios", JSON.stringify(arrayComentarios))

                    alert("Comentário enviado com sucesso")
                }
                else {
                    alert("Faça o login ou verefique que escreveu o comentário")
                    event.preventDefault()
                }




            })


        }





        event.preventDefault()

    })

    /*
           
   */
}


// Função que vai alimentar o meu catálogo
function renderCatalog() {



    let myCard = document.getElementById("myCardEventos")

    let EventosGuardados = ""




    let strHtmlCard = ""

    arrayInteressados = []
    let idDoEvento = ""
    let idDoUtilizador = ""
    let nomeUtilizadorLogado = ""

    if (localStorage.getItem("Eventos")) {
        EventosGuardados = JSON.parse(localStorage.getItem("Eventos"))
    }

    let estado = ""
    if (localStorage.getItem("estadoUtitlizador")) {
        estado = localStorage.getItem("estadoUtitlizador")
    }
    let pos1 = estado.indexOf(",")
    let pos2 = estado.lastIndexOf(",")
    let substring1 = estado.substring(pos1 + 1, pos2)

    nomeUtilizadorLogado = estado.substring(0, pos1)

    if (localStorage.getItem("Interessados")) {
        arrayIrEventos = JSON.parse(localStorage.getItem("Interessados"))
    }



    let contador = 0
    let acumulador = 0
    let total = 0


    for (let i = 0; i < EventosGuardados.length; i++) {
        console.log()


        // Inicia a linha
        if (i % 2 == 0) {
            strHtmlCard += `<div class="row">`
        }

        // Cria a card
        strHtmlCard += ` <div class="col-sm-6">
                   <br>
                   
                    <div class="card" style="width:80%; height:100%">
                   
                    <img class="card-img-top" style="height:235px;" src="${EventosGuardados[i]._imagem}" alt="Card image cap">
 
                    <h1 class="card-title" style="; text-align:center;  font-family: arial">${EventosGuardados[i]._categoria}</h1>
                        <div class="card-body">
                           
                            <p class="card-text">${EventosGuardados[i]._designacao}</p>
                            <br>
                           
                            
                            <div class="row">

                            <div class="col-sm-6">
                            <li class="card-text">RESPONSAVEL: <small id="helpId" class="form-text text-muted">${EventosGuardados[i]._responsavel}</small> </li>
                            <li>Data:</li>
                            <h6 class="card-text"> <small id="helpId" class="form-text text-muted">${EventosGuardados[i]._data}</small> </h6>
                            </div>

                            <div class="col-sm-6">
                            <li>Hora:</li>
                            <h6 class="card-text"> <small id="helpId" class="form-text text-muted">${EventosGuardados[i]._hora}</small> </h6>
                            <li>Sala:</li>
                            <h6 class="card-text"> <small id="helpId" class="form-text text-muted">${EventosGuardados[i]._sala}</small> </h6>
        
                            </div>
                        
                        </div>
                        <br>
                        <br>
                            <div class="row">
                            <div class="col-sm-6">
                           
                            </div>
                            <div class="col-sm-3">
                            <button id="btnIrEvento" type="button" class="btn btn-warning ir">Ir</button>
                            </div>
                            <div class="col-sm-3">
                            <small id="helpId" class="form-text text-muted">Interessados</small>

                            `//fechar
        for (let x = contador; x < EventosGuardados.length; x++) {

            for (let i = 0; i < arrayIrEventos.length; i++) {
                acumulador++
                if (arrayIrEventos[i]._idEvento == EventosGuardados[x]._idEv) {
                    total += arrayIrEventos[i]._ir

                    //acumulador = acumulador + arrayIrEventos[i]._ir
                    console.log("id do evento " + EventosGuardados[x]._idEv + " interessados " + arrayIrEventos[i]._ir)


                }

            }
            if (acumulador >= arrayIrEventos.length) {
                contador = x + 1

                console.log()
                //abrir

                strHtmlCard += `
<small id="helpId" class="form-text text-muted">${ total}</small>

`//fechar
                total = 0
                break
            }
            else {
                contador = x

            }


        }

        strHtmlCard += ` <hr style="background-color:rgb(238, 168, 29)">

        
            </div>
            </div>

  

            <div class="row">
                      
            <div class="stars">
            <form action="">
             <label id="${i}" class="star star" value="1" for="star-1"></label>
            <label  id="${i}" class="star star" value="2" for="star-4"></label>
           
            <label  id="${i}" class="star star" value="3" for="star-3"></label>
          
            <label  id="${i}" class="star star" value="4" for="star-2"></label>
            <label  id="${i}" class="star star" value="5" for="star-1"></label>
             
       
              
              
             
            
           
              <a href="">  <i class="fas fa-hand-point-right"></i></a>
              <small id="helpId" class="form-text text-muted">enviar pontuação</small>
             
            </form>
          </div>
            
            <div class="col-sm-3">
            
            </div>

            <div class="col-sm-9">
            
            
        </form>
            </div>
            </div>
            <br>
            <div class="row">
            <div class="form-group">

<input type="text" class="form-control co" name="" id="comentario" aria-describedby="helpId" placeholder="Comentar">
<br>



<a href="">
<i class="fas fa-comments"><small>Ver comentários</small></i>
</a>
_ _
<a href="">
<i class="fas fa-location-arrow a"></i>
</a>


</div>

            </div>
          
            `


        strHtmlCard += `</div>
            </div>      
        </div>`

        // Fecha a linha
        if (i % 2 == 1) {
            strHtmlCard += `</div>  <br>  <br>`
        }

    }

    myCard.innerHTML = strHtmlCard

    //interessados em ir aos eventos
    let btnIrEventos = document.getElementsByClassName("btn btn-warning ir"), i;

    for (let x = contador; x < arrayIrEventos.length; x++) {

        for (let i = 0; i < btnIrEventos.length; i++) {
            acumulador++
            if (nomeUtilizadorLogado == arrayIrEventos[x]._interessado && EventosGuardados[i]._idEv == arrayIrEventos[x]._idEvento) {
                btnIrEventos[i].style.display = 'none'
                console.log(arrayIrEventos[x]._interessado)
                console.log(EventosGuardados[i]._idEv)
            }


        }

        if (acumulador >= btnIrEventos.length) {
            contador = x + 1

        }
        else {
            contador = x

        }


    }


    let strHtmlCard3 = ""

    let click = 0


    for (let i = 0; i < btnIrEventos.length; i++) {
        //btnIrEventos[i].style.display = 'none'

        /* if (substring1 == "true") {
             btnIrEventos[i].style.display = 'block'
         }*/


        //esconder o btn Ir e criar o objeto

        btnIrEventos[i].addEventListener("click", function () {

            click = 1
            if (localStorage.getItem("Interessados")) {
                arrayIrEventos = JSON.parse(localStorage.getItem("Interessados"))
            }
            idDoEvento = EventosGuardados[i]._idEv


            let objtIteressados = new IrEventos(idDoEvento, nomeUtilizadorLogado, click)
            arrayIrEventos.push(objtIteressados)

            console.log(EventosGuardados[i]._idEv)
            localStorage.setItem("Interessados", JSON.stringify(arrayIrEventos))

            btnIrEventos[i].style.display = 'none'
            click = 0

            //##################### atualizar catalogo ########################




        })


    }

    //################### comentar eventos#############################

    let btnComentarEventos = document.getElementsByClassName("fas fa-location-arrow a")
    let comentarioDoUtilizador = document.getElementsByClassName("form-control co")
    let varCometario = ""
    let arrayDosComentarios = []

    if (localStorage.getItem("Comentarios")) {
        arrayComentarios = JSON.parse(localStorage.getItem("Comentarios"))
    }

    for (let i = 0; i < btnComentarEventos.length; i++) {

        btnComentarEventos[i].addEventListener("click", function () {

            if (comentarioDoUtilizador[i].value != "" && substring1 == true) {
                varCometario = comentarioDoUtilizador[i].value

                let novoComentarios = new Comentarios(nomeUtilizadorLogado, varCometario, EventosGuardados[i]._idEv)
                arrayComentarios.push(novoComentarios)
                //comentarioDoUtilizador[i].reset()


                localStorage.setItem("Comentarios", JSON.stringify(arrayComentarios))

                alert("Comentário enviado com sucesso")
            }
            else {
                alert("Faça o login ou verefique que escreveu o comentário")
                event.preventDefault()
            }




        })

    }



    //################# ver comentario#############################

    let header = ""
    let contentUtilizador = ""
    let contentComentario = ""


    let strSubmitFunc = hideModal();

    let verComentarios = document.getElementsByClassName("fas fa-comments")
    contador = 0



    for (let i = 0; i < verComentarios.length; i++) {

        verComentarios[i].addEventListener("click", function (event) {
            contador = i
            if (localStorage.getItem("Comentarios")) {
                arrayComentarios = JSON.parse(localStorage.getItem("Comentarios"))
            }



            for (let x = contador; x < EventosGuardados.length; x++) {

                for (let i = 0; i < arrayComentarios.length; i++) {
                    acumulador++
                    if (arrayComentarios[i]._idDoEventoComentado == EventosGuardados[x]._idEv) {

                        header = "Comentários";
                        contentUtilizador += " " + arrayComentarios[i]._NomeUilizador + ": " + "\n" + arrayComentarios[i]._comentario + "\n" + "___________________________________________________________________________________";

                        contentComentario += arrayComentarios[i]._comentario + "\n";


                    }

                }
                if (acumulador >= arrayComentarios.length) {
                    contador = x + 1

                    console.log()
                    total = 0
                    break
                }
                else {
                    contador = x

                }


            }

            console.log(contentUtilizador)
            doModal('myModal', header, contentUtilizador);
            hideModal()

            event.preventDefault()

        })

    }

    //###################### pontuar eventos #####################
    let contar = 0
    let estrelas = document.getElementsByClassName("star star")
    let idDaEstrela = 0
    let valorDaEstrela = 0
    console.log(estrelas.length)
    for (let i = 0; i < estrelas.length; i++) {
        estrelas[i].style.color = "#444;"

        estrelas[i].addEventListener("click", function () {

            contar++
            idDaEstrela = estrelas[i].getAttribute("id")
            valorDaEstrela = estrelas[i].getAttribute("value")


            for (let j = idDaEstrela; j < valorDaEstrela; j++) {
                estrelas[j].style.color = " #FE7"
                console.log("i: "+i)
            }



            let bloquiarEstrelas = document.getElementsByClassName("star star")[i].disable = true

            console.log(estrelas[i])
            console.log(valorDaEstrela)



        })




    }


}

function doModal(placementId, heading, formContent) {

    let html = '<div id="modalWindow" class="modal fade" style="display:none;left:30%; width:50%;height: 50%; background-color:white">';
    html += '<div class="modal-header">';
    html += '<a class="btn btn-danger" data-dismiss="modal">×</a>';

    html += '<h4 style="color:black">' + heading + '</h4>'
    html += '</div>';
    html += '<div class="modal-body">';
    html += '<p>';

    html += '<h6 style="color:black; background-color:white;font-family:arial">' + formContent + '</h6>';
    html += '</div>';
    html += '</span>'; // close button
    html += '</div>';  // footer
    html += '</div>';  // modalWindow
    $("#myModalCo").html(html);
    $("#modalWindow").modal();


}


function hideModal() {
    // Using a very general selector - this is because $('#modalDiv').hide
    // will remove the modal window but not the mask
    $('#myModalCo').modal('hide');
}

