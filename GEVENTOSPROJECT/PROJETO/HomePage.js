//classe utilizador
let arrayUtilizadores = []

window.onload = function () {

    $(window).on('scroll', function () {

        if ($(window).scrollTop()) {
            $('nav').addClass('black');
        }
        else {
            $('nav').removeClass('black');
        }
    })

}
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




window.onload = function () {
    renderCatalog()
    renderCatalogEventos()
    renderCatalogD()

    let CodigoDocenteGuardado = ""

    let ModalRegistar = document.getElementById("frmRegistar")
    let btnLogin = document.getElementById("optLogin")
    let frmLogin = document.getElementById("frmLogin")
    let btnLogout = document.getElementById("optLogout")
    let btnRegistar = document.getElementById("linkRegistar")
    let btnConfig = document.getElementById("linkConfig")
    let arrayEstadoUt = []


    btnLogout.style.display = 'none'
    btnConfig.style.display = 'none'
   

    if (localStorage.getItem("utilizadores")) {
        let tempArray = []
        tempArray = JSON.parse(localStorage.getItem("utilizadores"))
        for (let i = 0; i < tempArray.length; i++) {
            let novoutilizador = new Utilizador(tempArray[i]._nome, tempArray[i]._email, tempArray[i]._password, tempArray[i]._foto, tempArray[i]._tipoUtilizador)
            arrayUtilizadores.push(novoutilizador)   
            
        }

    }
    /*let arrayAdmmin=[]

    let newAdmin= new Utilizador("admin","admin@admin","admin","....","admin")
    arrayAdmmin.push(newAdmin)
    localStorage.setItem("utilizadores",JSON.stringify(arrayAdmmin))*/

   
    let utilizadorOnline = ""

    if (localStorage.getItem("estadoUtitlizador")) {
        utilizadorOnline = localStorage.getItem("estadoUtitlizador")
    }
    let pos1 = utilizadorOnline.indexOf(",")
    let pos2 = utilizadorOnline.lastIndexOf(",")
    let substring2 = utilizadorOnline.substring(0, pos1)
    let substring4 = utilizadorOnline.substring(pos2 + 1, utilizadorOnline.length)
    let substring3 = utilizadorOnline.substring(pos1 + 1, pos2)
   

    if (substring3=="true") {
        
      
        btnLogout.style.display='block'
        btnLogin.style.display='none'
        btnRegistar.style.display='none'
    }
    if (substring2=="admin"&&substring3=="true") {

        btnLogout.style.display='block'
        btnLogin.style.display='none'
        btnRegistar.style.display='none'
        btnConfig.style.display='block'
        
    }
   

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
        let varContNome=0
        let varContEmail=0
        let confirmarCodigoDocente = ""


        //validar as passwords
        if (confPassword != Password) {
            alert("password diferentes")
            event.preventDefault()
        } else {
            //verificar se as checked boxes estão preenchidas e criar o objeto
            if (estudante.checked == true) {
                tipoutilizador = "estudante"
            } else if (docente.checked == true) {

                while (confirmarCodigoDocente != CodigoDocenteGuardado) {
                    confirmarCodigoDocente = prompt("Escreva o código de confimação")

                }

                tipoutilizador = "docente"
            }
            else {
                tipoutilizador = "Visitante"
            }

            for (let i = 0; i < arrayUtilizadores.length; i++) {
              
                if (emailUt!=arrayUtilizadores[i]._email) {
                varContEmail++
                }
                
            }

            for (let i = 0; i < arrayUtilizadores.length; i++) {
              
                if (nomeUt!=arrayUtilizadores[i]._nome) {
                varContNome++
                }
                
            }
            
            if ( varContNome==arrayUtilizadores.length) {
                
           
            }
            else{
                alert("Nome do utilizador já existente.")
            }
           
            if (varContEmail==arrayUtilizadores.length) {
                
            }
            else{
                alert("Email do utilizador já existente.")
            }



            if (varContEmail==arrayUtilizadores.length&&varContNome==arrayUtilizadores.length) {
                let novoutilizador = new Utilizador(nomeUt, emailUt, Password, fotoUt, tipoutilizador)
                arrayUtilizadores.push(novoutilizador)
                swal({
                    icon: "success",
                    title: "Registo com secesso!",
                    text: "Bem vindo! ",
                });
                localStorage.setItem("utilizadores", JSON.stringify(arrayUtilizadores))
                btnRegistar.style.display = 'none'
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

        arrayEstadoUt.push(substring2)
        arrayEstadoUt.push(stadoUtilizador)
        localStorage.setItem("estadoUtitlizador", arrayEstadoUt)
        arrayEstadoUt = []
        btnRegistar.style.display = 'block'
        btnLogin.style.display = 'block'
        btnLogout.style.display = 'none'

        console.log(substring2)
        event.preventDefault()

    })

    //fazendo login
    frmLogin.addEventListener("submit", function (event) {

        let optRegistar = document.getElementById("linkRegistar")
        let barra = document.getElementById("barra")
        let loginName = document.getElementById("ModalName")
        let loginPass = document.getElementById("ModalPassword")
        //buscar no local storage os utilizadores
        
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
                    text: "Bem vindo! "+utGuardados[i]._nome,
                });

                btnRegistar.style.display = 'none'
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



        event.preventDefault()

    })


}
//######33#######catalogoParcerias###########

// Função que vai alimentar o meu catálogo
function renderCatalog() {



    let myCard = document.getElementById("HomePageCartParcerias")
    let parceriasGuardados = ""
    // 1. Iterar sobre o array de Trips

    // 2. Para cada Trip vou definir uma Card e compô-la com os dados do objeto
    let strHtmlCard = ""


    if (localStorage.getItem("Parcerias")) {
        parceriasGuardados = JSON.parse(localStorage.getItem("Parcerias"))
    }

    for (let i = 0; i < parceriasGuardados.length; i++) {

        console.log(parceriasGuardados[i])
        // Inicia a linha
        if (i % 3 == 0) {
            strHtmlCard += `<div class="row">`
        }

        // Cria a card
        strHtmlCard += `<div class="col-sm-4">
           <br>
           <br>
           <div class="card card-primary text-center" style="width:80%; height:100%">
           <img class="card-img-top" src="${parceriasGuardados[i]._linkLogotipo}" alt="Card image cap">
           <h3 class="card-title" style="background-color:rgb(218, 215, 209)">${parceriasGuardados[i]._Empresa}</h3>
          
               <div class="card-body">
             
               <a class="nav-link" href="${parceriasGuardados[i]._link}">Visite-nos</a>
        <br>
        <h5>Loacalização:</h5>
        <h6 class="card-text">${parceriasGuardados[i]._localizaçao}</h6>
        
                    <br>`




        strHtmlCard += `</div>
                    </div>      
                </div>`

        // Fecha a linha
        if (i % 3 == 2) {
            strHtmlCard += `</div>`
        }
    }

    myCard.innerHTML = strHtmlCard
}

//##########################catalogoEventos#####################

// Função que vai alimentar o meu catálogo
function renderCatalogEventos() {



    let myCard = document.getElementById("HomePageCartEventos")
    let EventosGuardados = ""
    // 1. Iterar sobre o array de Trips

    // 2. Para cada Trip vou definir uma Card e compô-la com os dados do objeto
    let strHtmlCardE = ""
    if (localStorage.getItem("Eventos")) {
       
        EventosGuardados = JSON.parse(localStorage.getItem("Eventos"))
    }

   
    for (let i = 0; i < EventosGuardados.length; i++) {

        if (i < 4) {
            // Inicia a linha
            if (i % 3 == 0) {
                strHtmlCardE += `<div class="row">`
            }

            // Cria a card
            strHtmlCardE += `<div class="col-sm-4">
   <br>
    <div class="card" style="width:80%; height:100%">
  
    <img style="height:100%;" class="card-img-top" src="${EventosGuardados[i]._imagem}" alt="Card image cap">
    <h3 class="card-title" style="text-align:center">${EventosGuardados[i]._categoria}</h3>
        <div class="card-body">
           
            <h5>Responsável:</h5>
            <h6 class="card-text">${EventosGuardados[i]._responsavel}</h6>
            <h5>Data:</h5>
            <h6 class="card-text">${EventosGuardados[i]._data}</h6>
          
            <br>`




            strHtmlCardE += `</div>
            </div>      
        </div>`

            // Fecha a linha
            if (i % 3 == 1) {
                strHtmlCardE += `</div>`
            }

        }



    }

    myCard.innerHTML = strHtmlCardE


}

//##################catalogoDocentes"##########################
// Função que vai alimentar o meu catálogo
function renderCatalogD() {

    let myCard = document.getElementById("HomePageCartDocentes")
    let DocentesGuardados = ""
    // 1. Iterar sobre o array de Trips

    // 2. Para cada Trip vou definir uma Card e compô-la com os dados do objeto
    let strHtmlCardD = ""

    if (localStorage.getItem("Docentes")) {
      
        DocentesGuardados = JSON.parse(localStorage.getItem("Docentes"))
    }

   
    for (let i = 0; i < DocentesGuardados.length; i++) {

        if (i < 7) {

            // Inicia a linha
            if (i % 6 == 0) {
                strHtmlCardD += `<div class="row">`
            }

            // Cria a card
            strHtmlCardD += `<div class="col-sm-2">
        <div class="card card-primary text-center" style="width:80%; height:100%">
        <img style="border-radius: 60px;" style="width:100%" src="${DocentesGuardados[i]._foto}" alt="">
       
            <div class="card-body">
            <h6 class="card-text">${DocentesGuardados[i]._NomeDocente}</h6>
               
       
               
                    <br>`


            strHtmlCardD += `</div>
                    </div>      
                </div>`

            // Fecha a linha
            if (i % 6 == 5) {
                strHtmlCardD += `</div>`
            }

        }



    }


    myCard.innerHTML = strHtmlCardD

}


