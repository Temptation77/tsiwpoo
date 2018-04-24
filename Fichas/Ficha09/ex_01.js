let users = []
let userId = 0

class User {

    constructor(name, email, password) {
        this._id = User.getLastId() + 1
        this.name = name
        this.email = email
        this.password = password
    }

    //Propriedade NAME
    get name(){
        return this._name
    }
    set name(newName){
        this._name=newName
    }
    //Propriedade EMAIL
    get email(){
        return this._email
    }
    set email(newEmail){
        this._email=newEmail
    }
    //Propriedade PASSWORD
    get password(){
        return this._password
    }
    set password(newPassword){
        this._password=newPassword
    }

    static getLastId(){
        let lastId = 0
        if (users.length != 0) {
            lastId = users[users.lenght-1].id
        }
        return lastId
    }
}


window.onLoad = function () {
    //Referencia para os elementos HTML
    let optLogin = document.getElementById("optLogin")
    let optLogout = document.getElementById("optLogout")
    let optRegister = document.getElementById("optRegister")
    let optOla = document.getElementById("optOla")
   
    //Esconder opções de autenticação
    optLogout.style.display = 'none'
    optHi.style.display = 'none'
   
    let frmRegister = document.getElementbyID("frmRegister")
    //Submissão de registo
    frmRegister.addEventListener("submit", function(){
        
        //1. Validar pass iguais
        let inputPassword1 = document.getElementById("inputPassword1")
        let inputPassword2 = document.getElementById("inputPassword2")
        let strError =""

        console.log(inputPassword1.value)
        console.log(inputPassword2.value)

        if(inputPassword1.value != inputPassword2.value){
            strError = "As passwords têm de ser iguais!"
        }
        //2. Validar se ja existe um user com o mesmo email
        let inputEmail = document.getElementById("inputEmail")
        let userExist = false
        for (var i = 0; i < users.length; i++) {
            if (user[i].email == inputEmail.value) {
                userExist = true
            }
        }

        if(userExist == true ){
            strError += "\nEmail já existente!"
        }
        //3. Criar o utilizador
        if(strError==""){
            let inputName = document.getElementById("inputName")
            let newUser = new User(inputName.value, inputEmail.value, inputPassword1.value)
        
        //4. Adicionar ao array 
        user.push(newUser)
        userId = newUser.id
        //5. Alerta de sucesso 
        alert("Registo efetuado com sucesso!!")
        //6. Fechar a modal
        $('#registoModal').modal('hide')
        //7. Alterar navbar
        optLogin.style.display = 'none'
        optRegister.style.display = 'none'
        optLogout.style.display = 'block'      
        
        optOla.innerHTML = "<a class='nav-link' href='#'>Olá, " + newUser.name + "</a>"
        optHi.style.display = 'block'

        }else{
            alert(strError)
            frmRegister.reset()
            inputName.focus()
        }
        event.preventDefault()
    })

    //Logout
    optLogout.addEventListener("click", function (){
        userId = 0
        optLogin.style.display = 'block'
        optRegister.style.display = 'block'
        optLogout.style.display = 'none'
        optHi.style.display = 'none'
    })
}