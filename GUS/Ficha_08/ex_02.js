class Jogo {
    constructor(nome, genero, plataformas, urlCapa) {
        this.nome = nome
        this.genero = genero
        this.plataformas = plataformas
        this.urlCapa = urlCapa
    }

    set nome(valor) {
        this._nome = valor
    }
    get nome() {
        return this._nome
    }

    set genero(valor) {
        this._genero = valor
    }
    get genero() {
        return this._genero
    }

    set plataformas(valor) {
        this._plataformas = valor
    }
    get plataformas() {
        return this._plataformas
    }

    set urlCapa(valor) {
        this._urlCapa = valor
    }
    get urlCapa() {
        return this._urlCapa
    }
}

let jogos = []

let editar = false
let editarNome = ""

//adiciona jogos por predefinição
jogos.push(new Jogo("Grand Theft Auto V", "Ação", ["PS4", "Steam", "Xbox"], "https://images.g2a.com/newlayout/323x433/1x1x0/387a113709aa/59e5efeb5bafe304c4426c47"))
jogos.push(new Jogo("Fortnite", "Ação", ["PS4"], "https://www.windowscentral.com/sites/wpcentral.com/files/styles/xlarge/public/field/image/2018/02/fortnite_thumb_0.jpg?itok=MK8RoKMe"))
jogos.push(new Jogo("Euro Truck Simulator 2", "Simulação", ["Steam"], "https://http2.mlstatic.com/jogo-euro-truck-simulator-2-dlcs-completo-pc-D_NQ_NP_721552-MLB26582319492_122017-F.jpg"))
jogos.push(new Jogo("CS: Global Offensive", "Ação", ["Steam"], "https://t.tudocdn.net/272612?w=646&h=284"))
jogos.push(new Jogo("FIFA 18", "Desporto", ["PS4", "Xbox"], "https://media.contentapi.ea.com/content/dam/ea/easports/fifa/ultimate-team/campaigns/2018/home-page-toty/fifa18-homepage-topterhero-bg-xs.jpg"))
jogos.push(new Jogo("Dark Souls 2", "RPG", ["Steam", "PS4", "Xbox"], "http://s2.glbimg.com/tm78drylG3OWIJ9o0lN4mNitOk0=/695x0/s.glbimg.com/po/tt2/f/original/2015/02/10/dark-souls-2-imagem-divulgacao.jpg"))
jogos.push(new Jogo("NBA 2k18", "Desporto", ["Steam", "PS4", "Xbox"], "https://steamcdn-a.akamaihd.net/steam/apps/577800/header.jpg?t=1507660027"))


let editarTitulo = document.getElementById("editarTitulo")
let tabela = document.getElementById("tabela")
let filtrarGenero = document.getElementById("filtrarGenero")
let btnReset = document.getElementById("btnReset")
let btnSubmeter = document.getElementById("btnSubmit")

let inputNome = document.getElementById("inputNome")
let checkboxes = document.getElementsByClassName("form-check-input")
let genero = document.getElementById("inputGenero")
let urlCapa = document.getElementById("inputCapa")

atualizarTabela("Todos")

window.onload = function () {
    let form = document.getElementById("form")
    let btnRemoverTodos = document.getElementById("btnRemoverTodos")
    let btnsAdicionais = document.getElementById("btnsAdicionais")
    let modalTitulo = document.getElementById("modalTitulo")
    let modalBody = document.getElementById("modalTitulo")
    let modalFooter = document.getElementById("modalTitulo")


    //esconde ou mostra os botões adicionais (filtrar e remover todos os jogos)
    if (jogos.length !== 0) {
        btnsAdicionais.style.visibility = "visible"
    } else {
        btnsAdicionais.style.visibility = "hidden"
    }


    //btn remover todos os jogos
    btnRemoverTodos.addEventListener("click", function () {
        jogos = []
        btnsAdicionais.style.visibility = "hidden"

        atualizarTabela(filtrarGenero.value)
        tabela.innerHTML = ""
        editarTitulo.innerHTML = ""
        editar = false
        editarNome = ""
        btnSubmeter.removeAttribute("value")
    })

    form.addEventListener("submit", function (event) {
        let erro = false
        let strErro = "ERRO: "

        //verifica se já existe um jogo com o mesmo nome
        //opção 1:
        /*
        if(!editar) {
            for (let i = 0; i < jogos.length; i++) {
                if (jogos[i].nome === inputNome.value) {
                    erro = true
                    strErro += "Já existe um jogo com o mesmo nome.\n"
                }
            }
        } else {
            for (let i = 0; i < jogos.length; i++) {
                if (jogos[i].nome === inputNome.value && jogos[i].nome !== editarNome) {
                    erro = true
                    strErro += "Já existe um jogo com o mesmo nome.\n"
                }
            }
        }*/

        //opção 2 (compacta)
        for (let i = 0; i < jogos.length; i++) {
            if ((jogos[i].nome === inputNome.value && !editar) || ((jogos[i].nome === inputNome.value && jogos[i].nome !== editarNome) && editar)) {
                erro = true
                strErro += "Já existe um jogo com o mesmo nome.\n"
            }
        }


        //verifica se pelo menos uma checkbox está selecionada
        let plataformas = []
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                plataformas.push(checkboxes[i].value)
            }
        }

        if (plataformas.length === 0) {
            erro = true
            strErro += "Selecione pelo menos uma plataforma."
        }

        if (!erro) {
            if (!editar) {
                //caso as checkboxes estejam selecionadas, então criar instância de um jogo e armazenar no array
                jogos.push(new Jogo(inputNome.value, genero.value, plataformas, urlCapa.value))
            } else {
                for (let i = 0; i < jogos.length; i++) {
                    if (jogos[i].nome === editarNome) {
                        jogos[i].nome = inputNome.value
                        jogos[i].genero = document.getElementById("inputGenero").value
                        jogos[i].plataformas = plataformas
                        jogos[i].urlCapa = urlCapa.value

                        alert(editarNome + " foi alterado com sucesso.")
                        editar = false
                        editarNome = ""
                        editarTitulo.innerHTML = ""
                        btnSubmeter.removeAttribute("value")
                        form.reset()
                    }
                }
            }
            atualizarTabela(filtrarGenero.value)
        } else {
            alert(strErro)
        }

        //previne submissão
        event.preventDefault()
    })

    btnReset.addEventListener("click", function () {
        inputNome.focus()
        editarTitulo.innerHTML = ""
        editar = false
        editarNome = ""
        btnSubmeter.removeAttribute("value")
    })

    //caso haja mudança na combobox
    filtrarGenero.addEventListener("change", function () {
        atualizarTabela(filtrarGenero.value)
    })
}


function atualizarTabela(genero) {
    let str = ` <thead class="thead-dark">
                    <tr>
                        <th>#</th>
                        <th><i class="fa fa-info"></i> Nome do jogo</th>
                        <th><i class="fa fa-globe"></i> Género</th>
                        <th><i class="fa fa-gamepad"></i> Plataforma(s)</th>
                        <th><i class="fa fa-cogs"></i> Ações</th>
                    </tr>
                </thead>`
    let count = 1
    for (let i = 0; i < jogos.length; i++) {
        if (jogos[i].genero === genero || genero === "Todos") {
            str += `<tbody>
                    <tr id="${jogos[i].nome}" class="table-primary">
                        <td scope="row">${count}</td>
                        <td>${jogos[i].nome}</td>
                        <td>${jogos[i].genero}</td>
                        <td>${jogos[i].plataformas.concat()}</td>
                        <td>
                            <button type="button" class="btn btn-primary editar"><i class="fa fa-edit"></i></button>
                            <button type="button" class="btn btn-dark info" data-toggle="modal" data-target="#modal"><i class="fa fa-search"></i></button>
                            <button type="button" class="btn btn-danger remover" data-toggle="modal" data-target="#modal"><i class="fa fa-times-circle"></i></button>
                        </td>
                    </tr>`
            count++
        }
    }
    str += "</tbody>"

    //adiciona os elementos à tabela
    tabela.innerHTML = str

    //btn editar
    let btnEditar = document.getElementsByClassName("editar")
    for (let i = 0; i < btnEditar.length; i++) {
        btnEditar[i].addEventListener("click", function () {
            let nomeJogo = btnEditar[i].parentNode.parentNode.id
            for (let j = 0; j < jogos.length; j++) {
                if (jogos[j].nome === nomeJogo) {
                    //altera o nome input
                    inputNome.value = jogos[j].nome

                    //altera o género input (combobox)
                    //array options que armazena todas as tags "option" do html
                    let options = document.getElementsByTagName("option")
                    for (let k = 0; k < options.length; k++) {
                        if (options[k].innerHTML === jogos[j].genero && options[k].parentNode.id != "filtrarGenero") { //tem que ser diferente de filtrarGenero
                            options[k].selected = true                                                              //para não alterar o campo de filtrar
                        }
                    }

                    //altera as plataformas (checkboxes)
                    for (let k = 0; k < checkboxes.length; k++) {
                        //faz uncheck a todas as checkboxes
                        checkboxes[k].checked = false
                        for (let l = 0; l < jogos[j].plataformas.length; l++) {
                            if (jogos[j].plataformas[l] === checkboxes[k].value) {
                                //faz check nas checkboxes das plataformas do jogo selecionado
                                checkboxes[k].checked = true
                            }
                        }
                    }

                    //altera o url
                    urlCapa.value = jogos[j].urlCapa
                    editar = true
                    editarNome = jogos[j].nome
                    editarTitulo.innerHTML = `A editar ${jogos[j].nome}`
                    btnSubmeter.value = "Atualizar"
                }
            }
        })
    }


    //btn info
    let btnInfo = document.getElementsByClassName("info")
    for (let i = 0; i < btnInfo.length; i++) {
        btnInfo[i].addEventListener("click", function () {
            let nomeJogo = btnInfo[i].parentNode.parentNode.id
            for (let j = 0; j < jogos.length; j++) {
                if (jogos[j].nome === nomeJogo) {
                    modalTitulo.innerHTML = "Informações sobre o jogo"
                    modalBody.innerHTML =
                        `<div class="container-fluid">
                            <img src="${jogos[j].urlCapa}" alt="${jogos[j].nome}" class="img-fluid img-thumbnail w-100">
                            <br><br>
                            <p>Nome: ${jogos[j].nome}</p>
                            <p>Género: ${jogos[j].genero}</p>
                            <p>Plataformas disponíveis: ${jogos[j].plataformas.concat()}</p>
                        </div>`
                    modalFooter.innerHTML = ""
                }
            }
        })
    }

    //btn remover jogo
    let btnRemover = document.getElementsByClassName("remover")
    for (let i = 0; i < btnRemover.length; i++) {
        //btn na linha respetiva a cada jogo
        btnRemover[i].addEventListener("click", function () {
            //btn confirmar a remoção na modal
            let nomeJogo = btnRemover[i].parentNode.parentNode.id
            for (let j = 0; j < jogos.length; j++) {
                if (jogos[j].nome === nomeJogo) {
                    modalTitulo.innerHTML = "Deseja remover o jogo?"
                    modalBody.innerHTML = jogos[j].nome + " será removido para sempre."
                    modalFooter.innerHTML = '<button type="button" class="btn btn-danger confirmarRemover" data-dismiss="modal">Remover</button>'
                }
            }

            //btn confirmar remover na modal
            let confirmarRemover = document.getElementsByClassName("confirmarRemover")
            for (let j = 0; j < confirmarRemover.length; j++) {
                confirmarRemover[j].addEventListener("click", function () {
                    removerJogoId(btnRemover[i].parentNode.parentNode.id)
                    atualizarTabela(filtrarGenero.value)
                })

            }
        })
    }

    //esconde ou mostra os botões adicionais
    if (jogos.length !== 0) {
        btnsAdicionais.style.visibility = "visible"
    } else {
        btnsAdicionais.style.visibility = "hidden"
        tabela.innerHTML = ""
    }
}


function removerJogoId(id) {
    for (let i = 0; i < jogos.length; i++) {
        if (jogos[i].nome === id) {
            jogos.splice(i, 1)
        }
    }
}