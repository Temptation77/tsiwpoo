window.onload = function() {
    let login = document.getElementById("login")
    let email = document.getElementById("email")
    let pass = document.getElementById("pass")

    login.addEventListener("submit", function(event){
        alert(email.value + "#" + pass.value)
        event.preventDefault()
    })
    
    login.addEventListener("reset", function(){
        email.focus()
    })
}