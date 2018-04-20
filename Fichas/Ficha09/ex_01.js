let users = []

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
        if (users.length) {
            
        }
    }
}




window.onLoad = function () {
    let frmRegister = document.getElementbyID("frmRegister")

    frmRegister.addEventListener("submit", function(){
        
        //1. Validar pass iguais
        let inputPassword1 = document.getElementById("inputPassword1")
        let inputPassword2 = document.getElementById("inputPassword2")
        let strError =""
        if(inputPassword1.value != inputPassword2.value){
            strError = "As passwords têm de ser iguais!"
        }
        //2. Validar se ja existe um user com o mesmo email
        
        //3. Criar o utilizador
        //4. Adicionar ao array 
        //5. Alerta de sucesso 
        //6. Fechar a modal
        //7. Alterar navbar

        event.preventDefault()
        )
}