function SalvarContato() {
    nome = document.getElementById("nome").value
    telefone = document.getElementById("telefone").value

    novoContato = nome + " - " + telefone
    document.getElementById("lista-Contato").innerHTML = novoContato

    localStorage.listaContatos = novoContato

}

btSalvar = document.getElementById("salvar")
btSalvar.addEventListener("click", function () {
    SalvarContato()

})

if (localStorage.listaContatos)
    document.getElementById("lista-Contato").innerHTML = localStorage.listaContatos


    btLimpar = document.getElementById("limpar")
    btLimpar.addEventListener("click", function () {
        localStorage.clear()
        document.getElementById("lista-contatos").innerHTML = "-"
    })

    function limpando() {
        e.parentElement.remove();
    }

    

