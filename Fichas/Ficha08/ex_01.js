//Defines a class that represents a Personality
class Personality{
    //Defines a constructor that will create an object
    constructor(name, year, nacionality, work, photo){
        this.name = name
        this.year = year
        this.nacionality = nacionality
        this.work = work
        this.photo = photo
    }
    //Property name
    get name(){
        return this._name
    }
    set name(newName){
        this._name = newName
    }
    //Property year
    get year(){
        return this._year
    }
    set year(newYear){
        this._name = newYear
    }
    //Property nacionality
    get nacionality(){
        return this._nacionality
    }
    set nacionality(newNacionality){
        this._nacionality = newNacionality
    }
    //Property work
    get work(){
        return this._work
    }
    set work(newWork){
        this._work = newWork
    }
    //Property photo
    get photo(){
        return this._photo
    }
    set photo(newPhoto){
        this._photo = newPhoto
    }

}

//Define um array com os objetos Personality
let personalities = []

window.onload = function() {
    //Assign the current year to the MaxYear
    let maxYearOfBirth = document.getElementById("inputYear")
    let currentYear = new Date().getFullYear()
    maxYearOfBirth.setAttribute("max", currentYear)


    //Add listener to the form
    let frmPersonalities = document.getElementById("frmPersonalities")
    frmPersonalities.addEventListener("submit", function(){
        //1.Validar o campo Year
        let currentYear = new Date().getFullYear - 1
        let inputYear = document.getElementById("inputYear")
        inputYear.setAttribute("max", currentYear)
        //2.Criar um objeto Personality
        let name = document.getElementById("inputName").value
        let year = document.getElementById("inputYear").value
        let nacionality = document.getElementById("inputNationality").value
        let work = document.getElementById("inputWork").value
        let photo = document.getElementById("inputPhoto").value
        let newPersonality =  new Personality(name, year, nacionality, work, photo)
        //3.Add the object to an array
        personalities.push(newPersonality)
        //4.Render the table with all the objects!!
        renderTable()

        event.preventDefault();
    })
    
    //Função para renderizar os objetos Personality na tabela
    function renderTable() {
        let tblPersonalities = document.getElementById("tblPersonalities")

        let strHtml = "<thead><tr><th>#</th>" +
        "<th>Name</th>" +
        "<th>Year</th>" +
        "<th>Nationality</th>" +
        "<th>Work</th>" +
        "<th>Photo</th>" +
        "</tr>" +
        "</thead><tbody>"
        
        for (var i = 0; i < personalities.length; i++) {
            strHtml += "<tr>" +
            "<td>" + (i+1) + "</td>" +
            "<td>" + personalities[i].name + "</td>" +
            "<td>" + personalities[i].year + "</td>" +
            "<td>" + personalities[i].nacionality + "</td>" +
            "<td>" + personalities[i].work + "</td>" +
            "<td>" + personalities[i].photo + "</td>" +
            "</tr>"

        }
        strHtml += "</tbody>"

        tblPersonalities.innerHTML = strHtml
    }

    }