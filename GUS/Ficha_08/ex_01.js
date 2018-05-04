class Pessoa {
    constructor(nome, anoNascimento, nacionalidade, principalObra, urlFoto) {
        this.nome = nome
        this.anoNascimento = anoNascimento
        this.nacionalidade = nacionalidade
        this.principalObra = principalObra
        this.urlFoto = urlFoto
    }

    set nome(valor) {
        this._nome = valor
    }
    get nome() {
        return this._nome
    }

    set anoNascimento(valor) {
        this._anoNascimento = valor
    }
    get anoNascimento() {
        return this._anoNascimento
    }

    set nacionalidade(valor) {
        this._nacionalidade = valor
    }
    get nacionalidade() {
        return this._nacionalidade
    }

    set principalObra(valor) {
        this._principalObra = valor
    }
    get principalObra() {
        return this._principalObra
    }

    set urlFoto(valor) {
        this._urlFoto = valor
    }
    get urlFoto() {
        return this._urlFoto
    }
}

let personalidades = []


window.onload = function () {
    let form = document.getElementById("form")
    let nome = document.getElementById("inputNome")

    //atribuir valor máximo ao ano
    let anoAtual = new Date().getFullYear() - 1
    let anoNascimento = document.getElementById("inputAno")
    anoNascimento.setAttribute("max", anoAtual)

    form.addEventListener("submit", function (event) {
        //criar objeto
        let nacionalidade = document.getElementById("inputNacionalidade").value
        let principalObra = document.getElementById("inputObra").value
        let urlFoto = document.getElementById("inputFoto").value

        personalidades.push(new Pessoa(nome.value, anoNascimento.value, nacionalidade, principalObra, urlFoto))

        //adicionar à tabela
        atualizarTabela()

        event.preventDefault()
    })

    let btnReset = document.getElementById("btnReset")
    btnReset.addEventListener("click", function () {
        nome.focus()
    })
}


function atualizarTabela() {
    let str = ` <thead class="thead-light">
                    <tr>
                        <th>#</th>
                        <th><i class="fa fa-id-card-o"></i> Nome</th>
                        <th><i class="fa fa-calendar-check-o"></i> Ano de nascimento</th>
                        <th><i class="fa fa-globe"></i> Nacionalidade</th>
                        <th><i class="fa fa-star"></i> Principal obra/criação</th>
                        <th><i class="fa fa-picture-o"></i> Link p/ foto</th>
                    </tr>
                </thead>`

    for (var i = 0; i < personalidades.length; i++) {
        str += `<tbody>
                    <tr>
                        <td scope="row">${(i + 1)}</td>
                        <td>${personalidades[i].nome}</td>
                        <td>${personalidades[i].anoNascimento}</td>
                        <td>${personalidades[i].nacionalidade}</td>
                        <td>${personalidades[i].principalObra}</td>
                        <td>${personalidades[i].urlFoto}</td>
                    </tr>`
    }
    str += "</tbody>"

    document.getElementById("tabela").innerHTML = str

}