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

window.onload = function () {
    renderCatalog()
    let CodigoDocenteGuardado = ""


    if (localStorage.getItem("utilizadores")) {
        let tempArray = []
        tempArray = JSON.parse(localStorage.getItem("utilizadores"))
        for (let i = 0; i < tempArray.length; i++) {
            let novoutilizador = new Utilizador(tempArray[i]._nome, tempArray[i]._email, tempArray[i]._password, tempArray[i]._foto, tempArray[i]._tipoUtilizador)
            arrayUtilizadores.push(novoutilizador)

        }

    }

    if (localStorage.getItem("Testemunho")) {
        let tempArrayTestemunho = []
        tempArrayTestemunho = JSON.parse(localStorage.getItem("Testemunho"))
        for (let i = 0; i < tempArrayTestemunho.length; i++) {
            let novotestemunho = new Testemunhos(tempArrayTestemunho[i]._nomeTe, tempArrayTestemunho[i]._testemunho, tempArrayTestemunho[i]._fotoTe)
            arrayTestemuhos.push(novotestemunho)

        }

    }


    let btnLogout = document.getElementById("optLogout")
    let btnConfig = document.getElementById("linkConfig")
    btnLogout.style.display = 'none'
    btnConfig.style.display='none'


    let fotoTe = document.getElementById("fotoTe")
    let utGuardados = ""
    let frmTestemunho = document.getElementById("frmTestemunhos")
    let testemunho = document.getElementById("modelTestemunho")
    let ModalRegistar = document.getElementById("frmRegistar")
    let btnRegisto = document.getElementById("optRegisto")
    let btnLogin = document.getElementById("optLogin")
    let btnCriarDocentes = document.getElementById("btnAdDocentes")
    let btnCriarTestemunho = document.getElementById("btnSubmeterTestemunho")
    let maisTestemunho = document.getElementById("+Testemunhos")
    maisTestemunho.style.display = 'none'
    let arrayEstadoUt = []
    let estado = ""

    let stadoUtilizador = false
    let utilizadorOnline = ""


    if (localStorage.getItem("estadoUtitlizador")) {
        utilizadorOnline = localStorage.getItem("estadoUtitlizador")
    }
    let pos1 = utilizadorOnline.indexOf(",")
    let pos2 = utilizadorOnline.lastIndexOf(",")
    let substring2 = utilizadorOnline.substring(0, pos1)
    let substring4 = utilizadorOnline.substring(pos2 + 1, utilizadorOnline.length)
    let substring3 = utilizadorOnline.substring(pos1 + 1, pos2)
    console.log(substring4)


    if (substring4 == "Visitante" || substring4 == "docente" && substring3 == "true") {

        btnLogout.style.display = 'block'
        btnLogin.style.display = 'none'
        btnRegisto.style.display = 'none'

        btnConfig.style.display = 'none'
    }
    if (substring2=="admin"&&substring3=="true") {

        btnLogout.style.display='block'
        btnLogin.style.display='none'
        btnRegisto.style.display='none'
        btnConfig.style.display='block'
        
    }
    if (substring4 == "estudante") {
        btnLogout.style.display = 'block'
        btnLogin.style.display = 'none'
        btnRegisto.style.display = 'none'

        maisTestemunho.style.display = 'block'
    }




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
                renderCatalog()
                maisTestemunho.style.display = 'block'
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
            if (utGuardados[i]._tipoUtilizador == "Visitante" || utGuardados[i]._tipoUtilizador == "docente") {
                maisTestemunho.style.display = 'none'
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
        let substring4 = utilizadorOnline.substring(pos1 + 1, pos2)


        if (substring3 == "Visitante" || substring3 == "docente" && substring4 == "true" || substring2 != arrayTestemuhos._nomeTe) {
            console.log(substring4)

            btnCriarTestemunho.style.display = 'none'
            maisTestemunho.style.display = 'none'

        }


        else if (substring4 == "estudante") {
            btnCriarTestemunho.style.display = 'block'
            maisTestemunho.style.display = 'block'
        }




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

        

        }
      
    

        if (localStorage.getItem("estadoUtitlizador")) {
            utilizadorOnline = localStorage.getItem("estadoUtitlizador")
        }
        let pos1 = utilizadorOnline.indexOf(",")
        let pos2 = utilizadorOnline.lastIndexOf(",")
        let substring2 = utilizadorOnline.substring(0, pos1)
        let substring3 = utilizadorOnline.substring(pos2 + 1, utilizadorOnline.length)


        if (substring3 == "Visitante") {
            btnCriarTestemunho.style.display = 'none'
            maisTestemunho.style.display = 'none'
            btnConfig.style.display='none'
        }
        else {
            btnConfig.style.display='none'
            maisTestemunho.style.display = 'block'
        }

        renderCatalog()

    })




    //Fazendo logout
    btnLogout.addEventListener("click", function (event) {
        let estado = ""
        btnCriarTestemunho.style.display = 'none'


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
        btnLogout.style.display = 'none'


        event.preventDefault()

    })

    frmTestemunho.addEventListener("submit", function (event) {

        let novoTestemunho = new Testemunhos(substring2, testemunho.value, fotoTe.value)
        arrayTestemuhos.push(novoTestemunho)
        localStorage.setItem("Testemunho", JSON.stringify(arrayTestemuhos))
        events.preventDefault()


        renderCatalog()


    })




}
// Função que vai alimentar o meu catálogo
function renderCatalog() {

    let myCard = document.getElementById("myCardTestemunhos")
    let TestemunhosGuardados = ""
    // 1. Iterar sobre o array de Trips

    // 2. Para cada Trip vou definir uma Card e compô-la com os dados do objeto
    let strHtmlCard = ""

    if (localStorage.getItem("Testemunho")) {
        TestemunhosGuardados = JSON.parse(localStorage.getItem("Testemunho"))
    }

    for (let i = 0; i < TestemunhosGuardados.length; i++) {


        // Inicia a linha
        if (i % 4 == 0) {
            strHtmlCard += `<div class="row">`
        }

        // Cria a card
        strHtmlCard += `<div class="col-sm-12">
           <br>
            <div style="border:0px" class="card card-primary w-100">
        
                <div class="card-body">
                <img style="border-radius: 80px;" src="${TestemunhosGuardados[i]._fotoTe}" alt="">
                <br>
                <h4 class="card-text">${TestemunhosGuardados[i]._nomeTe}</h4>
                    <p class="card-text">${ TestemunhosGuardados[i]._testemunho}</p>

                    <a class='remove' href=""> <i class="far fa-trash-alt"></i></a>
                   
                    <br>
                    <hr>
                    <br>`




        strHtmlCard += `</div>
                    </div>      
                </div>`

        // Fecha a linha
        if (i % 4 == 3) {
            strHtmlCard += `</div>`
        }
    }

    myCard.innerHTML = strHtmlCard
    let btnTrash = document.getElementsByClassName("remove"), i;


    if (localStorage.getItem("estadoUtitlizador")) {
        utilizadorOnline = localStorage.getItem("estadoUtitlizador")
    }
    let pos1 = utilizadorOnline.indexOf(",")
    let pos2 = utilizadorOnline.lastIndexOf(",")
    let substring = utilizadorOnline.substring(0, pos1)
    let substring3 = utilizadorOnline.substring(pos2 + 1, utilizadorOnline.length)
    let substring2 = utilizadorOnline.substring(pos1 + 1, pos2)



    for (let i = 0; i < btnTrash.length; i++) {

        btnTrash[i].style.display = 'none'

        btnTrash[i].addEventListener("click", function (event) {
            console.log(TestemunhosGuardados[i])
            TestemunhosGuardados.splice(i, 1)
            localStorage.setItem("Testemunho", JSON.stringify(TestemunhosGuardados))
            event.preventDefault()


            // Inicia a linha
            if (i % 4 == 0) {
                strHtmlCard += `<div class="row">`
            }

            // Cria a card
            strHtmlCard += `<div class="col-sm-12">
           <br>
            <div style="border:0px" class="card card-primary w-100">
        
                <div class="card-body">
                <img style="border-radius: 80px;" src="${TestemunhosGuardados[i]._fotoTe}" alt="">
                <br>
                <h4 class="card-text">${TestemunhosGuardados[i]._nomeTe}</h4>
                    <p class="card-text">${ TestemunhosGuardados[i]._testemunho}</p>

                    <a class='remove' href=""> <i class="far fa-trash-alt"></i></a>
                   
                    <br>
                    <hr>
                    <br>`




            strHtmlCard += `</div>
                    </div>      
                </div>`

            // Fecha a linha
            if (i % 4 == 3) {
                strHtmlCard += `</div>`
            }

        })

        if (substring3 == "Visitante" && substring2 == "true") {

            btnTrash[i].style.display = 'none'

        }
        else if (substring == "admin" && substring2 == "true") {

            btnTrash[i].style.display = 'block'

        }
        else if (substring3 == "docente") {

            btnTrash[i].style.display = 'block'

        }
        else if (substring == TestemunhosGuardados[i]._nomeTe && substring2 == "true") {
            btnTrash[i].style.display = 'block'
            console.log(TestemunhosGuardados[i]._nomeTe)
        }
        else if (substring != TestemunhosGuardados[i]._nomeTe || substring2 == "false") {

            btnTrash[i].style.display = 'none'
        }


    }
  
}