
const cadastro = {
    nome: "",
    idade: "",
    email: ""
}



function Adicionar(){
    
    cadastro.nome = document.getElementById("nome").value
    cadastro.idade = document.getElementById("idade").value
    cadastro.email = document.getElementById("email").value
    const adicionar = document.getElementById("cadastrados")
    adicionar.innerHTML += "<p>" + cadastro.nome + "</p>"
    adicionar.innerHTML += "<p>" + cadastro.idade + "</p>"
    adicionar.innerHTML += "<p>" + cadastro.email + "</p>"

    console.log(cadastro)
    
    document.getElementById("nome").value = ""
    document.getElementById("idade").value = ""
    document.getElementById("email").value = ""
}


